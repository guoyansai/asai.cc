<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8" /><link rel="shortcut icon" type="image/icon" href="http://x.asai.cc/js/logo/favicon.ico" />
<title>阿赛在线刷流量-互刷网址过滤提交</title>
<style>
body{padding:8px;border:0px;margin:0px;color:#FFFFFF;background-color:#22BB55;font-size:larger;}
a,A:link,A:active{color:#FFFFFF;text-decoration:underline;}
</style>
</head>

<body>
<h1>互刷网址过滤</h1>
<form id="EESai" name="EESai" action="" method="post" AUTOCOMPLETE="off">
请输入过滤网址：<input type="text" name="url" size="28" value="" maxlength="28"><br>直接输入不带www的短域名（限6-29位长度），如:guolv.com，将过滤到所有含guolv.com的网址<br>
<input type="hidden" name="ck" value="z"><input type="submit" value="提交过滤">
</form>
<%if request("ck")="z" and request("url")<>"" then
'-----------------------------------
'PS:file read
'-----------------------------------
Function anfr(anko)
dim ankols
ankols=Server.MapPath(anko)
dim anfrfsou
Set anfrfsou=CreateObject("adodb.stream")
anfrfsou.Open
anfrfsou.Type=2
anfrfsou.Charset="utf-8"
anfrfsou.LoadFromFile(ankols)
anfr=anfrfsou.ReadText
anfrfsou.Close
Set anfrfsou=Nothing
End Function
'-----------------------------------
'PS:file write
'-----------------------------------
Function anfw(anfstr,anko)
dim ankols
ankols=Server.MapPath(anko)
dim anfwtado
set anfwtado=server.CreateObject("adodb.stream")
With anfwtado
.type=2
.mode=3
.charset="utf-8"
.open
.WriteText=anfstr
.savetofile ankols,2
.flush
.Close
End With
set anfwtado=nothing
End Function

if len(request("url"))<29 and len(request("url"))>5 and InStr(lcase(request("url")),".")>0 and InStr(lcase(request("url")),"EESai")=0 and InStr(lcase(request("url")),"02590")=0 then
'--------过滤正在刷
dim hurra,huii,hulins
hulins=""
hurra=split(anfr("../s/ECShuaS.txt"),"<bR>")
for huii=0 to ubound(hurra)
if InStr(lcase(hurra(huii)),lcase(request("url")))>0 then
response.Write("IP:"&replace(hurra(huii),"〓","<br>网址：")&"<br>被清理！<br><br>")
else
hulins=hulins&hurra(huii)&"<bR>"
end if
next
Call anfw(hulins,"ECShuaS.txt")
'--------过滤入围
dim huarra,huaii,hualins
hualins=""
huarra=split(anfr("../s/ECShuaA.txt"),"<bR>")
for huaii=0 to ubound(huarra)
if InStr(lcase(huarra(huaii)),lcase(request("url")))>0 then
response.Write("IP:"&replace(huarra(huaii),"〓","<br>网址：")&"<br>被清理！<br><br>")
else
hualins=hualins&huarra(huaii)&"<bR>"
end if
next
Call anfw(hualins,"ECShuaA.txt")

Call anfw(request("url")&"<bR>"&replace(anfr("../s/ECShuaX.txt"),request("url")&"<bR>",""),"../s/ECShuaX.txt")
response.Write "<br>"&request("url")&"清理完成！<br><br>当前禁用网址：<br>"&anfr("../s/ECShuaX.txt")&"<br><br><br><br>"
end if
end if%>
<script>
var obj=document.getElementsByTagName("body"); 
for(i=0;i<obj.length;i++){ 
var str="012345678"; 
var t=""; 
for(j=0;j<3;j++) 
{t=t+ str.charAt(Math.random()*str.length);} 
obj[i].style.background="#"+t;
} 
</script>
<p><div class="help"><strong>常用工具集：</strong><a href="http://shua.asai.cc/" target="_blank">在线刷流量</a>、<a href="http://shua.asai.cc/c/" target="_blank" title="可以在这里寻找愿意与您交换刷网站的朋友。">互刷聊天室</a>&nbsp;|&nbsp;<a href="http://www.asai.cc/" target="_blank">[免费企业建站系统]</a>&nbsp;|&nbsp;<a href="http://www.asai.cc/i/chat/reg/" target="_blank">[申请免费聊天室]</a><br><br>特别提醒：互刷系统是一套自由系统，任何人都可以自己下载到本地或上传到自己网站上面使用，阿赛工作室不会主动刷任何人的网站。<br><br><strong>请注意：</strong><br>1.过滤的网址在一定时间将不再执行互刷计划；<br>2.如是本地刷新或只刷PV的话，该过滤无法波及；<br>3.如是还有外人刷新您过滤的网站，情节严重的，可以通过报警解决。</p><script language=JavaScript charset=utf-8 src=http://asai.cc/co.js></script>
</body>
</html>
