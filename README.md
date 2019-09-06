# bing-wallpaper

### 安装依赖

``` bash 
npm install
```
### 运行
``` bash 
npm run dev

# 浏览器查看：http://localhost:8080/#/
```

### 效果
![image](https://github.com/KuangPF/Bing-wallpaper/blob/master/src/assets/img/bingWallpaper.gif) 

### api
``` 
https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=1
```
参数:
* idx:表示请求的天数序列,0代表今天、1代表昨天…以此类推(只支持最近7天)
* n:表示请求的天数数量(请求几天的图片);1为当天一天、2为昨天和今天
    
### 数据返回

``` js
{
  "images": [{
    "startdate": "20171207",
    "fullstartdate": "201712071600",
    "enddate": "20171208",
    "url": "/az/hprichbg/rb/SibeliusMonument_ZH-CN8903164725_1920x1080.jpg",
    "urlbase": "/az/hprichbg/rb/SibeliusMonument_ZH-CN8903164725",
    "copyright": "西贝柳斯纪念碑，芬兰赫尔辛基 (© Ville Heino/500px)",
    "copyrightlink": "http://www.bing.com/search?q=%E8%A5%BF%E8%B4%9D%E6%9F%B3%E6%96%AF%E7%BA%AA%E5%BF%B5%E7%A2%91&form=hpcapt&mkt=zh-cn",
    "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20171207_SibeliusMonument%22&FORM=HPQUIZ",
    "wp": false,
    "hsh": "c9a7071a8f5438b9987213fc0696d972",
    "drk": 1,
    "top": 1,
    "bot": 1,
    "hs": []
  }],
  "tooltips": {
    "loading": "正在加载...",
    "previous": "上一个图像",
    "next": "下一个图像",
    "walle": "此图片不能下载用作壁纸。",
    "walls": "下载今日美图。仅限用作桌面壁纸。"
  }
}
```
    

### 数据处理

返回结果中img字段的url为图片地址一部分，加上必应的域名:`https://www.bing.com`,
然后壁纸地址为: `https://www.bing.com/az/hprichbg/rb/SibeliusMonument_ZH-CN8903164725_1920x1080.jpg`

获取不同分辨率的壁纸，只需将ulr中对应的分辨率替换即可，支持的分辨率从如下：

`['1920x1080', '1280x768', '1366x768', '1024x768', '800x600', '800x480', '720x1280', '640x480', '480x800', '400x240', '320x240', '240x320']`
