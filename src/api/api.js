import axios from 'axios';
import device from "../utils/utils";

export function getBingWallpaper(idx) {
  var idx = idx;
  let baseUrl = 'http://www.bing.com';
  let bingWallPaperUlr;
  let bingWallPaperDesc;
  let bingWallPaperCopyright;

  function getAxios() {
    return new Promise(function (resolve, reject) {
      axios.get('api/HPImageArchive.aspx?format=js&idx=' + idx + '&n=1')
        .then(function (res) {
          bingWallPaperUlr = baseUrl + res.data.images[0].url;
          bingWallPaperDesc = res.data.images[0].copyright.substring(0,res.data.images[0].copyright.indexOf("("));
          bingWallPaperCopyright = res.data.images[0].copyright.substring(res.data.images[0].copyright.indexOf("(")+1,res.data.images[0].copyright.indexOf(")"));
          console.log(bingWallPaperCopyright);
          if (device.android || device.ios) {
            bingWallPaperUlr = bingWallPaperUlr.replace(
              "1920x1080",
              "720x1280"
            );
          } else if (device.ipad) {
            bingWallPaperUlr = bingWallPaperUlr.replace(
              "1920x1080",
              "1366x768"
            );
          } else {
            bingWallPaperUlr = bingWallPaperUlr;
          }
          let bingWallpaperOB = {
            bingWallPaperUlr:bingWallPaperUlr,
            bingWallPaperDesc:bingWallPaperDesc,
            bingWallPaperCopyright:bingWallPaperCopyright
          }
          resolve(bingWallpaperOB);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    })
  }
  return getAxios();
}

export const bingWallPaperSize = ['1920x1080', '1280x768', '1366x768', '1024x768', '800x600', '800x480', '720x1280', '640x480', '480x800', '400x240', '320x240', '240x320']
