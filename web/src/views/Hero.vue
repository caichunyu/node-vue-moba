<template>
  <div class="page-hero">
    <div class="topbar bg-black py-2 px-2 d-flex ai-center text-white">
      <img src="../assets/logo.png" height="30">
      <div class="px-1 flex-1">
        <span class=" ">王者荣耀</span>
        <span class=" ml-2">攻略站</span>
      </div>
      <router-link to="/" tag="div" class="">更多英雄 &gt;</router-link>
    </div>
    <div class="top d-flex flex-column jc-end" :style="{'background-image': `url(${model.banner})`} ">
      <div class="info text-white p-2 ">
        <div>{{ model.title }}</div>
        <h2>{{ model.name }}</h2>
        <div>{{ model.categories.map(v => v.name).join('/') }}</div>
        <span>难度</span>
        <span class="bage bg-primary">{{ model.scores.difficult }}</span>
        <span>技能</span>
        <span class="bage bg-info">{{ model.scores.skills }}</span>
        <span>攻击</span>
        <span class="bage bg-danger">{{ model.scores.attack }}</span>
        <span>生存</span>
        <span class="bage bg-dark">{{ model.scores.survive }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {required: true},
  },
  name: "Hero",
  data() {
    return {
      model: {
        banner: '',
        categories: [],
        scores: {}
      }
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    console.log(this.id)
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
}
</style>
