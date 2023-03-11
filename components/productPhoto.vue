<template>
  <div class="product-photo">
    <div class="slider">
      <SliderVue :product="product" :activeColor="activeColor" />
    </div>
    <div class="small-photos">
      <img :class="{ active: activePhotoIndex === index }" :src="item.bigImg" v-for="(item, index) in slider" :key="item.index" @click="activePhotoIndex = index">
    </div>
    <ImageComponent class="main-photo" :data="activePhoto"/>
  </div>
</template>

<script>
import ImageComponent from '@/components/common/image'
import SliderVue from '@/components/common/slider'
export default {
  name: 'product-photo-component',
  components: {
    ImageComponent,
    SliderVue
  },
  props: {
    activeColor: {
      type: String
    },
    product: {
      type: Object
    }
  },
  data() {
    return {
      activePhotoIndex: 0
    }
  },
  watch: {
    activeColor() {
      return this.activePhotoIndex = 0
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
@import 'assets/scss/index.scss';

  .product-photo {
    display: flex;
    .slider {
      width: 100%;
      display: none;
    }
    .small-photos {
      display: flex;
      flex-direction: column;
      & img {
        width: 70px;
        height: 87.84px;
        margin-bottom: 4px;
      }
      .active {
        opacity: 0.5;
      }
    }
    .main-photo {
      margin-left: 30px;
      ::v-deep img {
        height: 693px;
        width: 518px;
        object-fit: cover;
      }
    }
    @include md {
      .product-photo {  
        flex-direction: column;
        .small-photos {
          flex-direction: row;
           & img {
            margin-right: 8px;
            margin-bottom: 8px;
           }
        }
        .main-photo {
          margin-left: 0; 
        }
      }
    }
    @include sm {
      .slider {
        display: block;
        width: 375px;
        height: 617px
      }
      .slider::v-deep img {
        width: 375px;
        height: 617px;
        object-fit: cover;
      }
      .main-photo, .small-photos {
        display: none;
      }
    }
  }
</style>