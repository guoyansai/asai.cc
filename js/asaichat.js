//**阿赛聊天室JS---------------0
//dj无道具=0|下划线=1|加粗体=2|倾斜体=3|红色字=4|蓝色字=5|绿色字=6|黄背景=7
//ty普通信息=0|协管信息=1|总管信息=2|站长信息=3|公告信息=4|系统信息=5
//xy☆☆☆☆☆|★☆☆☆☆|★★☆☆☆|★★★☆☆|★★★★☆|★★★★★,数字越大推荐越靠前.
function asainull(afstr) {if (afstr=null || afstr==null || afstr==undefined || afstr=='undefined' || afstr=='' || afstr=='0' || afstr==0){return true}else{return false}}
function asaierr(afstr) {if(ub_err>9){document.write(afstr+'<br><br>');}}
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
function asaispeakcancel(){window.speechSynthesis.cancel();}
//var asaitime=0;
//**阿赛聊天室asaiXHP---------------0
function asaiXHP(){
//if(asaitime<1000){asaitime++}else{asaitime=0};
//alert(asaitime);
var asaichatshow=document.getElementById("asaichatshow").innerHTML;
var asaichatshowci=document.getElementById("asaichatshowci").value;
//asaiXML获取最新ci
var asaiXMLci;
if(window.ActiveXObject){asaiXMLci=new ActiveXObject("Microsoft.XMLHTTP");}
else if(window.XMLHttpRequest){asaiXMLci=new window.XMLHttpRequest();}
asaiXMLci.open("POST",ub_uri+'///'+asaichatshowci,false);
asaiXMLci.send(null);
var asaichatshowcix=unescape(asaiXMLci.responseText);

asaierr('远程计数='+asaichatshowcix+'<br>本地计数='+asaichatshowci+'<br>本地内容：<br>'+asaichatshow+'');
if(asainull(asaichatshow) || asainull(asaichatshowci) || asaichatshowcix!==asaichatshowci || ub_err>9){
	//asaiXMLnr获取最新内容
	var asaiXMLnr;
	if(window.ActiveXObject){asaiXMLnr=new ActiveXObject("Microsoft.XMLHTTP");}
	else if(window.XMLHttpRequest){asaiXMLnr=new window.XMLHttpRequest();}
	asaiXMLnr.open("POST",ub_urn+'///'+asaichatshowci,false);
	asaiXMLnr.send(null);
	var ub_str=unescape(asaiXMLnr.responseText);
	asaierr('远程内容：<br>'+ub_str);
	var ac_sn,ac_sj,ac_nr,ac_us,ac_us0,ac_us1,ac_u1,ac_u10,ac_u11,ac_ty,ac_dj,ac_tm,ac_xy,arr_us,arr_u1,als_lin,arr_x,aii_y,arr_lin,arr_str;
	ub_str=ub_mos+ub_str;
	var arr_y=ub_str.split(ub_y);
	var ann_y=arr_y.length;
	asaierr('数组长度='+ann_y);
	als_lin="";
	if(ann_y>1){
		var asaichatshowx="";
		arr_str="";
		function asais2v(afstr) {eval('var asaisjson='+afstr);return asaisjson;}
		function asaipt(afcs,afstr){afcs=eval("/"+afcs+"/");return afstr.match(afcs) ? afstr.match(afcs).length : 0;}
		for(aii_y=1; aii_y<ann_y; aii_y++)
		{
		arr_lin=arr_y[aii_y]
		arr_str=ub_y+arr_lin+arr_str
		asaierr('数组['+aii_y+']<br>'+arr_lin);
		arr_x=arr_lin.split(ub_x);
		ac_sn=arr_x[0];ac_sj=arr_x[1];ac_nr=arr_x[2];ac_us=arr_x[3];arr_us=ac_us.split(", ");ac_us0=arr_us[0];ac_us1=arr_us[1];ac_u1=arr_x[4];arr_u1=ac_u1.split(", ");ac_u10=arr_u1[0];ac_u11=arr_u1[1];ac_ty=arr_x[5];ac_dj=arr_x[6];ac_tm=arr_x[7];ac_xy=arr_x[8];
		
		als_lin='<div class="ack_d">';
		if(!asainull(ub_user)){
		als_lin=als_lin+'<div class="ack_my'
		if(ub_user==ac_us1){als_lin=als_lin+'1'}else if(ub_user==ac_u11){als_lin=als_lin+'2'}
		als_lin=als_lin+'">'
		}
		als_lin=als_lin+'<div class="ack_k ack_ty'+ac_ty+'">'
		als_lin=als_lin+'<div class="ack_xy'+ac_xy+'">'
		
		if(ub_cty>9){
		if(!asainull(ac_sj)&&asaipt(ub_y+ac_sj,arr_str)>0){asaierr('数组['+aii_y+']的修饰调用变量=F'+ac_sj);als_lin=als_lin+asais2v('F'+ac_sj);};
		als_lin=als_lin+'<div class="ack_nr"'
		if(ub_yin==9){als_lin=als_lin+' onMouseOver="asaispeak(this.innerHTML);" onMouseOut="asaispeakcancel();"'}
		als_lin=als_lin+'><span class="u_ydj'+ac_dj+'">'+ac_nr+'</span></div>';
		}
		
		als_lin=als_lin+'<div class="ack_bt">'
		if(!asainull(ac_us0)){
		als_lin=als_lin+'<span'
		if(!asainull(ac_us1)&&ac_us1.indexOf("iP") == -1){als_lin=als_lin+' title="'+ac_us1+'" class="ack_us" onclick="document.getElementById(\'ack_formx\').style.display=\'block\';document.getElementById(\'sj\').value=\'\';document.getElementById(\'u10\').value=\''+ac_us0+'\';document.getElementById(\'u11\').value=\''+ac_us1+'\';"'}else{als_lin=als_lin+' class="ack_uf"';}
		als_lin=als_lin+'>'+ac_us0+'</span>'
		}
		if(!asainull(ac_u10)){
		als_lin=als_lin+'<span'
		if(!asainull(ac_u11)&&ac_u11.indexOf("iP") == -1){als_lin=als_lin+' class="ack_us" title="'+ac_u11+'" onclick="document.getElementById(\'ack_formx\').style.display=\'block\';document.getElementById(\'sj\').value=\'\';document.getElementById(\'u10\').value=\''+ac_u10+'\';document.getElementById(\'u11\').value=\''+ac_u11+'\';"'}else{als_lin=als_lin+' class="ack_uf""'}
		als_lin=als_lin+'>@'+ac_u10+'</span>'
		}
		als_lin=als_lin+'</div>'
		
		als_lin=als_lin+'<div class="ack_do"><span class="ack_mx">'
		if(!asainull(ac_us1)&&ac_us1.indexOf("iP") == -1){als_lin=als_lin+'<span onclick="document.getElementById(\'ack_formx\').style.display=\'block\';document.getElementById(\'sj\').value=\''+ac_sn+'\';document.getElementById(\'u10\').value=\''+ac_us0+'\';document.getElementById(\'u11\').value=\''+ac_us1+'\';">回复</span>'}
		if(!asainull(ub_urv)){als_lin=als_lin+'<span onclick="window.open(\''+ub_urv+ac_sn+'\',\'_blank\');">浏览</span>'}
		als_lin=als_lin+'</span><span class="ack_tm">'+ac_tm+'</span>'
		als_lin=als_lin+'</div>'
		
		if(ub_cty<9){
		als_lin=als_lin+'<div class="ack_nr"'
		if(ub_yin==9){als_lin=als_lin+' onMouseOver="asaispeak(this.innerHTML);" onMouseOut="asaispeakcancel();"'}
		als_lin=als_lin+'><span class="u_ydj'+ac_dj+'">'+ac_nr+'</span></div>';
		if(!asainull(ac_sj)&&asaipt(ub_y+ac_sj,arr_str)>0){asaierr('数组['+aii_y+']的修饰调用变量=F'+ac_sj);als_lin=als_lin+asais2v('F'+ac_sj);};
		}
		
		als_lin=als_lin+'<div class="ack_cr"></div></div>';
		als_lin=als_lin+'</div></div>';
		if(!asainull(ub_user)){als_lin=als_lin+'</div>';}
		asaierr('数组['+ann_y+'-'+aii_y+']的修饰'+asaipt(ac_sn,ub_str)+'<br>'+als_lin);
		if(asaipt(ub_x+ac_sn,ub_str)>0){asaierr('数组['+aii_y+']的修饰转变量=F'+ac_sn);eval('var F'+ac_sn+'=als_lin;');}
		if(ub_cty>9){asaichatshowx=asaichatshowx+als_lin;}else{asaichatshowx=als_lin+asaichatshowx;}
		};
		if(ub_err>9){asaierr('输出的计数='+asaichatshowcix+'<br>输出的修饰：<br>'+asaichatshowx);}
		else{
		document.getElementById("asaichatshowci").value=asaichatshowcix;
		document.getElementById("asaichatshow").innerHTML=asaichatshowx;
		if(ub_yin==9){asaispeak(ac_nr);}else if(ub_yin==6){if(parseInt(sc_ty)>0){asaitishi(7,1)}else{asaitishi(8,1)};}else if(ub_yin>0){asaitishi(ub_yin,1);}
		if(ub_cty>10){var asaichatshowdiv=document.getElementById('ack_ma');asaichatshowdiv.scrollTop = asaichatshowdiv.scrollHeight;};
		}
	};
}
//window.clearInterval();
}
//**阿赛聊天室asaiXHP---------------1
//**阿赛聊天室JS---------------1
asaiXHP();document.getElementById('nr').focus();
window.setInterval("asaiXHP();",ub_err*1000);