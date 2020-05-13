<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <router-link
        :to="{ name: 'dashboard-account-products-create' }"
        class="el-button el-button--primary"
      >
        Добавить продукт
      </router-link>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-table
            v-if="merchantProducts !== ''"
            :data="merchantProducts"
            style="width: 100%"
          >
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="image" label="Image" width="180" />
            <el-table-column prop="name" label="Name" />
            <el-table-column
              prop="productsColor.name"
              label="Color"
              width="180"
            />
            <el-table-column fixed="right" label="Operations" width="120">
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'dashboard-account-products-edit',
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
    ...mapState(["merchantProducts"])
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleDelete(index, id) {
      this.merchantProducts.splice(index, 1)
    }
  }
}
</script>
