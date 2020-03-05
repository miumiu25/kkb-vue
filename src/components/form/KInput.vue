<template>
  <div>
    <!-- $attrs存储的是props之外的部分 -->
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>
<script>
  export default {
    name: "index",
    inheritAttrs: false, //避免顶层容器继承属性
    props: {
      value: {
        type: String,
        default: ""
      }
    },
    data() {
      return {};
    },
    methods: {
      onInput(e) {
        this.$emit("input", e.target.value);
        this.$parent.$emit("validate");
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style>
</style>
