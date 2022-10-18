<template>
  <router-link :to="to">
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/
defineProps<{
  to: string
}>()

/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>

a {
  font-weight: 400;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

</style>