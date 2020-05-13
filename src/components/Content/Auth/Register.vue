<template>
  <main class="auth">
    <div class="auth__login auth__style-01">
      <h1 class="title">Регистрация</h1>
      <form class="form form--login form--style-01" @submit.prevent="registr">
        <div class="form-group">
          <input
            name="email"
            type="email"
            placeholder="Почта"
            v-model="form.email"
          />
        </div>
        <div class="form-group">
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            v-model="form.password"
          />
        </div>
        <div class="form-group form-group--space-between">
          <router-link
            to="login"
            class="btn btn-default d-inline-block transition"
            >Войти</router-link
          >
          <button class="btn btn-primary transition">
            <span>Далее</span>
          </button>
        </div>
        <div class="form-group">
          <span type="role">{{ form.message }}</span>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  // computed: {
  //   loggedIn() {
  //     return this.$store.state.auth.status.loggedIn;
  //   }
  // },
  data() {
    return {
      form: {
        email: "",
        password: "",
        message: ""
      }
    };
  },
  methods: {
    registr() {
      let data = {
        email: this.form.email,
        password: this.form.password
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/login"))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err));

      // const email = this.form.email,
      //   password = this.form.password;

      // if (email.trim().length === 0 || password.trim().length === 0) {
      //   this.form.message = "Заполните все поля формы";
      //   return;
      // }

      // const axiosConfig = {
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   },
      //   requestBody = {
      //     query: `
      //       mutation {
      //         createSeller(sellerInput: {email: "${email}", password: "${password}"}) {
      //           _id
      //           email
      //           password
      //         }
      //       }
      //     `
      //   };

      // this.$http
      //   .post("http://localhost:8000/graphql", requestBody, axiosConfig)
      //   .then(res => {
      //     if (res.status !== 200 && res.status !== 201) {
      //       throw new Error("Failed!");
      //     }
      //     return res;
      //   })
      //   .then(resData => {
      //     // eslint-disable-next-line no-console
      //     console.log(resData);

      //     if (resData.data.errors) {
      //       this.form.message = resData.data.errors[0].message;
      //     }

      //     if (resData.data.data.createSeller) {
      //       this.form.message = "";
      //       this.form.message = "Поздравляем вы создали пользователя!";
      //       this.$router.push("/profile");
      //     }
      //   })
      //   .catch(err => {
      //     // eslint-disable-next-line no-console
      //     console.log(err);
      //   });
    }
  }
  // created() {
  //   if (this.signup) {
  //     this.$router.push("/");
  //   }
  // }
  // computed: {
  //   ...mapGetters(["sellers"])
  // },
};
</script>
