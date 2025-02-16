/*
调用方法：
<script language="JavaScript" charset="utf-8" src="http://x.asai.cc/js/_asaitishi.js"></script>
<script>
asaitishi(1,0);//你有新的消息=1|嘀嘀嘀嘀=2|钢琴提示=6|低音部提示=7|高音部提示=8+++标题不提示=0|标题提示=1
asaitishititle.stop();//关闭标题提示
</script>
*/
document.write("<div id=asaitishi></div>");
//浏览器类型判断
function EES_EESaiBrowser(){
var userAgent=navigator.userAgent; //取得浏览器的userAgent字符串
var isOpera=userAgent.indexOf("Opera") > -1;
if (isOpera){return "Opera"}; //判断是否Opera浏览器
if (userAgent.indexOf("Firefox") > -1){return "FF";} //判断是否Firefox浏览器
if (userAgent.indexOf("Safari") > -1){return "Safari";} //判断是否Safari浏览器
if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera){return "IE";};//判断是否IE浏览器
}

function asaitishi(atsfty,atsfts){
var atsurl="http://x.asai.cc/js/asaitishi/";
var atsfile;
if(atsfty==1){atsfile="t1.wav"}
else if(atsfty==2){atsfile="t2.wav"}
else if(atsfty==7){atsfile=parseInt(Math.random()*58+1)+".mp3";}
else if(atsfty==8){atsfile=parseInt(Math.random()*31+58)+".mp3";}
else{atsfile=parseInt(Math.random()*88+1)+".mp3";}
if(!!window.ActiveXObject || "ActiveXObject" in window){document.getElementById("asaitishi").innerHTML="<embed id='asaitishiat' name='asaitishiat' src='"+atsurl+atsfile+"' autostart='true' hidden='true' loop='false'></embed>";}else{document.getElementById("asaitishi").innerHTML="<audio id='asaitishiat' name='asaitishiat' autoplay='autoplay' src='"+atsurl+atsfile+"'>";}
document.getElementById("asaitishiat").play();

if(atsfts==1){
//标题栏提示效果----0
 var asaitishititle = function () {
  var i = 0,
   title = document.title.replace("【　　　】", "").replace("【新消息】", ""),
   loop;
  return {
   show: function () {
    loop = setInterval(function () {
     i++;
	 if(i>10){clearInterval(loop);document.title = title;}//10秒后关闭
     else if (i%2==0){document.title = '【　　　】' + title;}
     else{document.title = '【新消息】' + title;}
    }, 1000);
   },
   stop: function () {
    clearInterval(loop);
    document.title = title;
   }
  };
 } ();
asaitishititle.show();
//标题栏提示效果----1
}

}