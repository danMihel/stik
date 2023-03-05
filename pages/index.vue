<template>
  <div class="cart">
    <HeaderComponent/>
    <div class="main-content">
      <div class="product-photo">
        <ProductPhotoComponent/>
      </div>
      <div class="oreder-product">
        <ProducOrderComponent/>
      </div>
    </div>
    <div class="similar">
      <SimilarProductsComponent/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/headerComponent.vue"
import ProducOrderComponent from '@/components/producOrderComponent.vue'
import ProductPhotoComponent from '@/components/productPhotoComponent.vue'
import SimilarProductsComponent from '@/components/similarProductsComponent.vue'

export default {
  name: 'index-page',
  components: {
    HeaderComponent,
    ProducOrderComponent,
    ProductPhotoComponent,
    SimilarProductsComponent,
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
