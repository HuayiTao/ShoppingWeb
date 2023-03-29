<template>
  <div class="products">
    <el-table
    class="table"
    :data="products">
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        width="180">
      </el-table-column>
      <el-table-column
        prop="manufacturer.name"
        label="Manufacturer"
        width="180">
      </el-table-column>
      <el-table-column
        label="Option"
        width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"><router-link :to="'/admin/edit/' + scope.row._id" tag="div">Edit</router-link></el-button>
          <el-button class="remove" @click="removeProduct(scope.row._id), deleteRow(scope.$index, products)" type="text" size="small">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('allProducts');
  },
  mounted() {
    console.log(this.products);
  },
  computed: {
    products() {
      return this.$store.getters.allProducts
    }
  },
  methods: {
    removeProduct(productId) {
      const res = confirm('Do you want to delete this product?');
      if (res) {
        this.$store.dispatch('removeProduct', {
          productId,
        })
      }
    }
  }
}
</script>
<style>
.products {
  padding-top: 10px;
  text-align: center;
}
.table {
  margin:0 auto;
  width: 740px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.modify {
  color: blue;
}

.remove {
  color: red;
}
</style>
