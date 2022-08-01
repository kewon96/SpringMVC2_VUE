<template>
  <article>
    <label v-for="item in itemTypes">
      <input type="radio"
             name="regions"
             v-model="props.modelValue"
             :disabled="props.disabled"
             @input="updateValue"
             :value="item"
              />
      {{ ItemType[item] }}
    </label>
  </article>
</template>

<script setup lang="ts">
import {onMounted, reactive} from "vue";
import {http} from "@/core";
import {ItemType} from "@/views/item/type";

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/
const props = defineProps<{
  modelValue: ItemType
  disabled: boolean
}>()
const emits = defineEmits<{
  ( e: 'update:modelValue' ): void
}>()
const itemTypes = reactive<ItemType[]>([])

/******** Hooks **********/
onMounted(fetchItemTypes)

/******** Functions **********/
async function fetchItemTypes(): Promise<void> {
  const { data } = await http.get("/item/get/itemTypes")
  Object.assign(itemTypes, data)
}

function updateValue(event: Event) {
  emits('update:modelValue')
}

</script>

<style scoped>

</style>