<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 border-bottom" >
      <div class="iconfont icon-fenxiang text-blue"></div>
      <strong class="flex-1 text-blue px-2">{{ model.title }}</strong>
      <div class="text-grey fs-xs">
        20190125
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg "></div>
  </div>
</template>

<script>
export default {
  // props: {
  //   id: {type: String, required: true},
  // },
  name: "Article",
  data() {
    return {
      model: null
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`article/${this.$route.params.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  .body {
    img {
      width: 100%;
      height: auto;
    }

    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
