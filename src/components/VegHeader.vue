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
      <ul>
        <li>首页</li>
        <li>最新上架</li>
        <li>商品分类</li>
        <li>联系我们</li>
      </ul>
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
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navigation {
    > ul {
      display: flex;
      flex: 1;
      font-weight: 600;
      justify-content: space-between;
      > li {
        padding: 0 30px;
      }
    }
  }

  .user {
    display: flex;
  }
}
</style>
