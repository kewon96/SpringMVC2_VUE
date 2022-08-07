<template>
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
</template>

<script setup lang="ts">
import {onMounted, reactive, ref, watchEffect} from "vue";
import {Region} from "@/views/item/type";
import {http} from "@/core";

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/
const props = defineProps<{
  modelValue?: Array<string>
  disabled: boolean
}>()
const emits = defineEmits<{
  ( e: 'update:modelValue', value: string[] ): void
}>()
const regions = reactive<Region>({})
const choiceRegion = ref<string[]>([])

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