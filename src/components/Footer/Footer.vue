<template>
  <footer class="footer">
    <div class="footer--help">
      <div class="footer__bg--gradient">
        <div class="container">
          <div class="footer--help__inner">
            <div class="thumb">
              <img :src="icons.SVGconfused" alt="" />
            </div>
            <div class="desc">
              <h2 class="title">Как пользоваться сайтом?</h2>
              <p>
                Многофункциональный сервис поиска товаров в интернет-магазинах и
                сравнения цен. Он охватывает самые разнообразные категории
                товаров: электроника, компьютеры, бытовая техника, автотовары,
                оборудование для ремонта и строительства, туристическое
                снаряжение, детские товары и многое другое. Наша задача - помочь
                покупателю быстро и удобно найти самое
                <a href="#">Читать дальше >>></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer--upper">
      <div class="container">
        <div class="inner">
          <div class="item">
            <h3 class="title">Покупателям</h3>
            <ul>
              <li><a href="#">Как выбрать товар</a></li>
              <li><a href="#">Обратная связь</a></li>
              <li><a href="#">Помощь по сервису</a></li>
            </ul>
          </div>
          <div class="item">
            <h3 class="title">Сотрудничество</h3>
            <ul>
              <li><a href="#">Как выбрать товар</a></li>
              <li><a href="#">Обратная связь</a></li>
              <li><a href="#">Помощь по сервису</a></li>
            </ul>
          </div>
          <div class="item">
            <h3 class="title">Магазинам и партнерам</h3>
            <ul>
              <li><a href="#">Как выбрать товар</a></li>
              <li><a href="#">Обратная связь</a></li>
              <li><a href="#">Помощь по сервису</a></li>
            </ul>
          </div>
          <div class="item">
            <h3 class="title">Мой профиль</h3>
            <ul>
              <li><a href="#">Как выбрать товар</a></li>
              <li><a href="#">Обратная связь</a></li>
              <li><a href="#">Помощь по сервису</a></li>
            </ul>
          </div>
          <div class="item">
            <h3 class="title">Мы в соц. сетях</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="footer--lower">
      <ul>
        <li><a href="#">Пользовательское соглашение</a></li>
      </ul>
      <div class="footer__copyright">
        © 2019 <a href="#">Интернет магазин</a>
      </div>
    </div>
  </footer>
</template>

<script>
import SVGconfused from "../../assets/images/icons/confused.svg"

export default {
  data() {
    return {
      icons: {
        SVGconfused
      }
    }
  }
}
</script>

<style lang="sass">
@import "footer.sass"
</style>
