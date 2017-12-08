<template>
    <div class="index">
        <div class="bing-wallpaper-container">
            <img :src="bingWallpaperUrl">
        </div>
    </div>
</template>

<script>
import { getBingWallpaper, bingWallPaperSize } from "../api/api";
import device from "../utils/utils";

export default {
  data() {
    return {
      bingWallpaperUrl: ""
    };
  },
  mounted() {
    let _this = this;
    getBingWallpaper().then(res => {
      let baseUrl = "http://www.bing.com/";
      let bingWallPaperUlr = baseUrl + res.data.images[0].url;
      console.log(res);
      /* 判断设备 */
      if (device.android || device.ios) {
        _this.bingWallpaperUrl = bingWallPaperUlr.replace(
          "1920x1080",
          "720x1280"
        );
      } else if (device.ipad) {
        _this.bingWallpaperUrl = bingWallPaperUlr.replace(
          "1920x1080",
          "1366x768"
        );
      } else {
        _this.bingWallpaperUrl = bingWallPaperUlr;
      }
    });
  },
  methods: {}
};
</script>

<style>

</style>
