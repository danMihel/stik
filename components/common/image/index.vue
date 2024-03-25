<template>
  <picture>
    <source :srcset="data.smallImg" media="(max-width: 750px)">
    <img :src="data.bigImg">
  </picture>
</template>

<script>
export default {
  name: 'image-component',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/your-styles";
img {
  object-fit: cover;
}
</style>
