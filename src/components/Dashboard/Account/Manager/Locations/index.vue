<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <router-link
        :to="{ name: 'manager-locations-create' }"
        class="el-button el-button--primary"
      >
        Добавить локацию
      </router-link>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-table
            v-if="locations !== undefined"
            :data="locations"
            style="width: 100%"
          >
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="label" label="Город" />
            <el-table-column prop="region" label="Область" />
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
  name: "ManagerLocations",
  data() {
    return {
      locations: "",
      search: ""
    }
  },
  computed: {
    ...mapGetters(["getLocationList"])
  },
  methods: {
    handleDelete(index, id) {
      console.log("handleDelete", index, id)
      this.locations.splice(index, 1)
    }
  },
  created() {
    this.locations = this.getLocationList
    // console.log("route", this.$route)
    // console.log("store", this.$store)
  }
}
</script>
