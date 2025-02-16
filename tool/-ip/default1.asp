<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%><%Option Explicit%><%
dim asaity,asaiip,asaigs,asaistr,asaimyip,asaimygs,asaimystr
asaity=request("ty")
if asaity="1" then'JS调用
asaiip=Request("ip")
%>document.write('<%=Look_Ip(asaiip)%>');<%
elseif asaity="2" then'ajax读取
asaiip=Request("ip")
%><%=Look_Ip(asaiip)%><%
else
asaiip=Request("ip")
if len(asaiip)>6 and request("pl")<>"1" then
Response.Redirect("./?"&asaiip)
else
if request("pl")="1" then

else
asaiip=Request.ServerVariables("QUERY_STRING")
if len(asaiip)>6 then
asaigs=Look_Ip(asaiip)
asaistr="<h1 style=color:#F00;>您查询的IP["&asaiip&"]归属地："&asaigs&"</h1>"
end if

asaimyip=Request.ServerVariables("REMOTE_ADDR")
if len(asaimyip)<7 then asaimyip=Request.ServerVariables("HTTP_X_FORWARDED_FOR")
if len(asaimyip)<7 then asaimyip="127.0.0.1"
asaimygs=Look_Ip(asaimyip)
asaimystr="<p style=color:#0F0;>您当前的IP["&asaimyip&"]归属地："&asaimygs&"</p>"
if asaistr="" then
asaiip=asaimyip
asaigs=asaimygs
asaistr=asaimystr
asaimystr=""
end if
end if
%><!doctype html>
<html>
<head>
<meta charset="utf-8" /><link rel="shortcut icon" type="image/icon" href="http://x.asai.cc/js/logo/favicon.ico" />
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
<title><%=asaiip&"归属地:"&asaigs%>,IP查询,<%=year(date())%>年最新IP归属地查询</title>
<meta name="keywords" content="<%=asaiip&"归属地"&asaigs%>,IP查询,<%=year(date())%>年最新IP归属地查询,阿赛网站系统专用IP查询">
<meta name="description" content="<%=asaiip&"归属地"&asaigs%>,IP查询,<%=year(date())%>年最新IP归属地查询,阿赛网站系统专用IP查询">
<meta name="copyright" content="<%=asaiip&"归属地"&asaigs%>,IP查询,<%=year(date())%>年最新IP归属地查询,阿赛工作室,郭言赛,Asai.Wang">
</head>
<body><div style="text-align:center;"><img style="max-width:100%;" src="http://x.asai.cc/js/logo/logo-z-ip.png">
<br><br>
<%if request("pl")="1" then

