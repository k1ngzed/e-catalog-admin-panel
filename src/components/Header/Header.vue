<template>
  <header class="header">
    <div class="header__bg--gradient">
      <div class="container">
        <div class="header__head">
          <div class="header__head--left">
            <router-link class="logo" to="/">
              <img src="@/assets/logo.png" alt="Logo" />
              <span>Logo</span>
            </router-link>
          </div>
          <div class="header__head--center">
            <div class="search">
              <form>
                <input v-model="input" type="text" placeholder="Поиск..." />
                <div class="search-submit">
                  <button id="btn" type="submit" class="transition btn-primary">
                    Найти
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="header__head--right">
            <div class="links">
              <router-link class="location" to="/location">
                <simple-svg
                  :src="icons.SVGlocation"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />Ташкент
              </router-link>
              <router-link class="compare" to="/compare">
                <simple-svg
                  :src="icons.SVGshuffle"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />Сравнение<span class="score">0</span></router-link
              >
              <router-link class="favourites" to="/favourites">
                <simple-svg
                  :src="icons.SVGheart"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />Избранное<span class="score">0</span></router-link
              >
            </div>
            <div class="auth">
              <router-link
                v-if="!isLoggedIn"
                to="login"
                tag="button"
                class="btn btn-primary"
                >Войти</router-link
              >
              <router-link
                v-if="isLoggedIn"
                to="account"
                tag="button"
                class="btn btn-primary"
                >Аккаунт</router-link
              >
              <a
                href="#"
                v-if="isLoggedIn"
                @click.prevent="logout"
                class="btn btn-default d-inline-block"
              >
                Выйти
              </a>
            </div>
          </div>
        </div>
        <ul class="navbar">
          <button
            class="navbar__button btn hamburger--action"
            v-on:click="categoryButton = !categoryButton"
          >
            <div class="navbar__button--wrap hamburger--parent">
              <span>Все категории</span>
              <div class="hamburger--button">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
          <div
            class="navbar__categories"
            :class="categoryButton ? 'is-active' : ''"
          >
            <ul class="navbar__categories--wrap">
              <li v-for="(item, index) in navbar" :key="index">
                <router-link class="button" :to="item.link" :title="item.name">
                  <span class="button--child">
                    <simple-svg
                      :src="item.icon"
                      custom-class-name="svg-icon"
                      width="26px"
                      height="26px"
                    />
                    {{ item.name }}
                  </span>
                </router-link>
                <div class="submenu" v-if="item.categories">
                  <div class="submenu--wrap">
                    <div
                      class="submenu--item"
                      v-for="(cat, index) in item.categories"
                      :key="index"
                    >
                      <router-link
                        class="name"
                        :to="cat.link"
                        :title="cat.name"
                        >{{ cat.name }}</router-link
                      >
                      <ul class="submenu--item__navbar">
                        <router-link
                          v-for="(a, index) in cat.child"
                          :to="a.link"
                          :title="a.name"
                          :key="index"
                          tag="li"
                        >
                          <span>{{ a.name }}</span>
                        </router-link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <ul class="navbar__basic">
            <router-link to="/" tag="li"
              ><span class="discount"
                >Скидки и Акции<img
                  :src="icons.SVGdiscount"
                  alt="Скидки и Акции"/></span
            ></router-link>
            <!-- <router-link to="/" tag="li"><span>Электроника</span></router-link>
            <router-link to="/" tag="li"
              ><span>Бытовая техника</span></router-link
            >
            <router-link to="/" tag="li"
              ><span>Компьютерная техника</span></router-link
            >
            <router-link to="/" tag="li"><span>Телефоны</span></router-link> -->
            <router-link to="/register" tag="li"
              ><span>Sign-up</span></router-link
            >
            <router-link to="/login" tag="li"><span>Sign-in</span></router-link>
            <router-link to="/dashboard" tag="li"
              ><span>dashboard</span></router-link
            >
            <router-link to="/dashboard/settings" tag="li"
              ><span>settings</span></router-link
            >
            <li>
              <a href="#" @click.prevent="logout">
                Выйти
              </a>
            </li>
          </ul>
          <router-link class="navbar__weekly" to="/"
            >Журнал Маркета</router-link
          >
        </ul>
      </div>
    </div>
    <section class="header__slider" v-if="homePage">
      <div class="container header__slider--contain">
        <Slider />
        <div class="header__slider--catsList">
          <div class="item">
            <img
              src=""
              style="background: #feb900"
              width="190"
              height="159"
              alt=""
            />
          </div>
          <div class="item">
            <img
              src=""
              style="background: #ff5252"
              width="190"
              height="159"
              alt=""
            />
          </div>
          <div class="item">
            <img
              src=""
              style="background: #8910ce"
              width="190"
              height="159"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
