var jnData = [
  {
    tit: "前端开发",
    des: "精通HTML5/JS/CSS/VUE/ANGULAR/ELECTRON/NODE.JS/UNIAPP等前端开发设计，精通VS/DW等软件",
  },
  {
    tit: "网站建设",
    des: "精通ASP+MSSQL/ACCESS与PHP+MYSQL，熟悉git，对各种网站建设均有丰富工作经验",
  },
  {
    tit: "数据处理",
    des: "熟练操作使用MSSQL、MYSQL等大型数据库处理软件，熟悉储存过程、并发处理等高级使用技巧",
  },
  {
    tit: "电脑维护",
    des: "能独立处理PC、网络故障，更新或升级各类软件、驱动等",
  },
  {
    tit: "办公软件",
    des: "精通Word、Excel、Powerpoint、Access等Office组件，以及WPS等各种办公软件",
  },
  {
    tit: "演示动画",
    des: "擅长FLASH、PPT、AUTHORWARE等常用类型动画的开发，且经验丰富",
  },
  {
    tit: "影音处理",
    des: "熟练操作Cool Edit/Movie Make等多媒体处理软件",
  },
  {
    tit: "广告标志",
    des: "具有良好的审美观，丰富的网络广告、门头、ICO、LOGO标志设计经验",
  },
  {
    tit: "宣传画册",
    des: "熟悉宣传册、刊物、名片、易拉宝等制作，精通PS、Illustrator、CorelDRAW等平面设计制作软件",
  },
  {
    tit: "网络维护",
    des: "多年网络安全工作经验、服务器安全维护经验，精通软件安装设置，服务器故障诊断等",
  },
];

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
