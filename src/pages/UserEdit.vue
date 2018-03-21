<template>
  <div>
    <div v-if="!user">
      Загрузка данных    
    </div>
    <user-form v-else :user="user"></user-form>
  </div>    
</template>
  
<script>
import axios from "@/axios.js";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "UserEdit",
  components: {
    UserForm //: () => import("@/components/UserForm.vue")
  },
  data: function() {
    return {
      user: null
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    loadUser() {
      axios.get(`/users/${this.id}`).then(response => {
        this.user = response.data;
      });
    }
  },
  mounted: function() {
    this.loadUser();
  }
};
</script>

<style>

</style>
