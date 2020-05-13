<template>
  <div class="db_body">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>
      <el-button @click="submitForm" type="primary">
        Создать
      </el-button>
    </div>
    <div class="db_body__content style-01">
      <div class="db_body__content__fixer">
        <div class="db_body__content__box box-parent">
          <el-form label-position="top" @submit.prevent.native>
            <el-form-item label="Выбрать родителя">
              <el-select
                v-model="location.parent"
                clearable
                placeholder="Select"
              >
                <el-option
                  v-for="item in locations"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Название города">
              <el-input
                placeholder="Название нового города"
                v-model="location.value"
              ></el-input>
            </el-form-item>
          </el-form>
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
      location: {
        parent: "",
        value: ""
      }
    }
  },
  computed: {
    ...mapState(["locations"])
  },
  methods: {
    submitForm() {
      let { parent, value } = this.location
      this.$store.dispatch("createLocation", { data: { parent, value } })
    }
  },
  created() {
    // this.$store.dispatch("getLocations")
  }
}
</script>
