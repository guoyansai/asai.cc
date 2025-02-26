<%
dim wi_va,wi_bt,wi_bs,wi_sz,wi_bg,wi_fg,wi_url,wi_str
wi_url="http://ewm.asai.cc/"
wi_va=request("va"):if wi_va="" then wi_va="http://www.asai.cc"
wi_bt=request("bt")
wi_bs=request("bs"):if wi_bs="" then wi_bs="#000000"
wi_sz=request("sz"):if wi_sz="" then wi_sz="400"
wi_fg=request("fg"):if wi_fg="" then wi_fg="#000000"
wi_bg=request("bg"):if wi_bg="" then wi_bg="#FFFFFF"
wi_str="<script src="&wi_url&"jquery-1.10.2.js></script><script src="&wi_url&"jquery.qrcode.js></script><script src="&wi_url&"scripts.js></script><div id=container></div><input type=hidden id=render value=canvas><input type=hidden id=size value="&wi_sz&"><input type=hidden id=color value='"&wi_fg&"'><input type=hidden id=bg-color value='"&wi_bg&"'><input type=hidden id=text value='"&wi_va&"'><input type=hidden id=minversion value=6><input type=hidden id=eclevel value=H title='L - Low (7%) M - Medium (15%) Q - Quartile (25%) H - High (30%)'><input type=hidden id=quiet value=1><input type=hidden id=radius value=50><input type=hidden id=mode value=2 title='0 - Normal 1 - Label-Strip 2 - Label-Box 3 - Image-Strip 4 - Image-Box'><input type=hidden id=label value='"&wi_bt&"'><input type=hidden id=fontsize value=12><input type=hidden id=font value=Ubuntu><input type=hidden id=fontcolor value='"&wi_bs&"'><input type=hidden id=image value=><input type=hidden id=imagesize value=>"
if request("ty")="1" then
Response.Write wi_str
else
Response.Write "document.write("""&wi_str&""");"
end if

%>