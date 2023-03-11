<template>
  <div>
    <swiper :slides-per-view="1" :pagination="true" :loop="false" :space-between="30">
      <swiper-slide class="slide" v-for="(item, index) in slider" :key="index">
       <img :src="item.smallImg" class="imgage">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import ImageComponent from '@/components/common/image'
import data from '@/data.json'
// Import Swiper styles
import '@/assets/scss/swiper-bundle.css'

SwiperCore.use([Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    ImageComponent
  },
  data() {
    return {
      product: data.product
    }
  },
  props: {
    activeColor: {
      type: String,
    }
  },
  computed: {
    activePhoto() {
      return this.product.details.filter(item => item.color === this.activeColor)[0]?.sliderPhotos[this.activePhotoIndex]
    },
    slider() {
      return this.product.details.filter(item => item.color === this.activeColor)[0]?.sliderPhotos
    }
  }
}
</script>

<style lang="scss" scoped>
.imgage {
  width: 375px;
  height: 617px;
  object-fit: cover;
  margin-right: auto;
  margin-left: auto;
}
</style>