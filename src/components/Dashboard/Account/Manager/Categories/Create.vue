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
                v-model="category.parent"
                clearable
                filterable
                placeholder="Select"
              >
                <el-option
                  v-for="(item, index) in getCategoryList.filter(
                    data =>
                      !search ||
                      data.name.toLowerCase().includes(search.toLowerCase())
                  )"
                  :key="index"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Название категории">
              <el-input
                placeholder="Название новой категории"
                v-model="category.name"
                @input="translitName(category.name)"
              ></el-input>
            </el-form-item>
            <el-form-item label="Ссылка">
              <el-input
                placeholder="Транслит"
                v-model="category.link"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { translit } from "@/helpers/translit"
export default {
  data() {
    return {
      category: {
        parent: "",
        name: "",
        link: ""
      },
      search: ""
    }
  },
  computed: {
    ...mapGetters(["getCategoryList"])
  },
  methods: {
    translitName(e) {
      this.category.link = translit(e)
    },
    submitForm() {
      let { name, link } = this.category
      this.$store.dispatch("createCategory", { data: { name, link } })
    }
  },
  created() {
    // this.$store.dispatch("getCategories")
  }
}
</script>
