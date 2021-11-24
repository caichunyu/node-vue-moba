<template>
  <div class="card p-3 bg-white mt-3">
    <div class="card-header d-flex pb-3" >
      <i class="iconfont icon-news fs-ssm"></i>
      <div class="fs-xl flex-1 px-2">{{ title }}</div>
      <i class="iconfont fs-ssm" :class="`icon-${icon}`"></i>
    </div>
    <div class="card-body pt-3">
<slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {type: String, required: true},
    icon: {type: String, required: true}
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.card{
  .card-header{
    border-bottom: 1px solid $border-color;
  }
  border-bottom: 1px solid $border-color;
}
</style>
