<template>
  <div class="veg-breadcrumb">
    <div class="container">
      <div
        class="item"
        v-for="(p, i) in pathList"
        :key="p.pid">
        <router-link :to="p.href">{{ p.title }}</router-link>
        <span v-show="i < pathList.length - 1">/</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pathList'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.veg-breadcrumb {
  background-color: #f6f6f6;
  border-bottom: 1px solid #ddd;
  height: 60px;
  box-shadow: 0 0 5px #ccc;
  line-height: 60px;
  // 设置z-index防止阴影被遮挡
  z-index: 1;
  .container {
    display: flex;
    span {
      padding: 10px;
    }
  }
}
</style>