else%>
<%=asaistr%>
<form method="post" name="ipform" action="./">请输入要搜索的IP ：<input type="text" name="ip" size="36" value="<%=asaiip%>"> <input type="submit" value="搜索位置"></form>
<%=asaimystr%>
<br><br>技术支持: 阿赛工作室　数据支持: <%=WryInfo()%>
<p style="font-size:small;color:#999;">
JS调用代码：&lt;script charset=&quot;utf-8&quot; src=&quot;http://ip.asai.cc/?ty=1&amp;ip=<s>IP地址</s>&quot;&gt;&lt;/script&gt;
<br>AJAX读取地址：http://ip.asai.cc/?ty=2&amp;ip=<s>IP地址</s>
<br>链接查询地址：http://ip.asai.cc/?<s>IP地址</s>
</p>
<%end if%>
<div style="display:none"><br><br><a href="./">查询主页</a> <a href="?pl=1">批量查询</a></div><br><br><script charset="UTF-8" src="http://x.asai.cc/js/AsaiCount/?http://ip.asai.cc/"></script>
</div>
<script src="http://x.asai.cc/js/gg-link.js"></script>
<script>
document.write(ggLink);
</script>
</body>
</html><%
end if
end if
' ============================================
' 返回IP信息 Disp_IPAddressData(IP,0)
'Response.Write Look_Ip("106.14.175.42")
' ============================================
Function Look_Ip(IP)
        Dim Wry, IPType, QQWryVersion, IpCounter
        ' 设置类对象
        Set Wry = New TQQWry
        ' 开始搜索，并返回搜索结果
        ' 您可以根据 QQWry(IP) 返回值来判断该IP地址在数据库中是否存在，如果不存在可以执行其他的一些操作
        ' 比如您自建一个数据库作为追捕等，这里我就不详细说明了
        IPType = Wry.QQWry(IP)
        ' Country：国家地区字段
        ' LocalStr：省市及其他信息字段
        Look_Ip =Wry.Country & "" & Wry.LocalStr
        '''''Look_Ip = Wry.Country & ""
End Function
' ============================================
' 返回IP信息 JS调用
'Response.Write Disp_IPAddressData("106.14.175.42",2)
' ============================================
Function Disp_IPAddressData(IP, sType)
        Dim Wry, IPType
        Set Wry = New TQQWry
        IPType = Wry.QQWry(IP)
        
        Select Case sType
                Case 1 Disp_IPAddressData =  IP
                Case 2 Disp_IPAddressData =  Wry.Country
                Case 3 Disp_IPAddressData = Wry.LocalStr
                'Case Else Disp_IPAddressData =  Wry.Country & "" & Wry.LocalStr
                Case Else Disp_IPAddressData =  Wry.Country 
        End Select
End Function
' ============================================
' 返回QQWry信息
'Response.Write WryInfo()
' ============================================
Function WryInfo()
        Dim Wry, IPType, QQWry_tem(0), QQWry_tem1(1)
        ' 设置类对象
        Set Wry = New TQQWry
        IPType = Wry.QQWry("255.255.255.254")
        ' 读取数据库版本信息
        QQWry_tem(0) = Wry.Country & " " & Wry.LocalStr
        ' 读取数据库IP地址数目
        QQWry_tem1(1) = Wry.RecordCount + 1
        WryInfo = QQWry_tem(0)& " " & QQWry_tem1(1)
End Function

Class TQQWry
        ' ============================================
        ' 变量声名
        ' ============================================
        Dim Country, LocalStr, Buf, OffSet
        Private StartIP, EndIP, CountryFlag
        Public QQWryFile
        Public FirstStartIP, LastStartIP, RecordCount
        Private Stream, EndIPOff
        ' ============================================
        ' 类模块初始化
        ' ============================================
        Private Sub Class_Initialize
                Country                 = ""
                LocalStr                 = ""
                StartIP                 = 0
                EndIP                         = 0
                CountryFlag         = 0 
                FirstStartIP         = 0 
                LastStartIP         = 0 
                EndIPOff                 = 0 
                QQWryFile = Server.MapPath("qqwry.dat") 'QQ纯真IP库存放路径，要改为你的路径
        End Sub
        ' ============================================
        ' IP地址转换成整数
        ' ============================================
        Function IPToInt(IP)
                Dim IPArray, i
                IPArray = Split(IP, ".", -1)
				if ubound(IPArray)>2 then
                FOr i = 0 to 3
                        If Not IsNumeric(IPArray(i)) Then IPArray(i) = 0
                        If CInt(IPArray(i)) < 0 Then IPArray(i) = Abs(CInt(IPArray(i)))
                        If CInt(IPArray(i)) > 255 Then IPArray(i) = 255
                Next
                IPToInt = (CInt(IPArray(0))*256*256*256) + (CInt(IPArray(1))*256*256) + (CInt(IPArray(2))*256) + CInt(IPArray(3))
				end if
        End Function
        ' ============================================
        ' 整数逆转IP地址
        ' ============================================
        Function IntToIP(IntValue)
                p4 = IntValue - Fix(IntValue/256)*256
                IntValue = (IntValue-p4)/256
                p3 = IntValue - Fix(IntValue/256)*256
                IntValue = (IntValue-p3)/256
                p2 = IntValue - Fix(IntValue/256)*256
                IntValue = (IntValue - p2)/256
                p1 = IntValue
                IntToIP = Cstr(p1) & "." & Cstr(p2) & "." & Cstr(p3) & "." & Cstr(p4)
        End Function
        ' ============================================
        ' 获取开始IP位置
        ' ============================================
        Private Function GetStartIP(RecNo)
                OffSet = FirstStartIP + RecNo * 7
                Stream.Position = OffSet
                Buf = Stream.Read(7)
                
                EndIPOff = AscB(MidB(Buf, 5, 1)) + (AscB(MidB(Buf, 6, 1))*256) + (AscB(MidB(Buf, 7, 1))*256*256) 
                StartIP  = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256) + (AscB(MidB(Buf, 4, 1))*256*256*256)
                GetStartIP = StartIP
        End Function
        ' ============================================
        ' 获取结束IP位置
        ' ============================================
        Private Function GetEndIP()
                Stream.Position = EndIPOff
                Buf = Stream.Read(5)
                EndIP = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256) + (AscB(MidB(Buf, 4, 1))*256*256*256) 
                CountryFlag = AscB(MidB(Buf, 5, 1))
                GetEndIP = EndIP
        End Function
        ' ============================================
        ' 获取地域信息，包含国家和和省市
        ' ============================================
        Private Sub GetCountry(IP)
                If (CountryFlag = 1 Or CountryFlag = 2) Then
                        Country = GetFlagStr(EndIPOff + 4)
                        If CountryFlag = 1 Then
                                LocalStr = GetFlagStr(Stream.Position)
                                ' 以下用来获取数据库版本信息
                                If IP >= IPToInt("255.255.255.0") And IP <= IPToInt("255.255.255.255") Then
                                        LocalStr = GetFlagStr(EndIPOff + 21)
                                        Country = GetFlagStr(EndIPOff + 12)
                                End If
                        Else
                                LocalStr = GetFlagStr(EndIPOff + 8)
                        End If
                Else
                        Country = GetFlagStr(EndIPOff + 4)
                        LocalStr = GetFlagStr(Stream.Position)
                End If
                ' 过滤数据库中的无用信息
                Country = Trim(Country)
                LocalStr = Trim(LocalStr)
                If InStr(Country, "CZ88.NET") Then Country = ""
                If InStr(LocalStr, "CZ88.NET") Then LocalStr = ""
        End Sub
        ' ============================================
        ' 获取IP地址标识符
        ' ============================================
        Private Function GetFlagStr(OffSet)
                Dim Flag
                Flag = 0
                Do While (True)
                        Stream.Position = OffSet
                        Flag = AscB(Stream.Read(1))
                        If(Flag = 1 Or Flag = 2 ) Then
                                Buf = Stream.Read(3) 
                                If (Flag = 2 ) Then
                                        CountryFlag = 2
                                        EndIPOff = OffSet - 4
                                End If
                                OffSet = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256)
                        Else
                                Exit Do
                        End If
                Loop
                
                If (OffSet < 12 ) Then
                        GetFlagStr = ""
                Else
                        Stream.Position = OffSet
                        GetFlagStr = GetStr() 
                End If
        End Function
        ' ============================================
        ' 获取字串信息
        ' ============================================
        Private Function GetStr() 
                Dim c
                GetStr = ""
                Do While (True)
                        c = AscB(Stream.Read(1))
                        If (c = 0) Then Exit Do 
                        
                        '如果是双字节，就进行高字节在结合低字节合成一个字符
                        If c > 127 Then
                                If Stream.EOS Then Exit Do
                                GetStr = GetStr & Chr(AscW(ChrB(AscB(Stream.Read(1))) & ChrB(C)))
                        Else
                                GetStr = GetStr & Chr(c)
                        End If
                Loop 
        End Function
        ' ============================================
        ' 核心函数，执行IP搜索
        ' ============================================
        Public Function QQWry(DotIP)
                Dim IP, nRet
                Dim RangB, RangE, RecNo
                
                IP = IPToInt (DotIP)
                
                Set Stream = CreateObject("ADodb.Stream")
                Stream.Mode = 3
                Stream.Type = 1
                Stream.Open
                Stream.LoadFromFile QQWryFile
                Stream.Position = 0
                Buf = Stream.Read(8)
                
                FirstStartIP = AscB(MidB(Buf, 1, 1)) + (AscB(MidB(Buf, 2, 1))*256) + (AscB(MidB(Buf, 3, 1))*256*256) + (AscB(MidB(Buf, 4, 1))*256*256*256)
                LastStartIP  = AscB(MidB(Buf, 5, 1)) + (AscB(MidB(Buf, 6, 1))*256) + (AscB(MidB(Buf, 7, 1))*256*256) + (AscB(MidB(Buf, 8, 1))*256*256*256)
                RecordCount = Int((LastStartIP - FirstStartIP)/7)
                ' 在数据库中找不到任何IP地址
                If (RecordCount <= 1) Then
                        Country = "未知"
                        QQWry = 2
                        Exit Function
                End If
                
                RangB = 0
                RangE = RecordCount
                
                Do While (RangB < (RangE - 1)) 
                        RecNo = Int((RangB + RangE)/2) 
                        Call GetStartIP (RecNo)
                        If (IP = StartIP) Then
                                RangB = RecNo
                                Exit Do
                        End If
                        If (IP > StartIP) Then
                                RangB = RecNo
                        Else 
                                RangE = RecNo
                        End If
                Loop
                
                Call GetStartIP(RangB)
                Call GetEndIP()

                If (StartIP <= IP) And ( EndIP >= IP) Then
                        ' 没有找到
                        nRet = 0
                Else
                        ' 正常
                        nRet = 3
                End If
                Call GetCountry(IP)

                QQWry = nRet
        End Function
        ' ============================================
        ' 类终结
        ' ============================================
        Private Sub Class_Terminate
                On ErrOr Resume Next
                Stream.Close
                If Err Then Err.Clear
                Set Stream = Nothing
        End Sub
End Class 
%>