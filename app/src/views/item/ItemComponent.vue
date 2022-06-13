<template>
  <article>
    <section>
      <article class="input-area" v-if="route.name !== 'ItemAdd'">
        <label>상품 ID</label>
        <input type="text" v-model="item.id" :disabled="true">
      </article>
      <article class="input-area">
        <label>상품명</label>
        <input type="text" v-model="item.name" :disabled="isInfo()">
      </article>
      <article class="input-area">
        <label>가격</label>
        <input type="text" v-model="item.price" :disabled="isInfo()">
      </article>
      <article class="input-area">
        <label>수량</label>
        <input type="text" v-model="item.quantity" :disabled="isInfo()">
      </article>
    </section>

    <hr>

    <footer class="btn-area">
      <div>
        <button class="apply">상품등록</button>
      </div>
      <div>
        <button class="cancel" @click="router.go(-1)">뒤로가기</button>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
import {RouteLocationNormalizedLoaded, Router, useRoute, useRouter} from "vue-router";
import {onMounted, reactive} from "vue";
import {http} from "@/core";
import {Item, ItemRouteParams} from "@/views/item/type";

/******** Type & Interface **********/
type ItemRoute = { name: string, params: ItemRouteParams } | RouteLocationNormalizedLoaded

/******** Instance **********/
const route: ItemRoute = useRoute();
const router: Router = useRouter();

/******** Reactive Instance **********/
const item = reactive<Item>({})

/******** Hooks **********/

onMounted(() => {
  const { name, params } = route;
  const { id }: ItemRouteParams = params;

  // "상세보기"면 아이템조회
  if(name === 'ItemInfo') fetchItem(id as string)
})

/******** Functions **********/

/** 아이디를 가지고 상품조회 */
async function fetchItem(id: string) {
  const {data} = await http.get(`/item/${id}`);

  Object.assign(item, data)
}

/** 상품상세보기인지 확인 */
function isInfo() {
  const { name } = route;

  if(name === 'ItemInfo') return true;
}


</script>

<style scoped>

</style>