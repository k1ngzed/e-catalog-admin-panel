<template>
  <div class="ProductImageCarousel">
    <!-- swiper small thumbs -->
    <swiper
      v-if="images.length > 0"
      :options="swiperOptionThumbs"
      class="gallery-thumbs"
      ref="swiperThumbs"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <img :src="item" :alt="alt" />
      </swiper-slide>
      <!-- <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div> -->
    </swiper>
    <!-- swiper big thumbs -->
    <swiper
      v-if="images.length > 0"
      :options="swiperOptionTop"
      class="gallery-top"
      ref="swiperTop"
    >
      <swiper-slide v-for="(item, index) in images" :key="index">
        <zoom-on-hover :img-normal="item" :scale="1.5"></zoom-on-hover>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// icons
// import SVGnext from "../../../../assets/images/icons/next.svg";

export default {
  props: {
    items: Array,
    alt: String
  },
  data() {
    return {
      swiperOptionTop: {
        swipeHandler: true,
        spaceBetween: 0
      },
      swiperOptionThumbs: {
        direction: "vertical",
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
      // swiperOptionTop: {
      //   spaceBetween: 0,
      //   loop: true,
      //   loopedSlides: this.items.length, //looped slides should be the same
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev"
      //   }
      // },
      // swiperOptionThumbs: {
      //   direction: "vertical",
      //   spaceBetween: 0,
      //   slidesPerView: 5,
      //   touchRatio: 0.2,
      //   loop: true,
      //   loopedSlides: this.items.length, //looped slides should be the same
      //   slideToClickedSlide: true
      // }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  computed: {
    images: function() {
      let arr = [];
      if (this.items.length <= 1) {
        arr.push(this.items);
      } else {
        for (var i = 0; i < this.items.length; i++) {
          arr.push(this.items[i]);
        }
      }
      return arr;
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log("images", this.items.length);
  }
};
</script>

<style lang="sass">
@import "./_product-image-carousel.sass"
</style>
