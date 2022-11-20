<template>
  <div>
    <p>{{ modelValue }}</p>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

defineProps<{
  modelValue?: string
}>()

/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>
p {
  margin: 0;
  padding: 3px 5px;
  color: #326e53;
  font-size: 1rem;
}
</style>