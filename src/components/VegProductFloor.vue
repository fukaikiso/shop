<template>
  <div class="veg-product-floor">
    <veg-product-header :title="title"></veg-product-header>
    <veg-product-card></veg-product-card>
  </div>
</template>

<script>
import VegProductCard from './VegProductCard.vue';
import VegProductHeader from './VegProductHeader.vue';
export default {
  props: ['title'],
  components: { VegProductHeader, VegProductCard },
};
</script>

<style lang="scss" scoped>
.veg-product-floor {
  overflow: hidden;
}
</style>
