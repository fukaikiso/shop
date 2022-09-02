<template>
  <div class="products">
    <veg-sidebar-cart></veg-sidebar-cart>
    <div class="container">
      <!-- 商品列表 -->
      <div class="items">
        <veg-product-card :items="items"></veg-product-card>
      </div>
      <!-- 更多 -->
      <div class="loadMore">
        <button @click="addMore(8)">更多</button>
      </div>
    </div>
  </div>
</template>

<script>
import VegProductCard from '@/components/VegProductCard.vue';
import VegSidebarCart from '@/components/VegSidebarCart.vue';
export default {
  components: { VegProductCard, VegSidebarCart },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getItems(items) {
      let url = this.$route.fullPath;
      this.axios.get(url).then((res) => {
        this.items = res.data;
      });
    },
    // 增加n条数据
    addMore(n) {
      let newItems = [];
      for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * n);
        this.items[random].pid += 10086;
        newItems.push(this.items[random]);
      }
      this.items = [...this.items, ...newItems];
    },
  },
  mounted() {
    this.getItems();
  },
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
