<template>
  <div class="veg-product-card">
    <div class="item">
      <img
        src="/images/products/01.png"
        alt="" />
      <h3>上海青</h3>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>加入购物车</button>
      </div>
    </div>
    <div class="item">
      <img
        src="/images/products/01.png"
        alt="" />
      <h3>上海青</h3>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>加入购物车</button>
      </div>
    </div>
    <div class="item">
      <img
        src="/images/products/01.png"
        alt="" />
      <h3>上海青</h3>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>加入购物车</button>
      </div>
    </div>
    <div class="item">
      <img
        src="/images/products/01.png"
        alt="" />
      <h3>上海青</h3>
      <p>1kg</p>
      <div class="bottom">
        <span class="sale-price">￥8.00</span>
        <span class="pre-price">￥10.00</span>
        <button>加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.veg-product-card {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;

  .item:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 1px 1px 3px 0 #aaa;
  }
  .item {
    width: 220px;
    background-color: #fff;
    padding: 10px 20px 25px;
    border-radius: 5px;
    transition: transform 0.05s;
    -webkit-font-smoothing: antialiased;
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
      }
      .pre-price {
        color: #aaa;
        text-decoration: line-through;
        margin: 0 8px;
      }
      button {
        position: absolute;
        right: 0;
        padding: 5px 10px;
        border: 1px solid #ddd;
        background-color: #fff;
        border-radius: 5px;
        color: var(--theme-primary-color);
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
