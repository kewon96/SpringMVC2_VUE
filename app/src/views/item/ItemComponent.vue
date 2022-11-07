<template>
  <article>
    <section>
      <ItemInput title="상품ID" v-model="item.id" :disabled="true" v-if="route.name !== 'ItemAdd'" />
      <ItemInput
          v-model="item.name"
          title="상품명"
          :disabled="canEdit()"
          placeholder="상품명을 입력하세요"
          :validFn="useItemValid.validName"
      />
      <ItemInput
          title="가격"
          v-model="item.price"
          :disabled="canEdit()"
          placeholder="가격을 입력하세요."
          :validFn="useItemValid.validPrice"
      />
      <ItemInput
          title="수량"
          v-model="item.quantity"
          :disabled="canEdit()"
          placeholder="수량을 입력하세요."
          :validFn="useItemValid.validQuantity"
      />
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

    <section>
      <label>등록 지역</label>
      <MultiCombo v-model="item.regions" :disabled="canEdit()" />
    </section>

    <section>
      <label>상품 종류</label>
      <RadioButton v-model="item.itemType" :disabled="canEdit()" />
    </section>

    <section>
      <label>배송 방식</label>
      <SelectBox v-model="item.deliveryCode" :disabled="canEdit()" />
    </section>

    <hr>

    <footer class="btn-area">
      <MoveButton :to="`/item/edit/${item.id}`" v-if="canEdit()">수정하기</MoveButton> <!-- Item 수정페이지 이동 -->
      <MoveButton :to="`/item/${item.id}`" v-else>저장</MoveButton> <!-- Item추가 및 수정 -->

      <CancelButton to="/item/home">목록으로</CancelButton>
    </footer>
  </article>
</template>

<script setup lang="ts">
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  RouteLocationNormalizedLoaded, RouteParamsRaw,
  Router,
  useRoute,
  useRouter
} from "vue-router"
import {onMounted, reactive} from "vue"
import {http} from "@/core"
import {useItemValid} from "@/views/item/useItemValid";

/******** Type & Interface **********/

type ItemRouteParams = {
  id: string
} | RouteParamsRaw
type ItemRoute = { name: string, params: ItemRouteParams } | RouteLocationNormalizedLoaded

/******** Instance **********/

const route: ItemRoute = useRoute();
const router: Router = useRouter();
const { post, get } = http;
const initItem = { open: false }

/******** Reactive Instance **********/

const item = reactive<Item>({...initItem})

/******** Hooks **********/

onBeforeRouteUpdate(initLoad)
// onMounted(initLoad)
onBeforeRouteLeave((to, from, next) => {
  const onfulfilled = ({ data }: {data: string}) => {
    if(!data) return;

    item.id = data;
    next();
  };

  if(['ItemList', 'ItemEdit'].includes(to.name as string)) next();
  else if( to.name === 'ItemInfo' ) saveItem().then(onfulfilled);
})

/******** Functions **********/

function initLoad() {
  const { name, params } = route;

  // "상세보기"나 "수정"이면 아이템조회
  name !== 'ItemAdd' && fetchGetItem(params.id as string).then(({ data })=> { Object.assign(item, data) });
}

/** 아이디를 가지고 상품조회 */
function fetchGetItem(id: string) {
  return get(`item/${id}`);
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

/** 저장버튼 클릭 이벤트 */
function saveItem() {
  const { name } = route;
  const type = name === 'ItemAdd' ? 'add' : 'edit';

  return fetchControlItem(type);
}

/** 데이터 조작관련 통신 */
function fetchControlItem(type: string) {
  return post(`/item/${type}`, item);
}


</script>

<style scoped>

</style>