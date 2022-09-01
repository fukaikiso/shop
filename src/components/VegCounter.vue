<template>
  <div class="veg-counter">
    <span @click="calCount(-1)">-</span>
    <input
      class="count"
      type="text"
      v-model="count" />
    <span @click="calCount(1)">+</span>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {};
  },
  methods: {
    calCount(num) {
      //v-model输入的值为字符串
      this.count = parseInt(this.count);
      this.count += num;
      console.log('this.$parent.cartItems :>> ', this.$parent.cartItems);
    },
  },
  watch: {
    // 监测输入的数量为0~99的值，否则保持旧值
    count(newValue, oldValue) {
      let reg = /^([1-9]\d|[1-9])$/;
      if (reg.test(newValue)) {
        this.count = newValue;
      } else {
        this.count = oldValue;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-counter {
  display: flex;
  padding: 3px 8px;
  height: 30px;
  width: 80px;
  line-height: 30px;
  text-align: center;
  background-color: var(--theme-primary-color);
  border-radius: 5px;
  color: #fff;
  > span {
    flex: 1;
    cursor: pointer;
    user-select: none;
  }
  > .count {
    color: #fff;
    font-size: 14px;
    width: 40%;
    background-color: var(--theme-primary-color);
    text-align: center;
  }
}
</style>
