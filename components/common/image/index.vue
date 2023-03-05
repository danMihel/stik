<template>
  <picture>
    <source :srcset="data?.smallImg" media="(max-width: 750px)">
    <img :src="data?.bigImg">
  </picture>
</template>
<script>

export default {
  name: 'image-component',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    object-fit: cover;
  }
</style>