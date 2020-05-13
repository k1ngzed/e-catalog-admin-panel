<template>
  <div :class="`style--${itemComponent}`">
    <div class="title--wrap">
      <h2 class="title liner--pink-grey">{{ title }}</h2>
      <!-- Optional controls -->
      <div :class="`swiper-button prev-uu${id} transition`" slot="button-prev">
        <simple-svg
          :src="navigation.icon"
          custom-class-name="svg-icon transition"
          width="15px"
          height="15px"
        />
      </div>
      <div :class="`swiper-button next-uu${id} transition`" slot="button-next">
        <simple-svg
          :src="navigation.icon"
          custom-class-name="svg-icon transition"
          width="15px"
          height="15px"
        />
      </div>
    </div>
    <swiper class="product-list--wrap" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in items" :key="index">
        <Minimal
          v-if="itemComponent === 'minimal'"
          class="product-list--item"
          :item="item"
          :sellers="sellers"
        />
        <Detail
          v-if="itemComponent === 'detail'"
          class="product-list--item"
          :item="item"
          :sellers="sellers"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Minimal from "./Themes/Minimal";
import Detail from "./Themes/Detail";
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";

// icons
import SVGnext from "@/assets/images/icons/arrow-right.svg";

export default {
  components: {
    Minimal,
    Detail
  },
  props: {
    id: Number,
    title: String,
    products: Array,
    sellers: Array,
    itemComponent: String
  },
  data() {
    return {
      items: this.products,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0,
        navigation: {
          nextEl: `.swiper-button.next-uu${this.id}`,
          prevEl: `.swiper-button.prev-uu${this.id}`
        }
      },
      navigation: {
        icon: SVGnext
      }
    };
  }
};
</script>

<style lang="sass">
@import "./_product-list.sass"
</style>
