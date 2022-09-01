<template>
  <div class="veg-sidebar-cart">
    <veg-sidebar-cart-details :is-show-details="isShowDetails"></veg-sidebar-cart-details>
    <div
      class="veg-sidebar-cart-icon"
      @click="switchIsShowDetails">
      <div class="top">
        <svg
          t="1661853737519"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2362"
          width="20"
          height="20">
          <path
            d="M918.441 473.791h-812.881c-27.766 0-50.275-22.509-50.275-50.275s22.509-50.275 50.275-50.275h812.882c27.766 0 50.275 22.509 50.275 50.275s-22.511 50.275-50.276 50.275z"
            fill="#ffffff"
            p-id="2363"></path>
          <path
            d="M810.836 383.297h-597.668c-47.756 0-86.473 38.717-86.473 86.473l60.331 377.265c0 47.756 38.717 86.473 86.473 86.473h477.008c47.756 0 86.473-38.717 86.473-86.473l60.331-377.265c0-47.762-38.717-86.473-86.473-86.473zM382.894 747.69c0 27.766-22.508 50.275-50.275 50.275s-50.275-22.509-50.275-50.275v-178.578c0-27.767 22.509-50.275 50.275-50.275 27.767 0 50.275 22.508 50.275 50.275v178.578zM562.275 747.69c0 27.766-22.508 50.275-50.275 50.275s-50.275-22.509-50.275-50.275v-178.578c0-27.767 22.509-50.275 50.275-50.275 27.767 0 50.275 22.508 50.275 50.275v178.578zM741.655 747.69c0 27.766-22.508 50.275-50.275 50.275s-50.275-22.509-50.275-50.275v-178.578c0-27.767 22.508-50.275 50.275-50.275s50.275 22.508 50.275 50.275v178.578zM347.817 333.836l92.547-168.897c13.343-24.35 4.42-54.907-19.931-68.25-24.35-13.344-54.908-4.42-68.25 19.931l-119.022 217.214h114.657zM676.183 333.836l-92.547-168.897c-13.343-24.35-4.42-54.907 19.93-68.25 24.352-13.344 54.909-4.42 68.25 19.931l119.022 217.214h-114.656z"
            fill="#ffffff"
            p-id="2364"></path>
        </svg>
        <div class="count">3 件</div>
      </div>
      <button class="amount">￥15.00</button>
    </div>
  </div>
</template>

<script>
import VegSidebarCartDetails from './VegSidebarCartDetails.vue';
export default {
  components: { VegSidebarCartDetails },
  data() {
    return {
      isShowDetails: false,
    };
  },
  methods: {
    switchIsShowDetails() {
      this.isShowDetails = !this.isShowDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-sidebar-cart {
  .veg-sidebar-cart-icon {
    cursor: pointer;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    top: 30%;
    right: 0;
    width: 80px;
    height: 60px;
    font-size: 14px;
    padding: 20px 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: var(--theme-primary-color);
    z-index: 10;
    .top {
      display: flex;
      align-items: center;
      .count {
        color: #fff;
        margin-left: 5px;
      }
    }
    .amount {
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
}
</style>
