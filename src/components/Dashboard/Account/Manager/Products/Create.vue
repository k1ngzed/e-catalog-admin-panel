<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <el-button type="primary" @click="submitForm('form')">
        Создать
      </el-button>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-form
            v-loading="loading"
            :model="form"
            ref="form"
            label-position="top"
            @submit.prevent.native
          >
            <el-form-item
              label="Категория"
              prop="categories"
              :rules="[
                {
                  required: true,
                  message: 'Пожалуйста заполните обязательное поле'
                }
              ]"
            >
              <el-select
                v-model="form.categories"
                value-key="id"
                filterable
                multiple
                placeholder="Select"
                style="width: 100%"
              >
                <el-option
                  v-for="(item, index) in getCategoryList"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="Название"
              prop="name"
              :rules="[
                {
                  required: true,
                  message: 'Пожалуйста заполните обязательное поле'
                }
              ]"
            >
              <el-input v-model="form.name" @input="translitName(form.name)" />
            </el-form-item>
            <el-form-item
              label="Ссылка"
              prop="link"
              :rules="[
                {
                  required: true,
                  message: 'Пожалуйста заполните обязательное поле'
                }
              ]"
            >
              <el-input v-model="form.link" />
            </el-form-item>

            <template>
              <el-row v-for="(color, index) in form.colors" :key="index">
                <el-col :span="6" class="mr-20">
                  <el-form-item
                    label="Название цвета"
                    :prop="`colors.${index}.name`"
                    :rules="[
                      {
                        required: true,
                        message: 'Пожалуйста заполните обязательное поле'
                      }
                    ]"
                  >
                    <el-input
                      v-model="color.name"
                      placeholder="Например: Белый"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="2">
                  <el-form-item
                    label="HEX: код"
                    :prop="`colors.${index}.hex`"
                    :rules="[
                      {
                        required: true,
                        message: 'Пожалуйста заполните обязательное поле'
                      }
                    ]"
                  >
                    <el-color-picker v-model="color.hex"></el-color-picker>
                  </el-form-item>
                </el-col>
                <el-col v-if="index !== 0" :span="4">
                  <el-button @click="removeColor(index)">
                    Удалить
                  </el-button>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="Картинки">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-remove="handleRemove"
                    >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-button class="mt-20" @click="addColor">
                Добавить еще
              </el-button>
            </template>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { translit } from "@/helpers/translit"
export default {
  data() {
    return {
      loading: false,
      form: {
        name: "",
        link: "",
        categories: "",
        colors: [
          {
            name: "",
            hex: "",
            images: ""
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(["getCategoryList"])
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    addColor() {
      this.form.colors.push({
        name: "",
        hex: "",
        images: ""
      })
    },
    removeColor(index) {
      this.form.colors.splice(index, 1)
    },
    translitName(e) {
      this.form.link = translit(e)
    },
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading = true
          let { name, link, categories, colors } = this.form
          console.log("submitForm", this.form)
          this.$store
            .dispatch("updateProduct", {
              data: { name, link, categories, colors }
            })
            .then(() => {
              this.loading = false
              this.$message({
                message: "Товар успешно создан!",
                type: "success"
              })
            })
            .catch(() => {
              this.loading = false
              this.$message({
                message:
                  "Произошла ошибка, повторите попытку или обратитесь в службу технической поддержки",
                type: "warning"
              })
            })
        } else {
          this.$message({
            message: "Пожалуйста, проверьте, правильно ли вы заполнили форму",
            type: "warning"
          })
          return false
        }
      })
    }
  },
  created() {}
}
</script>
