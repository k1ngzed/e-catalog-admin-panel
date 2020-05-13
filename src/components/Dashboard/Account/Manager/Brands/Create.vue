<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <el-button @click="submitForm" type="primary">
        Создать
      </el-button>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-form label-position="top" @submit.prevent.native>
            <el-form-item label="Название бренда">
              <el-input
                placeholder="Название нового бренда"
                v-model="brand.name"
                @input="translitName(brand.name)"
              ></el-input>
            </el-form-item>
            <el-form-item label="Ссылка">
              <el-input placeholder="Транслит" v-model="brand.link"></el-input>
            </el-form-item>
            <el-form-item>
              <el-upload
                :class="`img-uploader ${brand.logo ? 'style-logo' : ''}`"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleLogoSuccess"
                :before-upload="beforeLogoUpload"
              >
                <img
                  v-if="brand.logo"
                  :src="brand.logo"
                  class="img-uploader-downloaded"
                />
                <i v-else class="el-icon-plus img-uploader-icon"></i>
                <div slot="tip" class="el-upload__tip">
                  <strong>Логотип бренда</strong> <br />
                  jpg/png файл с размером 300х100 и не более 500кб
                </div>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { translit } from "@/helpers/translit"
export default {
  data() {
    return {
      brand: {
        name: "",
        link: "",
        logo: ""
      }
    }
  },
  methods: {
    translitName(e) {
      this.brand.link = translit(e)
    },
    handleLogoSuccess(res, file) {
      this.brand.logo = URL.createObjectURL(file.raw)
    },
    beforeLogoUpload(file) {
      console.log("beforeLogoUpload", file)
    },
    submitForm() {
      let { name, link } = this.brand
      this.$store.dispatch("createBrand", { data: { name, link } })
    }
  },
  created() {
    // this.$store.dispatch("getBrands")
  }
}
</script>
