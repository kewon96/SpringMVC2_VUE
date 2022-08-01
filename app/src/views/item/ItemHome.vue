<template>
  <main>
    <header>
      <h2>{{ title }}</h2>
    </header>

    <section>
      <router-view />
    </section>

  </main>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watchEffect} from "vue";

const route = useRoute()
const title = ref<string>()

watchEffect(() => {
  switch (route.name) {
    case 'ItemList': title.value = '상품 목록'; break;
    case 'ItemEdit': title.value = '상품 수정'; break;
    case 'ItemInfo': title.value = '상품 상세'; break;
    case 'ItemAdd' : title.value = '상품 등록'; break;
  }
})
</script>

<style scoped lang="scss">

</style>