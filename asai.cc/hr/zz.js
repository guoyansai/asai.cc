var zzData = [
  {
    tit: "本科毕业证书",
    des: "103201200505002***",
  },
  {
    tit: "学士学位证书",
    des: "103204052***",
  },
  {
    tit: "计算机等级证书",
    des: "2002秋0515307***",
  },
  {
    tit: "中教二级专业技术职称",
    des: "NM05406***",
  },
  {
    tit: "普通话水平测试等级证书",
    des: "023200401***",
  },
  {
    tit: "高级中学教师资格证书",
    des: "20053223640000***",
  },
  {
    tit: "导游员资格证书",
    des: "DZG2015JS10***",
  },
  {
    tit: "大学校级奖项",
    des: "个人成就奖、优秀毕业论文、科技作品大赛一等奖",
  },
];

var zzDom =
  '<style>.zz-ol ol{text-align:left;word-wrap:break-word;list-style:none;padding: 0px;margin: 0px;}.zz-ol ol{counter-reset: show-list;}.zz-ol ol li{padding-left: 30px;position: relative;counter-increment: item;}.zz-ol ol li:before{content: "["counter(item)"]";display: block;position: absolute;left: 0;top:0;}</style><div class="zz-ol"><ol>';
var zzDataLen = zzData.length;
var zzi = 0;
var zzItem;
while (zzi < zzDataLen) {
  zzItem = zzData[zzi];
  if (zzItem.des) {
    zzDom += "<li>" + zzItem.tit + "：" + zzItem.des + "</li>";
  } else {
    zzDom += "<li><b>" + zzItem.tit + "</b></li>";
  }
  zzi++;
}
zzDom += "</ol></div>";

document.write(zzDom);
