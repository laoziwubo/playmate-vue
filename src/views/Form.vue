<template>
  <el-form :model="model" label-width="80px">
    <el-form-item label="a">
      <el-input v-model="model.a" placeholder="a"></el-input>
    </el-form-item>
    <el-form-item label="b">
      <el-input v-model="model.b" placeholder="b"></el-input>
    </el-form-item>
    <el-form-item label="结果">
      {{model.result}}
      <el-button type="primary" @click="compute">计算</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
.el-button {
  float: right;
}
.el-form{
  width: 400px;
}
</style>

<script>
export default {
  methods: {
    compute: function() {
      this.$api.get(
        "/r/GetRecordForTest",
        { a: this.model.a, b: this.model.b },
        s => {
          this.$message({
            message: "请求成功！",
            type: "success"
          });
          this.model.result = s.payload.content;
        },
        f => {
          this.$message({
            message: "请求失败！",
            type: "warning"
          });
        }
      );
    }
  },
  data: function() {
    return {
      model: {
        result: null
      }
    };
  }
};
</script>