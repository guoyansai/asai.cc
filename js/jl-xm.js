var xmDom =
  '<style>.xm-ol ol i{font-style:normal;margin:0 2px;padding:0 2px;border-radius:6px;background-color:#FC0;}.xm-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.xm-ol ol{counter-reset: show-list;}.xm-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.xm-ol ol li:before{content: "("counter(item)")";display: block;position: absolute;left: 0;top:0;}.xm-ol ol u{color:#888;}</style><div class="xm-ol"><ol>';
var xmDataLen = xmData.length;
var xmi = 0;
var xmItem;
var xmKeys = [];
var xmKeysLen = 0;
var xmKeyi = 0;
while (xmi < xmDataLen) {
  xmItem = xmData[xmi];
  xmKeys = xmItem.key.split(",");
  xmKeysLen = xmKeys.length;
  xmKeyi = 0;
  xmDom += "<li>【" + xmItem.tit + "】：" + xmItem.des + "<u>" + xmItem.wok + "</u>[" + xmItem.com + "](" + xmItem.oth + ")";
  while (xmKeyi < xmKeysLen) {
    xmDom += "<i> / " + xmKeys[xmKeyi] + "</i>";
    xmKeyi++;
  }
  xmDom += "</li>";
  xmi++;
}
xmDom += "</ol></div>";

document.write(xmDom);
