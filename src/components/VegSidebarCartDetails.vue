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
      <div
        class="none"
        v-if="cartItems.length == 0">
        购物车空空如也
      </div>
      <div
        class="item"
        v-for="(c, i) in cartItems"
        :key="i">
        <div
          class="close"
          @click="deleteItem(i)">
          x
        </div>
        <div class="left">
          <img
            :src="c.img"
            alt="" />
          <veg-counter
            class="counter"
            :count="c.count"
            @chagne-count="changeCount"></veg-counter>
        </div>
        <div class="right">
          <div class="title">
            <h3>{{ c.title }}</h3>
            <span class="spec">{{ c.spec }}</span>
          </div>
          <div class="price">
            <span class="pre">￥{{ c.price | salePrice }}</span>
            <span class="now">￥{{ (c.price * (1 - c.discount)) | salePrice }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="footer">
      <div class="price">
        <h4>原价</h4>
        <p>￥{{ totalPrice | salePrice }}</p>
      </div>
      <div class="price">
        <h4>折扣</h4>
        <p>-￥{{ saveMoney | salePrice }}</p>
      </div>
      <div class="price">
        <h4>合计</h4>
        <p>￥{{ (totalPrice - saveMoney) | salePrice }}</p>
      </div>
      <router-link
        class="button"
        to="/checkout"
        >结算购物车</router-link
      >
    </div>
  </div>
</template>

<script>
import VegCounter from '@/components/VegCounter.vue';
export default {
  components: { VegCounter },
  props: ['isShowDetails'],
  data() {
    return {
      cartItems: [
        { cid: 1, title: '胡萝卜', spec: '1kg', price: 3, discount: 0.2, img: '/images/products/cart/01.png', count: 1 },
        { cid: 2, title: '水萝卜', spec: '1kg', price: 4, discount: 0.1, img: '/images/products/cart/02.png', count: 1 },
        { cid: 3, title: '西红柿', spec: '1kg', price: 5, discount: 0.4, img: '/images/products/cart/03.png', count: 1 },
      ],
    };
  },
  methods: {
    changeShow() {
      this.$parent.switchIsShowDetails();
    },
    deleteItem(i) {
      this.cartItems.splice(i, 1);
    },
    changeCount(event, i) {
      this.cartItems[i], (count = event);
    },
  },
  computed: {
    totalPrice() {
      let sum = 0;
      this.cartItems.forEach((i) => {
        sum += i.price * i.count;
      });
      return sum;
    },
    saveMoney() {
      let sum = 0;
      this.cartItems.forEach((i) => {
        sum += i.price * i.discount * i.count;
      });
      return sum;
    },
  },
  filters: {
    salePrice(value) {
      value = value.toFixed(2);
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-sidebar-cart-details.show::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.veg-sidebar-cart-details.show {
  right: 0;
  transition: right 1s;
  overflow: auto;

  .header {
    right: 0;
    transition: right 1s;
  }
  .footer {
    right: 0;
    transition: right 1s;
  }
}
.veg-sidebar-cart-details {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -300px;
  z-index: 20;
  background-color: #fff;
  width: 300px;
  box-shadow: 0 0 10px 0 #aaa;
  transition: right 1s;

  .header {
    display: flex;
    position: fixed;
    top: 0;
    right: -300px;
    height: 70px;
    width: 300px;
    padding: 0 20px;
    align-items: center;
    background-color: #3d3d3d;
    color: var(--theme-primary-color);
    user-select: none;
    font-weight: bold;
    box-sizing: border-box;
    z-index: 30;
    transition: right 1s;
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
    width: 300px;
    flex-direction: column;
    .none {
      text-align: center;
      padding: 20px;
    }
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
            font-size: 16px;
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
  .main::before {
    content: '';
    height: 70px;
  }
  .main::after {
    content: '';
    height: 200px;
  }

  .footer {
    position: fixed;
    bottom: 0;
    right: -300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    padding: 0 25px;
    height: 200px;
    background-color: var(--theme-bg-color);
    transition: right 1s;
    .price {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
    }
    .button {
      background-color: var(--theme-primary-color);
      color: #fff;
      padding: 10px 0;
      margin: 20px 10px 10px;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
    }
    .button:active {
      background-color: var(--theme-click-color);
    }
  }
}
</style>
