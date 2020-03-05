<template>
  <div class="kForm">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "index",
    provide() {
      return {
        form: this //传递Form实例给后代
      };
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      rules: {
        type: Object
      }
    },
    data() {
      return {};
    },
    methods: {
      validate(cb) {
        const tasks = this.$children
          .filter(item => item.prop)
          .map(item => item.validate());
        Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false));
      }
    },
    created() {},
    mounted() {}
  };
</script>
<style>
</style>
