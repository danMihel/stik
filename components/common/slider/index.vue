<template>
  <div>
    <swiper :slides-per-view="1" :pagination="true" :loop="false" :space-between="30"  @swiper="onSwiper" @slideChange="onSlideChange">
      <swiper-slide class="slide" v-for="item in slider" :key="item">
       <img :src="item.smallImg" class="imgage">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Pagination } from 'swiper'
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import { mapGetters } from 'vuex'
import ImageComponent from '@/components/common/image'
// Import Swiper styles
import '@/assets/scss/swiper-bundle.css'

SwiperCore.use([Pagination])

export default {
  components: {
    Swiper,
    SwiperSlide,
    ImageComponent
  },
  props: {
    activeColor: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters({
      product: 'getProduct'
    }),
    activePhoto() {
      return this.product.details.filter(item => item.color === this.activeColor)[0]?.sliderPhotos[this.activePhotoIndex]
    },
    slider() {
      return this.product.details.filter(item => item.color === this.activeColor)[0]?.sliderPhotos
    }
  },
  methods: {
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
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