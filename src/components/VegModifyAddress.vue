<template>
  <div class="veg-modify-address">
    <div class="card">
      <h4>{{ title }}</h4>
      <div class="main">
        <div class="item">
          <p class="title">备注</p>
          <input
            type="text"
            v-model="$parent.userAddress[index].title" />
        </div>
        <div class="item">
          <p class="title">地址</p>
          <input
            type="text"
            v-model="$parent.userAddress[index].address" />
        </div>
        <div class="item">
          <p class="title">邮编</p>
          <input
            type="text"
            v-model="$parent.userAddress[index].code" />
        </div>
      </div>
      <div class="btn">
        <button
          class="sure"
          @click="modifyAddress(index)">
          确定
        </button>
        <button
          class="cancel"
          @click="cancelModifyAddress(index)">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'index'],
  data() {
    return {
      // showModifyAddress: false,
    };
  },
  methods: {
    modifyAddress(i) {
      localStorage.setItem('userAddress', JSON.stringify(this.$parent.userAddress[i]));
      this.$parent.showModifyAddress = !this.$parent.showModifyAddress;
    },
    cancelModifyAddress(i) {
      this.$parent.userAddress[i] = JSON.parse(localStorage.getItem('userAddress'));
      this.$parent.showModifyAddress = !this.$parent.showModifyAddress;
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-modify-address {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: #ccc, $alpha: 0.5);
  .card {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 30%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-top: 3px solid var(--theme-primary-color);
    h4 {
      font-size: 24px;
      margin: 20px 0;
      text-align: center;
    }
    .main {
      display: flex;
      flex-direction: column;

      padding: 0 40px 20px;
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        .title {
          width: 15%;
        }
        input {
          width: 60%;
          border: 1px solid #aaa;
          border-radius: 3px;
          line-height: 16px;
          padding: 2px 5px;
        }
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      button {
        margin: 0 20px 30px;
        padding: 10px 20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
      }
      .sure {
        background-color: var(--theme-primary-color);
      }
      .cancel {
        background-color: var(--theme-danger-color);
      }
    }
  }
}
</style>
