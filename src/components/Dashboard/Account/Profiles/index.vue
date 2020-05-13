<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="grid">
          <div
            class="db_body__content__box grid-wrapper justify-content-center"
          >
            <el-alert
              v-if="
                merchantForm.phone === '' || merchantForm.companyname === ''
              "
              class="grid-cell grid-col-12"
              title="Настоятельно просим вас заполнить все обязательные поля ниже, чтобы получить доступ к другим страницам"
              type="warning"
              show-icon
            >
            </el-alert>

            <el-form
              v-loading="loading.user"
              :model="userForm"
              :rules="rules"
              ref="userForm"
              class="grid-cell grid-col-6 box-parent position"
              @submit.prevent.native
              label-position="top"
            >
              <el-button
                class="el-form-circle-submit"
                @click="submitUserForm('userForm')"
                type="primary"
                icon="el-icon-check"
                round
              >
                Сохранить
              </el-button>
              <el-form-item class="d-flex justify-content-center">
                <el-upload
                  class="img-uploader style-avatar"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img
                    v-if="userForm.avatar"
                    :src="userForm.avatar"
                    class="img-uploader-downloaded"
                  />
                  <i v-else class="el-icon-plus img-uploader-icon" />
                  <div slot="tip" class="el-upload__tip text-center">
                    <strong>Аватарка</strong>
                  </div>
                </el-upload>
              </el-form-item>

              <el-form-item class="d-flex justify-content-center">
                <router-link class="mr-20" to="/">
                  <i class="el-icon-star-on"></i> Избранное
                </router-link>
                <router-link to="/">
                  <i class="el-icon-s-operation"></i> Сравнение
                </router-link>
              </el-form-item>

              <el-form-item label="Почта" prop="email">
                <el-input
                  type="email"
                  placeholder="Электронная почта"
                  v-model="userForm.email"
                  prop="email"
                  :rules="[
                    {
                      type: 'email',
                      message:
                        'Пожалуйста, введите правильный адрес электронной почты',
                      trigger: ['blur', 'change']
                    }
                  ]"
                ></el-input>
                <el-button class="mt-20">Подтвердить почту</el-button>
              </el-form-item>

              <el-form-item label="Имя" prop="name">
                <el-input
                  id="field-name"
                  type="text"
                  placeholder="Контактное лицо"
                  v-model="userForm.name"
                />
              </el-form-item>

              <el-form-item prop="location">
                <el-cascader
                  v-model="userForm.location"
                  :options="locations"
                  :props="{
                    value: 'id',
                    checkStrictly: true,
                    expandTrigger: 'hover'
                  }"
                  clearable
                  placeholder="Локация"
                ></el-cascader>
              </el-form-item>
            </el-form>
            <el-form
              v-loading="loading.merchant"
              :model="merchantForm"
              :rules="rules"
              ref="merchantForm"
              class="grid-cell grid-col-6 box-parent"
              @submit.prevent.native
              label-position="top"
            >
              <el-button
                class="el-form-circle-submit"
                @click="submitMerchantForm('merchantForm')"
                type="primary"
                icon="el-icon-check"
                round
              >
                Сохранить
              </el-button>
              <el-form-item>
                <el-upload
                  :class="
                    `img-uploader ${merchantForm.logo ? 'style-logo' : ''}`
                  "
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleLogoSuccess"
                  :before-upload="beforeLogoUpload"
                >
                  <img
                    v-if="merchantForm.logo"
                    :src="merchantForm.logo"
                    class="img-uploader-downloaded"
                  />
                  <i v-else class="el-icon-plus img-uploader-icon"></i>
                  <div slot="tip" class="el-upload__tip">
                    <strong>Логотип компании</strong> <br />
                    jpg/png файл с размером 300х100 и не более 500кб
                  </div>
                </el-upload>
              </el-form-item>

              <el-form-item label="Ссылка сайта" prop="link">
                <el-input
                  type="text"
                  name="url"
                  placeholder="Например: mysite.com"
                  v-model="merchantForm.link"
                />
              </el-form-item>

              <el-form-item label="Телефон" prop="phone">
                <el-input
                  type="text"
                  name="number"
                  placeholder="Введите телефон"
                  v-model="merchantForm.phone"
                />
              </el-form-item>

              <el-form-item label="Название компании" prop="companyname">
                <el-input
                  type="text"
                  name="companyname"
                  placeholder="Введите название компании"
                  v-model="merchantForm.companyname"
                />
              </el-form-item>

              <el-form-item
                class="el-form-location"
                label="Местоположение магазина"
                prop="locations"
              >
                <el-cascader
                  v-model="merchantForm.locations"
                  :options="locations"
                  :props="{
                    value: 'id',
                    checkStrictly: true,
                    multiple: true,
                    expandTrigger: 'hover'
                  }"
                  clearable
                  placeholder="Локация"
                ></el-cascader>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
