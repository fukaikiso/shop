<template>
  <div class="about">
    <veg-header></veg-header>
    <veg-breadcrumb :path-list="$route.meta.pathList"></veg-breadcrumb>
    <div class="main">
      <div class="container">
        <div class="content">
          <img
            src="/images/about/01.jpg"
            alt="" />
          <div class="desc">
            <h3>关于我们</h3>
            <p>五叶蔬菜是一家30分钟即时配送移动互联网购物平台。品类包含：水果蔬菜、肉禽蛋奶、粮油调味、酒水饮料等。用户足不出户，在网站上随时随地搞定日常生活所需。</p>
            <p>五叶蔬菜是一家30分钟即时配送移动互联网购物平台。品类包含：水果蔬菜、肉禽蛋奶、粮油调味、酒水饮料等。用户足不出户，在网站上随时随地搞定日常生活所需。</p>
          </div>
        </div>
      </div>
    </div>
    <veg-footer></veg-footer>
  </div>
</template>

<script>
import VegHeader from '@/components/VegHeader.vue';
import VegBreadcrumb from '@/components/VegBreadcrumb.vue';
import VegFooter from '@/components/VegFooter.vue';
export default {
  components: { VegHeader, VegBreadcrumb, VegFooter },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.about {
  .main {
    // position: fixed;
    // top: 0;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // z-index: -1;
    background-color: var(--theme-bg-color);
    .content {
      display: flex;
      padding: 100px;
      .desc {
        padding: 20px 40px;
        h3 {
          font-size: 36px;
          padding-bottom: 20px;
        }
        p {
          text-align: justify;
          line-height: 24px;
          padding: 10px 0;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
