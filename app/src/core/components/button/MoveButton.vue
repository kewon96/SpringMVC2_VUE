<template>
  <router-link>
    <slot></slot>
  </router-link>
</template>

<script setup lang="ts">
import {getCurrentInstance} from "vue";


/******** Type & Interface **********/


/******** Instance **********/
const vm = getCurrentInstance()
console.log(vm?.attrs)

/******** Reactive Instance **********/


/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped lang="scss">

a {
  font-weight: 400;
  padding: 0.5rem 1rem;
  background-color: #4fc08d;
  border-radius: 0.25rem;
  color: #fff;
  text-decoration: none;
}

</style>