<template>
  <div class="products">
    <el-table
    class="table"
    :data="products">
      <el-table-column
        prop="name"
        label="Product Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description"
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
        width="180">
        <template slot-scope="scope">
          <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import ProductButton from './ProductButton';
export default {
  name: 'product-item',
  mounted() {
    console.log(this.products);
  },
  props: ['products'],
  components: {
    'product-button': ProductButton,
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
  width: 900px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>