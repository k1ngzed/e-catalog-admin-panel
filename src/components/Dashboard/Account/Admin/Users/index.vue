<template>
  <div class="db_body" v-loading="getUsers === ''">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
    </div>
    <div class="db_body__content">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <template v-if="getUsers !== ''">
            <el-table :data="getUsers">
              <el-table-column prop="name" label="Имя" width="180" />
              <el-table-column prop="email" label="Почта" width="180" />
              <el-table-column prop="phone" label="Телефон" width="180" />
              <el-table-column
                prop="user_company"
                label="Компания"
                width="240"
              />
              <el-table-column prop="user_region" label="Адрес" />
              <el-table-column prop="user_region" label="Права" width="180">
                <el-select
                  size="small"
                  slot-scope="scope"
                  v-model="scope.row.right"
                  placeholder="Изменить права"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"
                    :disabled="item.disabled"
                  >
                  </el-option>
                </el-select>
              </el-table-column>
              <el-table-column fixed="right" width="80">
                <template slot-scope="scope">
                  <el-button
                    type="primary"
                    icon="el-icon-check"
                    size="small"
                    @click="editUser(scope.row.id, scope.row.right)"
                  ></el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      options: [
        {
          id: 0,
          label: "Администратор",
          disabled: true
        },
        {
          id: 1,
          label: "Продавец"
        },
        {
          id: 2,
          label: "Пользователь"
        },
        {
          id: 3,
          label: "Заблокировать"
        }
      ]
    }
  },
  computed: {
    ...mapState(["admin"]),
    getUsers() {
      return this.admin.users
    }
  },
  created() {
    this.$store.dispatch("adminUsers")
  }
}
</script>
