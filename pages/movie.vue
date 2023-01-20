<template>
  <NuxtLayout name="custom"> 
    <div class="container p-5 mx-auto">
      <h1 class="font-semibold text-xl mb-4">推荐的电影</h1>
      <div class="border-l-2 border-indigo-500 pl-2">我最近看过的电影</div>
      <div class="py-4">基本为热门电影,包括但不限于院线电影</div>

      <!-- carousel -->
      <!-- <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div> -->
      <div class="coverflow-example">
        <swiper
          class="swiper"
          :modules="modules"
          :pagination="true"
          :effect="'coverflow'"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }"
        >
          <swiper-slide class="slide" v-for="index in 8" :key="index">
            <img src="../public/img/Quiet.jpg" />
          </swiper-slide>
        </swiper>
      </div>
    </div>            
  </NuxtLayout>
</template>
<script>
  import { defineComponent } from 'vue'
  import { Pagination, EffectCoverflow } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/effect-coverflow'

  export default defineComponent({
    name: 'swiper-example-3d-coverflow',
    title: '3D Coverflow effect',
    url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, EffectCoverflow]
      }
    }
  })
</script>

<style scoped>
  .swiper {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .slide {
    width: 300px;
    height: 300px;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>