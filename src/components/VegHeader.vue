<template>
  <div class="veg-header container">
    <!-- logo -->
    <div class="logo">
      <img
        src="@/assets/images/logo.png"
        alt="logo" />
    </div>
    <!-- 导航栏 -->
    <div class="navigation">
      <router-link to="/">首页</router-link>
      <router-link to="/">最新上架</router-link>
      <router-link to="/">商品分类</router-link>
      <router-link to="/">联系我们</router-link>
    </div>
    <!-- 电话 -->
    <div class="phone">0000 0000 0000</div>
    <!-- 登录收藏购物车 -->
    <div class="user">
      <div class="favorite">收藏</div>
      <div class="cart">购物车</div>
      <button class="login">登录</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.veg-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #aaa;
  padding: 10px 0;

  .navigation {
    display: flex;
    width: 35%;
    justify-content: space-between;
    > * {
      padding: 20px;
    }
    > *:hover {
      color: var(--theme-primary-color);
    }
  }

  .user {
    display: flex;
    width: 15%;
    justify-content: space-between;
    align-items: center;

    .login {
      background-color: var(--theme-danger-color);
      color: #fff;
      padding: 7px 14px;
      border-radius: 5px;
    }
  }
}
</style>
