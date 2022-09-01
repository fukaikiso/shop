<template>
  <div class="veg-header">
    <div class="container">
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
        <router-link to="/user">用户中心</router-link>
        <router-link to="/about">关于我们</router-link>
      </div>
      <!-- 电话 -->
      <div class="phone">
        <img
          src="@/assets/images/header/phone.png"
          alt="phone" />
        <span>0000 0000 0000</span>
      </div>
      <!-- 登录收藏购物车 -->
      <div class="user">
        <button class="login">登录</button>
        <router-link
          class="favorite"
          to="/user/wish-list">
          <svg
            t="1661822315559"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3460"
            width="18"
            height="18">
            <path
              d="M892.543016 224.150106c-9.284457-11.914354-17.804505-21.814842-26.454512-30.930453C759.437485 80.827887 642.682341 92.003414 536.033369 176.799682c-9.493212 7.547907-18.453281 15.383362-26.88737 23.346731-8.43409-7.963369-17.395182-15.798824-26.888394-23.346731C375.608633 92.003414 258.853489 80.827887 152.202471 193.21863c-8.650007 9.115612-17.170055 19.016099-25.559119 29.714765C-2.680039 410.134984 68.411089 595.897805 259.728416 764.030084c42.320874 37.192064 87.560218 70.64906 132.799562 99.905384 15.841803 10.245342 30.570249 19.244296 43.816948 26.932396 8.024767 4.657067 13.827937 7.872295 17.044188 9.578146 4.869914 2.916423 9.728572 5.142114 14.530948 6.771217 3.470031 1.619894 7.516184 3.091408 12.218276 4.387937 25.377994 6.998391 62.97938 1.908466 85.839017-11.764951 2.14178-1.101077 7.944949-4.315282 15.969717-8.972349 13.246699-7.688099 27.974122-16.687054 43.816948-26.932396 45.239344-29.256324 90.478687-62.71332 132.799562-99.905384C949.879885 595.897805 1020.971014 410.134984 892.543016 224.150106z"
              p-id="3461"
              fill="#4b566b"></path>
          </svg>
        </router-link>
        <router-link
          class="cart"
          to="/checkout">
          <svg
            t="1661822903326"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4441"
            width="18"
            height="18">
            <path
              d="M352.972955 831.860239c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C416.962204 860.414581 388.407862 831.860239 352.972955 831.860239L352.972955 831.860239z"
              p-id="4442"
              fill="#4b566b"></path>
            <path
              d="M801.069713 831.860239c-35.434907 0-63.989249 28.554342-63.989249 63.989249 0 35.434907 28.554342 63.989249 63.989249 63.989249s63.989249-28.554342 63.989249-63.989249C865.058962 860.414581 836.332605 831.860239 801.069713 831.860239L801.069713 831.860239z"
              p-id="4443"
              fill="#4b566b"></path>
            <path
              d="M937.304888 188.527465C920.963548 169.949941 898.429699 159.973123 874.003696 159.973123L232.907106 159.973123l-2.236183-13.073072c-5.676466-46.615824-46.615824-82.910801-93.231648-82.910801L97.015958 63.989249c-17.717453 0-31.994625 14.277171-31.994625 31.994625s14.277171 31.994625 31.994625 31.994625l40.251302 0c13.933143 0 28.210314 12.729044 29.930455 28.210314l30.96254 178.550647 54.356459 382.043339c5.676466 46.615824 46.099782 83.082815 92.371577 83.082815l520.17067 0c17.717453 0 31.994625-14.277171 31.994625-31.994625s-14.277171-31.994625-31.994625-31.994625L344.716278 735.876365c-13.589115 0-27.006215-12.55703-28.898371-27.522258l-5.332437-37.327062 507.61364-31.306568c46.099782 0 86.695112-36.466991 92.027549-81.362674L960.870821 270.062154C964.483118 239.271628 956.054426 209.513187 937.304888 188.527465z"
              p-id="4444"
              fill="#4b566b"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.veg-header {
  border-bottom: 1px solid #ccc;
  height: 80px;
  background-color: #fff;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

    .phone {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        margin: 0 5px;
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

      .login:hover {
        background-color: rgb(242, 28, 28);
        cursor: pointer;
      }

      .favorite,
      .cart {
        // position: absolute;
        width: 36px;
        height: 36px;
        background-color: #e8eaee;
        border-radius: 20px;
        svg {
          position: relative;
          top: 25%;
          left: 25%;
        }
      }

      .favorite:hover,
      .cart:hover {
        cursor: pointer;
        path {
          fill: var(--theme-primary-color);
        }
      }
    }
  }
}
</style>
