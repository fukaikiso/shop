<template>
  <div class="veg-product-floor">
    <svg
      t="1661830722019"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5776"
      width="24"
      height="24">
      <path
        d="M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z"
        p-id="5777"
        :fill="circleColor"></path>
    </svg>
    <h3>{{ title }}</h3>
    <div class="line"></div>
    <div
      class="btn"
      v-if="showArrow">
      <!-- <div class="left">
        <svg
          t="1661831537254"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1247"
          width="24"
          height="24">
          <path
            d="M523.648 233.376a32 32 0 0 1 0 45.248l-222.4 222.4 222.4 222.4a32 32 0 0 1-45.248 45.248L233.376 523.648a32 32 0 0 1 0-45.248L478.4 233.376a32 32 0 0 1 45.248 0z"
            fill="#404040"
            p-id="1248"></path>
        </svg>
      </div> -->

      <router-link
        :to="link"
        class="right">
        <svg
          t="1661831519615"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="891"
          width="24"
          height="24">
          <path
            d="M478.4 768.64a32 32 0 0 1 0-45.216l222.4-222.4-222.4-222.4a32 32 0 1 1 45.248-45.248L768.672 478.4a32 32 0 0 1 0 45.248L523.648 768.672a32 32 0 0 1-45.248 0z"
            fill="#404040"
            p-id="892"></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '标题',
    },
    circleColor: {
      default: '#f68501',
    },
    showArrow: {
      default: true,
    },
    link: {
      default: '/products',
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.veg-product-floor {
  display: flex;
  align-items: center;
  padding: 20px 0 10px;

  h3 {
    margin: 0 5px 0 15px;
    letter-spacing: 3px;
  }

  .line {
    flex: 1;
    margin: 20px 30px 0;
    border-bottom: 1px solid #ccc;
  }

  .btn {
    display: flex;
    > .right,
    .left {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 25px;
      background-color: #fff;
      margin-left: 5px;
      > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      > svg:hover {
        cursor: pointer;
        path {
          fill: var(--theme-primary-color);
        }
      }
    }
  }
}
</style>
