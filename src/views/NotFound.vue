<template>
  <div class="not-found">
    <veg-header></veg-header>
    <div class="container">
      <h1>404 NOT FOUND</h1>
    </div>
    <veg-footer class="footer"></veg-footer>
  </div>
</template>

<script>
import VegHeader from '@/components/VegHeader.vue';
import VegFooter from '@/components/VegFooter.vue';
export default {
  components: { VegHeader, VegFooter },
};
</script>

<style lang="scss" scoped>
.not-found {
  .container {
    h1 {
      position: fixed;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  // 样式穿透
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
