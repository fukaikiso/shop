<template>
  <div class="products">
    <div class="container">
      <!-- 商品列表 -->
      <div class="items">
        <veg-product-card></veg-product-card>
      </div>
      <!-- 更多 -->
      <div class="loadMore">
        <button>更多</button>
      </div>
    </div>
  </div>
</template>

<script>
import VegProductCard from '@/components/VegProductCard.vue';
export default {
  components: { VegProductCard },
};
</script>

<style lang="scss" scoped>
.products {
  background-color: var(--theme-bg-color);
  padding: 30px 0;

  .container {
    display: flex;
    flex-direction: column;
    .items {
      .item {
        margin: 20px 0;
      }
    }
    .loadMore {
      display: flex;
      justify-content: center;
      padding: 20px;
      > button {
        padding: 15px 30px;
        letter-spacing: 5px;
        background-color: var(--theme-primary-color);
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
      }
      > button:active {
        background-color: var(--theme-click-color);
      }
    }
  }
}
</style>
