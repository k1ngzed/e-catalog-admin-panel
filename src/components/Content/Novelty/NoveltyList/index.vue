<template>
  <div :class="container">
    <h2 class="title liner--pink-grey">Новинки</h2>
    <div class="novelty__list">
      <div class="cols__wrap">
        <div class="cols__list">
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
          <div class="cols__item col-6">
            <a href="#" class="novelty__list--inner transition">
              <img :src="img" alt="" />
              <div class="desc">
                <div class="title clamp clamp--line-2">
                  Наушники Apple AirPods
                </div>
                <div class="price">469.000 сум</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../../../../assets/images/content/catalog/electronics/headphones/JBL-T450BT.jpg"
export default {
  props: {
    container: String
  },
  data() {
    return {
      img: img
    }
  }
}
</script>

<style lang="sass">
@import "./_novelty-list"
</style>
