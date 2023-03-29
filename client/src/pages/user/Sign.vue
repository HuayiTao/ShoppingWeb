<template>
    <div>
      <h1 class="user-title">
        <router-link to="/" tag="div">BACK</router-link>
      </h1>
      <div id="login-form"></div>
    </div>
  </template>

<script>



import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('/api/users/register', {
          username: this.username,
          password: this.password,
        });
        console.log(response.data);
        // Redirect the user to the login page
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>