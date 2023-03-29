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
      model: { manufacturer: { name: "", _id: "" } }
    };
  },
  mounted() {
    const userPoolId = "";
    const form = new Guard(userPoolId, {
      title: "Shopping",
      mountId: "login-form",
      hideClose: true
    });

    const that = this;

    form.on("authenticated", userInfo => {
      that.$store.commit("SET_USER", userInfo);
      localStorage.setItem("token", JSON.stringify(userInfo.token));
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      that.$router.push("/");
    });
  }
};
</script>
