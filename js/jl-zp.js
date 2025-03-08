var zpDom =
  '<style>.zp-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.zp-ol ol{counter-reset: show-list;}.zp-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.zp-ol ol li:before{content: ""counter(item)". ";display: block;position: absolute;left: 0;top:0;}</style><div class="zp-ol"><ol>';
var zpDataLen = zpData.length;
var zpi = 0;
var zpItem;
while (zpi < zpDataLen) {
  zpItem = zpData[zpi];
  if (zpItem.des) {
    zpDom += "<li><b>" + zpItem.tit + "</b>：" + zpItem.des + "</li>";
  } else {
    zpDom += "<li><b>" + zpItem.tit + "</b></li>";
  }
  zpi++;
}
zpDom += "</ol></div>";

document.write(zpDom);
