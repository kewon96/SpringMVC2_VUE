<template>
  <label>{{ title }}</label>
  <article>
    <div class="form-check">
      <label>
        <input type="checkbox" v-model="modelValue" :disabled="disabled">
        {{ name }}
      </label>
    </div>
  </article>
</template>

<script setup lang="ts">
import {ItemValid} from "@/views/item/validator/ItemValid";

/******** Type & Interface **********/


/******** Instance **********/



/******** Reactive Instance **********/

withDefaults(defineProps<{
  modelValue: boolean
  title: string
  name: string
  validFn?: (value: boolean) => ItemValid
  disabled?: boolean
}>(), {
  disabled: false
})

/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>

</style>