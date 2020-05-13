<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <router-link
        :to="{ name: 'manager-brands-create' }"
        class="el-button el-button--primary"
      >
        Добавить Бренд
      </router-link>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-table
            v-if="brands !== undefined"
            :data="brands"
            style="width: 100%"
          >
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="logo" label="Логотип" width="120" />
            <el-table-column prop="name" label="Название" width="180" />
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
import { mapState } from "vuex"
export default {
  name: "ManagerBrands",
  data() {
    return {
      locations: "",
      search: ""
    }
  },
  computed: {
    ...mapState(["brands"])
  },
  methods: {
    handleDelete(index, id) {
      console.log("handleDelete", index, id)
      this.brands.splice(index, 1)
    }
  },
  created() {
    // this.$store.dispatch("getBrands")
    // console.log("route", this.$route)
    // console.log("store", this.$store)
  }
}
</script>
