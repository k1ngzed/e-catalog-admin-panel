<template>
  <div :class="container">
    <h2 class="title liner--pink-grey">Популярные бренды</h2>
    <div class="brands__list">
      <div class="cols__wrap">
        <div class="cols__list">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="cols__item col-6"
          >
            <router-link
              :to="`brands/${item.brand_url}`"
              class="brands__list--inner transition"
            >
              <img
                class="transition"
                :src="item.brand_logo"
                :alt="item.brand_name"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    container: String,
    items: {}
  }
};
</script>

<style lang="sass">
@import "brands.sass"
</style>
