<template>
  <section class="slider">
    <div class="slider__inner">
      <div class="swiper__wrapper" v-if="isReady">
        <swiper
          :slides-per-view="1"
          :space-between="0"
          :breakpoints="{
            600: {
              centeredSlides: true,
              spaceBetween: 28,
              slidesPerView: 'auto',
            },
          }"
          :loop='true'
          :looped-slides="12"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :pagination="{ 
            clickable: true,
            el: '.swiper-pagination'
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide class="slide" v-for="(item,key) of slideList" :key="key">
            <a>
              <img :src="`/image/${item.image}`" alt="">
              <h3>{{ item.title }}</h3>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
        <a class="swiper-button swiper-button-next"></a>
        <a class="swiper-button swiper-button-prev"></a>
      </div>

    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import axios from "axios"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([ Navigation,Pagination ]);

export default {
  name: 'Slider',
  data: () => ({
    mySwiper : null,
    isReady: false,
    list : []
  }),
  beforeCreate(){
    axios.get('/data/all.json')
      .then((response) => {
        this.list = response.data;
        this.isReady = true
      })
      .catch((e) => {
        alert(e);
      });
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed:{
    slideList(){
      return this.list.slice(0,6)
    }
  }
}
</script>

<style lang="scss">
.swiper-slide{
  @include media(m){
    width: 460px;
  }
  a {
    display: block;
    position: relative;
    h3 {
      position: absolute;
      left: 0;
      bottom: 0;
      height: 48px;
      width: 100%;
      line-height: 48px;
      padding: 0 12px;
      background-color: rgba($white,.8);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      @include media(m){
        height: 60px;
        line-height: 60px;
        font-size: 1.8rem;
      }
    }
  }

}

.swiper-button{
  display: none;

  @include media(m){
    display: flex;
    width: 48px;
    height: 48px;
    background: $black;
  }
  &::after{
    color: $white;
    font-size: 36px;
  }
  &-next {
    right: 0;
    @include media(l){
      transform: translateX(50%);
    }
  }
  &-prev {
    left: 0;
    @include media(l){
      transform: translateX(-50%);
    }
  }

}
.swiper__wrapper{

  position: relative;

  .swiper-pagination{
    position: absolute;
    z-index: 1;
    bottom: -24px;
    left: 50%;
    transform: translateX(-50%);
    @include media(m){
      bottom: -36px;
    }
    &-bullet {
      background-color: $white;
      margin-right: 8px;
      opacity: 1;
      &-active{
        background-color: $kkk;
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
}

</style>

<style lang="scss" scoped>
.slider__inner{
  background-color: $yellow;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;
  @include media(m){
    width: 960px;
    padding-top: 28px;
    padding-bottom: 60px;
  }
}

</style>