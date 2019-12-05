<template>
  <div class="child">
    <label>
      姓名：
      <input :placeholder="form.namePla" type="text" v-model="form.name" />
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
    //子组件返回data
    return {
      form: {
        name: "",
        namePla: "",
        age: "",
        address: ""
      }
    };
  },
  props: {
    // 这个 prop 属性用来接收父组件传递进来的值
    //这么写是为了说明，接受参数可以指定参数类型，你可以直接[“formData”]来接收，但是这个方法必须了解
    formData: Object //对象的形式
  },
  watch: {
    // 因为不能直接修改 props 里的属性，所以不能直接把 formData 通过v-model进行双向绑定到 input 上
    // 在这里我们需要监听 formData，当它发生变化时，立即将值赋给 data 里的 form，因为 from 可以用来 绑定 input，就好像增加了一个跳板
    formData: {
      immediate: true,
      handler(val) {
        this.form = val;
      }
    }
  }
};
</script>