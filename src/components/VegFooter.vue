<template>
  <div class="veg-footer">
    <div class="container">
      <!-- logo -->
      <div class="logo">
        <img
          src="@/assets/images/logo.png"
          alt="logo" />
        <div class="desc">五叶蔬菜是一家30分钟即时配送移动互联网购物平台。品类包含：水果蔬菜、肉禽蛋奶、粮油调味、酒水饮料等。用户足不出户，在网站上随时随地搞定日常生活所需。</div>
      </div>
      <!-- 购物指南 -->
      <div class="guide">
        <h4>购物指南</h4>
        <router-link to="/">购物流程</router-link>
        <router-link to="/">会员介绍</router-link>
        <router-link to="/">售后服务</router-link>
        <router-link to="/">配送方式</router-link>
      </div>
      <!-- 支付方式 -->
      <div class="payment">
        <h4>支付方式</h4>
        <router-link to="/">货到付款</router-link>
        <router-link to="/">在线支付</router-link>
        <router-link to="/">分期付款</router-link>
        <router-link to="/">公司转账</router-link>
      </div>
      <!-- 链接 -->
      <div class="link">
        <h4>常用链接</h4>
        <router-link to="/">关于我们</router-link>
        <router-link to="/">加入我们</router-link>
        <router-link to="/">常见问题</router-link>
        <router-link to="/">联系客服</router-link>
      </div>
      <!-- 下载APP -->
      <div class="app">
        <h4>下载客户端</h4>
        <img
          src="../assets/images/app-store/apple.png"
          alt="apple store" />
        <img
          src="../assets/images/app-store/google.png"
          alt="google store" />
        <img
          src="../assets/images/payment/01.png"
          alt="payment" />
      </div>
    </div>
    <!-- footer -->
    <div class="footer">copyright &copy; fukaikiso 2022</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.veg-footer {
  border-top: 1px solid #ccc;
  // background-color: var(--theme-bg-color);
  .container {
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      > * {
        margin: 10px;
      }
      > a:hover {
        color: var(--theme-primary-color);
      }
    }

    .logo {
      width: 30%;
      flex: 2;
      text-align: justify;
      img {
        width: 40%;
      }
    }

    .app {
      img {
        width: 80%;
        margin: 5px;
      }
    }
  }
  .footer {
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
}
</style>
