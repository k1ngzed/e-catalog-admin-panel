<template>
  <li>
    <template v-if="checkingRights(item.item_right)">
      <span class="sub-title" v-if="item.submenu">{{ item.item_name }}</span>
      <router-link
        v-if="!item.submenu"
        :to="item.item_link ? { name: item.item_link } : { name: 'main' }"
        >{{ item.item_name }}</router-link
      >
      <div class="sub-menu" v-if="item.submenu">
        <ul>
          <TreeItem
            v-for="(child, index) in item.submenu"
            :key="index"
            :item="child"
            :rights="rights"
          />
        </ul>
      </div>
    </template>
  </li>
</template>

<script>
export default {
  name: "TreeItem",
  props: {
    rights: Array,
    item: Object
  },
  methods: {
    checkingRights(right) {
      let result = false

      if (this.rights !== undefined) {
        this.rights.map(a => {
          if (a === right && a !== "group_guest") {
            result = true
          }
        })
      }

      return result
    }
  }
}
</script>
