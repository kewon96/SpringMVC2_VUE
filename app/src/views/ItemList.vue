<template>
  <main>
    <header>
      <h2>상품 목록</h2>
    </header>

    <section>
      <nav class="header-button-area">
        <router-link to="/add/item">상품 등록</router-link>
      </nav>

      <hr>

      <article class="table">
        <section class="table-header">
          <div>ID</div>
          <div>상품명</div>
          <div>가격</div>
          <div>수량</div>
        </section>
        <section class="table-data">
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
        </section>
      </article>
    </section>


  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 600px;

    header {
      padding: 3rem 0;
      text-align: center;

      h2 {
        font-size: 2.25rem;
      }
    }

    .header-button-area {
      display: flex;
      justify-content: flex-end;

      a {
        font-weight: 400;
        padding: 0.5rem 1rem;
        background-color: #0d6efd;
        border-radius: 0.25rem;
        color: #fff;
      }
    }

    hr {
      margin: 1.5rem 0;
    }

    .table {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &-header {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        //gap: 1rem;
        border-bottom: 1px solid;

        
        div {
          text-align: center;
          padding: 0.5rem;
        }
      }

      &-data {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        border-bottom: 1px solid #dee2e6;

        &:hover {
          background-color: #4fc08d;
          transition: background-color 0.5s;
          cursor: pointer;
        }

        div, a {
          text-align: center;
          padding: 0.5rem;
        }
      }
    }
  }



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