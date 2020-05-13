<template>
  <section class="product--sp description">
    <div class="product--sp__tabs">
      <div class="container product--sp__tabs--contain">
        <div class="product--sp__tabs--description--head">
          <h1 class="title">{{ item.name }}</h1>
          <div class="inner">
            <div class="inner__rate">
              <router-link to="/">
                <Rate :rate="rate" />
                <span class="rates">
                  {{ rateCount + " Отзывов" }}
                </span>
              </router-link>
              <router-link to="/">
                <span class="question">15 вопросов</span>
              </router-link>
            </div>
            <div class="inner__actions">
              <button class="compare" title="Добавить в сравнение">
                <simple-svg
                  :src="iconss.SVGshuffle"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />Сравнение
              </button>
              <button class="favourites" title="Добавить в избранное">
                <simple-svg
                  :src="iconss.SVGheart"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />Избранное
              </button>
            </div>
          </div>
        </div>
        <div class="product--sp__tabs--navbar">
          <ul>
            <li v-for="(item, index) in navbar" :key="index">
              <router-link :to="currentPath + item.link"
                >{{ item.name
                }}<span v-if="item.count > 0">{{
                  item.count
                }}</span></router-link
              >
            </li>
          </ul>
        </div>
        <div class="product--sp__tabs--description">
          <div class="item thumb">
            <ProductImageCarousel :items="item.colors[0].images" />
          </div>
          <div class="item property">
            <div class="colors" style="display:none;">
              <div class="colors--upper">
                <span>Цвет товара:</span> <span>неважно</span>
              </div>
              <div class="colors--lower">
                <div class="color black">
                  <div class="color--wrap" style="backgraund: url();">
                    <img :src="item.colors[0].images[0]" alt="" />
                  </div>
                </div>
                <div class="color yellow">
                  <div class="color--wrap" style="backgraund: url();">
                    <img :src="item.colors[0].images[0]" alt="" />
                  </div>
                </div>
                <div class="color white">
                  <div class="color--wrap" style="backgraund: url();">
                    <img :src="item.colors[0].images[0]" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="property__inner">
              <span class="title">Коротко о товаре</span>
              <ul>
                <li>Bluetooth-наушники с микрофоном</li>
                <li>накладные, закрытые</li>
                <li>время работы 11 ч</li>
                <li>импеданс 32 Ом</li>
                <li>вес 320 г</li>
                <li>складная конструкция</li>
              </ul>
              <a href="#" class="link">Все характеристики</a>
              <a href="#" class="link">Задать вопрос о товаре</a>
              <div class="brand">
                <router-link to="/brands/jbl/">
                  <span>Все товары <strong>JBL</strong></span>
                </router-link>
                <div>
                  <router-link to="/brands/jbl/">
                    <img :src="item.brand.logo" :alt="item.brand.name" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="item summary">
            <div class="summary__topSeller">
              <a href="#" class="help">
                Как купить
                <simple-svg
                  :src="icons.SVGinformation"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />
              </a>
              <div class="title">Низкая цена</div>
              <div class="price">469.000 сум</div>
              <div class="delivery">
                <simple-svg
                  :src="icons.SVGdeliveryTruck"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />
                Бесплатно курьером, 2-3 дня
              </div>
              <div class="payment">
                <simple-svg
                  :src="icons.SVGcreditCard"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />
                Картой на сайте/курьеру, наличными
              </div>
              <div class="color">Цвет товара: чёрный</div>
              <div class="more">
                <a href="#" class="more__link">Описание от продавца</a>
                <a href="#" class="warning">
                  <simple-svg
                    :src="icons.SVGwarning"
                    custom-class-name="svg-icon"
                    width="14px"
                    height="14px"
                  />
                </a>
              </div>
              <div class="button--wrapper">
                <button class="btn btn-primary">Перейти в магазин</button>
              </div>
              <div class="brand">
                <router-link to="/" class="brand__logo">
                  <img :src="sellers[0].logo" :alt="item.brand.name" />
                </router-link>
                <router-link to="/" class="brand__rate">
                  <Rate
                    width="10px"
                    height="10px"
                    :rate="rate"
                    title="Рейтинг продавца"
                  />
                  <span class="rates">{{ 2116 + " Отзывов" }}</span>
                </router-link>
              </div>
            </div>
            <div class="summary--stat" style="display: none;">
              <span>За 2 месяца этот товар посетили 2000 пользователей</span>
            </div>
          </div>
        </div>
        <div class="product--sp__tabs--offers">
          <div class="offers--head">
            <h2 class="title">Предложения магазинов</h2>
            <span class="link">
              <a href="#">
                Смотреть все цены
                <simple-svg
                  :src="icons.SVGnext"
                  custom-class-name="svg-icon"
                  width="15px"
                  height="15px"
                />
              </a>
            </span>
          </div>
          <div class="offers--list">
            <div class="item">
              <div class="brand">
                <router-link to="/" class="brand__logo">
                  <img :src="sellers[0].logo" :alt="item.brand.name" />
                </router-link>
                <router-link to="/" class="brand__rate">
                  <Rate width="10px" height="10px" :rate="rate" />
                  <span class="rates">{{ 2116 + " Отзывов" }}</span>
                </router-link>
              </div>
              <div class="info">
                <div class="delivery">
                  <simple-svg
                    :src="icons.SVGdeliveryTruck"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />Бесплатно курьером, 2-3 дня
                </div>
                <div class="payment">
                  <simple-svg
                    :src="icons.SVGcreditCard"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />Картой на сайте/курьеру, наличными
                </div>
              </div>
              <div class="info">
                <div class="color">Цвет товара: чёрный</div>
                <a href="#" class="more">Описание продавца</a>
              </div>
              <div class="price">469.000<span> сум</span></div>
              <div class="buy">
                <button class="btn btn-primary">В магазин</button>
                <a href="#" class="warning">
                  <simple-svg
                    :src="icons.SVGwarning"
                    custom-class-name="svg-icon"
                    width="14px"
                    height="14px"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div class="brand">
                <router-link to="/" class="brand__logo">
                  <img :src="sellers[0].logo" :alt="item.brand.name" />
                </router-link>
                <router-link to="/" class="brand__rate">
                  <Rate width="10px" height="10px" :rate="rate" />
                  <span class="rates">{{ 2116 + " Отзывов" }}</span>
                </router-link>
              </div>
              <div class="info">
                <div class="delivery">
                  <simple-svg
                    :src="icons.SVGdeliveryTruck"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Бесплатно курьером, 2-3 дня
                </div>
                <div class="payment">
                  <simple-svg
                    :src="icons.SVGcreditCard"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Картой на сайте/курьеру, наличными
                </div>
              </div>
              <div class="info">
                <div class="color">Цвет товара: чёрный</div>
                <a href="#" class="more">Описание продавца</a>
              </div>
              <div class="price">469.000<span> сум</span></div>
              <div class="buy">
                <button class="btn btn-primary">В магазин</button>
                <a href="#" class="warning">
                  <simple-svg
                    :src="icons.SVGwarning"
                    custom-class-name="svg-icon"
                    width="14px"
                    height="14px"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div class="brand">
                <router-link to="/" class="brand__logo">
                  <img :src="sellers[0].logo" :alt="item.brand.name" />
                </router-link>
                <router-link to="/" class="brand__rate">
                  <Rate width="10px" height="10px" :rate="rate" />
                  <span class="rates">{{ 2116 + " Отзывов" }}</span>
                </router-link>
              </div>
              <div class="info">
                <div class="delivery">
                  <simple-svg
                    :src="icons.SVGdeliveryTruck"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Бесплатно курьером, 2-3 дня
                </div>
                <div class="payment">
                  <simple-svg
                    :src="icons.SVGcreditCard"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Картой на сайте/курьеру, наличными
                </div>
              </div>
              <div class="info">
                <div class="color">Цвет товара: чёрный</div>
                <a href="#" class="more">Описание продавца</a>
              </div>
              <div class="price">469.000<span> сум</span></div>
              <div class="buy">
                <button class="btn btn-primary">В магазин</button>
                <a href="#" class="warning">
                  <simple-svg
                    :src="icons.SVGwarning"
                    custom-class-name="svg-icon"
                    width="14px"
                    height="14px"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div class="brand">
                <router-link to="/" class="brand__logo">
                  <img :src="sellers[0].logo" :alt="item.brand.name" />
                </router-link>
                <router-link to="/" class="brand__rate">
                  <Rate width="10px" height="10px" :rate="rate" />
                  <span class="rates">{{ 2116 + " Отзывов" }}</span>
                </router-link>
              </div>
              <div class="info">
                <div class="delivery">
                  <simple-svg
                    :src="icons.SVGdeliveryTruck"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Бесплатно курьером, 2-3 дня
                </div>
                <div class="payment">
                  <simple-svg
                    :src="icons.SVGcreditCard"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Картой на сайте/курьеру, наличными
                </div>
              </div>
              <div class="info">
                <div class="color">Цвет товара: чёрный</div>
                <a href="#" class="more">Описание продавца</a>
              </div>
              <div class="price">469.000<span> сум</span></div>
              <div class="buy">
                <button class="btn btn-primary">В магазин</button>
                <a href="#" class="warning">
                  <simple-svg
                    :src="icons.SVGwarning"
                    custom-class-name="svg-icon"
                    width="14px"
                    height="14px"
                  />
                </a>
              </div>
            </div>
            <div class="item">
              <div class="brand">
                <router-link to="/" class="brand__logo">
                  <img :src="sellers[0].logo" :alt="item.brand.name" />
                </router-link>
                <router-link to="/" class="brand__rate">
                  <Rate width="10px" height="10px" :rate="rate" />
                  <span class="rates">{{ 2116 + " Отзывов" }}</span>
                </router-link>
              </div>
              <div class="info">
                <div class="delivery">
                  <simple-svg
                    :src="icons.SVGdeliveryTruck"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Бесплатно курьером, 2-3 дня
                </div>
                <div class="payment">
                  <simple-svg
                    :src="icons.SVGcreditCard"
                    custom-class-name="svg-icon"
                    width="15px"
                    height="15px"
                  />
                  Картой на сайте/курьеру, наличными
                </div>
              </div>
              <div class="info">
                <div class="color">Цвет товара: чёрный</div>
                <a href="#" class="more">Описание продавца</a>
              </div>
              <div class="price">469.000<span> сум</span></div>
              <div class="buy">
                <button class="btn btn-primary">В магазин</button>
                <a href="#" class="warning">
                  <simple-svg
                    :src="icons.SVGwarning"
                    custom-class-name="svg-icon"
                    width="14px"
                    height="14px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="price-charts">
          <h2>Динамика цен на наушники JBL T450BT</h2>
        </div>
        <div class="product--sp__">
          <ProductList
            v-for="(filter, index) in productsFilter"
            class="product-list"
            :key="index"
            :id="filter.id"
            :title="filter.title"
            :products="filter.products"
            :sellers="sellers"
            :itemComponent="'detail'"
          />
        </div>
        <div class="product--delivery-info">
          <p>
            Стоимость доставки из других регионов приблизительная. Точную
            стоимость уточняйте у продавца. Товары в разделе «Вместе с этим
            покупают» подобраны автоматически. Совместимость товаров уточняйте у
            продавца или производителя. Ежемесячный платеж является
            приблизительным или рассчитан автоматически на основе
            предоставленной продавцом информации. Подробные условия покупки
            товаров в кредит, полную стоимость кредита и другие условия
            кредитования уточняйте на сайте продавца.
          </p>
          <div class="link">
            <a href="#">Информация о продавцах</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

