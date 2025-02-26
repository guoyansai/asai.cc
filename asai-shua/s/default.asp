<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%><%option explicit%><html>
<head>
<title>阿赛在线刷流量</title>
<style>
body{padding:0px;margin:0px;}
body,td{font-size:12px;letter-spacing:1px;}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head><body>
<%
Dim htp,nu,urlx,ux,tm,url,arr,hurra,hurrb,huii,humy,urmx,urm,urmrr,urmi
'---------------连接到聊天室
dim asaidbnr
const asai_sn="eesai"
const asai_len=10000'限定聊天室各类缓存长度
const u_gg="-_"
const asairsn="shua"
const eckk="ZZ"'表单前缀:提交内容表单前缀词，同时作为聊天室登录用的密钥和聊天内容储存文件夹名字
const ecgx="||"'分隔段落:缓存储存段落分隔符
const ecgg="^^"'分隔符号:缓存储存分隔符
'---------------连接到聊天室
const ecsx="ECShuaX.txt"'过滤网址:过滤网址储存
const ecss="ECShuaS.txt"'正在刷新:正在刷新网址储存
const ecsa="ECShuaA.txt"'入围网址:入围网址储存
const ecst="ECShuaT.txt"'入围时间:入围时间储存
const ecsm=1800'清空时间-每次清空与入围时间
urmx="asai.cc/i/"
urm="asai.cc/i/#asai.cc/i/"

