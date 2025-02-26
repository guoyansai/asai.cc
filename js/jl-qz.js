var qzData = [
  {
    tit: "姓名：郭言赛　=  能力、担当、正直、忠诚",
    des: "",
  },
  {
    tit: "求职：前端高级工程师/架构师 √　技术总监 √",
    des: "",
  },
  {
    tit: "现居：江苏南京江宁大学城　户籍",
    des: "江苏南京",
  },
  {
    tit: "电话：15895982020　微信号",
    des: "asaicc",
  },
  {
    tit: "学校：江苏师范大学　专业",
    des: "生物科学（应用生物技术）（师范）",
  },
  {
    tit: "学历：本科　毕业：2005年6月　性别：男　出生",
    des: "1984年7月",
  },
];

var qzDom =
  '<style>.qz-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.qz-ol ol{counter-reset: show-list;}.qz-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}</style><div class="qz-ol"><ol>';
var qzDataLen = qzData.length;
var qzi = 0;
var qzItem;
while (qzi < qzDataLen) {
  qzItem = qzData[qzi];
  if (qzItem.des) {
    qzDom += "<li>" + qzItem.tit + "：" + qzItem.des + "</li>";
  } else {
    qzDom += "<li><b>" + qzItem.tit + "</b></li>";
  }
  qzi++;
}
qzDom += "</ol></div>";

document.write(qzDom);
