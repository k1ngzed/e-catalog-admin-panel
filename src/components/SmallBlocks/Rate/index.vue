<template>
  <div class="rate" :v-model="rate">
    <span class="rate__item">
      <simple-svg
        :src="icons.SVGstarFull"
        custom-class-name="star star--on"
        :width="isWidth"
        :height="isHeight"
      />
    </span>
    <span class="rate__item">
      <simple-svg
        :src="icons.SVGstarFull"
        custom-class-name="star star--on"
        :width="isWidth"
        :height="isHeight"
      />
    </span>
    <span class="rate__item">
      <simple-svg
        :src="icons.SVGstarFull"
        custom-class-name="star star--on"
        :width="isWidth"
        :height="isHeight"
      />
    </span>
    <span class="rate__item">
      <simple-svg
        :src="icons.SVGstarFull"
        custom-class-name="star star--on"
        :width="isWidth"
        :height="isHeight"
      />
    </span>
    <span class="rate__item">
      <simple-svg
        :src="icons.SVGstarFull"
        custom-class-name="star star--on"
        :width="isWidth"
        :height="isHeight"
      />
    </span>
  </div>
</template>

<script>
import SVGstarFull from "../../../assets/images/icons/star-full.svg";
import SVGstarLine from "../../../assets/images/icons/star-line.svg";

export default {
  name: "Rate",
  props: {
    rate: Number,
    width: {},
    height: {}
  },
  data() {
    return {
      icons: {
        SVGstarFull: SVGstarFull,
        SVGstarLine: SVGstarLine
      }
    };
  },
  computed: {
    isWidth: function() {
      if (this.width) {
        return this.width;
      } else {
        return "14px";
      }
    },
    isHeight: function() {
      if (this.height) {
        return this.height;
      } else {
        return "14px";
      }
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(">>>>>>", this.isWidth);
  }
};
</script>

<style lang="sass">
@import "./_rate.sass"
</style>
