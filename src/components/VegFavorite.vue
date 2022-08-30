<template>
  <div class="veg-favorite"></div>
</template>

<script>
export default {};
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
}
.veg-favorite::after {
  content: '❤';
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);
}
.veg-favorite:hover {
  cursor: pointer;
}
.veg-favorite:hover::after {
  color: var(--theme-danger-color);
}
</style>
