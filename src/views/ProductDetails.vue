<template>
  <div class="product-details">
    <veg-header></veg-header>
    <veg-sidebar-cart></veg-sidebar-cart>
    <div class="main">
      <div class="container">
        <!-- 商品卡片 -->
        <div class="card">
          <div class="left">
            <div class="discount">-30%</div>
            <img
              src="/images/product-detail/01.jpg"
              alt="" />
          </div>
          <div class="right">
            <veg-favorite></veg-favorite>
            <div class="content">
              <h3>海南香蕉</h3>
              <p class="unit">1kg</p>
              <p class="price">￥{{ total }}</p>
              <veg-counter></veg-counter>
              <div class="desc">精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉</div>
            </div>
            <button class="buy">加入购物车</button>
          </div>
        </div>

        <div class="tab">
          <div class="tabbar">
            <span>评论</span>
            <span>详情</span>
            <span>售后</span>
          </div>
          <!-- 评论 -->
          <div class="review">评论</div>
          <!-- 详情 -->
          <div class="detials">精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉 精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉精选海南香蕉</div>
          <!-- 售后 -->
          <div class="service">售后</div>
        </div>
      </div>
    </div>
    <veg-footer></veg-footer>
  </div>
</template>

<script>
import VegHeader from '@/components/VegHeader.vue';
import VegFooter from '@/components/VegFooter.vue';
import VegFavorite from '@/components/VegFavorite.vue';
import VegSidebarCart from '@/components/VegSidebarCart.vue';
import VegCounter from '@/components/VegCounter.vue';
export default {
  components: { VegHeader, VegFooter, VegFavorite, VegSidebarCart, VegCounter },
  data() {
    return {
      count: 1,
      price: 12.4,
    };
  },
  computed: {
    total() {
      let result = this.count * this.price;
      result = result.toFixed(2);
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  .main {
    background-color: var(--theme-bg-color);
    .container {
      padding: 40px 0;
      .card {
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
  }
}
</style>
