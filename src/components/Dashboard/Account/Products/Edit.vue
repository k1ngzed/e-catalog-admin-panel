<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <el-button type="primary">
        Сохранить
      </el-button>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          Айди товара: {{ this.$route.params.productId }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: {
        verify: "",
        status: "",
        message: ""
      }
    }
  },
  created() {
    console.log("route", this.$route)
  }
}
</script>
