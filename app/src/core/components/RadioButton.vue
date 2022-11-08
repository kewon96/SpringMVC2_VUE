<template>
  <label>{{ title }}</label>

  <article>
    <label v-for="item in itemTypes">
      <input type="radio"
             name="regions"
             v-model="modelValue"
             :disabled="disabled"
             :value="item"
              />
      {{ ItemType[item] }}
    </label> <!-- @change="updateValue" -->
  </article>
</template>

<script setup lang="ts">
import {nextTick, onMounted, reactive, ref, watch} from "vue";
import {http} from "@/core";
import {ItemType} from "@/views/item/validator/ItemType";
import {ItemValid} from "@/views/item/validator/ItemValid";

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

const props = defineProps<{
  modelValue: ItemType
  title: string
  disabled: boolean
  validFn?: (value: ItemType) => ItemValid
}>()
const emits = defineEmits<{
  ( e: 'update:modelValue', value: ItemType ): void
}>()
const itemTypes = reactive<ItemType[]>([])
const errMsg = ref<string>()

/******** Hooks **********/

onMounted(fetchItemTypes)
watch(() => props.modelValue, (value) => {
  console.log(value)

  nextTick(() => {
    if(props.validFn) errMsg.value = props.validFn(value).errMsg
  })

  emits('update:modelValue', value)
})

/******** Functions **********/

async function fetchItemTypes(): Promise<void> {
  const { data } = await http.get("/item/get/itemTypes")
  Object.assign(itemTypes, data)
}

// function updateValue() {
//   emits('update:modelValue', props.modelValue)
// }

</script>

<style scoped>

</style>