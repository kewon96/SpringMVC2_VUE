<template>
  <div class="container max-w-2xl mr-auto ml-auto">
    <div class="py-12 text-center">
      <h2 class="text-4xl">상품 목록</h2>
    </div>

    <div class="flex justify-end">
      <router-link
          to="/add/item"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">상품 등록</router-link>
    </div>

    <hr class="my-6">

    <div class="flex flex-col border-0 border-solid border-inherit">
      <div class="flex justify-between border-bottom-color border-solid text-lg	py-2 font-bold">
        <div>ID</div>
        <div>상품명</div>
        <div>가격</div>
        <div>수량</div>
      </div>
      <div class="flex flex-row justify-between">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
<!--    <div>-->
<!--      <table class="table">-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th>ID</th>-->
<!--          <th>상품명</th>-->
<!--          <th>가격</th>-->
<!--          <th>수량</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr th:each="item : ${items}">-->
<!--          <td><a href="item.html" th:href="@{/form/items/{itemId}(itemId=${item.id})}" th:text="${item.id}">회원id</a></td>-->
<!--          <td><a href="item.html" th:href="@{|/form/items/${item.id}|}" th:text="${item.itemName}">상품명</a></td>-->
<!--          <td th:text="${item.price}">10000</td>-->
<!--          <td th:text="${item.quantity}">10</td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="pcss">
  /*.container {
    width:100%;
    padding-right:var(--bs-gutter-x,.75rem);
    padding-left:var(--bs-gutter-x,.75rem);
    margin-right:auto;
    margin-left:auto
  }

  @media (min-width:768px){
    .container{max-width:720px}
  }
  @media (min-width:992px){
    .container{max-width:960px}
  }
  @media (min-width:1200px){
    .container{max-width:1140px}
  }
  @media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}*/

</style>