<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%><%
dim tjurl
tjurl=Request.ServerVariables("QUERY_STRING")
if right(tjurl,6)="asai.cc" then%>

<%elseif right(tjurl,6)="asai.cc" then%>

<%elseif right(tjurl,6)="asai.cc" then%>

<%else%>
<!doctype html>
<html>
<head>
<meta charset="utf-8" /><link rel="shortcut icon" type="image/icon" href="http://x.asai.cc/js/logo/favicon.ico" />
<title>阿赛JS插件组</title>
</head>

<body>
	<script src="gg-say.js"></script>
	<script src="gg-right.js"></script>
	<script>
		document.write(ggRight); // right show
		document.getElementsByTagName("title")[0].innerText += ',' + tit + '-' + title; // add title
	</script>
</body>
</html>
<%end if%>