<template>
  <div>
    <div class="">
      <label for="firstName">Имя</label>
      <input id="firstName" type="text" class="" v-model="user.firstName"/>
    </div>
    <div class="">
      <label>Фамилия</label>
      <input type="text" class="" v-model="user.lastName"/>
    </div>
    <div class="">
      <label>Баланс</label>
      <input type="text" class="" v-model="user.balance"/>
    </div>
    <div class="">
      <label>Телефон</label>
      <input type="text" class="" v-model="user.phone"/>
    </div>
    <div class="">
      <label>Адрес</label>
      <input type="text" class="" v-model="user.address"/>
    </div>
    <div class="">
      <label>Статус:</label>
      <select v-model="user.isActive" class="">
        <option v-for="option in statusOptions" :key="option.value" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="">
      <label>Компания</label>
      <input type="text" class="" v-model="user.company"/>
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

</style>
