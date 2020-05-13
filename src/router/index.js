import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"

// Admin
import Admin from "../components/Dashboard/Account/Admin"
import AdminMain from "../components/Dashboard/Account/Admin/Main"
import AdminRights from "../components/Dashboard/Account/Admin/Rights"
import AdminUsers from "../components/Dashboard/Account/Admin/Users"

// Manager
import Manager from "../components/Dashboard/Account/Manager"
import ManagerMain from "../components/Dashboard/Account/Manager/Main"
import ManagerProducts from "../components/Dashboard/Account/Manager/Products"
import ManagerProductsCreate from "../components/Dashboard/Account/Manager/Products/Create"
import ManagerProductsEdit from "../components/Dashboard/Account/Manager/Products/Edit"
import ManagerLocations from "../components/Dashboard/Account/Manager/Locations"
import ManagerLocationsCreate from "../components/Dashboard/Account/Manager/Locations/Create"
import ManagerBrands from "../components/Dashboard/Account/Manager/Brands"
import ManagerBrandsCreate from "../components/Dashboard/Account/Manager/Brands/Create"
import ManagerCategories from "../components/Dashboard/Account/Manager/Categories"
import ManagerCategoriesCreate from "../components/Dashboard/Account/Manager/Categories/Create"

// Dashboard
import Dashboard from "../components/Dashboard"
import DashboardLogin from "../components/Dashboard/Login"
import DashboardRegister from "../components/Dashboard/Register"
import DashboardAccount from "../components/Dashboard/Account"
import DashboardAccountMain from "../components/Dashboard/Account/Main"

import DashboardAccountProducts from "../components/Dashboard/Account/Products"
import DashboardAccountProductsCreate from "../components/Dashboard/Account/Products/Create"
import DashboardAccountProductsEdit from "../components/Dashboard/Account/Products/Edit"

import DashboardAccountProfiles from "../components/Dashboard/Account/Profiles"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "dashboard",
    redirect: "/login",
    component: Dashboard,
    meta: { guest: true },
    children: [
      {
        path: "login",
        name: "dashboard-login",
        component: DashboardLogin,
        meta: { title: "Вход в панель инструментов продавца" }
      },
      {
        path: "register",
        name: "dashboard-register",
        component: DashboardRegister,
        meta: { title: "Регистрация в панель инструментов продавца" }
      },
      {
        path: "account/",
        component: DashboardAccount,
        meta: { private: true },
        children: [
          {
            path: "",
            name: "dashboard-account-main",
            component: DashboardAccountMain,
            meta: { title: "Главная" }
          },
          {
            path: "products",
            name: "dashboard-account-products",
            component: DashboardAccountProducts,
            meta: { title: "Товары" }
          },
          {
            path: "products/create",
            name: "dashboard-account-products-create",
            component: DashboardAccountProductsCreate,
            meta: { title: "Создать товар" }
          },
          {
            path: "products/:productId/edit",
            name: "dashboard-account-products-edit",
            component: DashboardAccountProductsEdit,
            meta: { title: "Корректировка товара" }
          },
          {
            path: "manager/",
            component: Manager,
            children: [
              {
                path: "",
                name: "manager",
                component: ManagerMain,
                meta: { title: "Главная страница" }
              },
              {
                path: "products",
                name: "manager-products",
                component: ManagerProducts,
                meta: { title: "Товары" }
              },
              {
                path: "products/create",
                name: "manager-products-create",
                component: ManagerProductsCreate,
                meta: { title: "Создать товар" }
              },
              {
                path: "products/:productId/edit",
                name: "manager-products-edit",
                component: ManagerProductsEdit,
                meta: { title: "Корректировка товара" }
              },

              {
                path: "locations",
                name: "manager-locations",
                component: ManagerLocations,
                meta: { title: "Локации" }
              },
              {
                path: "locations/create",
                name: "manager-locations-create",
                component: ManagerLocationsCreate,
                meta: { title: "Создать локацию" }
              },
              {
                path: "brands",
                name: "manager-brands",
                component: ManagerBrands,
                meta: { title: "Бренды" }
              },
              {
                path: "brands/create",
                name: "manager-brands-create",
                component: ManagerBrandsCreate,
                meta: { title: "Создать бренд" }
              },
              {
                path: "categories",
                name: "manager-categories",
                component: ManagerCategories,
                meta: { title: "Категории" }
              },
              {
                path: "categories/create",
                name: "manager-categories-create",
                component: ManagerCategoriesCreate,
                meta: { title: "Создать категорию" }
              }
            ]
          },
          {
            path: "admin/",
            component: Admin,
            meta: { isAdmin: true },
            children: [
              {
                path: "",
                name: "admin-main",
                component: AdminMain,
                meta: { title: "Страница Администратора" }
              },
              {
                path: "rights",
                name: "admin-rights",
                component: AdminRights,
                meta: { title: "Права доступа" }
              },
              {
                path: "users",
                name: "admin-users",
                component: AdminUsers,
                meta: { title: "Пользователи" }
              }
            ]
          },
          {
            path: "settings",
            name: "dashboard-account-settings",
            component: DashboardAccountProfiles,
            meta: { title: "Настройки" }
          }
        ]
      }
    ]
  },
  { path: "*", redirect: "/" }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 })
})

router.beforeEach(async (to, from, next) => {
  // console.log("###########", to.path)
  // console.log(">>>>>>", store)

  const rights = await store.state.user_rights

  let isAdmin = false
  let isMerchant = false

  if (rights !== "") {
    await rights.filter(a => {
      if (a === "group_merchant") isMerchant = true
      if (a === "group_admin") isAdmin = true
    })
  }

  if (to.matched.some(record => record.meta.private)) {
    if (store.getters.isLoggedIn) {
      if (!isMerchant) {
        if (to.path === "/account/settings") {
          next()
          return
        }
        next("/account/settings")
        return
      } else if (to.matched.some(record => record.meta.isAdmin)) {
        if (isAdmin) {
          next()
          return
        }
        next("/account")
        return
      }
      next()
      return
    }
    next("/login")
  } else if (to.matched.some(record => record.meta.guest)) {
    if (!store.getters.isLoggedIn) {
      next()
      return
    }
    next("/account")
  } else {
    next()
  }
})

export default router