'---------------------------------------------------------------------------------------------------------
Function CHtit(fString) 
if not isnull(fString) then
dim clearH
set clearH = new RegExp 
clearH.Pattern = "<[^>]*>" 
clearH.Global = true 
CHtit = clearH.Replace(fString,"") 
CHtit = Replace(CHtit,"&nbsp;", " ")
CHtit = Replace(CHtit," ", "")
CHtit = Replace(CHtit,"‘", "＂")
CHtit = Replace(CHtit,"’", "＂")
CHtit = Replace(CHtit,"“", "＂")
CHtit = Replace(CHtit,"”", "＂")
CHtit = Replace(CHtit,"'", "＂")
CHtit = Replace(CHtit,"""", "＂")
CHtit = Replace(CHtit,"＂＂＂", "＂")
CHtit = Replace(CHtit,"＂＂", "＂")
end if
end function
Function aiip()
Dim aiiaddr,aiihttp
aiihttp=Request.ServerVariables("HTTP_X_FORWARDED_FOR")
If aiihttp="" Or InStr(aiihttp,"unknown")>0 Then
aiiaddr=Request.ServerVariables("REMOTE_ADDR")
ElseIf InStr(aiihttp,",")>0 Then
aiiaddr=Mid(aiihttp,1,InStr(aiihttp,",") -1)
ElseIf InStr(aiihttp,";")>0 Then
aiiaddr=Mid(aiihttp,1,InStr(aiihttp,";") -1)
Else
aiiaddr=aiihttp
End if
aiip=Trim(Mid(aiiaddr,1,15))
if aiip="::1" then:aiip="www.asai.cc"
End Function
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
'---------------------------------------------------------------------------------------------------------
if trim(request("a"))="" then
htp=CHtit(Request.ServerVariables("QUERY_STRING"))
htp=replace(htp,".html","")
if htp<>"" then
arr=split(htp,"AsaiU")
if UBound(arr)>0 then
if UBound(arr)=2 then
if arr(2)="EESai" then
hurra=split(anfr("ECShuaS.txt")&anfr("ECShuaA.txt"),"<bR>")
RANDOMIZE
huii=INT((UBound(hurra)+1)*RND)
hurrb=split(hurra(huii),"〓")
url=hurrb(1)
else
url=replace(CHtit(arr(0)),"AsaiG","/")
url=replace(url,"AsaiD",".")
end if
else
url=replace(CHtit(arr(0)),"AsaiG","/")
url=replace(url,"AsaiD",".")
end if
tm=arr(1)
else
url=replace(CHtit(arr(0)),"AsaiG","/")
url=replace(url,"AsaiD",".")
tm=5
end if
else
tm=3
url=urmx
end if
%>
<script>
var tm=<%=tm%>;
var url="<%=url%>";
document.write("<meta http-equiv='refresh' content='"+tm+"';URL='#'>");
document.write("<iframe src='_self' width='0' height='0' src='http://"+url+"'></iframe>");
</script><%else
if trim(request("a"))<>"" then
nu=CHtit(trim(request("a")))
else
nu=""
end if
if trim(request("urlx"))<>"" then
urlx=replace(trim(request("urlx")),"http://","")
urlx=CHtit(urlx)
ux=replace(urlx,".","AsaiD")
ux=replace(ux,"/","AsaiG")
urmrr=split(urm,"#")
humy=""
for urmi=0 to ubound(urmrr)
humy=humy&"1.1.1.1〓"&urmrr(urmi)&"<bR>"
next
Call anfw(now(),"ECShuaT.txt")

if trim(request("hu"))="asai.cc" and urlx<>Request.Cookies("ECShuaUrl") then
if not IsDate(Request.Cookies("ECShuaUrlt")) then response.Cookies("ECShuaUrlt")=now()
response.Cookies("ECShuaUrl")=urlx

If datediff("s",Request.Cookies("ECShuaUrlt"),now())>ecsm Then
'--------过滤入围
dim huarra,huaii,hualins,huain
huain=split(urlx&"/","/")(0)
hualins=""
huarra=split(anfr("ECShuaA.txt"),"<bR>")
for huaii=0 to ubound(huarra)
if InStr(lcase(huarra(huaii)),lcase(huain))>0 then
response.Write("IP:"&replace(huarra(huaii),"〓","<br>网址：")&"<br>被清理！<br><br>")
else
hualins=hualins&huarra(huaii)&"<bR>"
end if
next
Call anfw(aiip()&"〓"&urlx&"<bR>"&hualins,"ECShuaA.txt")
response.Cookies("ECShuaUrlt")=now()
end if

If datediff("s",anfr("ECShuaT.txt"),now())>ecsm Then 
'Call anfw(anfr("../c/"&eckk&"/EESaiChat.txt")&ecgx&""&ecgg&""&ecgg&aiip()&ecgg&now()&ecgg&"互刷IP公告:已清空超时网址(s)<br>大家可以在这里交流.<br>"&replace(anfr("ECShuaS.txt"),humy,"")&ecgg&""&ecgg&""&ecgg&""&ecgg&"SYS"&ecgg&"5","../c/"&eckk&"/EESaiChat.txt")
'asaidbnr="<p><b>流量哥</b><s>互刷IP公告：已清空超时网址（"&now()&"）！</s></p>"
'application.lock
'application(asai_sn&asairsn&"id")=application(asai_sn&asairsn&"id")+1
'application(asai_sn&asairsn&"str")=right(application(asai_sn&asairsn&"str"),asai_len)&asaidbnr
'application.unlock
'response.Write("<div style=""display:none""><iframe frameborder=0 height=0 width=0 src=http://chat.asai.cc/?rx"&u_gg&""&asairsn&""&u_gg&"time-refresh></iframe></div>")
Call anfw(now(),"ECShuaT.txt")
Call anfw(humy,"ECShuaS.txt")
end if
Call anfw(aiip()&"〓"&urlx&"<bR>"&replace(anfr("ECShuaT.txt"),aiip()&"〓"&urlx&"<bR>",""),"ECShuaS.txt")
'Call anfw(anfr("../c/"&eckk&"/EESaiChat.txt")&ecgx&""&ecgg&""&ecgg&aiip()&ecgg&now()&ecgg&"网址:"&urlx&"(s)"&ecgg&""&ecgg&""&ecgg&""&ecgg&""&ecgg&"0","../c/"&eckk&"/EESaiChat.txt")
'asaidbnr="<p><b>_"&aiip()&"</b><s>网址["&urlx&"]加入互刷！</s></p>"
'application.lock
'application(asai_sn&asairsn&"id")=application(asai_sn&asairsn&"id")+1
'application(asai_sn&asairsn&"str")=right(application(asai_sn&asairsn&"str"),asai_len)&asaidbnr
'application.unlock
response.Write("<div style=""display:none""><iframe frameborder=0 height=0 width=0 src=http://chat.asai.cc/?rx"&u_gg&""&asairsn&""&u_gg&""&urlx&"></iframe></div>")
end if

else
urlx=""
ux=urmx
end if
if trim(request("tm"))<>"" then
tm=CHtit(trim(request("tm")))
else
tm=3
end if
%>
<form method="post" action="">
<table width="100%" border="0" cellspacing="1" cellpadding="5" align="center" bgcolor="#0182e0">
<%if request("hu")="" then%>
<tr style="color:#fff;"><td colspan="2" align="center"><strong>[编号<%=nu%>]刷PV的网页</strong></td></tr>
<%else%>
<tr style="color:#ff0;"><td colspan="2" align="center"><strong>刷IP的网页(编号<%=nu%>)</strong></td></tr>
<%end if%>
<tr bgcolor="#FFFFFF">
<td width="36%" align="right">网页地址:</td>
<td width="62%" align="left">http://<input type="text" name="urlx" id="urlx" value="<%=urlx%>" style="width:60%;" /></td>
</tr>
<tr bgcolor="#FFFFFF">
<td width="36%" align="right">刷新间隔:</td>
<td width="62%" align="left">每 <input type="text" name="tm" id="tm" value="<%=tm%>" style="width:20%;" /> 秒刷新一次</td>
</tr>
<tr bgcolor="#FFFFFF">
<td colspan="2" align="center"><%if ux<>"" and ux<>urmx then%><%if trim(request("hu"))="asai.cc" then
If datediff("s",Request.Cookies("ECShuaUrlt"),now())>ecsm Then response.Write("<span title=点击再次提交可获得一次长期刷流量体验(即使您不在线也可以刷哦)>★</span>")
%><input type="submit" value=" 再次提交 " />&nbsp;<font color="red">正刷IP...</font><iframe src="?<%=ux%>AsaiU<%=tm%>AsaiUEESai.html" frameborder="0" width="0" height="0"></iframe><%else%><input type="submit" value=" 重新修改 " />&nbsp;<font color="red">自刷PV...</font><iframe src="?<%=ux%>AsaiU<%=tm%>.html" frameborder="0" width="0" height="0"></iframe><%end if%><%else%><input type="submit" value=" 确定刷新 " /><%end if%></td>
</tr>
</table>
</form><script>
var obj = document.getElementsByTagName("table"); 
for(i=0;i<obj.length;i++){ 
var str = "0123456789"; 
var t = "#"; 
for(j=0;j<6;j++) 
{t = t+ str.charAt(Math.random()*str.length);} 
obj[i].style.background=t;} 
</script><%end if%>
</body></html>