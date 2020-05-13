<template>
  <div :class="container">
    <div class="title--wrap">
      <h2 class="title liner--pink-grey">Статьи, обзоры, рекомендации</h2>
    </div>
    <div class="articles__navLinks">
      <a href="#">Гид по гаджетам</a>
      <a href="#">Подсказки родителям</a>
      <a href="#">Идеи для дома</a>
      <a href="#">Дачные решения</a>
      <a href="#">Уход за питомцами</a>
      <a href="#">Секреты стиля</a>
      <a href="#">Вдохновение</a>
    </div>
    <div class="articles__list cols__wrap">
      <div class="cols__list">
        <div
          v-for="(post, index) in items"
          :key="index"
          class="cols__item col-3"
        >
          <div class="articles__list--inner transition">
            <div class="thumb">
              <a href="#"><img :src="post.image" :alt="post.title"/></a>
            </div>
            <div class="desc">
              <h4 class="title clamp clamp--line-2">
                <a href="#">{{ post.title }}</a>
              </h4>
              <p>{{ post.description }}</p>
              <div class="viewer">
                <a href="#" class="viewer__link">Продолжить чтение</a>
                <span class="viewer__count">
                  <simple-svg
                    :src="icons.SVGview"
                    custom-class-name="svg-icon"
                    width="19px"
                    height="19px"
                  />365
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SVGview from "../../../../assets/images/icons/view.svg";

export default {
  props: {
    container: String,
    items: Array
  },
  data() {
    return {
      icons: {
        SVGview: SVGview
      }
    };
  }
};
</script>

<style lang="sass">
@import "./_article-list"
</style>
