<template>
  <div class="register">
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
          to="/login"
          >登录</router-link
        >
        <div class="main">
          <p class="header">用户注册</p>
          <div class="userInput">
            <span>用户名</span>
            <input
              v-model="username"
              type="text"
              placeholder="请输入用户名" />
            <p v-show="username && !checkUsername">请输入3~12位数字或字母</p>
          </div>
          <div class="userInput">
            <span>密码</span>
            <input
              v-model="password"
              type="password"
              placeholder="请输入密码" />
            <p v-show="password && !checkPassword">请输入6~15位数字或字母</p>
          </div>
          <div class="userInput">
            <span>重复密码</span>
            <input
              v-model="password2"
              type="password"
              placeholder="请再次输入密码" />
            <p v-show="password2 && !checkPassword2">两次密码不一致</p>
          </div>
          <div class="userInput">
            <span>手机号</span>
            <input
              v-model="phone"
              type="text"
              placeholder="请输入手机号" />
            <p v-show="phone && !checkPhone">请输入正确的手机号</p>
          </div>
          <input
            type="button"
            class="btn"
            value="立即注册"
            @click="register"
            :class="{ active: btnActive }" />
          <div class="userTerms">
            <label>
              <input
                type="checkbox"
                v-model="termsState" />
              我已阅读《用户条款》、《注册条款》
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
      password2: '',
      phone: '',
      termsState: false,
    };
  },
  methods: {
    register() {
      if (this.btnActive) {
        const url = '/register';
        const params = `username=${this.username}&password=${this.password}&phone=${this.phone}`;
        this.axios.post(url, params).then((res) => {
          if (res.data.code == 200) {
            alert('注册成功');
            this.$router.push('/login');
          } else if (res.data.code == 201) {
            alert('用户已存在');
            this.username = '';
          } else {
            alert('注册失败');
          }
        });
      }
    },
  },
  computed: {
    checkUsername() {
      const exp = /^\w{3,12}$/;
      return exp.test(this.username);
    },
    checkPassword() {
      const exp = /^\w{6,15}$/;
      return exp.test(this.password);
    },
    checkPassword2() {
      return this.password2 == this.password;
    },
    checkPhone() {
      const exp = /^1[3-9]\d{9}$/;
      return exp.test(this.phone);
    },
    btnActive() {
      return this.checkUsername && this.checkPassword && this.checkPassword2 && this.checkPhone && this.termsState;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
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
          padding: 10px 0 18px;
          color: #333;
          font-size: 20px;
          text-align: center;
          font-weight: bold;
        }

        .userInput {
          display: flex;
          position: relative;
          height: 32px;
          margin-bottom: 18px;

          > span {
            width: 70px;
            height: 32px;
            padding-right: 10px;
            line-height: 32px;
            text-align: right;
            // text-align: justify;
            // text-align-last: justify;
          }

          > input {
            width: 75%;
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
            left: 86px;
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
