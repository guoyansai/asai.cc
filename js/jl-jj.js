var jjDom =
  '<style>.jj-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.jj-ol ol{counter-reset: show-list;}.jj-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.jj-ol ol li:before{content: ""counter(item)">";display: block;position: absolute;left: 0;top:0;}</style><div class="jj-ol"><ol>';
var jjDataLen = jjData.length;
var jji = 0;
var jjItem;
while (jji < jjDataLen) {
  jjItem = jjData[jji];
  if (jjItem.des) {
    jjDom += "<li>" + jjItem.tit + "：" + jjItem.des + "</li>";
  } else {
    jjDom += "<li><b>" + jjItem.tit + "</b></li>";
  }
  jji++;
}
jjDom += "</ol></div>";

document.write(jjDom);
