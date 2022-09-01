<template>
  <div id="app">
    <veg-header></veg-header>
    <veg-breadcrumb
      :pathList="$route.meta.pathList"
      v-if="$route.path !== '/'"></veg-breadcrumb>
    <router-view></router-view>
    <veg-footer></veg-footer>
  </div>
</template>

<script>
import VegBreadcrumb from './components/VegBreadcrumb.vue';
import VegFooter from './components/VegFooter.vue';
import VegHeader from './components/VegHeader.vue';
export default {
  components: { VegHeader, VegFooter, VegBreadcrumb },
};
</script>

<style lang="scss" scoped>
@import url('@/assets/css/normalize.css');
@import url('@/assets/css/common.css');
@import url('@/assets/css/config.css');
</style>
