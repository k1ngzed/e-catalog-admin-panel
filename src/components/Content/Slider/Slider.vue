<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>
      <div class="header__slider--item">
        <img
          src=""
          style="background: #003eca"
          width="743"
          height="367"
          alt=""
        />
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css"

import { swiper, swiperSlide } from "vue-awesome-swiper"

export default {
  name: "Slider",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      }
    }
  }
}
</script>
