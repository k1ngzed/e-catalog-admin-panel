<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <el-button type="primary">
        Создать
      </el-button>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-form label-position="top" @submit.prevent.native>
            <el-form-item label="Выбрать продукт"><el-input /></el-form-item>
            <el-form-item label="Название"><el-input /></el-form-item>
            <el-form-item label="Цена"><el-input /></el-form-item>
            <el-form-item label="Цвет"><el-input /></el-form-item>
            <el-form-item label="Картинка"><el-input /></el-form-item>
            <el-form-item label="Описание"><el-input /></el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {
    // console.log("file", this.file)
  }
}
</script>
