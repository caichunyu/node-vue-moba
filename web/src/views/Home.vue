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
    <m-list-card icon="news" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div"
                     :to="`/articles/${news._id}`"
            class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="px-2">[{{ news.categoryName }}]</span>
          <span>|</span>
          <span class="flex-1 px-2 text-ellipsis">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="card-hero" title="英雄列表" :categories="heroesCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
        <router-link tag="div" :to="`/heroes/${hero._id}`"
            class="py-2 p-2 text-center " style="width: 20%" v-for="(hero,i) in category.heroList" :key="i">
             <img class="w-100" :src="hero.avatar" alt>
             <div>{{hero.name}}</div>
         </router-link>
        </div>
      </template>
    </m-list-card>

    <m-list-card icon="news" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
          <span class="px-2">[{{ news.categoryName }}]</span>
          <span>|</span>
          <span class="flex-1 px-2 text-ellipsis">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </div>
      </template>
    </m-list-card>

  </div>
</template>

<script>
// @ is an alias to /src
import dayjs from 'dayjs'

export default {
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  name: 'Home',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [],
      heroesCats: [],
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroesCats() {
      const res = await this.$http.get('heroes/list')
      this.heroesCats = res.data
    },
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroesCats()
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
