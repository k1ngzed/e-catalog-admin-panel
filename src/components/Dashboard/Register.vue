<template>
  <main class="auth">
    <div class="auth__login auth__style-01">
      <h1 class="title">Регистрация</h1>

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
        :model="register"
        :rules="rules"
        ref="register"
      >
        <el-form-item prop="email">
          <el-input
            type="email"
            name="email"
            placeholder="example@mail.com"
            v-model="register.email"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="register.password"
            type="password"
            placeholder="Введите пароль"
            autocomplete="off"
            show-password
          />
        </el-form-item>
        <el-form-item prop="repeatPassword">
          <el-input
            v-model.trim="register.repeatPassword"
            type="password"
            placeholder="Подтвердите пароль"
            autocomplete="off"
            show-password
          />
        </el-form-item>
        <el-form-item prop="checkbox">
          <el-checkbox v-model="register.checkbox"
            >Пользовательское соглашение
            <a href="#">прочитать...</a></el-checkbox
          >
        </el-form-item>
        <el-form-item>
          <router-link
            tag="el-button"
            type="primary"
            :to="{ name: 'dashboard-login' }"
          >
            Войти
          </router-link>
          <el-button @click="registerForm('register')" type="primary">
            Далее
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Пожалуйста заполните форму"))
      } else {
        if (this.register.repeatPassword !== "") {
          this.$refs.repeatPassword.validateField("checkPass")
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Пожалуйста повторите пароль"))
      } else if (value !== this.register.password) {
        callback(new Error("Пароли должны совпадать!"))
      } else {
        callback()
      }
    }
    return {
      alert: {
        success: "",
        info: "",
        warning: "",
        error: ""
      },
      register: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        checkbox: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "Пожалуйста заполните форму",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Неверный адрес электронной почты",
            trigger: ["blur", "change"]
          }
        ],
        checkbox: [
          {
            required: true,
            message: "Обязательное поля.",
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: validatePass
          }
        ],
        repeatPassword: [
          {
            validator: validatePass2
          }
        ]
      }
    }
  },
  methods: {
    registerForm(form) {
      this.$refs[form].validate(valid => {
        if (!valid) {
          this.alert.warning =
            "Проверьте пожалуйста правильно ли заполнили форму."
          return false
        } else {
          this.loading = true

          const { email, password } = this.register

          this.$store
            .dispatch("register", { email, password })
            .then(() => {
              this.$router.push({ name: "dashboard-account-settings" })
              this.register.email = ""
              this.register.password = ""
              this.register.repeatPassword = ""
            })
            .catch(err => {
              if (err.response !== undefined) {
                this.alert.error = err.response.statusText
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

// password: {
//   required,
//   letter(password) {
//     return /[a-z]/.test(password)
//   },
//   capital(password) {
//     return /[A-Z]/.test(password)
//   },
//   number(password) {
//     return /[0-9]/.test(password)
//   },
//   length(password) {
//     return password.length >= 8
//   },
//   strongPassword(password) {
//     if (password.length > 0) {
//       return (
//         /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(
//           password
//         ) && password.length >= 8
//       )
//     } else {
//       return true
//     }
//   }
// },
</script>

<style lang="sass" scoped>
.auth
  display: flex
</style>
