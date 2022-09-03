<template>
  <div class="veg-counter">
    <span @click="calCount(-1)">-</span>
    <input
      class="count"
      type="text"
      v-model="count"
      ref="changeCountBtn" />
    <span @click="calCount(1)">+</span>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  props: {
    index: { default: 0 },
    mode: { default: 'single' },
    newItem: {
      // 默认值为数组或对象需要用工厂函数
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    ...mapMutations(['changeCount']),
    calCount(num) {
      //v-model输入的值为字符串
      this.count = parseInt(this.count);
      this.count += num;
    },
  },
  computed: {
    ...mapState(['cartItems', 'detailItem']),
  },
  mounted() {
    let itemIndex = parseInt(this.index);
    if (this.mode == 'multi') {
      this.count = this.cartItems[itemIndex].count;
    } else {
      this.count = this.detailItem.count;
    }
  },
  watch: {
    // 监测输入的数量为0~99的值，否则保持旧值
    count(newValue, oldValue) {
      let reg = /^([1-9]\d|[1-9])$/;
      if (reg.test(newValue)) {
        this.count = newValue;
        // 多个参数以对象形式传入
        this.changeCount({ index: this.index, count: this.count, mode: this.mode });
        // console.log(this.detailItem);
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
    caret-color: var(--theme-primary-color);
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
