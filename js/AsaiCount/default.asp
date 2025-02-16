<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%><%Option Explicit%><!--#include file="../../asp/_user/asai.asp"--><%
const db_gg="　"
dim db_www,db_dir,db_tj,db_zx,db_ly
airr=split(g_urs,"/")
if ubound(airr)>1 then
db_www=replace(airr(2),":","_")
else
db_www="_asai"
end if
db_dir="db/"&db_www&"/"
db_tj=db_dir&"tj.txt"'总计2174388052,1今日2019-04-24,2今访1,3昨日2019-04-22,4昨访1,5峰日2015-10-09,6峰访4217810,7起始2009-12-12,8天数2957
db_zx=db_dir&"zx.txt"
db_ly=db_dir&"ly.txt"
'管理中心
if g_u0="admin" then
if g_u1="tj" then
g_mt="访问统计"
elseif g_u1="zx" or g_u1="online" then
g_mt="最近访问"
elseif g_u1="ly" then
g_mt="留言反馈"
else
g_mt="管理中心"
end if
%><!doctype html>
<html>
<head>
<meta charset="utf-8" /><link rel="shortcut icon" type="image/icon" href="http://x.asai.cc/js/logo/favicon.ico" />
<title><%=g_mt%></title>
</head>
<body>
<%if g_u1="tj" then%>

<%elseif g_u1="zx" then%>

<%elseif g_u1="ly" then%>

<%elseif g_u1="online" then
'--------在线read
function jszxr()
dim zxdrr
ailin=aifrd(db_zx)
airr=split(ailin,vbcrlf)
jszxr="<table width=100% border=1 cellspacing=1 cellpadding=1><tr><td>来自</td><td>标识</td><td>时间</td><td>网址</td></tr>"
for aii=0 to ubound(airr)
zxdrr=split(airr(aii),db_gg)
if ubound(zxdrr)>2 then
jszxr=jszxr&"<tr><td><a target=_blank href=http://ip.asai.cc/?"&zxdrr(0)&">"&zxdrr(0)&"</a></td><td>"&zxdrr(1)&"</td><td>"&zxdrr(2)&"</td><td><a target=_blank href="&zxdrr(3)&">"&zxdrr(3)&"</a></td></tr>"
if ubound(zxdrr)>5 then jszxr=jszxr&"<tr><td></td><td>"&zxdrr(4)&"</td><td>"&zxdrr(5)&"</td><td><a target=_blank href="&zxdrr(6)&">"&zxdrr(6)&"</a></td></tr>"
end if
next
jszxr=jszxr&"</table>"
end function
response.Write jszxr()
%>
<%end if%>
</body>
</html><%
'访问统计JS调用处理
elseif g_urs<>"" then
'--------统计
function jstj(jsfty)
ailin=aifrd(db_tj)
airr=split(ailin,db_gg)
if ubound(airr)=8 then
ailin=int(airr(0)+1)&db_gg
if aitm(2,date())=aitm(2,airr(1)) then
ailin=ailin&airr(1)&db_gg&int(airr(2)+1)&db_gg&airr(3)&db_gg&airr(4)&db_gg&airr(5)&db_gg&airr(6)&db_gg&airr(7)&db_gg&airr(8)
else
ailin=ailin&date()&db_gg&"1"&db_gg&airr(1)&db_gg&airr(2)&db_gg
if airr(2)>airr(6) then
ailin=ailin&airr(1)&db_gg&airr(2)&db_gg
else
ailin=ailin&airr(5)&db_gg&airr(6)&db_gg
end if
ailin=ailin&airr(7)&db_gg&int(airr(8)+1)
end if
else
ailin="1"&db_gg&date()&db_gg&"1"&db_gg&date()-1&db_gg&"0"&db_gg&date()-1&db_gg&"0"&db_gg&date()&db_gg&"1"
airr=split(ailin,db_gg)
end if
Call aifwr(db_tj,ailin)
' if jsfty>0 then jstj="今天"&airr(1)&"访问 <b>"&airr(2)&"</b> 人　昨天"&airr(3)&"访问 <b>"&airr(4)&"</b> 人　最高"&airr(5)&"访问 <b>"&airr(6)&"</b> 人　自从"&airr(7)&"访问 <b>"&airr(0)&"</b> 人　统计 <b>"&airr(8)&"</b> 天每天约 <b>"&int(airr(0)/airr(8))&"</b> 人访问"
end function
'--------在线
function jszx(jsfty,jsfstr)
dim zxdlin,zxdip,zxdss
zxdip=aiip()
zxdss=Session.SessionID
zxdlin=zxdip&db_gg&zxdss&db_gg&now()&db_gg&jsfstr
ailin=aifrd(db_zx)
if instr(ailin,zxdip&db_gg)>0 then
dim zxdr,zxdrr,zxdrr1
airr=split(ailin,zxdip&db_gg)
ailin=airr(0)
zxdrr=split(airr(1),vbcrlf)
zxdrr1=split(airr(1),zxdrr(0)&vbcrlf)
ailin=ailin&zxdrr1(1)
airr=split(zxdrr(0),db_gg)
if ubound(airr)>1 then zxdlin=zxdlin&db_gg&airr(0)&db_gg&airr(1)&db_gg&airr(2)
end if
ailin=zxdlin&vbcrlf&ailin
ailin=left(ailin,6666)
Call aifwr(db_zx,ailin)
if jsfty>0 then
jszx="<a target=_blank href=http://x.asai.cc/js/AsaiCount/?admin/online/"&db_www&">最近访客记录</a>　<a target=_blank href=http://chat.asai.cc/?"&db_www&">无限畅聊平台</a>"
end if
end function

Response.Write("document.write("""&jstj(1)&"<br>"&jszx(1,g_urs)&""");")
else%><%="ip:"&aiip()&" time:"&aitmx(now(),9)%><%end if%>