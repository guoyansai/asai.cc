var jjData = [
  {
    tit: "十多年实战开发经验丰富，专注前端架构优化提升开发效率、总结分享提高团队水平、新技术应用拓展开发能力。",
    des: "",
  },
  {
    tit: "全栈",
    des: "2002年开始网站开发，完成学院精品课程网站开发建设及教学动画课件的制作；2005年毕业后从事教师职业，同时完成学校官网建设并负责机房管理；2007年专职互联网工作，带团队并全栈开发，升级与维护二十多个大型网站项目，开源项目阿赛企业网站系统、阿赛门户网站系统、阿赛树型论坛系统、阿赛聊天室系统等各大源码下载网均有收录。全面了解网站平台各项开发事宜，提升解决各类疑难问题能力。",
  },
  {
    tit: "前端",
    des: "2016年聚焦前端技术研发，精通前端HTML5/CSS3/JS/VUE/Angular/TS/node.js/webpack/electron桌面软件开发/uni-app手机全端开发等。一线主力开发角色，完成十多个前端项目的架构与开发工作，应用新技术、解决疑难点、积累扎实的前端工作经验。",
  },
  {
    tit: "继续提升开发能力，优化架构设计，提升团队代码质量，增强项目升级与重构能力，更好为业务服务。",
    des: "",
  },
];

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
