<template>
  <div
    class="veg-whish-list"
    :class="{ show: isShowDetails }">
    <h3>收藏列表</h3>
    <!-- 购物项 -->
    <div class="main">
      <div
        class="none"
        v-if="cartItems.length == 0">
        您还没有收藏商品
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
          <button class="buy">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

  filters: {
    salePrice(value) {
      value = value.toFixed(2);
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-whish-list {
  background-color: #fff;
  padding: 30px 200px 60px;

  > h3 {
    font-size: 24px;
    padding: 30px;
    text-align: center;
  }

  .main {
    display: flex;
    flex-direction: column;
    .none {
      text-align: center;
    }
    .item:first-child {
      border-top: 1px solid #ddd;
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
        flex: 2;
        img {
          width: 60%;
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
        flex: 5;
        padding: 0 30px;
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
            margin-right: 20px;
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
</style>
