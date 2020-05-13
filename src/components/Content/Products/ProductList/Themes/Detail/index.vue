<template>
  <router-link :to="'/product/' + item.id">
    <div class="actions">
      <button class="favourites" title="Добавить в избранное">
        <simple-svg
          :src="icons.SVGheart"
          custom-class-name="svg-icon"
          width="15px"
          height="15px"
        />
      </button>
      <button class="compare" title="Добавить в сравнение">
        <simple-svg
          :src="icons.SVGshuffle"
          custom-class-name="svg-icon"
          width="15px"
          height="15px"
        />
      </button>
    </div>
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
      <div class="text clamp clamp--line-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ratione!
      </div>
    </div>
    <div class="info">
      <a href="#" class="info__rate">80 отзывов</a>
      <a href="#" class="info__prices">Цены 24</a>
    </div>
  </router-link>
</template>

<script>
// Icons
import SVGheart from "@/assets/images/icons/heart-line.svg";
import SVGshuffle from "@/assets/images/icons/shuffle-line.svg";

export default {
  props: {
    item: {},
    sellers: Array
  },
  data() {
    return {
      price: this.sellers[0].productList[0].price,
      icons: {
        SVGheart: SVGheart,
        SVGshuffle: SVGshuffle
      }
    };
  }
  // created() {
  //   // eslint-disable-next-line no-console
  //   console.log("Products Item Page", this.price);
  // }
};
</script>
