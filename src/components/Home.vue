<template>
    <div class="index">
        <div class="bing-wallpaper-container">
            <img :src="bingWallpaperUrl">
        </div>
        <div class="icon-menu" @click="menuShow"></div>
        <div class="mask" v-if="maskShow" @click="menuHide"></div>
        <div class="slide-bar" :class="{'slide-bar-show' : slideBarShow==1}">
        </div>
        <!-- <div class="switch-congtent">
            <div class="preDay" @click="getPreDay">前一天</div>
            <div class="nextDay" @click="getNextDay">后一天</div>
            <div class="today" @click="getToday">今天</div>
        </div> -->
    </div>
</template>

<script>
import { getBingWallpaper, bingWallPaperSize } from "../api/api";
import device from "../utils/utils";

export default {
  data() {
    return {
      bingWallpaperUrl: "",
      maskShow: false,
      slideBarShow: 0
    };
  },
  mounted() {
    let _this = this;
    getBingWallpaper(0).then(res => {
      _this.bingWallpaperUrl = res;
    });
  },
  methods: {
    menuShow() {
      this.maskShow = true;
      this.slideBarShow = 1;
    },
    menuHide() {
      this.maskShow = false;
      this.slideBarShow = 0;
    },
    getPreDay() {
      getBingWallpaper(1).then(res => {
        console.log(res);
        console.log(res);
        this.bingWallpaperUrl = res;
      });
    },
    getNextDay() {},
    getToday() {}
  }
};
</script>

<style>

</style>
