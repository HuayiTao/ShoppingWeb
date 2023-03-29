<template>
  <div class="manufacturers">
    <el-table
    class="table"
    :data="manufacturers">
      <el-table-column
        prop="name"
        label="Manufacturer"
        width="180">
      </el-table-column>
      <el-table-column
        label="Option"
        width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"><router-link :to="'/admin/manufacturers/edit/' + scope.row._id" tag="div">修改</router-link></el-button>
          <el-button class="remove" @click="removeManufacturer(scope.row._id), deleteRow(scope.$index, manufacturers)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch('allManufacturers');
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
    }
  },
  methods: {
    removeManufacturer(manufacturerId) {
      const res = confirm('Do you want to delete this manufacturer?');
      if (res) {
        this.$store.dispatch('removeManufacturer', {
          manufacturerId,
        })
      }
    }
  }
}
</script>
<style>
.manufacturers {
  padding-top: 20px;
  text-align: center;
}
.table {
  margin:0 auto;
  width: 380px;
}
.el-table .cell {
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.modify {
  color: blue;
}
.remove {
  color: red;
}
</style>