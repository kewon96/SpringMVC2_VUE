<template>
  <article>
    <section>
      <article class="input-area" v-if="route.name !== 'ItemAdd'">
        <label>상품 ID</label>
        <input type="text" v-model="item.id" :disabled="true">
      </article>
      <article class="input-area">
        <label>상품명</label>
        <input type="text" v-model="item.name" :disabled="cantEdit()" placeholder="이름을 입력하세요.">
      </article>
      <article class="input-area">
        <label>가격</label>
        <input type="text" v-model="item.price" :disabled="cantEdit()" placeholder="가격을 입력하세요.">
      </article>
      <article class="input-area">
        <label>수량</label>
        <input type="text" v-model="item.quantity" :disabled="cantEdit()" placeholder="수량을 입력하세요.">
      </article>
    </section>

    <hr>

    <footer class="btn-area">
      <div>
        <router-link to="/item/edit" class="apply" v-if="route.name === 'ItemInfo'">상품 수정</router-link>
        <router-link to="/item/home" class="apply" v-else @click="saveItem" >저장</router-link>
      </div>
      <div>
        <router-link to="/item/home" @click="test" class="cancel">뒤로가기</router-link>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
import {onBeforeRouteUpdate, RouteLocationNormalizedLoaded, Router, useRoute, useRouter} from "vue-router";
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

onBeforeRouteUpdate(() => {
  const { name, params } = route;
  const { id }: ItemRouteParams = params;

  // "상세보기"면 아이템조회
  if(name === 'ItemInfo') fetchItem(id as string)
})

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

/**
 * 수정할 수 있는지 확인
 *
 * 상품보기의 경우 수정 불가능
 */
function cantEdit() {
  const { name } = route;

  return name === 'ItemInfo';
}

function saveItem() {
  const { name } = route;

  switch (name) {
    case 'ItemAdd': addItem(); break;
    case 'ItemEdit': editItem(); break;
    default: break;
  }
}

/** 상품 추가 */
async function addItem() {
  await http.post('/item/add', item)
}

async function editItem() {
  await http.post('/item/edit', item)
}

function goBack() {
  router.back();
}

function test() {
  console.log(123)
}


</script>

<style scoped>

</style>