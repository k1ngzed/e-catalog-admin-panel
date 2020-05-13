<template>
  <router-link :to="'/product/' + item.id">
    <div class="thumb">
      <img :src="item.colors[0].images[0]" :alt="item.name" />
    </div>
    <div class="desc">
      <h4 class="title clamp clamp--line-2">
        {{ item.name }}
      </h4>
      <div class="price">
        {{ sellers[0].productList[0].price }}
        <span> Сум</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    item: {},
    sellers: Array
  },
  data() {
    return {
      price: this.sellers[0].productList[0].price
    };
  }
  // created() {
  //   // eslint-disable-next-line no-console
  //   console.log("Products Item Page", this.price);
  // }
};
</script>
