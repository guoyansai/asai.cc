<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%><%
Sub yacss()
%><style>
.ya_tit,.ya_div,#ya_menu{font-family:"微软雅黑",Tahoma, Geneva, sans-serif;margin:0px;border:0px;display:block;clear:both;text-align:center;font-size:14px;}#ya_menu a{display:inline-block;padding:4px 4px 6px 4px;margin:3px 2px 8px 2px;border-top:1px solid #D8D8D8;border-bottom:4px solid #D8D8D8;border-left:1px solid #D8D8D8;border-right:3px solid #D8D8D8;text-decoration:none;-moz-border-radius:6px 6px 8px 8px;-webkit-border-radius:6px 6px 8px 8px;border-radius:6px 6px 8px 8px;background-color:#FFFFFF;color:#686868;}#ya_menu a:hover{background-color:#F5F5F5;color:#DD0000;}.ya_div{padding:5px 12px;}.ya_tit{display:block;padding:12px;-moz-border-radius:50% 50% 50% 50%;-webkit-border-radius:50% 50% 50% 50%;border-radius:50% 50% 50% 50%;border-top:1px solid #D8D8D8;border-bottom:12px solid #D8D8D8;background-color:#F5F5F5;color:#DD0000;font-weight:bold;font-size:xx-large;}.ya_div>ul>li>a,.ya_div>ul>li>a:link,.ya_div>ul>li>a:active,.ya_div>ul>li>a:hover,.ya_div>ul>li>a:visited{text-decoration:none;color:#282828;}ul{padding:0px;margin:0px;border:0px;list-style:none;}.ya_div>ul>li{padding:12px 12px 2px 12px;margin:5px;background-color:#FFFFFF;border-top:1px solid #D8D8D8;border-bottom:8px solid #D8D8D8;border-left:1px solid #D8D8D8;border-right:6px solid #D8D8D8;-moz-border-radius:18px 18px 28px 28px;-webkit-border-radius:18px 18px 28px 28px;border-radius:18px 18px 28px 28px;display:inline-block;width:118px;height:158px;overflow:hidden;text-align:center;}.ya_div>ul>li:hover{background-color:#F5F5F5;}.ya_div>ul>li>a>b{display:block;width:118px;line-height:120%;height:118px;overflow:hidden;text-align:center;font-size:x-large;color:#DD0000;}.ya_div>ul>li>a>u{display:block;width:118px;line-height:40px;height:40px;overflow:hidden;text-align:center;text-decoration:none;font-weight:bold;font-size:larger;}.ya_div>ul>li>a>i{display:block;width:118px;line-height:20px;height:40px;overflow:hidden;text-align:center;font-style:normal;font-size:small;color:#999999;}.ya_div>ul>li>a>b>img{max-width:118px;max-height:58px;}
</style><%
End Sub
dim y_awz,y_ar,y_ai,y_arx,g_ma,g_ml
y_awz="HTML5游戏|http://h5.asai.cc/y/baoweidiqiu/#保卫地球##http://x.asai.cc/js/logo/h5/baoweidiqiu.jpg|http://h5.asai.cc/y/_buyuyouxi/#_捕鱼游戏##http://x.asai.cc/js/logo/h5/_buyuyouxi.jpg|http://h5.asai.cc/y/_chidoudou/#_吃豆豆##http://x.asai.cc/js/logo/h5/_chidoudou.jpg|http://h5.asai.cc/y/qingwa/#青蛙吃虫子##http://x.asai.cc/js/logo/h5/qingwa.jpg|http://h5.asai.cc/y/zixingche/#控制自行车##http://x.asai.cc/js/logo/h5/zixingche.jpg|http://h5.asai.cc/y/_heibaiqi/#_人人对战黑白棋##http://x.asai.cc/js/logo/h5/_heibaiqi.jpg|http://h5.asai.cc/y/dadishu/#打地鼠##http://x.asai.cc/js/logo/h5/dadishu.jpg|http://h5.asai.cc/y/2048/#2048游戏##http://x.asai.cc/js/logo/h5/2048.jpg|http://h5.asai.cc/y/_zhipai/#_经典的windows纸牌游戏##http://x.asai.cc/js/logo/h5/_zhipai.jpg|http://h5.asai.cc/y/zhifeiji/#看着纸飞机飞##http://x.asai.cc/js/logo/h5/zhifeiji.jpg|http://h5.asai.cc/y/yabianxiaoniao/#办公室发愤游戏压扁小鸟##http://x.asai.cc/js/logo/h5/yabianxiaoniao.jpg|http://h5.asai.cc/y/_zhongguoxiangqi/#_中国象棋##http://x.asai.cc/js/logo/h5/_zhongguoxiangqi.jpg|http://h5.asai.cc/y/_wuziqi/#_五子棋##http://x.asai.cc/js/logo/h5/_wuziqi.jpg|http://h5.asai.cc/y/_tuixiangzi/#_推箱子##http://x.asai.cc/js/logo/h5/_tuixiangzi.jpg|http://h5.asai.cc/y/touxiangxiaoxiaole/#美女人物头像消消乐##http://x.asai.cc/js/logo/h5/touxiangxiaoxiaole.jpg|http://h5.asai.cc/y/taomingdetuzi/#逃命小兔子##http://x.asai.cc/js/logo/h5/taomingdetuzi.jpg|http://h5.asai.cc/y/_tankedazhan/#_坦克大战##http://x.asai.cc/js/logo/h5/_tankedazhan.jpg|http://h5.asai.cc/y/_tanchishe/#_贪吃蛇##http://x.asai.cc/js/logo/h5/_tanchishe.jpg|http://h5.asai.cc/y/_shuiguorenzhe/#_水果忍者##http://x.asai.cc/js/logo/h5/_shuiguorenzhe.jpg|http://h5.asai.cc/y/_migong/#_迷宫##http://x.asai.cc/js/logo/h5/_migong.jpg|http://h5.asai.cc/y/weijing/#维京战争##http://x.asai.cc/js/logo/h5/weijing.jpg|http://h5.asai.cc/y/_feiniao/#_飞鸟过障碍物##http://x.asai.cc/js/logo/h5/_feiniao.jpg|http://h5.asai.cc/y/duobizhangaiwu/#3D飞机躲避障碍物##http://x.asai.cc/js/logo/h5/duobizhangaiwu.jpg|http://h5.asai.cc/y/daoqiangburu/#刀枪不入-躲避小白点##http://x.asai.cc/js/logo/h5/daoqiangburu.jpg|http://h5.asai.cc/y/dafeiji/#微信打飞机##http://x.asai.cc/js/logo/h5/dafeiji.jpg#-------------------|HTML5工具|http://h5.asai.cc/g/huaban/#画板涂鸦##http://x.asai.cc/js/logo/h5/huaban.jpg|http://h5.asai.cc/g/_renshizimu/#_认识字母##http://x.asai.cc/js/logo/h5/_renshizimu.jpg|http://h5.asai.cc/g/weijing/#维京战争##http://x.asai.cc/js/logo/h5/weijing.jpg|http://h5.asai.cc/g/shuicai/#在线水彩画板##http://x.asai.cc/js/logo/h5/shuicai.jpg|http://h5.asai.cc/g/kousuan/#在线口算题##http://x.asai.cc/js/logo/h5/kousuan.jpg|http://h5.asai.cc/g/_daziyouxi/#_金山打字游戏在线版##http://x.asai.cc/js/logo/h5/_daziyouxi.jpg|http://h5.asai.cc/g/choujiang/#在线抽奖##http://x.asai.cc/js/logo/h5/choujiang.jpg"

