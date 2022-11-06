<template>
  <article>
    <label v-for="item in itemTypes">
      <input type="radio"
             name="regions"
             v-model="modelValue"
             :disabled="disabled"
             @change="updateValue"
             :value="item"
              />
      {{ ItemType[item] }}
    </label>
  </article>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {http} from "@/core";

/******** Type & Interface **********/

enum ItemType {
  BOOK = '도서',
  FOOD = '식품',
  ETC = '기타',
}

/******** Instance **********/


/******** Reactive Instance **********/
const props = defineProps<{
  modelValue: ItemType
  disabled: boolean
}>()
const emits = defineEmits<{
  ( e: 'update:modelValue', value: ItemType ): void
}>()
const itemTypes = reactive<ItemType[]>([])

/******** Hooks **********/
onMounted(fetchItemTypes)

/******** Functions **********/
async function fetchItemTypes(): Promise<void> {
  const { data } = await http.get("/item/get/itemTypes")
  Object.assign(itemTypes, data)
}

function updateValue() {
  emits('update:modelValue', props.modelValue)
}

</script>

<style scoped>

</style>