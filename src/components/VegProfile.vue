<template>
  <div class="veg-proflie">
    <!-- 个人信息 -->
    <h3>个人主页</h3>
    <div class="info">
      <div class="item">
        <h4>昵称</h4>
        <p>{{ $store.state.userInfo.nickname }}</p>
      </div>
      <div class="item">
        <h4>简介</h4>
        <p>{{ $store.state.userInfo.description }}</p>
      </div>
      <div class="item">
        <h4>电话</h4>
        <p>{{ $store.state.userInfo.phone }}</p>
      </div>
      <!-- 修改图标 -->
      <img
        src="@/assets/images/user/modify.png"
        alt="modify"
        class="modify"
        @click="showModifyInfo = true" />
    </div>

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
            <p class="title">简介</p>
            <input
              type="text"
              v-model="userInfo.description" />
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

    <!-- 地址簿 -->
    <h3>地址簿</h3>
    <veg-address></veg-address>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VegAddress from './VegAddress.vue';
import VegModifyAddress from './VegModifyAddress.vue';
export default {
  components: { VegModifyAddress, VegAddress },
  data() {
    return {
      showModifyInfo: false,
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
  },
  computed: {
    ...mapState(['userInfo']),
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
