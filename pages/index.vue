<template>
  <div class="cart">
    <vHeader/>
    <div class="main-content">
      <div class="product-photo">
        <ProductPhoto/>
      </div>
      <div class="oreder-product">
        <ProductOrder/>
      </div>
    </div>
    <div class="similar">
      <SimilarProducts/>
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/header.vue"
import ProductOrder from '@/components/productOrder.vue'
import ProductPhoto from '@/components/productPhoto.vue'
import SimilarProducts from '@/components/similarProducts.vue'

export default {
  name: 'index-page',
  components: {
    vHeader,
    ProductOrder,
    ProductPhoto,
    SimilarProducts,
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/scss/mixins';
  .cart {
    margin-bottom: 100px;
    .main-content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .oreder-product {
        margin-left: 60px;
      }
    }
    .similar {
      align-self: center;
    }
    @include xs {
      .main-content {
        flex-direction: column;
        .product-photo{
          align-self: center;
        }
        .oreder-product {
          margin-left: 17px;
          margin-right: 17px;
        }
      }
    }
  }
</style>
