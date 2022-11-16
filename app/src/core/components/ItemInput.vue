<template>
  <article class="input-area">
    <label>{{ title }}</label>
    <input type="text"
           v-model="modelValue"
           :disabled="disabled"
           :placeholder="placeholder
    ">

    <ErrorMessage v-model="errMsg" v-if="errMsg" />
  </article>
</template>

<script setup lang="ts">
import {nextTick, ref, watch, watchEffect} from "vue";
import {ItemValid} from "@/views/item/validator/ItemValid";

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

const props = withDefaults(defineProps<{
  modelValue: string
  title: string
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

watchEffect(() => {
  emits('update:modelValue', props.modelValue)
})

/******** Functions **********/


</script>

<style scoped>

</style>