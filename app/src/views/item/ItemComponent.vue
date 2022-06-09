<template>
  <section>
    <article>
      <div>상품 ID</div>
      <input type="text">
    </article>
    <article>
      <div>상품명</div>
      <input type="text">
    </article>
    <article>
      <div>가격</div>
      <input type="text">
    </article>
    <article>
      <div>수량</div>
      <input type="text">
    </article>
  </section>

  <hr>

  <footer>

  </footer>
</template>

<script setup lang="ts">
import {RouteLocationNormalizedLoaded, RouteLocationRaw, RouteParams, useRoute, useRouter} from "vue-router";
import {onMounted, reactive} from "vue";
import {http} from "@/core";
import {ItemRouteParams} from "@/views/item/type";
import ItemInput from "@/core/components/ItemInput.vue";

/******** Type & Interface **********/
type ItemRoute = { name: string, params: ItemRouteParams } | RouteLocationNormalizedLoaded

/******** Instance **********/
const route: ItemRoute = useRoute();

/******** Reactive Instance **********/


/******** Hooks **********/
onMounted(() => {
  const { name, params } = route;
  const { id }: ItemRouteParams = params;


  if(name !== 'ItemAdd') fetchItem(id as string)
})

/******** Functions **********/
async function fetchItem(id: string) {
  const {data} = await http.get(`/item/${id}`);

}


</script>

<style scoped>

</style>