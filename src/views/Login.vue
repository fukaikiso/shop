<template>
  <div class="login">
    <div class="main">
      <div class="left">
        <div class="block">
          <img
            src="@/assets/images/login/login_pic1.png"
            alt="" />
          <div class="desc">
            <h5>优选内容</h5>
            <p>新鲜蔬菜任挑</p>
          </div>
        </div>
        <div class="block">
          <img
            src="@/assets/images/login/login_pic2.png"
            alt="" />
          <div class="desc">
            <h5>快速物流</h5>
            <p>211限时达</p>
          </div>
        </div>
        <div class="block">
          <img
            src="@/assets/images/login/login_pic3.png"
            alt="" />
          <div class="desc">
            <h5>天天低价</h5>
            <p>极致性价比</p>
          </div>
        </div>
      </div>
      <div class="right">
        <router-link
          class="topRight"
          to="/register"
          >注册</router-link
        >
        <div class="main">
          <p class="header">用户登录</p>
          <div class="userInput">
            <span>用户名</span>
            <input
              v-model="username"
              type="text"
              placeholder="请输入用户名" />
          </div>
          <div class="userInput">
            <span>密码</span>
            <input
              v-model="password"
              type="password"
              placeholder="请输入密码" />
          </div>
          <input
            type="button"
            class="btn"
            value="立即登录"
            @click="login"
            :class="{ active: btnActive }" />
          <div class="userTerms">
            <label>
              <input
                type="checkbox"
                v-model="termsState" />
              我已阅读《用户条款》、《登录条款》
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      termsState: false,
    };
  },
  methods: {
    login() {
      const url = '/login';
      const params = `username=${this.username}&password=${this.password}`;
      this.axios.post(url, params).then((res) => {
        if (res.data.code == 200) {
          alert('登录成功');
          // 存储token
          this.$store.commit('setToken', res.data.token);
          this.$store.commit('switchIsLogin');
          this.$store.commit('updateUserInfo', res.data.result);
          // console.log(res.data.result);
          this.$router.push('/');
        } else if (res.data.code == 201) {
          alert('用户名不存在或密码错误');
        } else {
          alert('登录失败');
        }
      });
    },
  },
  computed: {
    btnActive() {
      return this.username && this.password && this.termsState;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  background-color: var(--theme-bg-color);
  padding: 50px 0;

  > .main {
    display: flex;
    margin: 0 auto;
    width: 656px;
    height: 398px;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 0 20px 0 #eeeeee;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 240px;
      height: 100%;
      box-sizing: border-box;

      .block {
        display: flex;
        height: 45px;
        justify-content: space-around;
        margin: 28px 40px;

        img {
          width: 32px;
          height: 32px;
          margin-top: 5px;
          margin-right: 10px;
        }

        .desc {
          flex: 1;
          h5 {
            margin-bottom: 5px;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #888;
          }

          p {
            font-size: 12px;
            color: #bbb;
          }
        }
      }
    }

    .right {
      width: 416px;
      height: 100%;
      box-shadow: 0 0 20px 0 #eeeeee;

      .topRight {
        position: relative;
        top: 10px;
        left: 340px;
        width: 32px;
        display: block;
        text-decoration: none;
        padding: 10px;
        color: #666;
      }

      .topRight:hover {
        color: var(--theme-primary-color);
      }

      .main {
        padding: 0 48px;

        .header {
          padding: 32px 0 24px;
          color: #333;
          font-size: 20px;
          text-align: center;
          font-weight: bold;
        }

        .userInput {
          display: flex;
          position: relative;
          height: 32px;
          margin-bottom: 20px;

          > span {
            width: 50px;
            height: 32px;
            padding-right: 10px;
            line-height: 32px;
            text-align: justify;
            text-align-last: justify;
          }

          > input {
            width: 80%;
            height: 32px;
            vertical-align: middle;
            box-sizing: border-box;
            padding: 0 10px;
            outline: none;
          }

          > input:focus {
            border: 1px solid var(--theme-primary-color);
          }

          p {
            position: absolute;
            left: 72px;
            top: 32px;
            color: var(--theme-primary-color);
            font-size: 12px;
          }
        }
      }

      .btn {
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: #888;
        text-align: center;
        border: none;
        border-radius: 5px;
        font-size: 18px;
        margin: 8px 0 12px;
        pointer-events: none;
        cursor: pointer;
      }

      .btn.active {
        background-color: var(--theme-primary-color);
        pointer-events: all;
      }

      .btn.active:hover {
        background-color: var(--theme-click-color);
      }

      .userTerms {
        color: #666;
        font-size: 12px;
        margin-top: 10px;

        input {
          display: inline-block;
          height: 18px;
          margin-right: 5px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
