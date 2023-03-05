<template>
  <div class="drop-down">
    <div class="drop-down-btn" @click="show = !show">
      <div>
        {{ data.title }}
      </div>
        <img class="plus" :class="{ rotate: show }" src="/plus.png" alt="">
    </div>
    <Transition name="dropdown"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition">
      <p class="drop-down-text" v-if="show" v-html="data.text"></p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown-component',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    startTransition (el) {
      el.style.height = `${el.scrollHeight}px`
    },
    endTransition (el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.drop-down {
  .drop-down-btn {
    display: flex;
    justify-content: space-between;
    padding: 14px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    color: $ligth-black;
  }
  .drop-down-text {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: $gray;
  }
  .plus {
    margin-right: 12px;
    transition: all .3s ease;
  }
  .rotate{
    transform: rotate(45deg);
  }
  
  .rotation-enter-active {
    transition: all .3s ease;
  }
  .rotation-leave-active {
    transition: all .3s ease;
  }
  .rotation-enter, .rotation-leave-to {
    transform: rotate(45deg);
  }
  .dropdown-enter-active, .dropdown-leave-active {
    will-change: height;
    overflow: hidden;
    transition: height 0.5s ease;
  }
  .dropdown-enter, .dropdown-leave-to {
    height: 0 !important;
    margin: 0;
    overflow: hidden;
  }
}
</style>
