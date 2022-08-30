<template>
  <div>
    <veg-header></veg-header>
    <div class="main">
      <div class="container">
        <div class="banner">
          <img
            src="../../public/images/banner/banner-bg.jpg"
            alt="" />
          <div class="desc">
            <p>足不出户，吃到新鲜蔬菜！</p>
            <button>立马买菜</button>
          </div>
        </div>

        <div class="product">
          <veg-product-floor
            title="商品分类"
            circleColor="#59b828"></veg-product-floor>
          <veg-product-floor title="新品上架"></veg-product-floor>
          <veg-product-floor title="热销商品"></veg-product-floor>
          <veg-product-floor title="推荐购买"></veg-product-floor>
        </div>
      </div>
    </div>

    <veg-footer></veg-footer>
  </div>
</template>

<script>
import VegHeader from '@/components/VegHeader.vue';
import VegFooter from '@/components/VegFooter.vue';
import VegProductFloor from '@/components/VegProductFloor.vue';
export default {
  components: { VegHeader, VegFooter, VegProductFloor },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--theme-bg-color);
  .container {
    background-color: var(--theme-bg-color);
    .banner {
      position: relative;
      > img {
        display: block;
        width: 100%;
        height: 350px;
      }
      > .desc {
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
  }
}
</style>
