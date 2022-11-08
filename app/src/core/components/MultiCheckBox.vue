<template>
  <label>{{ title }}</label>

  <article>
    <div class="form-check" v-for="region in Object.entries(regions)" >
      <label>
        <input type="checkbox"
               :disabled="disabled"
               :checked="checked(region[0])"
               @change="updateValue($event)"
               :value="region[0]">
        {{ region[1] }}
      </label>
    </div>
  </article>
  <ErrorMessage v-model="errMsg" v-if="errMsg" />
</template>

<script setup lang="ts">
import {nextTick, onMounted, reactive, ref, watch, watchEffect} from "vue";
import {http} from "@/core";
import {ItemValid} from "@/views/item/validator/ItemValid";

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

const props = defineProps<{
  modelValue?: Array<string>
  title: string
  disabled: boolean
  validFn?: (value?: Array<string>) => ItemValid
}>()
const emits = defineEmits<{
  ( e: 'update:modelValue', value: string[] ): void
}>()
const regions = reactive<Region>({})
const choiceRegion = ref<string[]>([])
const errMsg = ref<string>()

/******** Hooks **********/

onMounted(() => {
  fetchRegions()
})

watchEffect(() => choiceRegion.value = props.modelValue ?? [])

/******** Functions **********/
async function fetchRegions(): Promise<void> {
  const { data } = await http.get("/item/get/regions")
  Object.assign(regions, data)
}

function updateValue(event: Event) {
  const eventTarget: HTMLInputElement = event!.target! as HTMLInputElement;
  const isChecked = eventTarget.checked;
  const value = eventTarget.value

  if (isChecked) {
    choiceRegion.value.push(value)
  } else {
    choiceRegion.value.splice(choiceRegion.value.indexOf(value), 1);
  }

  if(props.validFn) errMsg.value = props.validFn(choiceRegion.value).errMsg

  emits("update:modelValue", choiceRegion.value);
}

function checked(value: string) {
  if(props.modelValue && props.modelValue.length !== 0) {
    return props.modelValue.includes(value)
  }

  return false;
}

</script>

<style scoped>
article {
  display: flex;
}
</style>