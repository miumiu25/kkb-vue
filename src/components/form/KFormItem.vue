<template>
  <div class="kFormItem">
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="errMes">{{errMes}}</p>
  </div>
</template>
<script>
  import Schema from "async-validator";
  export default {
    name: "index",
    inject: ["form"],
    props: {
      label: {
        type: String,
        default: ""
      },
      prop: {
        type: String
      }
    },
    data() {
      return {
        errMes: ""
      };
    },
    methods: {
      //执行组件校验
      validate() {
        // 1.获取校验规则
        const rules = this.form.rules[this.prop];
        //2.获取数据
        const value = this.form.model[this.prop];
        //3.执行校验
        const desc = {
          [this.prop]: rules
        };
        const schema = new Schema(desc);
        return schema.validate({ [this.prop]: value }, errors => {
          if (errors) {
            this.errMes = errors[0].message;
          } else {
            this.errMes = "";
          }
        });
      }
    },
    created() {},
    mounted() {
      //监听校验事件，并执行监听
      this.$on("validate", () => {
        this.validate();
      });
    }
  };
</script>
<style>
</style>
