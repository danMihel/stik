<template>
  <div class="header">
    <div class="logo">
    <picture>
      <source :srcset="'/icons/logo-small.png'" media="(max-width: 750px)">
      <img :src="'/icons/logo.png'">
    </picture>
    </div>
    <div class="icon search">
      <img :src="'/icons/search.png'">
    </div>
    <div class="icon stroke">
      <img :src="'/icons/stroke.png'"/>
    </div>
    <div class="icon user">
      <img :src="'/icons/user.png'"/>
    </div>
    <div class="icon basket">
      <img :src="'/icons/basket.png'"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'headerComponent'
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/index.scss';

  .header {
    height: 86px;
    padding: 0 50px;
    display: grid;
    grid-template-columns: 1fr 20px 20px 20px 20px;
    gap: 10px;
    align-items: center;
    justify-items: center;
    .icon {
      cursor: pointer;
    }
  }
  @include sm {
    .header {
      height: 50px;
      padding: 0 19px;
      grid-template-columns: 20px 20px 1fr 20px;
      .user {
        grid-row: 1;
        grid-column: 1;
      }
      .search {
        grid-row: 1;
        grid-column: 2;
      }
      .logo {
        grid-row: 1;
        grid-column: 3;
      }
      .stroke {
        display: none;
      }
      .basket {
        grid-row: 1;
        grid-column: 4;
      }
    }
  }
</style>
