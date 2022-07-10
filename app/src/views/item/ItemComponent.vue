<template>
  <article>
    <section>
      <article class="input-area" v-if="route.name !== 'ItemAdd'">
        <label>상품 ID</label>
        <input type="text" v-model="item.id" :disabled="true">
      </article>
      <article class="input-area">
        <label>상품명</label>
        <input type="text" v-model="item.name" :disabled="canEdit()" placeholder="이름을 입력하세요.">
      </article>
      <article class="input-area">
        <label>가격</label>
        <input type="text" v-model="item.price" :disabled="canEdit()" placeholder="가격을 입력하세요.">
      </article>
      <article class="input-area">
        <label>수량</label>
        <input type="text" v-model="item.quantity" :disabled="canEdit()" placeholder="수량을 입력하세요.">
      </article>
    </section>

    <hr>

    <section>
      <label>판매 여부</label>
      <article>
        <div class="form-check">
          <label>
            <input type="checkbox" v-model="item.open" :disabled="canEdit()">
            판매 오픈
          </label>
        </div>
      </article>
    </section>

    <footer class="btn-area">
      <div>
        <MoveButton to="/item/edit" v-if="route.name === 'ItemInfo'">상품 수정</MoveButton>
        <MoveButton :to="`/item/${item.id}`" v-else @click.prevent="saveItem">저장</MoveButton>
      </div>
      <div>
        <CancelButton to="/item/home">목록으로</CancelButton>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
import {
  onBeforeRouteUpdate,
  RouteLocationNormalizedLoaded,
  Router,
  useRoute,
  useRouter
} from "vue-router";
import {onMounted, reactive} from "vue";
import {http} from "@/core";
import {Item, ItemRouteParams} from "@/views/item/type";
import MoveButton from "@/core/components/button/MoveButton.vue";
import CancelButton from "@/core/components/button/CancelButton.vue";


/******** Type & Interface **********/
type ItemRoute = { name: string, params: ItemRouteParams } | RouteLocationNormalizedLoaded

/******** Instance **********/
const route: ItemRoute = useRoute();
const router: Router = useRouter();

/******** Reactive Instance **********/
const item = reactive<Item>({
  open: false
})

/******** Hooks **********/
onBeforeRouteUpdate(initLoad)
onMounted(initLoad)

/******** Functions **********/

function initLoad() {
  const { name } = route;

  // "상세보기"면 아이템조회
  if(name === 'ItemInfo') fetchItem(item.id as string)
}

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
function canEdit() {
  const { name } = route;

  return name === 'ItemInfo';
}

async function saveItem() {
  const { name } = route;

  switch (name) {
    case 'ItemAdd' : item.id = await addItem(); break;
    case 'ItemEdit': item.id = await editItem(); break;
    default: break;
  }

  await router.push(`/item/${item.id}`)
}

/** 상품 추가 */
async function addItem(): Promise<string> {
  const {data} = await http.post('/item/add', item)

  return data
}

async function editItem(): Promise<string> {
  const {data} = await http.post('/item/edit', item)

  return data
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