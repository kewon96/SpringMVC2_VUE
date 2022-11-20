<template>
  <div>
    <router-link :to="to" :class="{ disabled: disabledHandler() }">
      <slot></slot>
    </router-link>
  </div>
</template>

<script setup lang="ts">
/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/

const props = defineProps<{
  to?: string
  disabledFn?: Function
}>()


/******** Hooks **********/


/******** Functions **********/

function disabledHandler() {
  return props.disabledFn ? props.disabledFn() : false;
}

</script>

<style scoped lang="scss">

a {
  font-weight: 400;
  padding: 0.5rem 1rem;
  background-color: #4fc08d;
  border-radius: 0.25rem;
  color: #fff;
  text-decoration: none;

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

</style>