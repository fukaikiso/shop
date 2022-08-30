<template>
  <div class="veg-product-card">
    <div
      class="item"
      @click="$router.push('/product-details')">
      <div class="sale">-10%</div>
      <!-- <div class="favorite"></div> -->
      <veg-favorite></veg-favorite>
      <img
        src="/images/products/01.png"
        alt="" />
      <h4>上海青</h4>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>查看详情</button>
      </div>
    </div>
    <div
      class="item"
      @click="$router.push('/product-details')">
      <div class="sale">-10%</div>
      <!-- <div class="favorite"></div> -->
      <veg-favorite></veg-favorite>
      <img
        src="/images/products/01.png"
        alt="" />
      <h4>上海青</h4>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>查看详情</button>
      </div>
    </div>
    <div
      class="item"
      @click="$router.push('/product-details')">
      <div class="sale">-10%</div>
      <!-- <div class="favorite"></div> -->
      <veg-favorite></veg-favorite>
      <img
        src="/images/products/01.png"
        alt="" />
      <h4>上海青</h4>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>查看详情</button>
      </div>
    </div>
    <div
      class="item"
      @click="$router.push('/product-details')">
      <div class="sale">-10%</div>
      <!-- <div class="favorite"></div> -->
      <veg-favorite></veg-favorite>
      <img
        src="/images/products/01.png"
        alt="" />
      <h4>上海青</h4>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>查看详情</button>
      </div>
    </div>
  </div>
</template>

<script>
import VegFavorite from './VegFavorite.vue';
export default {
  components: { VegFavorite },
};
</script>

<style lang="scss" scoped>
.veg-product-card {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;

  .item:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0 0 5px 0 #aaa;
  }
  .item {
    position: relative;
    width: 230px;
    background-color: #fff;
    padding: 10px 20px 25px;
    border-radius: 5px;
    transition: transform 0.05s;
    -webkit-font-smoothing: antialiased;
    .sale {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: var(--theme-warning-color);
      color: #fff;
      padding: 4px 8px;
      font-size: 14px;
    }
    img {
      width: 100%;
    }
    p {
      padding: 10px 0;
      font-size: 14px;
    }
    .bottom {
      display: flex;
      position: relative;
      align-items: center;
      .sale-price {
        color: var(--theme-primary-color);
        font-size: 14px;
      }
      .pre-price {
        color: #aaa;
        text-decoration: line-through;
        margin: 0 8px;
        font-size: 14px;
      }
      button {
        position: absolute;
        right: 0;
        padding: 5px 10px;
        border: 1px solid #ddd;
        background-color: #fff;
        border-radius: 5px;
        color: var(--theme-primary-color);
        font-size: 14px;
      }
      button:hover {
        cursor: pointer;
        background-color: var(--theme-primary-color);
        color: #fff;
      }
    }
  }
}
</style>
