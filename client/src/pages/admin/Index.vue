<template>
  <div>
    <app-header :activeIndex="activeIndex"></app-header>
    <div class="admin-new">
      <div class="container">
        <h1>Management</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/products/ProductList.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      activeIndex: "2"
    };
  },
  components: {
    "product-list": ProductList,
    "app-header": Header
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");

    if (!token) {
      next("/user/login");
    } else {
      next();
    }
  }
};
</script>
