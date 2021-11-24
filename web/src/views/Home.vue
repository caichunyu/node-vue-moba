<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/856ed2a1d233b5d22e3ff410b1fb4602.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/b945919f9ab33873d25b06cf2e2e1169.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/c136017e579e534d3b12636c2b70a13a.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!--    end of swiper-->
    <div class="nav-icons bg-white mt-3 pt-3  text-center text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 " v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
<!--    end of nav icons-->
    <i class="iconfont icon-news fs-ssm" ></i>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/variables";

.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.154rem;
    background: map-get($colors, 'white');

    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
  }
}
</style>
