/*
调用方法：
<script language="JavaScript" charset="utf-8" src="http://x.asai.cc/js/_asaispeaker.js"></script>
方法一：
<script>
asaispeaker("speakid",20);//朗读内容的ID=speakid|朗读按钮图片的高度=20
</script>
方法二：<div onMouseOver="asaispeak(this.innerHTML);" onMouseOut="asaispeakcancel();">这里是要朗读的内容</div>
其他方法：
<script>
asaispeak("朗读内容");
asaispeakcancel();//停止朗读
</script>
*/
function asaispeak(eesfstr){
if(window.SpeechSynthesisUtterance){
eesfstr=eesfstr.replace(/<\/?[^>]*>/g,'');
eesfstr=eesfstr.replace(/[ | ]*\n/g,'\n');
eesfstr=eesfstr.replace(/\n[\s| | ]*\r/g,'\n');
var EESspeechSU=new window.SpeechSynthesisUtterance();
if(eesfstr!=""){EESspeechSU.text=eesfstr;}else{EESspeechSU.text="没有可读内容！";}
window.speechSynthesis.speak(EESspeechSU);
}
}
function asaispeakcancel(){if(window.SpeechSynthesisUtterance){window.speechSynthesis.cancel();}}
//调用按钮专用
function asaispeakbt(eesfid){
asaispeak(document.getElementById(eesfid).innerText);
document.getElementById("stop"+eesfid).style.display="";document.getElementById("read"+eesfid).style.display="none";
}
function asaispeakbtcancel(eesfid){asaispeakcancel();document.getElementById("stop"+eesfid).style.display="none";document.getElementById("read"+eesfid).style.display="";}

function asaispeaker(eesfid,eesfht){
var eesplayic0="http://x.asai.cc/js/asaispeaker/0.png";
var eesplayic1="http://x.asai.cc/js/asaispeaker/1.png";
var eesdcss="";
if(eesfht!=""){eesdcss=' height="'+eesfht+'" style="vertical-align:middle;"'}
if(window.SpeechSynthesisUtterance){
document.writeln('<img src="'+eesplayic1+'"'+eesdcss+' onClick="asaispeakbtcancel(\''+eesfid+'\');" id="stop'+eesfid+'" title="点击停止朗读"><img src="'+eesplayic0+'"'+eesdcss+' onClick="asaispeakbt(\''+eesfid+'\');" id="read'+eesfid+'" title="点击开始朗读">');
if(document.getElementById("stop"+eesfid).style.display="none"){document.getElementById("stop"+eesfid).style.display="none";document.getElementById("read"+eesfid).style.display="";}else{document.getElementById("stop"+eesfid).style.display="";document.getElementById("read"+eesfid).style.display="none";}
}else{
var atsurl="http://x.asai.cc/js/asaitishi/";
var atsfile="t0.wav";
document.write("<div id=asaitishi></div>");
if(EES_EESaiBrowser()=="IE"){document.getElementById("asaitishi").innerHTML="<embed id='asaitishiat' name='asaitishiat' src='"+atsurl+atsfile+"' autostart='true' hidden='true' loop='false'></embed>";}else{document.getElementById("asaitishi").innerHTML="<audio id='asaitishiat' name='asaitishiat' autoplay='autoplay' src='"+atsurl+atsfile+"'>";}
document.getElementById("asaitishiat").play();
};
};