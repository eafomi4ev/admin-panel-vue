<template>
  <div>
    <h2>
      <span>Список пользователей</span>
      <div class="">
        <router-link :to="`/users/create`">
          +
        </router-link>
      </div>
    </h2>
    <div v-if="users.lenght==0" class="">Загрузка...</div>
    <users-table v-else :users="users"></users-table>
  </div>
</template>

<script>
  import UsersTable from "@/components/UsersTable.vue";
  import axios from "axios";

  export default {
    name: "UserList",
    components: {
      "users-table": UsersTable,
    },
    data: function () {
      return {
        users: [], //список пользователей
      };
    },
    methods: {
      loadUsers() {
        axios.get("http://localhost:3004/users/").then(response => {
          this.users = response.data;
        });
      },
    },
    mounted: function() {
      this.loadUsers();
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add-button {
    display: inline-block;
  }

  .add-button a {
    text-decoration: none;
  }
</style>
