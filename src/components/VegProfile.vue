<template>
  <div class="veg-proflie">
    <!-- 个人信息 -->
    <h3>个人主页</h3>
    <div class="info">
      <div class="item">
        <h4>昵称</h4>
        <p>{{ userInfo.nickname }}</p>
      </div>
      <div class="item">
        <h4>邮箱</h4>
        <p>{{ userInfo.email }}</p>
      </div>
      <div class="item">
        <h4>电话</h4>
        <p>{{ userInfo.phone }}</p>
      </div>
      <!-- 修改图标 -->
      <img
        src="@/assets/images/user/modify.png"
        alt="modify"
        class="modify"
        @click="showModifyInfo = true" />
    </div>
    <!-- 地址簿 -->
    <h3>地址簿</h3>
    <div class="address">
      <div
        :class="['item', { active: defaultAddress == i }]"
        v-for="(a, i) in userAddress"
        :key="i"
        @click="defaultAddress = i">
        <i>☑</i>
        <h4>{{ a.title }}</h4>
        <p>{{ a.address }}</p>
        <p>{{ a.code }}</p>
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

    <!-- 修改个人信息 -->
    <div
      class="modify-info"
      v-if="showModifyInfo">
      <div class="card">
        <h4>修改个人信息</h4>
        <div class="main">
          <div class="item">
            <p class="title">昵称</p>
            <input
              type="text"
              v-model="userInfo.nickname" />
          </div>
          <div class="item">
            <p class="title">邮箱</p>
            <input
              type="text"
              v-model="userInfo.email" />
          </div>
          <div class="item">
            <p class="title">电话</p>
            <input
              type="text"
              v-model="userInfo.phone" />
          </div>
        </div>
        <div class="btn">
          <button
            class="sure"
            @click="modifyInfo">
            确定
          </button>
          <button
            class="cancel"
            @click="cancelModifyInfo">
            取消
          </button>
        </div>
      </div>
    </div>

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
            <p class="title">备注</p>
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
            <p class="title">邮编</p>
            <input
              type="text"
              v-model="newAddress.code" />
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
import VegModifyAddress from './VegModifyAddress.vue';
export default {
  components: { VegModifyAddress },
  data() {
    return {
      userInfo: { nickname: '积极买菜人', email: 'jjmcr@163.com', phone: '15098121452' },
      userAddress: [
        { aid: 1, title: '学校', address: '湖北省武汉市洪山区关山口', code: '400400' },
        { aid: 2, title: '家庭', address: '广东省广州市番禺区', code: '540400' },
        { aid: 3, title: '工作', address: '湖北省武汉市江汉区', code: '405500' },
      ],
      defaultAddress: 0,
      modifyAddressIndex: -1,
      showModifyInfo: false,
      showModifyAddress: false,
      showAddAddress: false,
      newAddress: {},
    };
  },
  methods: {
    modifyInfo() {
      // TODO：发送修改请求
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      this.showModifyInfo = !this.showModifyInfo;
    },
    cancelModifyInfo() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
      this.showModifyInfo = !this.showModifyInfo;
    },
    clickModifyAddress(i) {
      this.modifyAddressIndex = i;
      localStorage.setItem('userAddress', JSON.stringify(this.userAddress[i]));
      this.showModifyAddress = !this.showModifyAddress;
    },
    deleteAddress(i) {
      this.userAddress.splice(i, 1);
    },
    createNewAddress() {
      if (this.newAddress.title && this.newAddress.address && this.newAddress.code) {
        this.userAddress.push(this.newAddress);
      }
      this.newAddress = {};
      this.showAddAddress = !this.showAddAddress;
    },
  },
  mounted() {
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.veg-proflie {
  > h3 {
    padding: 30px;
  }
  > .info {
    position: relative;
    background-color: #fafafa;
    padding: 20px 50px 50px;
    > .item {
      display: flex;
      padding-top: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      h4 {
        margin-right: 40px;
      }
    }
    > .modify {
      width: 18px;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
  > .address {
    background-color: #fafafa;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
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
  > .newAddress {
    background-color: var(--theme-primary-color);
    color: #fff;
    padding: 20px 30px;
    margin: 40px 60px;
    border-radius: 5px;
    cursor: pointer;
  }
  > button:active {
    background-color: var(--theme-click-color);
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
