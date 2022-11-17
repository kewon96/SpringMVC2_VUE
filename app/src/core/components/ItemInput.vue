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
import {computed, nextTick, ref, watch, watchEffect} from "vue";

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

const props = withDefaults(defineProps<{
  modelValue: string
  title: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  validMap?: SpringValid
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

watch(() => props.modelValue, value => {
  // itemValid.set('name', validUtil.setValidRequired(value, '상품명'))
  props.validMap =
})

computed(() => {
  errMsg.value = props.validMap?.msg
})

/******** Functions **********/


</script>

<style scoped>

</style>