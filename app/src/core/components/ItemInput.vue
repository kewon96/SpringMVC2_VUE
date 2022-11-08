<template>
  <article class="input-area">
    <label>{{ title }}</label>
    <input type="text" v-model="modelValue" :disabled="disabled" :placeholder="placeholder">

    <ErrorMessage v-model="errMsg" v-if="errMsg" />
  </article>
</template>

<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import {ItemValid} from "@/views/item/validator/ItemValid";

/******** Type & Interface **********/

// Item Value타입들
type ItemValue = Item[keyof Item]

/******** Instance **********/


/******** Reactive Instance **********/

const props = withDefaults(defineProps<{
  modelValue: ItemValue
  title: string
  validFn?: (value: ItemValue) => ItemValid
  placeholder?: string
  disabled?: boolean
}>(), {
  disabled: false
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

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