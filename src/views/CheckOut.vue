<template>
  <div class="checkout">
    <div class="container">
      <!-- 左侧购物车 -->
      <div class="left">
        <div
          class="cart"
          :class="{ show: isShowDetails }">
          <div class="header">
            <img
              src="@/assets/images/sidebar/shopping.png"
              alt="" />
            <span class="title">购物车</span>
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
              </div>
              <div class="right">
                <div class="title">
                  <h3>{{ c.title }}</h3>
                  <span class="spec">{{ c.spec }}</span>
                  <div class="price">
                    <span class="pre">￥{{ c.price | salePrice }}</span>
                    <span class="now">￥{{ (c.price * (1 - c.discount)) | salePrice }}</span>
                  </div>
                </div>
                <veg-counter
                  class="counter"
                  :count="c.count"
                  @chagne-count="changeCount"></veg-counter>
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
          </div>
        </div>
      </div>

      <!-- 右侧用户信息 -->
      <div class="right">
        <!-- 收货信息 -->
        <div class="info">
          <h4>收件信息</h4>
          <div class="user-info">
            <div class="item">
              <p>收件人</p>
              <input type="text" />
            </div>
            <div class="item">
              <p>地址</p>
              <input type="text" />
            </div>
            <div class="item">
              <p>手机</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <!-- 支付信息 -->
        <div class="info">
          <h4>支付信息</h4>
          <!-- 支付方式 -->
          <div class="payment-info">
            <!-- 总价 -->
            <div class="price">
              <span>合计：</span>
              <span>￥{{ (totalPrice - saveMoney) | salePrice }}</span>
            </div>
            <!-- 选择支付方式 -->
            <div class="select-payment">
              <div class="item">
                <input
                  type="radio"
                  value="1"
                  name="payment" />
                <span>支付宝</span>
              </div>
              <div class="item">
                <input
                  type="radio"
                  value="1"
                  name="payment" />
                <span>微信</span>
              </div>
              <div class="item">
                <input
                  type="radio"
                  value="1"
                  name="payment" />
                <span>银行卡</span>
              </div>
            </div>
            <img
              src="../assets/images/payment/01.png"
              alt="" />
            <!-- 支付按钮 -->
            <div class="btn">
              <button
                class="submit"
                @click="showInfo">
                立即支付
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VegSidebarCartDetails from '@/components/VegSidebarCartDetails.vue';
import VegCounter from '@/components/VegCounter.vue';

export default {
  components: { VegSidebarCartDetails, VegCounter },
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
    showInfo() {
      window.alert('支付成功，谢谢惠顾！');
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
.checkout {
  background-color: var(--theme-bg-color);
  padding: 40px 0;

  .container {
    display: flex;
    justify-content: space-evenly;
    .left {
      width: 40%;
      .cart {
        background-color: #fff;
        box-shadow: 0 0 10px 0 #aaa;
        .header {
          display: flex;
          padding: 0 20px;
          align-items: center;
          background-color: #3d3d3d;
          height: 60px;
          color: var(--theme-primary-color);
          user-select: none;
          font-weight: bold;
          box-sizing: border-box;
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
          .none {
            text-align: center;
            padding: 40px;
          }
          .item {
            display: flex;
            position: relative;
            padding: 30px 0;
            height: 200px;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;

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
                .price {
                  display: flex;
                  margin-top: 10px;
                  .pre {
                    color: #aaa;
                    text-decoration: line-through;
                    width: 50%;
                  }
                }
              }
            }
          }
        }

        .footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 25px;
          height: 150px;
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
    }

    .right {
      .info {
        width: 500px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 #aaa;
        margin-bottom: 30px;
        > h4 {
          padding: 20px 30px;
          background-color: #3d3d3d;
          color: var(--theme-primary-color);
        }
        .user-info {
          padding: 20px 30px 30px;
          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            p {
              width: 60px;
              text-align: center;
            }

            input {
              width: 70%;
              border: 1px solid #aaa;
              padding: 5px;
              margin-left: 20px;
            }
          }
        }
        .payment-info {
          padding: 30px;
          .price {
            font-size: 22px;
            color: var(--theme-danger-color);
            font-weight: bold;
            margin-bottom: 20px;
          }
          .select-payment {
            display: flex;
            .item {
              margin-right: 20px;
              margin-bottom: 20px;
              span {
                padding: 5px;
              }
            }
          }
        }
        .btn {
          display: flex;
          justify-content: center;
          .submit {
            color: #fff;
            letter-spacing: 3px;
            background-color: var(--theme-primary-color);
            padding: 15px 30px;
            border-radius: 5px;
            margin: 20px 0 10px;
            text-align: center;
            cursor: pointer;
          }
          .submit:active {
            background-color: var(--theme-click-color);
          }
        }
      }
    }
  }
}
</style>
