<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <!--
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
       -->

      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    const that = this

    /* eslint-disable */
    new Swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination"
      },

      loop: this.loop,
      
      paginationClickable: true,

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,

      on: {
        slideChangeTransitionEnd: function () {
          that.$emit('change', this.realIndex)
        },
      },
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 342px;
  height: 214px;
  background: green;
  border-radius: 10px;
}
.swiper-pagination-bullet {
  background: #fff;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #f75d79;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
</style>
