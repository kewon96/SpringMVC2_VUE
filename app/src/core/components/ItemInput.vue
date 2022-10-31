<template>
  <article class="input-area">
    <label>{{ title }}</label>
    <input type="text" :disabled="disabled" :placeholder="placeholder">
    <p>{{ errMsg }}</p>
  </article>
</template>

input<script setup lang="ts">
import {VALID_RULES} from "@/types/Type";
import {computed, ref} from "vue";

/******** Type & Interface **********/

const props = withDefaults(defineProps<{
  title: string
  regExp?: RegExp           // 정규식
  role?: string             // 정형화된 Validation
  customFn?: () => string | boolean   // 별도의 Validation Fn (이때 반환은 에러메세지)
  placeholder?: string
  disabled?: boolean
}>(), {
  disabled: false
})

/******** Instance **********/


/******** Reactive Instance **********/

const errMsg = ref<string | true>()

/******** Hooks **********/

computed(() => {


  if(props.role) {
    errMsg.value = validRole()
  }

  if(!errMsg.value && props.regExp) {
    errMsg.value = validRegExp()
  }

  if(!errMsg.value && props.customFn) {
    errMsg.value = props.customFn()
  }
})

/******** Functions **********/

function validRole(): string | boolean {

}

function validRegExp(): string | boolean {

}

</script>

<style scoped>

</style>