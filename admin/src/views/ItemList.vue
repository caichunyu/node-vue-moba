<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="name" label="图标">
      <template slot-scope="scope">
        <img :src="scope.row.icon" style="height: 3rem">
      </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              type="primary"
              size="mini"
              @click="$router.push(`/items/edit/${scope.row._id}`)">编辑
          </el-button>
          <el-button
              type="primary"
              size="mini"
              @click="remove(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get('rest/items')
      this.items = res.data
      // this.$message({
      //   type: 'success',
      //   message: '保存成功',
      // })
    },
    async remove(row) {

      this.$confirm(`确认删除分类${row.name}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const res = await this.$http.delete(`rest/items/${row._id}`)
        console.log(res)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.fetch()
      })
    }
  }
}
</script>
