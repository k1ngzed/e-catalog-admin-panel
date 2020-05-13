<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <router-link
        :to="{ name: 'manager-categories-create' }"
        class="el-button el-button--primary"
      >
        Добавить Категорию
      </router-link>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-table
            v-if="getCategoryList !== undefined"
            :data="getCategoryList"
            style="width: 100%"
          >
            <el-table-column prop="id" label="ID" width="40" />
            <el-table-column prop="name" label="Название" />
            <el-table-column prop="link" label="Ссылка" />
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="
                    handleDelete(scope.$index, scope.row.id)
                  "
                  type="danger"
                  size="small"
                  icon="el-icon-delete"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "ManagerCategories",
  computed: {
    ...mapGetters(["getCategoryList"])
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleDelete(index, id) {
      this.getCategoryList.splice(index, 1)
    }
  },
  created() {
    // this.$store.dispatch("getCategories")
    // console.log("route", this.$route)
    // console.log("store", this.$store)
  }
}
</script>
