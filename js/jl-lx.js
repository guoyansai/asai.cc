var lxData = [
  {
    tit: "微信账号",
    des: "asaicc",
  },
  {
    tit: "手机号码",
    des: "15895982020",
  },
  {
    tit: "现居地址",
    des: "江苏省 南京市 江宁区 龙眠大道 588号",
  },
  {
    tit: "户　　籍",
    des: "江苏泗洪梅花",
  },
  {
    tit: "家　　乡",
    des: "江苏泗洪梅花",
  },
  {
    tit: "腾讯ＱＱ",
    des: "4941172",
  },
  {
    tit: "电子邮箱",
    des: "guoyansai@qq.com",
  },
  {
    tit: "喜　　欢",
    des: "动漫、写作、电影、音乐、游戏、旅游、跑步",
  },
];

var lxDom =
  '<style>.lx-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.lx-ol ol{counter-reset: show-list;}.lx-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.lx-ol ol li:before{content: ""counter(item)". ";display: block;position: absolute;left: 0;top:0;}</style><div class="lx-ol"><ol>';
var lxDataLen = lxData.length;
var lxi = 0;
var lxItem;
while (lxi < lxDataLen) {
  lxItem = lxData[lxi];
  if (lxItem.des) {
    lxDom += "<li>" + lxItem.tit + "：" + lxItem.des + "</li>";
  } else {
    lxDom += "<li><b>" + lxItem.tit + "</b></li>";
  }
  lxi++;
}
lxDom += "</ol></div>";

document.write(lxDom);
