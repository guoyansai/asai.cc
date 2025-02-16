/**
# BY 阿赛
# 用法
<script src="js/gg-say-area.js"></script>
<script src="js/gg-right.js"></script>
<script>
	document.write(ggRight); // right show
	document.getElementsByTagName("title")[0].innerText += ',' + tit + '-' + title; // add title
</script>
**/
var domain = location.host;
var bei = '';
var tit = domain;
var title = domain;
if (domain.indexOf('asai.cc') !== -1) {
    bei = '-1';
    tit = '啾噗';
    title = '曹瑞莲的个人博客';
} else if (domain.indexOf('asai.cc') !== -1) {
    bei = '-2';
    tit = '新南京';
    title = '曹瑞莲的个人主页';
} else if (domain.indexOf('asai.cc') !== -1) {
    bei = '-3';
    tit = '阿赛工作室';
    title = '曹瑞莲的个人主页';
} else {
    bei = '';
    tit = '阿赛';
    title = '曹瑞莲的个人主页';
}
var ggRight = '<style>.gg-body{text-align:center;}.gg-title,.gg-say-area,.gg-right,.gg-bei,a.gg-bei{color:#888888;}.gg-title{font-size:xx-large;font-weight:bold;}.gg-say-area{font-size:large;padding:20px 0;}.gg-right{font-size:small;}.gg-bei,a.gg-bei{font-size:small;}</style><div class="gg-body"><div class="gg-title">';
ggRight += tit;
ggRight += '</div><div class="gg-say-area">' + ggSay + '</div><div class="gg-right">© copyright 2001-';
var d = new Date();
ggRight += d.getFullYear() + ' <a class="gg-bei" title="' + tit + '" href="' + location.origin + '" target="_blank">' + domain + '</a> All rights reserved.</div><div class="gg-right">版权所有 本站内容未经书面许可,禁止一切形式的转载。 </div><a class="gg-bei" href="https://beian.miit.gov.cn" target="_blank">苏ICP备18064418号';
ggRight += bei + '</a></div></div>';