y_ar=split(y_awz,"|")
for y_ai=0 to ubound(y_ar)
if y_ai=0 then
g_ml=g_ml&"<a href=""#n"&y_ai&""">"&y_ar(y_ai)&"</a>"
g_ma="<a class=""ya_tit"" name=""n"&y_ai&""">"&y_ar(y_ai)&"</a><div class=""ya_div""><ul>"
else
y_arx=split(y_ar(y_ai),"#")
if ubound(y_arx)<3 then
g_ml=g_ml&"<a href=""#n"&y_ai&""">"&y_ar(y_ai)&"</a>"
g_ma=g_ma&"</ul></div><a class=""ya_tit"" name=""n"&y_ai&""">"&y_ar(y_ai)&"</a><div class=""ya_div""><ul>"
else
g_ma=g_ma&"<li><a target=""_blank"" title="""&y_arx(1)&""
if y_arx(2)<>"" then g_ma=g_ma&","&y_arx(2)&""
g_ma=g_ma&""" href="""&y_arx(0)&""">"

if y_arx(3)<>"" then
g_ma=g_ma&"<b><img src="""&y_arx(3)&"""></b>"
g_ma=g_ma&"<u>"&y_arx(1)&"</u>"
else
g_ma=g_ma&"<b>"&y_arx(1)&"</b>"
g_ma=g_ma&"<i>"&y_arx(2)&"</i>"
end if
g_ma=g_ma&"</a></li>"
end if
end if
next
g_ma=g_ma&"</ul></div>"
g_ma="<div id=""ya_menu"">"&g_ml&"</div>"&g_ma
if Request.ServerVariables("QUERY_STRING")="js" then
Call yacss()
Response.Write(g_ma)
else
%><!doctype html>
<html>
<head>
<meta charset="utf-8" /><link rel="shortcut icon" type="image/icon" href="http://x.asai.cc/js/logo/favicon.ico" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width; initial-scale=1.0; minimum-scale=1.0; maximum-scale=2.0">
<meta name="MobileOptimized" content="588">
<meta name="Iphone-content" content="588">
<meta name="viewport" content="width=588">
<meta name="renderer" content="webkit">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="在线专业查询系统,云上工具,阿赛工作室,www.asai.cc">
<meta name="description" content="云上工具：阿赛工作室诚意奉献精品在线小程序，助力生活为您提供快捷方便的免费服务。">
<meta name="copyright" content="云上工具,阿赛工作室,www.asai.cc">
<title>云上工具asai.cc</title>
<%Call yacss()%>
</head>

<body>
<%=g_ma%>
<script>
var obj=document.getElementsByTagName("body"); 
for(i=0;i<obj.length;i++){ 
var str="def"; 
var t="#"; 
for(j=0;j<6;j++) 
{t=t+str.charAt(Math.random()*str.length);} 
obj[i].style.background=t;} 
</script>
<a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备18064418号</a>
</body>
</html><%end if%>