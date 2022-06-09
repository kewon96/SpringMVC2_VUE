<template>
  <nav class="header-button-area">
    <router-link to="/item/add">상품 등록</router-link>
  </nav>

  <hr>

  <article class="table">
    <section class="table-header">
      <div>ID</div>
      <div>상품명</div>
      <div>가격</div>
      <div>수량</div>
    </section>
    <section class="table-data" v-for="item in items" @click="goItemDetail(item.id)">
      <div>{{ item.id }}</div>
      <div>{{ item.itemName }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.quantity }}</div>
    </section>
  </article>
</template>

<script setup lang="ts">

import {onMounted, reactive} from "vue";
import {http} from "@/core";
import {useRoute, useRouter} from "vue-router";
import {Item, ItemRouteLocationRaw, ItemRouteParams} from "@/views/item/type";


/******** Type & Interface **********/


/******** Instance **********/
const router = useRouter();

/******** Reactive Instance **********/
const items = reactive<Array<Item>>([]);

/******** Hooks **********/
onMounted(fetchItems)


/******** Functions **********/
async function fetchItems() {
  const {data} = await http.get('/item/list');
  Object.assign(items, data)
}

function goItemDetail(id: string) {
  router.push({
    name: 'ItemInfo',
    params: {
      id
    },
  } as ItemRouteLocationRaw)
}


</script>

<style scoped>

</style>