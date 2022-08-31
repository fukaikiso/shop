<template>
  <div class="about">
    <veg-header></veg-header>
    <veg-breadcrumb :path-list="pathList"></veg-breadcrumb>
  </div>
</template>

<script>
import VegHeader from '@/components/VegHeader.vue';
import VegBreadcrumb from '@/components/VegBreadcrumb.vue';
export default {
  components: { VegHeader, VegBreadcrumb },
  data() {
    return {
      pathList: [
        { pid: 1, title: '首页', href: '/' },
        { pid: 2, title: '关于我们', href: '/about' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.about-us {
}
</style>
