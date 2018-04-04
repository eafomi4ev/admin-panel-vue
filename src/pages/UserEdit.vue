<template>
  <div>
    <div v-if="!user">
      Загрузка данных
    </div>
    <user-edit-form v-else v-model="user"></user-edit-form>
    <div class="control-buttons">
      <button type="button" class="btn btn-success" @click="saveUserData">Сохранить</button>
      <button type="button" class="btn btn-danger" @click="deleteUser">Удалить</button>
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
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      user: null,
    }),
    methods: {
      loadUser() {
        axios.get(`/users/${this.id}`).then(response => {
          this.user = response.data;
        });
      },

      redirectToList() {
        this.$router.push('/users');
      },

      saveUserData() {
        if (confirm("Are you sure you want to save changes into the database?")) {
          axios.patch(`/users/${this.user.id}`, this.user)
            .then(() => this.redirectToList());
        } else {
          // Do nothing!
        }
      },

      deleteUser() {
        if (confirm("Are you sure you want to delete from database?")) {
          axios.delete(`/users/${this.user.id}`, this.user);
        } else {
          // Do nothing!
        }
      },
    },
    mounted: function () {
      this.loadUser();
    },
  };
</script>

<style>

</style>
