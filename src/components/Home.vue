<template>
    <div class="index">
        <div class="bing-wallpaper-container">
            <img :src="bingWallpaperUrl">
        </div>
        <div class="icon-menu" @click="menuShow"></div>
        <div class="mask" v-if="maskShow" @click="menuHide"></div>
        <div class="loading" v-if="isShowLoading"></div>
        <div class="slide-bar" :class="{'slide-bar-show' : slideBarShow==1}">
            <div class="switch-congtent">
                <div class="preDay" @click="getPreDay" v-if="isShowPre">前一天</div>
                <div class="nextDay" @click="getNextDay" v-if="isShowNext">后一天</div>
                <div class="today" @click="getToday" v-if="isShowToday">今天</div>
                <div class="github"><a href="https://github.com/KuangPF/Bing-wallpaper"></a></div>
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
      isShowPre: true,
      isShowNext: false,
      isShowToday: false,
      maskShow: false,
      isShowLoading: false,
      slideBarShow: 0
    };
  },
  mounted() {
    let _this = this;
    getBingWallpaper(0).then(res => {
      _this.bingWallpaperUrl = res;
    });
    localStorage.removeItem("preDay_idx");
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
      this.isShowLoading = true;
      let idx = 0; //请求的天数序列 0代表今天、1代表昨天…以此类推
      let idx_storage = localStorage.getItem("preDay_idx");
      if (idx_storage) {
        idx = idx_storage;
      }
      idx++;
      if (idx > 0) this.isShowNext = true;
      if (idx != 0) this.isShowToday = true;
      else this.isShowToday = false;
      localStorage.setItem("preDay_idx", idx);
      getBingWallpaper(idx).then(res => {
        this.isShowLoading = false;
        this.bingWallpaperUrl = res;
      });
    },
    getNextDay() {
      this.isShowLoading = true;
      let idx = localStorage.getItem("preDay_idx");
      if (idx < 2) this.isShowNext = false;
      if (idx != 1) this.isShowToday = true;
      else this.isShowToday = false;
      idx--;
      localStorage.setItem("preDay_idx", idx);
      getBingWallpaper(idx).then(res => {
        this.isShowLoading = false;
        this.bingWallpaperUrl = res;
      });
    },
    getToday() {
      this.isShowLoading = true;
      localStorage.setItem("preDay_idx", 0);
      this.isShowToday = false;
      this.isShowNext = false;
      getBingWallpaper(0).then(res => {
        this.isShowLoading = false;
        this.bingWallpaperUrl = res;
      });
    }
  }
};
</script>

<style>

</style>
