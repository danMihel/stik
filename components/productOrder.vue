<template>
  <div class="product-oreder-wraper">
    <div class="product-oreder-photo">
      <ProductPhoto :activeColor="activeColor" :product="product"/>
    </div>
    <div class="product-order">
      <div class="title-group">
        <div>
          <h1 class="title"> {{ product.title }}, {{ activeProduct?.color }} </h1>
          <span class="price"> {{ product.price }} </span>
        </div> 
        <div class="stroke">
          <img :src="'/icons/stroke.png'"/>
        </div>
      </div>
      <div class="size">
        <span>Размеры</span>
        <div class="size-btn-group" v-if="activeProduct">
          <div v-for="item in activeProduct?.sizes" :key="item.size">
            <div v-if="(item.quantity <= 10 && item.quantity !==0)">
              <div class="size-btn"> {{ item.size }} </div>
              <div class="caption">мало</div>
            </div>
            <div v-if="item.quantity > 10">
              <div class="size-btn"> {{ item.size }} </div>
            </div>
            <div v-if="(item.quantity === 0)">
              <div class="size-btn subscription"> {{ item.size }} </div>
              <div class="caption subscription">подписка</div>
            </div>
          </div>
        </div>
      </div>
      <div class="color">
        <span>Цвет: {{ activeProduct?.color }}</span>
        <div class="color-btn-group">
          <div v-for="item in product.details" :key="item.color">
            <div class="color-btn-wraper" v-bind:class="{ active: activeColor === item.color}" @click="setActiveColor(item.color)">
              <div class="color-btn" v-bind:style="{ background: item.colorCode }"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="add-btn-group">
        <div class="add-btn">
          <div class="add-btn-text">добавить в корзину</div>
        </div>
        <div class="stroke-bn">
          <img src="/icons/stroke.png" alt="">
        </div>
      </div>
      <div class="accordion">
        <div class="accordion-item">
          <DropDown :data="product.description"/>
        </div>
        <div class="accordion-item">
          <DropDown :data="product.compound"/>        
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import DropDown from '@/components/common/dropDown'
import ProductPhoto from '@/components/productPhoto.vue'
import data from '@/data.json'

export default {
  name: 'producOrderComponent',
  components: {
    DropDown,
    ProductPhoto
  },
  data() {
    return {
      activeColor: null,
      product: data.product
    }
  },
  computed: {
    activeProduct() {
      return this.product.details.filter(item => item.color === this.activeColor)[0]
    }
  },
  methods: {
    setActiveColor(value) {
      return this.activeColor = value
    }
  },
  mounted () {
    this.setActiveColor(this.product.details[0].color)
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/index.scss';

  .product-oreder-wraper {
    display: flex;
    flex-direction: row;
    .product-order {
      margin-left: 40px;
      .title-group   {
        display: flex;
        flex-direction: column;
        color: $black;
        .stroke {
          display: none;
        }
        .title {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          text-transform: uppercase;
        }
        .price {
          margin-top: 8px;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
        }
      }
      .size {
        margin-top: 31px;
        color: $gray;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        .size-btn-group {
          display: flex;
          margin-top: 12px;
          .size-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            border: 1px solid $black;
            color: $black;
            cursor: pointer;
            width: 65px;
            height: 31px;
            font-weight: 400;
            font-size: 10px;
            line-height: 14px;
            text-transform: uppercase;
          }
          .caption {
            width: 65px;
            text-align: center;
            color: $semi-light-grey;
          }
          .subscription {
            color: $ligth-grey;
            border-color: $ligth-grey;
          }
        }
      }
      .color {
        margin-top: 36px;
        color: $gray;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        .color-btn-group {
          display: flex;
          margin-top: 6px;
          .active {
            border-bottom: 1px solid $gray;
          }
          .color-btn-wraper {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding-bottom: 3px;
            margin-right: 16px;
          }
          .color-btn {
            width: 28px;
            height: 27px;
            border: 1px solid $ligth-grey;
          }
        }
      }
      .add-btn-group {
        display: flex;
        margin-top: 36px;
        .add-btn {
          background-color: $black;
          color: $white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          width: 306px;
          height: 46px;
          .add-btn-text {
            text-transform: uppercase;
            font-weight: 400;
            font-size: 11px;
            line-height: 15px;
          }
        }
        .stroke-bn {
          border: 1px solid $black;
          margin-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          cursor: pointer;
          img {
            width: 24px;
            height: 24px;
          }
        }
      }
      .accordion {
        margin-top: 40px;
        .accordion-item {
          border-top: 1px solid $gray-border;
          &:last-child {
            border-bottom: 1px solid $gray-border;
          }
        }
      }
    }
    @include sm {
      flex-direction: column;
      .product-oreder-photo {
        align-self: center;
      }
      .product-order {
        margin: 0 20px;
        .title-group {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .stroke {
            display: block;
            margin-top: 5px;
            img {
              height: 17px;
            }
          }
        }
        .add-btn-group {
          display: none;
        }
      }
      @include xs {
        width: 100%;
      }
    }
  }
</style>