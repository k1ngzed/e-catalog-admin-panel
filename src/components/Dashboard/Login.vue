<template>
  <main class="auth" v-loading="loading">
    <div class="auth__login auth__style-01">
      <h1 class="title">Вход</h1>

      <el-alert
        v-if="alert.success !== ''"
        :title="alert.success"
        type="success"
        show-icon
      >
      </el-alert>

      <el-alert
        class="mb-20"
        v-if="alert.success !== ''"
        :title="alert.success"
        type="info"
        show-icon
      >
      </el-alert>

      <el-alert
        class="mb-20"
        v-if="alert.warning !== ''"
        :title="alert.warning"
        type="warning"
        show-icon
      >
      </el-alert>

      <el-alert
        class="mb-20"
        v-if="alert.error !== ''"
        :title="alert.error"
        type="error"
        show-icon
      >
      </el-alert>

      <el-form
        @submit.prevent.native
        label-position="top"
        class="submin-between w-100"
        :model="login"
        ref="login"
      >
        <el-form-item
          class="mb20"
          prop="email"
          :rules="[
            {
              required: true,
              message: 'Пожалуйста заполните форму',
              trigger: 'blur'
            },
            {
              type: 'email',
              message: 'Неверный адрес электронной почты',
              trigger: ['blur', 'change']
            }
          ]"
        >
          <el-input
            placeholder="example@mail.com"
            v-model="login.email"
            type="email"
          />
        </el-form-item>

        <el-form-item
          prop="password"
          :rules="[
            {
              required: true,
              message: 'Пожалуйста заполните форму',
              trigger: 'blur'
            },
            {
              min: 4,
              max: 255,
              message: 'Минимум 4 максимум 255 символа',
              trigger: 'blur'
            }
          ]"
        >
          <el-input
            placeholder="Введите пароль"
            v-model="login.password"
            type="password"
          />
        </el-form-item>

        <el-form-item>
          <router-link
            tag="el-button"
            type="primary"
            :to="{ name: 'dashboard-register' }"
          >
            Создать аккаунт
          </router-link>
          <el-button @click="loginForm('login')" type="primary">
            Войти
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      login: {
        email: "vue@vue.vue",
        password: "Awd12345"
      },
      alert: {
        success: "",
        info: "",
        warning: "",
        error: ""
      },
      loading: false
    }
  },
  methods: {
    loginForm(form) {
      this.$refs[form].validate(valid => {
        if (!valid) {
          this.alert.warning =
            "Проверьте пожалуйста правильно ли заполнили форму."
          return false
        } else {
          this.loading = true

          const { email, password } = this.login

          this.$store
            .dispatch("login", { email, password })
            .then(() => {
              this.$router.push({ name: "dashboard-account-main" })
              this.login.email = ""
              this.login.password = ""
            })
            .catch(err => {
              if (err.response !== undefined) {
                this.alert.error =
                  err.response.statusText === "Unauthorized"
                    ? "Пожалуйста, убедитесь, что вы правильно ввели свой адрес электронной почты и пароль"
                    : err.response.statusText
              } else {
                console.log(err)
              }

              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.auth
  display: flex
</style>
