<template>
  <main class="auth">
    <div class="auth__login auth__style-01">
      <h1 class="title">Вход</h1>
      <form class="form form--login form--style-01" @submit.prevent="login">
        <div class="form-group">
          <input
            required
            v-model="form.email"
            type="email"
            placeholder="Почта"
          />
        </div>
        <div class="form-group">
          <input
            required
            v-model="form.password"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div class="form-group form-group--space-between">
          <router-link
            to="register"
            class="btn btn-default d-inline-block transition"
            >Создать аккаунт</router-link
          >
          <button type="submit" class="btn-primary transition">Далее</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import gql from "graphql-tag";
import { onLogin } from "@/vue-apollo";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$apollo
        .query({
          // Query
          query: gql`
            query($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
              }
            }
          `,
          // Parameters
          variables: {
            email: this.form.email,
            password: this.form.password
          }
        })
        .then(data => {
          // Result
          console.log(">>>>>>", data);
          onLogin(this.$apollo.provider.defaultClient, data.data.login.token);
          this.$router.push("/dashboard");
        })
        .catch(error => {
          // Error
          console.error(error);
          // We restore the initial user input
        });
    }
  }
};
</script>
