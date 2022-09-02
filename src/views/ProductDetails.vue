<template>
  <div class="product-details">
    <veg-sidebar-cart></veg-sidebar-cart>
    <!-- 商品详情 -->
    <div class="main">
      <!-- 商品卡片 -->
      <div class="card">
        <div class="left">
          <div class="discount">-30%</div>
          <img
            src="/images/product-detail/01.jpg"
            alt="" />
        </div>
        <div class="right">
          <veg-favorite :item="detailItem"></veg-favorite>
          <div class="content">
            <h3>海南香蕉</h3>
            <p class="unit">1kg</p>
            <p class="price">￥{{ total }}</p>
            <veg-counter :count="count"></veg-counter>
            <div class="desc">精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉</div>
          </div>
          <button class="buy">加入购物车</button>
        </div>
      </div>
    </div>
    <!-- 选项卡 -->
    <div class="tab">
      <div class="container">
        <div class="tabbar">
          <span
            @click="switchTab(0)"
            :class="{ selected: showTab == 0 }"
            >评论</span
          >
          <span
            @click="switchTab(1)"
            :class="{ selected: showTab == 1 }"
            >详情</span
          >
          <span
            @click="switchTab(2)"
            :class="{ selected: showTab == 2 }"
            >售后</span
          >
        </div>
        <!-- 评论 -->
        <div
          class="review"
          v-show="showTab == 0">
          <div class="comment">
            <img
              src="/images/review/01.jpg"
              alt="" />
            <div class="details">
              <h4>奇奇怪怪</h4>
              <p class="time">2022年8月3日</p>
              <p>这个贼好吃！</p>
            </div>
            <div class="rate">⭐⭐⭐⭐</div>
          </div>
          <div class="comment">
            <img
              src="/images/review/01.jpg"
              alt="" />
            <div class="details">
              <h4>奇奇怪怪</h4>
              <p class="time">2022年8月3日</p>
              <p>这个贼好吃！</p>
            </div>
            <div class="rate">⭐⭐⭐⭐</div>
          </div>
          <div class="comment">
            <img
              src="/images/review/01.jpg"
              alt="" />
            <div class="details">
              <h4>奇奇怪怪</h4>
              <p class="time">2022年8月3日</p>
              <p>这个贼好吃！</p>
            </div>
            <div class="rate">⭐⭐⭐⭐</div>
          </div>
        </div>
        <!-- 详情 -->
        <div
          class="details"
          v-show="showTab == 1">
          精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉 精选海南香蕉精选海南香蕉精选海南香蕉精选
        </div>
        <!-- 售后 -->
        <div
          class="service"
          v-show="showTab == 2">
          售后
        </div>
      </div>
    </div>
    <!-- 为您推荐 -->
    <div class="recommand">
      <veg-product-floor
        class="container"
        title="为您推荐"
        link="/products?sort=recommand"
        :items="recommend"></veg-product-floor>
    </div>
  </div>
</template>

<script>
import VegFavorite from '@/components/VegFavorite.vue';
import VegSidebarCart from '@/components/VegSidebarCart.vue';
import VegCounter from '@/components/VegCounter.vue';
import VegProductFloor from '@/components/VegProductFloor.vue';
import { mapState } from 'vuex';
export default {
  components: { VegFavorite, VegSidebarCart, VegCounter, VegProductFloor },
  data() {
    return {
      count: 1,
      price: 12.4,
      showTab: 0,
      recommend: [],
    };
  },
  computed: {
    ...mapState(['detailItem']),
    total() {
      let result = this.count * this.price;
      result = result.toFixed(2);
      return result;
    },
  },
  methods: {
    switchTab(index) {
      this.showTab = index;
    },
    getRecommend() {
      this.axios.get('/products?sort=recommend').then((res) => {
        this.recommend = res.data;
      });
    },
  },
  mounted() {
    this.getRecommend();
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  display: flex;
  flex-direction: column;
  .main {
    background-color: var(--theme-bg-color);
    padding: 60px 0;
    .card {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      background-color: #fff;
      height: 400px;
      border-radius: 10px;
      box-shadow: 0 0 5px 1px #ddd;
      overflow: hidden;
      .left {
        display: flex;
        flex: 1;
        position: relative;
        border-right: 1px solid #ddd;
        .discount {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 5px 10px;
          color: #fff;
          background-color: var(--theme-warning-color);
        }
        img {
          width: 100%;
          height: 100%;
          user-select: none;
        }
      }
      .right {
        flex: 1;
        position: relative;
        .content {
          display: flex;
          flex-direction: column;
          height: 60%;
          margin: 40px 60px 0;
          > * {
            margin: 8px 0;
          }
          h3 {
            font-size: 30px;
          }
          .unit {
            color: #aaa;
          }
          .price {
            color: var(--theme-primary-color);
            font-weight: bold;
            font-size: 24px;
          }
        }
        .buy {
          position: absolute;
          bottom: 30px;
          right: 50px;
          background-color: var(--theme-primary-color);
          padding: 10px 15px;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
        }
        .buy:active {
          background-color: var(--theme-click-color);
        }
      }
    }
  }
  .tab {
    background-color: #fff;
    padding: 50px 0;
    .container {
      .tabbar {
        display: flex;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
        height: 40px;
        > span {
          letter-spacing: 4px;
          width: 80px;
          cursor: pointer;
          font-size: 18px;
          text-align: center;
        }
        > span:hover {
          color: var(--theme-primary-color);
        }
        > span.selected {
          color: var(--theme-primary-color);
          border-bottom: 3px solid var(--theme-primary-color);
        }
      }
      .review {
        margin: 30px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        .comment {
          display: flex;
          margin: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
          img {
            width: 100px;
            height: 100px;
          }
          .details {
            flex: 1;
            margin: 0 10px;
            .time {
              font-size: 14px;
              color: #aaa;
              margin: 5px 0 10px;
            }
          }
        }
        .comment:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      }
      > .details,
      > .service {
        padding: 20px;
        line-height: 24px;
      }
    }
  }
  .recommand {
    background-color: var(--theme-bg-color);
    padding: 40px 0 60px;
  }
}
</style>
