<template>
  <div class="db_wrapper">
    <div class="db_sidebar">
      <div class="db_sidebar__header">
        <div class="db_sidebar__header-profile">
          <div
            class="profile__bg"
            :style="`background: url(${images.PNGdefaultAvatar})`"
          ></div>
          <div class="profile__ava">
            <router-link :to="{ name: 'dashboard-account-settings' }">
              <img :src="images.PNGdefaultAvatar" alt="" />
            </router-link>
          </div>
          <!-- <el-button type="primary" :loading="this.user === ''">
            <span>{{ this.user.email }}</span>
          </el-button> -->
          <span class="profile__email">{{ this.user.email }}</span>
        </div>
        <div class="db_sidebar__header-navbar">
          <ul>
            <template v-if="main_menu !== undefined">
              <TreeItem
                v-for="item in main_menu"
                :rights="user.rights"
                :item="item"
                :key="item.id"
              />
            </template>
          </ul>
        </div>
      </div>
      <div class="db_sidebar__footer">
        <div class="logout">
          <el-button class="p-0" @click.prevent="logout" type="text">
            <simple-svg
              :src="icons.SVGlogout"
              custom-class-name="svg-icon"
              width="14px"
              height="14px"
            />
            <span>Выйти</span>
          </el-button>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// components
import TreeItem from "./TreeItem"

import { mapState } from "vuex"

// images
import PNGdefaultAvatar from "@/assets/images/default-avatar.png"
import SVGlogout from "@/assets/images/icons/logout.svg"
export default {
  components: {
    TreeItem
    // Preloader
  },
  data() {
    return {
      loading: true,
      icons: {
        SVGlogout
      },
      images: {
        PNGdefaultAvatar
      }
    }
  },
  computed: {
    ...mapState(["user", "main_menu"])
  },
  created() {
    this.$store.dispatch("getUser")
    this.$store.dispatch("getMainMenu")
  },
  methods: {
    logout() {
      this.$store.dispatch("logout")
      this.$router.push("/dashboard/")
    }
  }
}
</script>
