<%
dim tjurl,tjId
tjurl=Request.ServerVariables("QUERY_STRING")

if tjurl="jisuan.asai.cc" then
tjId="3566e8db3adf411610de0f981ce96ac7"
elseif tjurl="qiyun.asai.cc" then
tjId="8150aa2c440dd3dfd8a9d79dd26077db"
else
tjId="4b2c74bd5d96e4e0536ecb41225345fa"
end if

%>var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?<%=tjId%>";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();