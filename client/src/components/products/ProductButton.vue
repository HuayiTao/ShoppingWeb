<template>
  <div>
    <el-button v-if="isAdding" @click="addToCart" type="text" size="small"
      >Add to Cart</el-button
    >
    <el-button v-else @click="removeFromCart(id)" type="text" size="small"
      >Remove from cart</el-button
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      let product = this.$store.getters.allProducts.find(
        product => product._id === this.id
      );
      return product;
    },
    isAdding() {
      let isAdding = true;
      this.cart.map(product => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
      });

      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart() {
      const token = localStorage.getItem("token");
      const that = this;

      if (token) {
        this.$store.commit("ADD_TO_CART", {
          product: this.product
        });
      } else {
        this.$confirm(
          "Please login",
          {
            confirmButtonText: "Login",
            cancelButtonText: "Cancel",
            type: "warning"
          }
        )
          .then(() => {
            that.$router.push("/user/login");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Canceled"
            });
          });
      }
    },
    removeFromCart(productId) {
      const token = localStorage.getItem("token");
      const that = this;

      if (token) {
        this.$store.commit("REMOVE_FROM_CART", {
          productId
        });
      } else {
        this.$alert(
          "Please login",
          {
            confirmButtonText: "Login",
            cancelButtonText: "Cancel"
          }
        )
          .then(() => {
            that.$router.push("/user/login");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "Canceled"
            });
          });
      }
    }
  }
};
</script>
