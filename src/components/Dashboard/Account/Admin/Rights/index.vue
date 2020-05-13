<template>
  <div class="db_body" v-loading="rights === ''">
    <div class="db_body__header">
      <div class="title" v-if="this.$route.meta.title">
        <h1>{{ this.$route.meta.title }}</h1>
      </div>

      <el-form :inline="true" @submit.prevent.native>
        <el-form-item class="mb-0">
          <el-input
            v-model="rightsHook"
            placeholder="Введите название правила"
          ></el-input>
        </el-form-item>
        <el-form-item class="mb-0 mr-0">
          <el-button @click="createRight" type="primary">
            Добавить правило
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="db_body__content">
      <div class="db_body__content__fixer">
        <el-table
          class="db_body__content__box box-parent"
          v-if="rights !== ''"
          :data="rights"
          style="width: 100%"
        >
          <el-table-column prop="name" label="Имя правила" />
          <el-table-column prop="1" label="Администраторы">
            <template slot-scope="scope">
              <div
                v-on:click="
                  threebox(
                    1,
                    scope.row[1].id,
                    scope.row.name,
                    scope.row[1].conditions
                  )
                "
                :class="`threebox ${scope.row[1].conditions}`"
              >
                <span class="threebox--icon" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="2" label="Контент менеджеры">
            <template slot-scope="scope">
              <div
                v-on:click="
                  threebox(
                    2,
                    scope.row[2].id,
                    scope.row.name,
                    scope.row[2].conditions
                  )
                "
                :class="`threebox ${scope.row[2].conditions}`"
              >
                <span class="threebox--icon" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="3" label="Продавцы">
            <template slot-scope="scope">
              <div
                v-on:click="
                  threebox(
                    3,
                    scope.row[3].id,
                    scope.row.name,
                    scope.row[3].conditions
                  )
                "
                :class="`threebox ${scope.row[3].conditions}`"
              >
                <span class="threebox--icon" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="4" label="Покупатели">
            <template slot-scope="scope">
              <div
                v-on:click="
                  threebox(
                    4,
                    scope.row[4].id,
                    scope.row.name,
                    scope.row[4].conditions
                  )
                "
                :class="`threebox ${scope.row[4].conditions}`"
              >
                <span class="threebox--icon" />
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      checkbox: 0,
      rights: "",
      rightsHook: "",
      rightsHookName: ""
    }
  },
  computed: {
    ...mapState(["admin"]),
    getAdminUserRights() {
      return this.admin.users_rights
    }
  },
  watch: {
    getAdminUserRights(val) {
      let result = []
      let count = 0,
        gsnsID
      val.map(i => {
        let length = i.group_rights.length
        if (length > count) {
          count = length
          gsnsID = i.id
        }
      })
      val.map(a => {
        if (a.id === gsnsID) {
          a.group_rights.map(b => {
            result.push({
              name: b.hook
            })
          })
        }
      })
      val.map(group => {
        result.map(hook => {
          group.group_rights.map(right => {
            if (hook.name === right.hook) {
              hook[right.group_id] = {
                id: right.id,
                conditions: right.conditions
              }
            }
          })
        })
      })
      // console.log(">>>>>>", result)
      this.rights = result
    }
  },
  methods: {
    threebox(parentId, id, hook, conditions) {
      console.log("threebox", parentId, id, hook, conditions)

      // eslint-disable-next-line no-unused-vars
      let newConditions

      if (conditions === "allow") {
        newConditions = "deny"
      } else if (conditions === "deny") {
        newConditions = "force_deny"
      } else {
        newConditions = "allow"
      }

      this.$store
        .dispatch("updateAdminUsersRights", { id, conditions: newConditions })
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          this.rights.map(a => {
            if (a.name === hook) {
              a[parentId].conditions = newConditions
            }
          })
        })
        .catch(err => {
          console.log("AccesRight", err)
        })
    },
    createRight() {
      this.$store
        .dispatch("createAdminUsersRights", { hook: this.rightsHook })
        .then(res => {
          console.log("createAdminUsersRights", res)
        })
    }
  },
  created() {
    // console.log("Store", this.$store)
    this.$store.dispatch("adminUsersRights")
  }
}
</script>
