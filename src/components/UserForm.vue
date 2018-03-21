<template>
  <div>
      <div class="form-group">
        <label for="firstName">Имя</label>
        <input id="firstName" type="text" class="form-control" v-model="user.firstName"/>
      </div>
      <div class="form-group">
        <label>Фамилия</label>
        <input type="text" class="form-control" v-model="user.lastName"/>
      </div>
      <div class="form-group">
        <label>Баланс</label>
        <input type="text" class="form-control" v-model="user.balance"/>
      </div>
      <div class="form-group">
        <label>Телефон</label>
        <input type="text" class="form-control" v-model="user.phone"/>
      </div>
      <div class="form-group">
        <label>Адрес</label>
        <input type="text" class="form-control" v-model="user.address"/>
      </div>
      <div class="form-group">
        <label>Компания</label>
        <input type="text" class="form-control" v-model="user.company"/>
      </div>
      <button type="button" @click="saveUserData">Сохранить</button>
      <button type="button" @click="deleteUser">Удалить</button>
      <br>
      <br>
      <br>
      <pre>{{ user }}</pre>
  </div>
</template>

<script>
import axios from "@/axios.js";

export default {
  name: "UserTable",
  // data: function() {
  //   return {

  //   }
  // },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    saveUserData() {
      if (confirm('Are you sure you want to save changes into the database?')) {
        axios.patch(`/users/${this.user.id}`, this.user);
      } else {
          // Do nothing!
      }
    },
    deleteUser() {
      if (confirm('Are you sure you want to delete from database?')) {
        axios.delete(`/users/${this.user.id}`, this.user);
      } else {
          // Do nothing!
      }
    }
  }
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>
