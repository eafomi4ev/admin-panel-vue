<template>
  <div id="app">


    <nav class="page-header">
      <div class="container">

        <div class="header-logo">
          <router-link to="/">APan</router-link>
        </div>

        <ul class="header-nav-menu">
          <router-link tag="li" to="/users">
            Список пользователей
          </router-link>
        </ul>

        <div class="header-user-menu">
          Меню
        </div>

      </div>
    </nav>

    <div class="container">
      <main class="">
        <router-view/>
      </main>
    </div>


  </div>
</template>

<script>
  import UserList from "@/pages/UserList.vue";
  import router from "@/router/index.js";

  export default {
    name: "app",
    components: {
      UserList,
    },
    router,
    data: () => {
      return {};
    },
  };
</script>

<style>

  .page-header {
    background-color: #4d545d;
    border-top: 2px solid #00b1b3;
    height: 60px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: white
  }

  .header-logo {
    float: left;
    margin-top: 15px;
  }

  .header-logo a {
    color: inherit;
  }

  .header-nav-menu {
    width: 300px;
    padding: 0px;
    margin: 15px 0px 0px 0px;
    list-style: none;
    display: inline-block;
    border: 2px solid white;
  }

  .header-user-menu {
    float: right;
    margin-top: 15px;
    /*width: 50px;*/
  }

</style>
