<template>
    <table class="table table-hover">
        <thead>
        <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Активен</th>
            <th>Баланс</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Зарегистрирован</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in users" :key="item.id">
            <router-link :to="`/users/edit/${item.id}`" :user="item">
                <td># {{ item.id }}</td>
            </router-link>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.isActive }}</td>
            <td>{{ item.balance }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.registered }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <th colspan="8">
                Всего пользователей: {{ usersCount }}
            </th>
        </tr>
        </tfoot>
    </table>
</template>

<script>
  export default {
    name: "UsersTable",
    props: {
      users: {
        type: Array,
        required: true,
      }
    },
    computed: {
      usersCount: function () {
        return this.users.length;
      }
    }
  };
</script>

<style>

</style>
