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
      <label>Статус:</label>
      <select v-model="user.isActive" class="form-control">
        <option v-for="option in statusOptions" :key="option.value" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="user.company"/>
    </div>
    <!--<div class="avatar">-->
    <!--<img v-attr="src: user.picture" alt="User's avatar">-->
    <!--</div>-->
    <br>
    <br>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
  import axios from "@/axios.js";

  export default {
    name: "UserTable",
    model: {
      prop: 'user',
    },
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        statusOptions: [
          {
            value: true,
            text: 'Активен',
          },
          {
            value: false,
            text: 'Не активен',
          },
        ],
      };
    },
  };
</script>

<style>
  .control-buttons > button {
    margin-right: 10px;
  }

  .control-buttons:last-child {
    margin-right: 0px;
  }
</style>
