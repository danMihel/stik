<template>
  <div class="similar-products">
    <span class="title">похожие товары</span>
    <div class="scroll">
      <div class="similar-products-wraper">
        <div class="similar-products-card" v-for="(item, index) in similarProducts" :key="index">
          <ImageComponent class="photo" :data="item.photo"/>
          <p class="card-title">{{ item.title }}</p>
          <div class="card-price">
            <span>{{ item.price }}</span>
            <span class="old-price">{{ item?.oldPrice }}</span>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from '@/components/common/image'

import { mapGetters } from 'vuex'
  export default {
    name: 'similar-products-component',
    components: {
      ImageComponent
    },
    computed: {
      ...mapGetters({
        similarProducts: 'getSimilarProducts'
      })
    },
    mounted() {
      console.log(this.similarProducts)
    }
  }
</script>

<style lang="scss" scoped>
@import 'assets/scss/index.scss';
  
  .similar-products {
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 10px;
    max-width: fit-content;
    margin: 40px auto;
    padding-left: 40px;
    .title {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $ligth-black;
      text-transform: uppercase;
    }
    .similar-products-wraper {      
      margin-top: 30px;
      display: flex;
      flex-direction: row;
      margin-bottom: 14px;
      .similar-products-card {
        margin-right: 8px;
      }
      .card-title {
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        text-transform: lowercase;
        color: $ligth-black;
      }
      .card-price {
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        color: $ligth-black;
        text-transform: uppercase;
      }
      .old-price {
        margin-left: 10px;
        color: $semi-light-grey;
        text-decoration-line: line-through;
        text-transform: uppercase;
      }
      .photo{
        width: calc(100%/4);
      }
    }
  }
  .scroll {
    overflow-x: auto;
  }
  .scroll::-webkit-scrollbar{
    height: 7px;
    background: $gray-border;
  }
  .scroll::-webkit-scrollbar-thumb{
    width: 14px;
    background: $ligth-grey;
  }
  @include md {
    .similar-products {
      margin: 40px 17px;
      padding-left: 0;
    }
  }
   @include sm {
    .scroll::-webkit-scrollbar {
      display: none;
    }
   }
</style>