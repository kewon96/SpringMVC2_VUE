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

/******** Type & Interface **********/


/******** Instance **********/



/******** Reactive Instance **********/

withDefaults(defineProps<{
  modelValue: boolean
  title: string
  name: string
  disabled?: boolean
}>(), {
  disabled: false
})

/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>

</style>