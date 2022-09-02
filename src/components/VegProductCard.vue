<template>
  <div class="veg-product-card">
    <div
      class="card-container"
      v-for="(i, index) in items"
      :key="index">
      <div
        class="item"
        @click="clickItem(i)">
        <div
          class="sale"
          v-show="i.discount != 0">
          {{ i.discount | discount }}
        </div>
        <!-- <div class="favorite"></div> -->
        <veg-favorite
          :item="i"
          :index="index"></veg-favorite>
        <img
          :src="i.img"
          alt="" />
        <h4>{{ i.title }}</h4>
        <p>{{ i.spec }}</p>
        <div class="bottom">
          <span class="sale-price">￥{{ (i.price * (1 - i.discount)) | price }}</span>
          <span
            class="pre-price"
            v-show="i.discount != 0"
            >￥{{ i.price | price }}</span
          >
          <button>查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VegFavorite from './VegFavorite.vue';
export default {
  props: ['items'],
  components: { VegFavorite },
  filters: {
    price(value) {
      value = value.toFixed(2);
      return value;
    },
    discount(value) {
      value = value * 100;
      return '-' + value + '%';
    },
  },
  methods: {
    clickItem(item) {
      this.$store.commit('updateDetialItem', item);
      this.$router.push(`/product-details?pid=${item.pid}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-product-card {
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
  .card-container {
    width: 25%;
    padding: 15px 5px;
    box-sizing: border-box;

    .item:hover {
      cursor: pointer;
      transform: scale(1.1);
      box-shadow: 0 0 5px 0 #aaa;
    }
    .item {
      width: 80%;
      position: relative;
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
}
</style>
