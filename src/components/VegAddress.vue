<template>
  <div class="veg-address">
    <!-- 地址簿 -->
    <div class="address">
      <div
        class="none"
        v-if="userAddress.length == 0">
        您还未添加地址
      </div>
      <div
        :class="['item', { active: defaultAddress == i }]"
        v-for="(a, i) in userAddress"
        :key="i"
        @click="defaultAddress = i">
        <i>☑</i>
        <h4>{{ a.title }}</h4>
        <p>{{ a.address }}</p>
        <p>{{ a.phone }}</p>
        <img
          src="@/assets/images/user/modify.png"
          alt="modify"
          class="modify"
          @click="clickModifyAddress(i)" />
        <img
          src="@/assets/images/user/delete.png"
          alt="delete"
          class="delete"
          @click="deleteAddress(i)" />
      </div>
    </div>

    <!-- 新增地址 -->
    <button
      class="newAddress"
      @click="showAddAddress = true">
      新增地址
    </button>

    <!-- 修改地址信息 -->
    <veg-modify-address
      title="修改地址信息"
      :index="modifyAddressIndex"
      v-if="showModifyAddress"></veg-modify-address>

    <!-- 增加地址 -->
    <div
      class="modify-info"
      v-if="showAddAddress">
      <div class="card">
        <h4>增加地址</h4>
        <div class="main">
          <div class="item">
            <p class="title">姓名</p>
            <input
              type="text"
              v-model="newAddress.title" />
          </div>
          <div class="item">
            <p class="title">地址</p>
            <input
              type="text"
              v-model="newAddress.address" />
          </div>
          <div class="item">
            <p class="title">电话</p>
            <input
              type="text"
              v-model="newAddress.phone" />
          </div>
        </div>
        <div class="btn">
          <button
            class="sure"
            @click="createNewAddress">
            确定
          </button>
          <button
            class="cancel"
            @click="showAddAddress = false">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VegModifyAddress from './VegModifyAddress.vue';
export default {
  components: { VegModifyAddress },
  data() {
    return {
      defaultAddress: 0,
      modifyAddressIndex: -1,
      showModifyAddress: false,
      showAddAddress: false,
      newAddress: {},
    };
  },
  computed: {
    ...mapState(['userAddress']),
  },
  methods: {
    clickModifyAddress(i) {
      this.modifyAddressIndex = i;
      localStorage.setItem('userAddress', JSON.stringify(this.userAddress[i]));
      this.showModifyAddress = !this.showModifyAddress;
    },
    deleteAddress(i) {
      this.userAddress.splice(i, 1);
    },
    createNewAddress() {
      if (this.newAddress.title && this.newAddress.address && this.newAddress.phone) {
        this.userAddress.push(this.newAddress);
      }
      this.newAddress = {};
      this.showAddAddress = !this.showAddAddress;
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-address {
  overflow: hidden;
  > .address {
    background-color: #fafafa;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .none {
      text-align: center;
      padding: 30px;
    }
    > .item {
      padding: 0 80px;
      display: flex;
      position: relative;
      flex-direction: column;
      justify-content: space-evenly;
      height: 140px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;

      > i {
        position: absolute;
        top: 20px;
        left: 26px;
        font-size: 18px;
        color: #ccc;
      }
      > .modify {
        width: 18px;
        position: absolute;
        top: 20px;
        right: 54px;
        cursor: pointer;
      }
      > .delete {
        width: 20px;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
      }
    }
    > .item.active {
      border-top: 1px solid var(--theme-primary-color);
      border-bottom: 1px solid var(--theme-primary-color);
      background-color: #fff;
      i {
        color: var(--theme-primary-color);
      }
    }
    > .item:hover {
      background-color: #fff;
      i {
        color: var(--theme-primary-color);
      }
    }
  }
  // 新增地址按钮
  > .newAddress {
    display: block;
    background-color: var(--theme-primary-color);
    color: #fff;
    padding: 10px 20px;
    margin: 30px auto;
    border-radius: 5px;
    cursor: pointer;
  }

  .modify-info {
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
}
</style>
