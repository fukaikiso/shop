<template>
  <div>
    <veg-sidebar-cart></veg-sidebar-cart>
    <div class="main">
      <div class="container">
        <div class="banner">
          <img
            src="/images/banner/banner-bg.jpg"
            alt="" />
          <div class="desc">
            <p>足不出户，吃到新鲜蔬菜！</p>
            <button @click="$router.push('/products')">立马买菜</button>
          </div>
        </div>
        <!-- 商品分类 -->
        <veg-product-header
          title="商品分类"
          circleColor="#59b828"
          :showArrow="false"></veg-product-header>
        <div class="category">
          <div
            @click="goToCategory(c.path)"
            @mouseenter="switchCategoryActive(i)"
            @mouseleave="categoryActive = -1"
            class="item"
            v-for="(c, i) in productCategories"
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
        <veg-product-floor
          title="新品上架"
          link="/products?sort=newItems"
          :items="newItems"></veg-product-floor>
        <veg-product-floor
          title="热销商品"
          link="/products?sort=hot"
          :items="hot"></veg-product-floor>
        <veg-product-floor
          title="推荐购买"
          link="/products?sort=recommend"
          :items="recommend"></veg-product-floor>
      </div>
    </div>
  </div>
</template>

<script>
import VegProductHeader from '@/components/VegProductHeader.vue';
import VegProductFloor from '@/components/VegProductFloor.vue';
import VegSidebarCart from '@/components/VegSidebarCart.vue';
export default {
  components: { VegProductHeader, VegProductFloor, VegSidebarCart },
  data() {
    return {
      categoryActive: -1,
      productCategories: [],
      newItems: [],
      hot: [],
      recommend: [],
    };
  },
  methods: {
    switchCategoryActive(i) {
      this.categoryActive = i;
    },
    goToCategory(path) {
      this.$router.push(path);
    },
    getCategory() {
      this.axios.get('/category').then((res) => {
        this.productCategories = res.data;
        // console.log(this.productCategories);
      });
    },
    getNewsItems() {
      this.axios.get('/products?sort=newItems').then((res) => {
        this.newItems = res.data;
      });
    },
    getHot() {
      this.axios.get('/products?sort=hot').then((res) => {
        this.hot = res.data;
      });
    },
    getRecommend() {
      this.axios.get('/products?sort=recommend').then((res) => {
        this.recommend = res.data;
      });
    },
  },
  mounted() {
    this.getCategory();
    this.getNewsItems();
    this.getHot();
    this.getRecommend();
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
        cursor: pointer;
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
