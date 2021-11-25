<template>
  <m-card :icon="icon" :title="title">
    <div class="nav jc-between">
      <div class="nav-item" :class="{active:active1 === i}"
           v-for="(category,i) in categories" :key="i"
      @click="$refs.list.$swiper.slideTo(i)">
        <!--  ：class中前面active表示css类名，后面的是高亮的索引      active 3.11 14:10s-->
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <div class="pt-3">
      <swiper ref="list" :options="{autoHeight:true}"
              @slide-change="() => active1 = $refs.list.$swiper.realIndex">
        <swiper-slide v-for="(category,i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>

  </m-card>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true},
    categories: {type: Array, required: true}
  },
  data() {
    return {
      active1: 0,

    }
  },
  created() {
    console.log(this.$refs)
  }
}
</script>

<style scoped>

</style>
