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
let sdom = null;
function asaispeak(eesfstr) {
    eesfstr = eesfstr.replace(/<\/?[^>]*>/g, '');
    eesfstr = eesfstr.replace(/[ | ]*\n/g, '\n');
    eesfstr = eesfstr.replace(/\n[\s| | ]*\r/g, '\n');
    if (eesfstr != "") {
        sdom = document.createElement("video");
        sdom.style.display = "none";
        sdom.src = 'http://tts.baidu.com/text2audio/text2audio?lan=zh&ie=UTF-8&spd=6&text=' + eesfstr;
        sdom.loop = false;
        sdom.autoplay = true;
        sdom.addEventListener('ended', function () {
            sdom = null;
        }, false);
    }
}
function asaispeakcancel() {
    if (sdom) {
        sdom.pause();
        sdom = null;
    }
}
//调用按钮专用
function asaispeakbt(eesfid){
asaispeak(document.getElementById(eesfid).innerHTML);
document.getElementById("stop"+eesfid).style.display="";document.getElementById("read"+eesfid).style.display="none";
}
function asaispeakbtcancel(eesfid){asaispeakcancel();document.getElementById("stop"+eesfid).style.display="none";document.getElementById("read"+eesfid).style.display="";}

function asaispeaker(eesfid,eesfht){
var eesplayic0="http://x.asai.cc/js/asaispeaker/0.png";
var eesplayic1="http://x.asai.cc/js/asaispeaker/1.png";
var eesdcss="";
if(eesfht!=""){eesdcss=' height="'+eesfht+'" style="vertical-align:middle;"'}
document.writeln('<img src="'+eesplayic1+'"'+eesdcss+' onClick="asaispeakbtcancel(\''+eesfid+'\');" id="stop'+eesfid+'" title="点击停止朗读"><img src="'+eesplayic0+'"'+eesdcss+' onClick="asaispeakbt(\''+eesfid+'\');" id="read'+eesfid+'" title="点击开始朗读">');
if(document.getElementById("stop"+eesfid).style.display="none"){document.getElementById("stop"+eesfid).style.display="none";document.getElementById("read"+eesfid).style.display="";}else{document.getElementById("stop"+eesfid).style.display="";document.getElementById("read"+eesfid).style.display="none";}
};