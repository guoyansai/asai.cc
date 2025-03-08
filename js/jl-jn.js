var jnDom =
  '<style>.jn-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.jn-ol ol{counter-reset: show-list;}.jn-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.jn-ol ol li:before{content: "#"counter(item)"";display: block;position: absolute;left: 0;top:0;}</style><div class="jn-ol"><ol>';
var jnDataLen = jnData.length;
var jni = 0;
var jnItem;
while (jni < jnDataLen) {
  jnItem = jnData[jni];
  if (jnItem.des) {
    jnDom += "<li><b>" + jnItem.tit + "</b>：" + jnItem.des + "</li>";
  } else {
    jnDom += "<li><b>" + jnItem.tit + "</b></li>";
  }
  jni++;
}
jnDom += "</ol></div>";

document.write(jnDom);