// images
import PNGdefaultAvatar from "@/assets/images/default-avatar.png"
import PNGdefaultImage from "@/assets/images/default-image.png"
export default {
  name: "Profile",
  data() {
    var link = (rule, value, callback) => {
      const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
      if (!regex.test(value)) {
        callback(new Error("Неправильная ссылка."))
      } else {
        callback()
      }
    }
    var name = (rule, value, callback) => {
      const regex = /^[a-zA-Zа-яёА-ЯЁ ]{4,25}$/gm
      if (!regex.test(value)) {
        callback(new Error("Неправильное контактное лицо"))
      } else {
        callback()
      }
    }
    var phone = (rule, value, callback) => {
      // +(998)11 111-11-11
      // const regex = /(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})/gm;
      const regex = /^[0-9]{12,13}$/gm
      if (!regex.test(value)) {
        callback(new Error("Минимум 12 символ и только цифры"))
      } else {
        callback()
      }
    }
    return {
      loading: {
        user: false,
        merchant: false
      },
      images: {
        PNGdefaultAvatar,
        PNGdefaultImage
      },
      userForm: {
        email: "",
        avatar: "",
        name: "",
        location: ""
      },
      merchantForm: {
        logo: "",
        link: "",
        phone: "",
        companyname: "",
        locations: ""
      },
      rules: {
        name: [
          {
            min: 4,
            max: 25,
            message: "Минимум 4 максимум 25 символа"
          },
          {
            validator: name
          }
        ],
        link: {
          validator: link
        },
        phone: [
          {
            required: true,
            message: "Пожалуйста заполните обязательное поле"
          },
          {
            validator: phone
          }
        ],
        location: [
          {
            required: true,
            message: "Пожалуйста заполните обязательное поле"
          }
        ],
        locations: [
          {
            required: true,
            message: "Пожалуйста заполните обязательное поле"
          }
        ],
        companyname: [
          {
            required: true,
            message: "Пожалуйста заполните обязательное поле"
          },
          {
            min: 4,
            max: 255,
            message: "Минимум 4 максимум 255 символа"
          }
        ]
      }
    }
  },
  computed: {
    ...mapState(["user", "locations"])
  },
  watch: {
    user() {
      this.userForm.email = this.user.email
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.userForm.avatar = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      console.log("beforeAvatarUpload", file)
    },
    handleLogoSuccess(res, file) {
      this.merchantForm.logo = URL.createObjectURL(file.raw)
    },
    beforeLogoUpload(file) {
      console.log("beforeLogoUpload", file)
    },
    submitUserForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading.user = true
          const { name, location } = this.userForm
          let data = {
            userId: this.user.id,
            name,
            location
          }

          console.log("userForm", data)

          this.$store.dispatch("updateUserProfile", { data }).then(() => {
            this.loading.user = false
            this.$message({
              message: "Успех! Профиль был успешно обновлен",
              type: "success"
            })
          })
        } else {
          this.$message({
            message:
              "Предупреждение! Пожалуйста, проверьте, правильно ли вы заполнили форму",
            type: "warning"
          })
          return false
        }
      })
    },
    submitMerchantForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading.merchant = true
          const { link, phone, companyname, locations } = this.merchantForm
          let data = {
            userId: this.user.id,
            link,
            phone,
            companyname,
            locations
          }

          console.log("merchantForm", data)

          this.$store.dispatch("updateUserProfile", { data }).then(() => {
            this.loading.merchant = false
            this.$message({
              message: "Успех! Профиль был успешно обновлен",
              type: "success"
            })
          })
        } else {
          this.$message({
            message:
              "Предупреждение! Пожалуйста, проверьте, правильно ли вы заполнили форму",
            type: "warning"
          })
          return false
        }
      })
    }
  },
  created() {
    this.userForm.email = this.user.email
  }
}
</script>

<style lang="sass">
@import "./profiles"
</style>
