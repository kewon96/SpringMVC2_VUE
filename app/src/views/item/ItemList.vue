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
    <section class="table-data" v-for="item in items">
      <router-link to="/item/info">{{ item.id }}</router-link>
      <div>{{ item.itemName }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.quantity }}</div>
    </section>

<!--    <section class="table-data">
      <router-link to="/item/info">1</router-link>
      <div>itemA</div>
      <div>30000</div>
      <div>40</div>
    </section>
    <section class="table-data">
      <router-link to="/item/info">2</router-link>
      <div>itemA</div>
      <div>70000</div>
      <div>80</div>
    </section>-->
  </article>
</template>

<script setup lang="ts">

import {onMounted, reactive} from "vue";
import {http} from "@/core";


/******** Type & Interface **********/
interface Item {
  id: string
  itemName: string
  price: number
  quantity: number
}

/******** Instance **********/


/******** Reactive Instance **********/
const items = reactive<Array<Item>>([]);

/******** Hooks **********/
onMounted(fetchItems)


/******** Functions **********/
async function fetchItems() {
  const {data} = await http.post('/item/list');
  Object.assign(items, data)
}


</script>

<style scoped>

</style>