// import { mapGetters } from "vuex";

// import { onLogout } from "@/vue-apollo.js";

import Slider from "../Content/Slider/Slider"

// icons
import SVGlocation from "@/assets/images/icons/location-full.svg"
import SVGshuffle from "@/assets/images/icons/shuffle-full.svg"
import SVGheart from "@/assets/images/icons/heart-full.svg"
import SVGdiscount from "@/assets/images/icons/discount.svg"
// menu icons
import SVGmenu from "@/assets/images/icons/menu.svg"
import SVGcamera from "@/assets/images/icons/categories/camera.svg"
import SVGwashingMachine from "@/assets/images/icons/categories/washing-machine.svg"
import SVGlaptop from "@/assets/images/icons/categories/laptop.svg"
import SVGpaintRoller from "@/assets/images/icons/categories/paint-roller.svg"
import SVGbabyBoy from "@/assets/images/icons/categories/baby-boy.svg"
import SVGhouse from "@/assets/images/icons/categories/house.svg"
import SVGweightlifting from "@/assets/images/icons/categories/weightlifting.svg"
import SVGhairDryer from "@/assets/images/icons/categories/hair-dryer.svg"
import SVGpawprint from "@/assets/images/icons/categories/pawprint.svg"
import SVGcctv from "@/assets/images/icons/categories/cctv.svg"
import SVGshirt from "@/assets/images/icons/categories/shirt.svg"
import SVGcarRepair from "@/assets/images/icons/categories/car-repair.svg"
import SVGplus from "@/assets/images/icons/categories/plus.svg"

export default {
  components: {
    Slider
  },
  data() {
    return {
      input: "",
      icons: {
        SVGlocation: SVGlocation,
        SVGshuffle: SVGshuffle,
        SVGheart: SVGheart,
        SVGmenu: SVGmenu,
        SVGdiscount: SVGdiscount
      },
      navbar: [
        {
          link: "/",
          name: "Электроника",
          icon: SVGcamera,
          categories: [
            {
              name: "Смартфоны",
              link: "smartfoni",
              child: [
                {
                  name: "Xiaomi",
                  link: "xiaomi"
                },
                {
                  name: "Apple",
                  link: "apple"
                },
                {
                  name: "Samsung",
                  link: "samsung"
                },
                {
                  name: "OnePlus",
                  link: "oneplus"
                }
              ]
            },
            {
              name: "Ноутбуки",
              link: "noutbuki",
              child: [
                {
                  name: "Apple",
                  link: "apple"
                },
                {
                  name: "Xiaomi",
                  link: "xiaomi"
                },
                {
                  name: "Lenovo",
                  link: "lenovo"
                },
                {
                  name: "Asus",
                  link: "asus"
                }
              ]
            }
          ]
        },
        {
          link: "/",
          name: "Бытовая техника",
          icon: SVGwashingMachine
        },
        {
          link: "/",
          name: "Компьютерная техника",
          icon: SVGlaptop
        },
        {
          link: "/",
          name: "Строительство и ремонт",
          icon: SVGpaintRoller
        },
        {
          link: "/",
          name: "Все для детей",
          icon: SVGbabyBoy
        },
        {
          link: "/",
          name: "Товары для дома",
          icon: SVGhouse
        },
        {
          link: "/",
          name: "Спорт и отдых",
          icon: SVGweightlifting
        },
        {
          link: "/",
          name: "Красота и здоровье",
          icon: SVGhairDryer
        },
        {
          link: "/",
          name: "Товары для животных",
          icon: SVGpawprint
        },
        {
          link: "/",
          name: "Оборудование",
          icon: SVGcctv
        },
        {
          link: "/",
          name: "Гардероб",
          icon: SVGshirt
        },
        {
          link: "/",
          name: "Авто",
          icon: SVGcarRepair
        },
        {
          link: "/",
          name: "Все категории",
          icon: SVGplus
        }
      ],
      categoryButton: false
    }
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active
    },
    logout() {
      // onLogout(this.$apollo.provider.defaultClient);
      this.$router.push("/login")
    }
  },
  computed: {
    // ...mapGetters(["guests"]),
    homePage() {
      if (this.$route.path == "/") {
        this.$set(this, "categoryButton", true)
        return true
      } else {
        this.$set(this, "categoryButton", false)
        return false
      }
    },
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn
    }
  },
  created() {
    // Работа с data()
    // this.$set(this, "categoryButton", true);
  }
}
</script>

<style lang="sass">
@import "header"
</style>
