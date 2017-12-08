import axios from 'axios';

export function getBingWallpaper(idx,n) {
    return axios.request('//bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',{
        method:'get',
    })
}

export const bingWallPaperSize = ['1920x1080','1280x768','1366x768','1024x768','800x600','800x480','720x1280','640x480','480x800','400x240','320x240','240x320']
