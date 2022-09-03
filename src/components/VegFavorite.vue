<template>
  <div
    class="veg-favorite"
    @click.stop="switchFavorite">
    <i :class="{ active: isActive }">❤</i>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props: ['item', 'index'],
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapGetters(['favoriteItemsId']),
  },
  methods: {
    ...mapMutations(['updateFavoriteItem']),
    switchFavorite() {
      // console.log('加入收藏', this.item, this.index, this.favoriteItemsId);
      this.isActive = !this.isActive;
      this.updateFavoriteItem({ item: this.item, isActive: this.isActive });
      // console.log(this.isActive);
    },
  },
  mounted() {
    if (this.favoriteItemsId.indexOf(this.item.pid) != -1) {
      this.isActive = true;
    }
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