// components
import ProductImageCarousel from "../ProductImageCarousel";
import ProductList from "../ProductList/";
import Rate from "../../../SmallBlocks/Rate";

// icons
import SVGdeliveryTruck from "@/assets/images/icons/delivery-truck.svg";
import SVGcreditCard from "@/assets/images/icons/credit-card.svg";
import SVGwarning from "@/assets/images/icons/warning.svg";
import SVGinformation from "@/assets/images/icons/information.svg";
import SVGnext from "@/assets/images/icons/arrow-right.svg";

export default {
  name: "ProductDescription",
  components: {
    Rate,
    ProductList,
    ProductImageCarousel
  },
  props: {
    sellers: Array,
    path: String,
    navbar: Array,
    item: {},
    rate: Number,
    rateCount: {},
    iconss: {}
  },
  data() {
    return {
      currentPath: "/product/" + this.item.id,
      icons: {
        SVGdeliveryTruck,
        SVGcreditCard,
        SVGwarning,
        SVGinformation,
        SVGnext
      }
    };
  },
  computed: {
    ...mapGetters(["products"]),
    productsFilter() {
      // let arr = this.products,
      //   // eslint-disable-next-line no-unused-vars
      //   temp;

      // for (var i = 0, j = arr.lenght - 1; i < j; i++, j--) {
      //   temp = arr[j];
      //   arr[j] = arr[i];
      //   arr[i] = temp;
      // }

      let filter = [
        {
          id: 0,
          title: "С этим товаром смотрят",
          products: this.products
        }
      ];

      return filter;
    }
  },
  created() {
    window.scrollTo(0, 0);
  }
};
</script>
