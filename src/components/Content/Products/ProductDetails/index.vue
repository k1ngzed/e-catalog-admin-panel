<template>
  <main class="content">
    <div class="container">
      <Breadcrumbs />
    </div>
    <keep-alive>
      <router-view
        :sellers="sellers"
        :item="item"
        :navbar="navbar"
        :rate="productRate"
        :rateCount="productRateCount"
        :iconss="icons"
      />
    </keep-alive>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

// components
import Breadcrumbs from "../../../SmallBlocks/Breadcrumbs";

// Icons
import SVGheart from "../../../../assets/images/icons/heart-line.svg";
import SVGshuffle from "../../../../assets/images/icons/shuffle-line.svg";

export default {
  name: "ProductDetails",
  components: {
    Breadcrumbs
  },
  data() {
    return {
      navbar: [
        {
          name: "Описание",
          link: ""
        },
        {
          name: "Характеристики",
          link: "/property"
        },
        {
          name: `Цены`,
          link: "/prices",
          count: 21
        },
        {
          name: `Отзовы`,
          link: "/reviews",
          count: 3
        },
        {
          name: `Вопросы ответы`,
          link: "/questions-and-answers",
          count: 15
        }
      ],
      icons: {
        SVGheart: SVGheart,
        SVGshuffle: SVGshuffle
      }
    };
  },
  computed: {
    ...mapGetters(["products", "reviews", "sellers"]),
    item() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter(item => {
          return item.id == id;
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    },
    productRate() {
      let id = this.$route.params.id,
        calcArr = 0;
      this.reviews.map(item => {
        if (item.productId == id) {
          calcArr += item.authorRate;
        }
        return calcArr;
      });

      function total(i) {
        return i / 5;
      }

      return Number(total(calcArr).toFixed(1));
    },
    productRateCount() {
      let id = this.$route.params.id,
        rates = 0;
      this.reviews.filter(item => {
        if (item.productId == id) rates++;
      });
      return rates;
    }
  },
  created() {
    // eslint-disable-next-line no-console
    console.log("Product Page ->>>>>", this.productRate);
  }
};
</script>

<style lang="sass">
@import "./product"
</style>
