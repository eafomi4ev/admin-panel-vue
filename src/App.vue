<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link to="/"><a class="navbar-brand" href="#">AdminPan</a></router-link>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
            <router-link tag="li" to="/users">
              <a class="nav-link" href="#">Список пользователей</a>
            </router-link>
        </ul>
      </div>
    </nav>

    <main role="main" class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
  import UserList from "@/pages/UserList.vue";
  import "bootstrap/dist/css/bootstrap.css";
  import router from "@/router/index.js";

  export default {
    name: "app",
    components: {
      UserList
    },
    router,
    data: function () {
      return {};
    }
  };
</script>

<style>
  #app {
    margin-top: 60px;
  }
</style>