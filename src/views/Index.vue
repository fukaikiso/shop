<template>
  <div>
    <veg-sidebar-cart-details></veg-sidebar-cart-details>
    <veg-sidebar-cart></veg-sidebar-cart>
    <veg-header></veg-header>
    <div class="main">
      <div class="container">
        <div class="banner">
          <img
            src="/images/banner/banner-bg.jpg"
            alt="" />
          <div class="desc">
            <p>足不出户，吃到新鲜蔬菜！</p>
            <button>立马买菜</button>
          </div>
        </div>
        <!-- 商品分类 -->
        <veg-product-header
          title="商品分类"
          circleColor="#59b828"></veg-product-header>
        <div class="category">
          <div
            @click="goToCategory(c.path)"
            @mouseenter="switchCategoryActive(i)"
            @mouseleave="categoryActive = -1"
            class="item"
            v-for="(c, i) in productCatagories"
            :key="c.cid">
            <img
              v-show="categoryActive == i"
              :src="c.activeIcon"
              alt="" />
            <img
              v-show="categoryActive != i"
              :src="c.icon"
              alt="" />
            <p>{{ c.title }}</p>
          </div>
        </div>
        <!-- 新品上架 -->
        <veg-product-floor title="新品上架"></veg-product-floor>
        <veg-product-floor title="热销商品"></veg-product-floor>
        <veg-product-floor title="推荐购买"></veg-product-floor>
      </div>
    </div>

    <veg-footer></veg-footer>
  </div>
</template>

<script>
import VegHeader from '@/components/VegHeader.vue';
import VegFooter from '@/components/VegFooter.vue';
import VegProductHeader from '@/components/VegProductHeader.vue';
import VegProductFloor from '@/components/VegProductFloor.vue';
import VegSidebarCart from '@/components/VegSidebarCart.vue';
import VegSidebarCartDetails from '@/components/VegSidebarCartDetails.vue';
export default {
  components: { VegHeader, VegFooter, VegProductHeader, VegProductFloor, VegSidebarCart, VegSidebarCartDetails },
  data() {
    return {
      categoryActive: -1,
      productCatagories: [
        {
          cid: 1,
          title: '蔬菜',
          icon: '/images/category/vegetable.png',
          activeIcon: '/images/category/vegetable-active.png',
          path: '/vegetable',
        },
        {
          cid: 2,
          title: '水果',
          icon: '/images/category/fruit.png',
          activeIcon: '/images/category/fruit-active.png',
          path: '/fruit',
        },
        {
          cid: 3,
          title: '海鲜',
          icon: '/images/category/fish.png',
          activeIcon: '/images/category/fish-active.png',
          path: '/fish',
        },
        {
          cid: 4,
          title: '肉禽',
          icon: '/images/category/meat.png',
          activeIcon: '/images/category/meat-active.png',
          path: '/meat',
        },
        {
          cid: 5,
          title: '调料',
          icon: '/images/category/seasoning.png',
          activeIcon: '/images/category/seasoning-active.png',
          path: '/seasoning',
        },
        {
          cid: 6,
          title: '米面',
          icon: '/images/category/rice.png',
          activeIcon: '/images/category/rice-active.png',
          path: '/rice',
        },
        {
          cid: 7,
          title: '酒水',
          icon: '/images/category/wine.png',
          activeIcon: '/images/category/wine-active.png',
          path: '/wine',
        },
      ],
    };
  },
  methods: {
    switchCategoryActive(i) {
      this.categoryActive = i;
    },
    goToCategory(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--theme-bg-color);
  padding-bottom: 40px;

  .banner {
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 350px;
    }
    .desc {
      position: absolute;
      top: 25%;
      left: 10%;
      p {
        font-weight: bold;
        font-size: 36px;
      }
      button {
        background-color: var(--theme-primary-color);
        color: #fff;
        padding: 10px 15px;
        border-radius: 5px;
        margin: 20px 0;
      }
    }
  }

  .category {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .item {
      display: flex;
      width: 200px;
      flex-direction: column;
      align-items: center;
      background-color: #fff;
      border-radius: 10px;
      margin: 10px;
      padding: 10px 20px;
      > img {
        height: 75px;
        width: 75px;
        margin: 10px;
      }
      > p {
        margin: 5px;
      }
    }
    .item:hover {
      cursor: pointer;
      p {
        color: var(--theme-primary-color);
      }
    }
  }
}
</style>
