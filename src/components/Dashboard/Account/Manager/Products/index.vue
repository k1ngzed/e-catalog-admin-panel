<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <router-link
        :to="{ name: 'manager-products-create' }"
        class="el-button el-button--primary"
      >
        Добавить продукт
      </router-link>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-table
            v-if="products !== undefined"
            :data="products"
            style="width: 100%"
          >
            <el-table-column prop="id" label="ID" width="80" />
            <!-- <el-table-column prop="image" label="Image" width="180" /> -->
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="link" label="Ссылка" />
            <el-table-column prop="category.name" label="Категория" />
            <el-table-column align="right">
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'manager-products-edit',
                    params: { productId: scope.row.id }
                  }"
                  :item="scope.row"
                  class="el-button el-button--primary el-button--small"
                  ><i class="el-icon-edit"></i
                ></router-link>
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
  computed: {
    ...mapState(["products"])
  },
  methods: {
    handleDelete(index, id) {
      this.$store
        .dispatch("removeProduct", {
          data: { id }
        })
        .then(() => {
          this.$message({
            message: "Продукт успешно удален!",
            type: "success"
          })
          this.products.splice(index, 1)
        })
        .catch(() => {
          this.$message({
            message:
              "Произошла ошибка, повторите попытку или обратитесь в службу технической поддержки",
            type: "warning"
          })
        })
    }
  },
  created() {
    // console.log("route", this.$route)
    // console.log("store", this.$store)
  }
}
</script>
