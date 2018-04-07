<template>
  <div>
    <div v-if="!user">
      Загрузка данных
    </div>
    <user-edit-form v-else v-model="user"></user-edit-form>
    <div class="">
      <button type="button" class="" @click="saveUserData">Сохранить</button>
      <button type="button" class="" @click="deleteUser">Удалить</button>
    </div>
  </div>
</template>

<script>
  import axios from "@/axios.js";

  export default {
    name: "UserEdit",
    components: {
      UserEditForm: () => import("@/components/UserEditForm.vue"),
    },

    data: () => ({
      user: {
        "isActive": null,
        "balance": null,
        "picture": null,
        "age": null,
        "accessLevel": null,
        "firstName": null,
        "lastName": null,
        "company": null,
        "email": null,
        "phone": null,
        "address": null,
        "about": null,
        "registered": null,
      },
    }),

    methods: {

      redirectToList() {
        this.$router.push('/users');
      },

      saveUserData() {
        if (confirm("Are you sure you want to save changes into the database?")) {
          axios
            .post(`/users`, this.user)
            .then(() => this.redirectToList())
            .catch((error) => `Ошибка при сохранении: ${error}`);
        }
      },

      deleteUser() {
        if (confirm("Are you sure you want to delete from database?")) {
          axios.delete(`/users/${this.user.id}`, this.user);
        }
      },
    },

  };
</script>

<style>

</style>
