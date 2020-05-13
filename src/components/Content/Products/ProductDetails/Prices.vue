<template>
  <section class="product--sp prices">
    <div class="product--sp__tabs">
      <div class="container product--sp__tabs--contain">
        <h1 class="title">{{ item.name }}</h1>
        <div class="product--sp__tabs--navbar">
          <ul>
            <li v-for="(item, index) in navbar" :key="index">
              <router-link :to="currentPath + item.link"
                >{{ item.name
                }}<span v-if="item.count > 0">{{
                  item.count
                }}</span></router-link
              >
            </li>
          </ul>
        </div>
        <div class="product--sp__tabs--property">
          <p>Страница в разработке!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductPrices",
  props: {
    path: String,
    navbar: Array,
    item: {}
  },
  data() {
    return {
      currentPath: "/product/" + this.item.id
    };
  }
};
</script>
