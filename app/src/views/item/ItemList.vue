<template>
  <nav class="header-button-area">
    <MoveButton to="/item/add">상품 등록</MoveButton>
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
      <div>{{ item.name }}</div>
      <div>{{ item.price }}</div>
      <div>{{ item.quantity }}</div>
    </section>
  </article>
</template>

<script setup lang="ts">

import {onMounted, reactive} from "vue";
import {http} from "@/core";
import {Router, useRouter} from "vue-router";
import {Item} from "@/views/item/type";
import MoveButton from "@/core/components/button/MoveButton.vue";


/******** Type & Interface **********/


/******** Instance **********/
const router: Router = useRouter();

/******** Reactive Instance **********/
const items = reactive<Item[]>([]);

/******** Hooks **********/
onMounted(fetchItems)

/******** Functions **********/
async function fetchItems() {
  const {data} = await http.get('/item/list');
  Object.assign(items, [...data])
}

function goItemDetail(id: string) {
  router.push(`/item/${id}`)
}


</script>

<style scoped>

</style>