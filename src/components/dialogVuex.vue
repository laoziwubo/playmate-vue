<template>
  <div class="child">
    <label>
      姓名：
      <input type="text" v-model="form.name" :placeholder="form.namePla" />
    </label>
    <label>
      年龄：
      <input type="text" v-model="form.age" />
    </label>
    <label>
      地址：
      <input type="text" v-model="form.address" />
    </label>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      form: {
        name: "",
        namePla: "111",
        age: "",
        address: ""
      }
    };
  },
  mounted() {
    // 将数据提交到 store
    this.$store.commit("getFormData", this.form); 
  }
};
</script>