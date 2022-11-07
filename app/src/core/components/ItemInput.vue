<template>
  <article class="input-area">
    <label>{{ title }}</label>
    <input type="text" v-model="modelValue" :disabled="disabled" :placeholder="placeholder">
    <ErrorMessage v-model="errMsg" />
  </article>
</template>

<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import {ItemValid} from "@/views/item/ItemValid";

/******** Type & Interface **********/

const props = withDefaults(defineProps<{
  modelValue: string
  title: string
  validFn?: (value: string) => ItemValid
  placeholder?: string
  disabled?: boolean
}>(), {
  disabled: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

/******** Instance **********/


/******** Reactive Instance **********/

const errMsg = ref<string>()

/******** Hooks **********/

watch(() => props.modelValue, (value) => {
  console.log(value)

  nextTick(() => {
    if(props.validFn) errMsg.value = props.validFn(value).errMsg
  })

  emits('update:modelValue', value)
})

/******** Functions **********/


</script>

<style scoped>

</style>