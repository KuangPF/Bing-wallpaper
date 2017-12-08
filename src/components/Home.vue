<template>
    <div class="index">
        <div class="bing-wallpaper-container">
            <img :src="bingWallpaperUrl">
        </div>
        <div class="icon-menu" @click="menuShow"></div>
        <div class="mask" v-if="maskShow" @click="menuHide"></div>
        <div class="slide-bar" :class="{'slide-bar-show' : slideBarShow==1}">
            <div class="switch-congtent">
            <div class="preDay" @click="getPreDay">前一天</div>
            <div class="nextDay" @click="getNextDay">后一天</div>
            <div class="today" @click="getToday">今天</div>
        </div>
        </div>
        
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
      localStorage.removeItem("preDay_idx");
    },
    getPreDay() {
      let idx = 0; //请求的天数序列 0代表今天、1代表昨天…以此类推
      let idx_storage = localStorage.getItem("preDay_idx");
      if (idx_storage) {
        idx = idx_storage;
      }
      idx++;
      localStorage.setItem("preDay_idx", idx);
      console.log(idx);
      getBingWallpaper(idx).then(res => {
        this.bingWallpaperUrl = res;
      });
    },
    getNextDay() {
      let idx = localStorage.getItem("preDay_idx");
      idx--;
      localStorage.setItem("preDay_idx", idx);
      getBingWallpaper(idx).then(res => {
        this.bingWallpaperUrl = res;
      });
    },
    getToday() {
      getBingWallpaper(0).then(res => {
        this.bingWallpaperUrl = res;
      });
    }
  }
};
</script>

<style>

</style>
