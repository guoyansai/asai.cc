<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Asai.CC</title>
<style>
*{
	padding:0;
	margin:0;
	font-size:large;
}
.d{
	position:relative;
	width:400px;
	height:300px;
	overflow:hidden;
	float:left;
}
.d .da{
	display:block;
	width:400px;
	height:300px;
	overflow:hidden;
	text-decoration:none;
	color:#282828;	
}
.d:hover .m{
	display:block;
}
.m{
	display:none;
	position:absolute;
	top:0;
	right:0;
	width:100px;
	height:28px;
	line-height:28px;
	background-color:#ffffff;
	font-size:small;
	text-align:center;
}
.m a{
	font-size:small;
	text-decoration:none;
	color:#666666;
}
</style>
</head>

<body>
<%for i = 1 to 10%>
<div class="d"><a href="#" class="da"><img src="http://x.asai.cc/js/tx/<%=i%>.jpg"><%=i%></a><div class="m"><a href="#2">抢占</a> <a href="#1">销毁</a></div></div>
<%next%>
<script>
	var obj = document.getElementsByClassName("d");
	for (i = 0; i < obj.length; i++) {
		var str = "bcdef";
		var t = "#";
		for (j = 0; j < 6; j++) { t = t + str.charAt(Math.random() * str.length); }
		if(i === 0){
		document.body.style.background = t;
		}
		obj[i].style.background = t;
	}
</script>
</body>
</html>
