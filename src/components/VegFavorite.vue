<template>
  <div
    class="veg-favorite"
    @click.stop="addFavorite">
    <i :class="{ active: isActive }">❤</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    addFavorite() {
      console.log('加入收藏');
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
};
</script>

<style lang="scss" scoped>
.veg-favorite {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fbbbbb;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  user-select: none;
  z-index: 10;
  > i {
    position: absolute;
    top: 50%;
    left: 50%;
    color: #fff;
    transform: translate(-50%, -50%);
  }
  i.active {
    color: var(--theme-danger-color);
  }
}
.veg-favorite:hover {
  cursor: pointer;
  i {
    color: var(--theme-danger-color);
  }
}
</style>
