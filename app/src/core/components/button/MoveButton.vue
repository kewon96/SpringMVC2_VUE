<template>
  <button>
    <router-link :to="path" :disabled="true">
      <slot></slot>
    </router-link>
  </button>
</template>

<script setup lang="ts">
import {getCurrentInstance} from "vue";


/******** Type & Interface **********/


/******** Instance **********/
const vm = getCurrentInstance()
console.log(vm?.attrs)

/******** Reactive Instance **********/
const props = defineProps<{
  path: string
}>()

/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped lang="scss">

button {
  width: inherit;
  background: none;
  border: none;
}

a {
  font-weight: 400;
  padding: 0.5rem 1rem;
  background-color: #4fc08d;
  border-radius: 0.25rem;
  color: #fff;
  text-decoration: none;
  
  :disabled {
    background: #ccc;
  }
}

</style>
