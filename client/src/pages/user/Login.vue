<template>
  <div>
    <h1 class="user-title">
      <router-link to="/" tag="div">BACK</router-link>
    </h1>
    <div id="login-form"></div>
  </div>
</template>

<style>
.user-title:hover {
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/users/login', {
          username: this.username,
          password: this.password,
        });
        console.log(response.data);
        // Save the user's information and redirect to the desired page
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
