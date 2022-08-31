<template>
  <div
    class="veg-sidebar-cart-details"
    :class="{ show: isShowDetails }">
    <div class="header">
      <img
        src="@/assets/images/sidebar/shopping.png"
        alt="" />
      <span class="title">购物车</span>
      <span
        class="close"
        @click="changeShow"
        >x</span
      >
    </div>
    <!-- 购物项 -->
    <div class="main">
      <div class="item">
        <div class="close">x</div>
        <div class="left">
          <img
            src="../assets/images/products/cart/01.png"
            alt="" />
          <veg-counter class="counter"></veg-counter>
        </div>
        <div class="right">
          <div class="title">
            <h3>胡萝卜</h3>
            <span class="spec">1kg</span>
          </div>
          <div class="price">
            <span class="pre">￥12.00</span>
            <span class="now">￥10.00</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="footer">
      <div class="price">
        <h4>原价</h4>
        <p>￥24.00</p>
      </div>
      <div class="price">
        <h4>节省</h4>
        <p>-￥12.00</p>
      </div>
      <div class="price">
        <h4>总价</h4>
        <p>￥12.00</p>
      </div>
      <button>结算购物车</button>
    </div>
  </div>
</template>

<script>
import VegCounter from './VegCounter.vue';
export default {
  components: { VegCounter },
  props: ['isShowDetails'],
  data() {
    return {};
  },
  methods: {
    changeShow() {
      this.$parent.switchIsShowDetails();
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-sidebar-cart-details.show {
  right: 0;
  transition: right 1s;
}
.veg-sidebar-cart-details {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -300px;
  z-index: 10;
  background-color: #fff;
  width: 300px;
  box-shadow: 0 0 10px 0 #aaa;
  transition: right 1s;

  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #3d3d3d;
    color: var(--theme-primary-color);
    user-select: none;
    font-weight: bold;
    img {
      width: 26px;
    }
    .title {
      flex: 1;
      padding: 0 10px;
    }
    .close {
      cursor: pointer;
      font-size: 24px;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      position: relative;
      padding: 20px 0;
      border-bottom: 1px solid #ddd;
      .close {
        position: absolute;
        top: 10px;
        right: 15px;
        color: var(--theme-danger-color);
        cursor: pointer;
        font-size: 20px;
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        img {
          width: 80%;
        }
        .counter {
          width: 80px;
          height: 24px;
          line-height: 24px;
          margin: 10px 0 0;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        .title {
          height: 60%;
          h3 {
            margin-bottom: 10px;
          }
        }
        .price {
          display: flex;
          .pre {
            color: #aaa;
            text-decoration: line-through;
            width: 50%;
          }
        }
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 25px;
    background-color: var(--theme-bg-color);
    .price {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
    }
    button {
      background-color: var(--theme-primary-color);
      color: #fff;
      padding: 10px 0;
      margin: 20px 10px 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    button:active {
      background-color: var(--theme-click-color);
    }
  }
}
</style>
