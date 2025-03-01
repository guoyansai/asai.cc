var SAI_ESlen,SAI_ESpop,SAI_ESid,SAI_ESan,SAI_ESsm,SAI_ESse,SAI_ESsy,SAI_ESqy,SAI_ESby,SAI_ESfs;
var SAI_Vrwid,SAI_Vrhei,SAI_Vrheit,SAI_Vrheic,SAI_Kiframe,SAI_Ktextarea,SAI_ESys,SAI_EScss,SAI_ESbar;
var SAI_Edialog,SAI_EDWindow,SAI_EDDiv,SAI_EDValue,SAI_EDMode=1;
var SAI_EDCurGEditor,SAI_EDCurRange,SAI_SfullscreenMode=0;
/* ---------------------------- 编辑器区域生成和取值信息（如果一个页面需要调用多个编辑器，可以拷贝该文件，替换SAI_为其他X_，并更改下面的AsaiEdit过程名即可同规则调用，如：AsaiEditMini） ---------------------------- */
//定义并生成编辑器区域
function AsaiEdit(InitValue){
SAI_Vrwid="666px";
SAI_Vrhei=280;
if(arguments[3]){SAI_Vrwid=arguments[3];SAI_Vrwid=(SAI_Vrwid.toString().indexOf("%")==-1? parseInt(SAI_Vrwid)+"px":SAI_Vrwid);}
if(arguments[4]){SAI_Vrhei=parseInt(arguments[4]);SAI_Vrheit=28;SAI_Vrheic=(SAI_Vrhei-SAI_Vrheit-1)+"px";SAI_Vrhei+="px";SAI_Vrheit+="px";}
SAI_ESan=arguments[1];
SAI_ESlen=arguments[2];
SAI_ESpop=arguments[5];
SAI_ESid=arguments[6];
SAI_ESsm=arguments[7];
SAI_ESse=arguments[8];
SAI_ESsy=arguments[9];if(SAI_ESsy==''){SAI_ESsy='#CC1121';};
SAI_ESqy=arguments[10];if(SAI_ESqy==''){SAI_ESqy='#fef5f5';};
SAI_ESby=arguments[11];if(SAI_ESby==''){SAI_ESby='#FFFFFE';};
SAI_ESfs=arguments[12];
SAI_ESys="#000000,#330000,#660000,#990000,#CC0000,#FF0000,#000033,#330033,#660033,#990033,#CC0033,#FF0033,#000066,#330066,#660066,#990066,#CC0066,#FF0066,|,#003300,#333300,#663300,#993300,#CC3300,#FF3300,#003333,#333333,#663333,#993333,#CC3333,#FF3333,#003366,#333366,#663366,#993366,#CC3366,#FF3366,|,#006600,#336600,#666600,#996600,#CC6600,#FF6600,#006633,#336633,#666633,#996633,#CC6633,#FF6633,#006666,#336666,#666666,#996666,#CC6666,#FF6666,|,#009900,#339900,#669900,#999900,#CC9900,#FF9900,#009933,#339933,#669933,#999933,#CC9933,#FF9933,#009966,#339966,#669966,#999966,#CC9966,#FF9966,|,#00CC00,#33CC00,#66CC00,#99CC00,#CCCC00,#FFCC00,#00CC33,#33CC33,#66CC33,#99CC33,#CCCC33,#FFCC33,#00CC66,#33CC66,#66CC66,#99CC66,#CCCC66,#FFCC66,|,#00FF00,#33FF00,#66FF00,#99FF00,#CCFF00,#FFFF00,#00FF33,#33FF33,#66FF33,#99FF33,#CCFF33,#FFFF33,#00FF66,#33FF66,#66FF66,#99FF66,#CCFF66,#FFFF66,|,#000099,#330099,#660099,#990099,#CC0099,#FF0099,#0000CC,#3300CC,#6600CC,#9900CC,#CC00CC,#FF00CC,#0000FF,#3300FF,#6600FF,#9900FF,#CC00FF,#FF00FF,|,#003399,#333399,#663399,#993399,#CC3399,#FF3399,#0033CC,#3333CC,#6633CC,#9933CC,#CC33CC,#FF33CC,#0033FF,#3333FF,#6633FF,#9933FF,#CC33FF,#FF33FF,|,#006699,#336699,#666699,#996699,#CC6699,#FF6699,#0066CC,#3366CC,#6666CC,#9966CC,#CC66CC,#FF66CC,#0066FF,#3366FF,#6666FF,#9966FF,#CC66FF,#FF66FF,|,#009999,#339999,#669999,#999999,#CC9999,#FF9999,#0099CC,#3399CC,#6699CC,#9999CC,#CC99CC,#FF99CC,#0099FF,#3399FF,#6699FF,#9999FF,#CC99FF,#FF99FF,|,#00CC99,#33CC99,#66CC99,#99CC99,#CCCC99,#FFCC99,#00CCCC,#33CCCC,#66CCCC,#99CCCC,#CCCCCC,#FFCCCC,#00CCFF,#33CCFF,#66CCFF,#99CCFF,#CCCCFF,#FFCCFF,|,#00FF99,#33FF99,#66FF99,#99FF99,#CCFF99,#FFFF99,#00FFCC,#33FFCC,#66FFCC,#99FFCC,#CCFFCC,#FFFFCC,#00FFFF,#33FFFF,#66FFFF,#99FFFF,#CCFFFF,#FFFFFF";
var SAI_ESysarr=SAI_ESys.split(",");
var SAI_ESysarrlen=SAI_ESysarr.length;
var SAI_ESysx="<div class=SAI_CSSay>";
var SAI_ESysxb="<div class=SAI_CSSay>";
for(var i=0;i<SAI_ESysarrlen;i++){
if (SAI_ESysarr[i]=="|")
{SAI_ESysx=SAI_ESysx+"<br>";SAI_ESysxb=SAI_ESysxb+"<br>";
}else{
SAI_ESysx=SAI_ESysx+"<a class=SAI_CSSays style=background-color:"+SAI_ESysarr[i]+" onclick=\"SAI_Sstyle('<span StylE=color:"+SAI_ESysarr[i]+">','</span>')\" TItle="+SAI_ESysarr[i]+">　</a>";
SAI_ESysxb=SAI_ESysxb+"<a class=SAI_CSSays style=background-color:"+SAI_ESysarr[i]+" onclick=\"SAI_Sstyle('<span StylE=background-color:"+SAI_ESysarr[i]+">','</span>')\" TItle="+SAI_ESysarr[i]+">　</a>";
}}
SAI_ESysx=SAI_ESysx+"</div>";
SAI_ESysxb=SAI_ESysxb+"</div>";
var SAI_Ischar;
SAI_Ischar="<style>#"+SAI_ESid+"SAI_Isdiv{"+SAI_SetWH(120,120)+"overflow-y:auto;overflow-x:hidden;}#"+SAI_ESid+"SAI_Isdiv div{padding:0px;margin:0px;list-style:none;"+SAI_SetWH(12,0)+"line-height:14px;font-size:12px;float:left;text-align:center;cursor:pointer;}#"+SAI_ESid+"SAI_Isdvw{font-size:52px;text-align:center;"+SAI_SetWH(120,68)+"line-height:68px;text-align:center;border-bottom:"+SAI_ESsy+" 2px solid;background-color:"+SAI_ESby+";color:"+SAI_ESsy+";}.SAI_Iscdn{line-height:14px;height:14px;text-align:center;color:"+SAI_ESsy+";}.SAI_Iscds{background-color:"+SAI_ESby+";color:"+SAI_ESsy+";text-align:center;}</style>"
SAI_Ischar=SAI_Ischar+"<div id="+SAI_ESid+"SAI_Isdvw>演示</div><div id="+SAI_ESid+"SAI_Isdiv>";
var aChars="♥❤❥❣❦❧♡۵웃유ღ♂♀☿♣♦♠™℠℗©®★☆✡✦✧✩✪✫✬✭✮✯✰⁂⁎⁑☸✢✣✤✥✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❃❇❈❉❊❋＊☚☛☜☞☟♔♕♖♗♘♙♚♛♜♝♞♟♩♪♫♬♭♮♯☀☁☂☃☼☽☾♨❄❅❆☠☭☯✙✚✛✜✞✟✠卍卐≦≧〈〉《》「」『』【】〔〕︵︶︷︸︹︺︻︼︽︾︿﹀﹁﹂﹃﹄﹙﹚﹛﹜﹝﹞﹤﹥（）＜＞｛｝∩∪☎☏✁✂✃✄✈✉✎✏✐✑✒ˇ∛∜☐☑☒✓✔∨√♢♤♧♣♦♥♠₮৲৳௹฿៛₠₡₢₣₤₥₦₧₨₩₪₫₭₯₰₱₲₳₴₵㍐¢¤€ƒ£¥ąčĤħĩŇŘŤŴŽ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚãäçêðëîïñõöûüÿ㊊㊋㊌㊍㊎㊏㊐㊑㊒㊓㊔㊕㊖㊗㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ ゚゛゜ゝゞゟ゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ㍿ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊαβχδεηγικλμνωοφπψρστθυξζ˙‥‧‵❝❞、。〃〝〞︰﹐﹒﹔﹕！＃＄％＆，．：；？＠～…‘·′”’㋀㋁㋂㋃㋄㋅㋆㋇㋈㋉㋊㋋㏠㏡㏢㏣㏤㏥㏦㏧㏨㏩㏪㏫㏬㏭㏮㏯㏰㏱㏲㏳㏴㏵㏶㏷㏸㏹㏺㏻㏼㏽㏾㍘㍙㍚㍛㍜㍝㍞㍟㍠㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰↕↖↗↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↶↷↸↹↺↻↼↽↾↿⇀⇁⇂⇃⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇕⇖⇗⇘⇙⇚⇛⇜⇝⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪⇫⇬⇭⇮⇯⇰⇱⇲⇳⇴⇵⇶⇷⇸⇹⇺⇻⇼⇽⇾⇿⌃⌄⌅⌆⌤⏎▶☇☈☊☋☌☍➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨➩➪➫➬➭➮➯➱➲➳➴➵➶➷➸➹➺➻➼➽➾⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿⤀⤁⤂⤃⤄⤅⤆⤇⤈⤉⤊⤋⤌⤍⤎⤏⤐⤑⤒⤓⤔⤕⤖⤗⤘⤙⤚⤛⤜⤝⤞⤟⤠⤡⤢⤣⤤⤥⤦⤧⤨⤩⤪⤫⤬⤭⤮⤯⤰⤱⤲⤳⤴⤵⤶⤷⤸⤹⤺⤻⤼⤽⤾⤿⥀⥁⥂⥃⥄⥅⥆⥇⥈⥉⥊⥋⥌⥍⥎⥏⥐⥑⥒⥓⥔⥕⥖⥗⥘⥙⥚⥛⥜⥝⥞⥟⥠⥡⥢⥣⥤⥥⥦⥧⥨⥩⥪⥫⥬⥭⥮⥯⥰⥱⥲⥳⥴⥵⥶⥷⥸⥹⥺⥻⥼⥽⥾⥿⬀⬁⬂⬃⬄⬅⬈⬉⬊⬋⬌⬍⬎⬏⬐⬑↵↓↔←→↑∎⊞⊟⊠⊡⋄⎔▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▔▖▗▘▙▚▛▜▝▞▟■□▢▣▤▥▦▧▨▩▪▫▬▭▮▯▰▱►◄◆◇◈◢◣◤◥◧◨◩◪◫◰◱◲◳◻◼◽◾❏❐❑❒❘❙❚⧈⧫⬒⬓⬔⬕⬖⬗⬘⬙⬚⬠⬡⬢⬣∆⊿▲△▴▵▷▸▹▻▼▽▾▿◀◁◂◃◅◬◭◮◸◹◺◿∇‐‑‒―⁃≣⋐⋑⋒⋓⌒⌜⌝⌞⌟⎯─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋╌╍╎╏═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳╴╵╶╷╸╹╺╻╼╽╾╿▕◜◝◞◟◠◡☰☱☲☳☴☵☶☷✕≡⌈⌊—⌉⌋⊖⊘⊙⊚⊛⊜⊝◉○◌◍◎●◐◑◒◓◔◕◖◗◯◴◵◶◷⚫❍⦁⦶⦸⦾⦿⊕⊗℅⅐⅑⅒⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞↉∟∬∭∮∵∷≌≐≑≒≓≙≚≛≜≝≞≟⊶⊷⊸⊾⋀⋁✖﹢﹣＋－／＝∧∠°÷≥∞∫≤≠‰⊥±∑²³∴×℃℉㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅺⅻ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⓪❶❷❸❹❺❻❼❽❾❿㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉０１２３４５６７８９".split('');
for(i=0;i<aChars.length;i++){
SAI_Ischar=SAI_Ischar+'<div class="SAI_Iscdn" onclick="SAI_Sinto(\'' + aChars[i].replace(/&/g, "&amp;") + '\')" onmouseover="'+SAI_ESid+'SAI_Isdvw.innerHTML=this.innerHTML;this.className=\'SAI_Iscds\';" onmouseout="this.className=\'SAI_Iscdn\';">';
SAI_Ischar=SAI_Ischar+aChars[i];
SAI_Ischar=SAI_Ischar+'</div>';
}
SAI_Ischar=SAI_Ischar+'<div class=SAI_CSScr></div></div>';
var SAI_ESabout="架构与设计制作：阿赛\
<br>◇ 常用快捷键：Ctrl+C(拷贝)，Ctrl+X(剪切)，Ctrl+V(粘贴)；\
<br>◇ 快捷键：Ctrl+A(全选)，Ctrl+Z(撤销)，Ctrl+Y(重做)；\
<br>◇ 上传或插入文件自动识别任何格式；\
<br>◇ 右下角含向下三角形的图标是可以打开右弹下拉菜单的；\
<br>◇ 左下角含向下三角形的图标可以左弹下拉菜单；\
<br>◇ 编辑器内容预读需过滤，如ASP[html=server.HTMLEncode(html)]；\
<br>◇ 整套编辑器系统为原创JS架构，有问题找阿赛。";
SAI_EScss="<style>\
.SAI_CSSk *::selection{background-color:"+SAI_ESsy+";color:"+SAI_ESqy+";}.SAI_CSSk *::-moz-selection{background-color:"+SAI_ESsy+";color:"+SAI_ESqy+";}.SAI_CSSk *::-webkit-selection{background-color:"+SAI_ESsy+";color:"+SAI_ESqy+";}.SAI_CSSk *::-webkit-scrollbar{width:10px;height:10px;}.SAI_CSSk *::-webkit-scrollbar-track-piece{}.SAI_CSSk *::-webkit-scrollbar-track{background-color:"+SAI_ESsy+";}.SAI_CSSk *::-webkit-scrollbar-track-piece{-webkit-border-radius:0px;background-color:"+SAI_ESqy+";border:"+SAI_ESsy+" 1px solid;}.SAI_CSSk *::-webkit-scrollbar-thumb{border-radius:0px;border:"+SAI_ESsy+" 1px solid;background-color:"+SAI_ESsy+";background-image:-webkit-gradient(linear,52% 2%,66% 98%,from("+SAI_ESsy+"),to("+SAI_ESsy+"),color-stop(.5,"+SAI_ESqy+"));}.SAI_CSSk *::-webkit-scrollbar-thumb:hover{border:"+SAI_ESqy+" 1px solid;background-color:"+SAI_ESsy+";background-image:-webkit-gradient(linear,52% 2%,66% 98%,from("+SAI_ESsy+"),to("+SAI_ESsy+"),color-stop(.5,"+SAI_ESsy+"));}.SAI_CSSk *::-webkit-scrollbar-button{background-color:"+SAI_ESsy+";}.SAI_CSSk *::-webkit-scrollbar-corner{background-color:"+SAI_ESqy+";}\
#"+SAI_ESid+"{background-color:transparent;position:relative;}#"+SAI_ESid+" *,#"+SAI_ESid+" * *{line-height:100%;}#"+SAI_ESid+" ul,#"+SAI_ESid+" li,#"+SAI_ESid+" div{float;none;margin:0;}\
.SAI_CSSk{min-width:"+SAI_Vrwid+";height="+SAI_Vrhei+"px;margin:0px;padding:0px;}\
.SAI_CSSbar{background-color:transparent;}\
.SAI_CSSbutton{background-color:transparent;border-top:1px solid "+SAI_ESsy+";border-right:1px solid "+SAI_ESsy+";border-bottom:1px solid "+SAI_ESsy+";border-left:3px solid "+SAI_ESsy+";}\
.SAI_CSSinput,.SAI_CSScheck,.SAI_CSSselect{background-color:transparent;border-top:1px solid "+SAI_ESsy+";border-right:1px solid "+SAI_ESsy+";border-bottom:1px solid "+SAI_ESsy+";border-left:1px solid "+SAI_ESsy+";}\
.SAI_CSSbar ul,.SAI_CSSbar li{margin:0px;padding:0px;}\
.SAI_CSSstr{background-color:transparent;float:left;position:relative;cursor:pointer;font-size:12px;color:"+SAI_ESsy+";}\
.SAI_CSSstr span{-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px;display:block;margin-top:2px;padding:0px 3px;border:1px solid "+SAI_ESsy+";height:14px;line-height:14px;overflow:hidden;}\
.SAI_CSSicok,.SAI_CSSicokx{background-color:transparent;"+SAI_SetWH(20,20)+"float:left;position:relative;background-image:url("+SAI_ESsm+SAI_ESse+"AsaiEdit_Tool.png);cursor:pointer;text-align:center;font-size:12px;color:"+SAI_ESsy+";}\
.SAI_CSSicok{background-position:-760px;}\
.SAI_CSSicokx{background-position:-580px;}\
.SAI_CSSicotit{display:inline-block;margin-top:3px;}\
.SAI_CSSico{background-color:transparent;"+SAI_SetWH(20,20)+"float:left;position:relative;background-image:url("+SAI_ESsm+SAI_ESse+"AsaiEdit_Tool.png);cursor:pointer;}\
.SAI_CSSicox{background-color:transparent;"+SAI_SetWH(20,20)+"float:left;position:relative;background-image:url("+SAI_ESsm+SAI_ESse+"AsaiEdit_Tool.png);cursor:pointer;}\
.SAI_CSSconx{position:absolute;z-index:200;word-wrap:break-word;padding:10px;top:20px;right:0px;font-size:12px;border-top:1px solid "+SAI_ESsy+";border-right:3px solid "+SAI_ESsy+";border-bottom:1px solid "+SAI_ESsy+";border-left:1px solid "+SAI_ESsy+";background:"+SAI_ESqy+";color:"+SAI_ESsy+";text-align:left;max-height:228px;overflow:auto;}.SAI_CSScon *,.SAI_CSSconx *{color:"+SAI_ESsy+";}.SAI_CSScon label,.SAI_CSSconx label{display:inline;position:static;background:"+SAI_ESqy+";color:"+SAI_ESsy+";}\
.SAI_CSScon{position:absolute;z-index:200;word-wrap:break-word;padding:10px;top:20px;font-size:12px;border-top:1px solid "+SAI_ESsy+";border-right:1px solid "+SAI_ESsy+";border-bottom:1px solid "+SAI_ESsy+";border-left:3px solid "+SAI_ESsy+";background:"+SAI_ESqy+";color:"+SAI_ESsy+";display:none;text-align:left;}{color:"+SAI_ESsy+";}\
.SAI_CSSa,a.SAI_CSSa,a.SAI_CSSa:link,a.SAI_CSSa:active,a.SAI_CSSa:visited{cursor:pointer;text-decoration:none;word-wrap:break-word;margin-right:3px;color:"+SAI_ESsy+";}\
a.SAI_CSSa:hover{background:"+SAI_ESby+";}\
.SAI_CSSay{"+SAI_SetWH(218,0)+"}.SAI_CSSays,a.SAI_CSSays,a.SAI_CSSays:link,a.SAI_CSSays:active,a.SAI_CSSays:visited{font-size:12px;cursor:pointer;text-decoration:none;}\
a.SAI_CSSays:hover{}\
.SAI_CSSico:hover,.SAI_CSSicok:hover,.SAI_CSSicokx:hover,.SAI_CSSicox:hover{background-color:"+SAI_ESqy+";}\
.SAI_CSSico:hover .SAI_CSScon,.SAI_CSSicokx:hover .SAI_CSScon{display:block;}\
.SAI_CSScr{clear:both;}\
</style>"
SAI_ESbar="<div class=\"SAI_CSSbar\"><ul>\
<div class=\"SAI_CSSico\" title=\"样式\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(188,0)+"line-height:200%;\">\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h1>','</h1>')\" title=\"标题一\">标题一</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h2>','</h2>')\" title=\"标题二\">标题二</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h3>','</h3>')\" title=\"标题三\">标题三</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h4>','</h4>')\" title=\"标题四\">标题四</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h5>','</h5>')\" title=\"标题五\">标题五</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h6>','</h6>')\" title=\"标题六\">标题六</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<h7>','</h7>')\" title=\"标题七\">标题七</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=display:block;margin:10px;border-color:#DDDD88;border-width:1px;border-style:solid;padding:5px;background:#FFFFDD;color:#666600;font-size:12px;><b>代码：</b><br><br>','</span>')\" title=\"代码\"><span StylE=border-color:#DDDD88;border-width:1px;border-style:solid;background:#FFFFDD;color:#666600;>代码</span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=display:block;margin:10px;border-color:#D8D8D8;border-width:1px;border-style:solid;padding:5px;background-color:#F5F5F5;color:#666666;font-size:12px;><b>引用：</b><br><br>','</span>')\" title=\"引用\"><span StylE=border-color:#D8D8D8;border-width:1px;border-style:solid;background-color:#F5F5F5;color:#666666;>引用</span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=background-color:#EEE;color:#DDD;>','</span>')\" title=\"淡化\"><span StylE=background-color:#EEE;color:#DDD;>淡化</span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=background-color:#DDD;color:#DDD;>','</span>')\" title=\"隐藏\"><span StylE=background-color:#DDD;color:#DDD;>隐藏</span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=background-color:#FFFF00;color:#FF0000;>','</span>')\" title=\"标记\"><span StylE=background-color:#FFFF00;color:#FF0000;>标记</span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=background-color:#FF0000;color:#FFFF00;>','</span>')\" title=\"突出\"><span StylE=background-color:#FF0000;color:#FFFF00;>突出</span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<strike>','</strike>')\" title=\"删线\"><strike>删线</strike></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<sup>','</sup>')\" title=\"上标\">上标</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<sub>','</sub>')\" title=\"下标\">下标</a>\
</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-20px\" title=\"字体\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(288,0)+"\">\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'仿宋')\" title=\"仿宋\" style=\"font-family:仿宋\">仿宋</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'黑体')\" title=\"黑体\" style=\"font-family:黑体\">黑体</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'楷体')\" title=\"楷体\" style=\"font-family:楷体\">楷体</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'宋体')\" title=\"宋体\" style=\"font-family:宋体\">宋体</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'微软雅黑')\" title=\"微软雅黑\" style=\"font-family:微软雅黑\">微软雅黑</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'新宋体')\" title=\"新宋体\" style=\"font-family:新宋体\">新宋体</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Times New Roman')\" title=\"Times New Roman\" style=\"font-family:Times New Roman\">Times New Roman</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Courier New')\" title=\"Courier New\" style=\"font-family:Courier New\">Courier New</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Trebuchet MS')\" title=\"Trebuchet MS\" style=\"font-family:Trebuchet MS\">Trebuchet MS</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Arial Black')\" title=\"Arial Black\" style=\"font-family:Arial Black\">Arial Black</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Times New Roman')\" title=\"Times New Roman\" style=\"font-family:Times New Roman\">Times New Roman</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Palatino Linotype')\" title=\"Palatino Linotype\" style=\"font-family:Palatino Linotype\">Palatino Linotype</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Book Antiqua')\" title=\"Book Antiqua\" style=\"font-family:Book Antiqua\">Book Antiqua</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Lucida Sans Unicode')\" title=\"Lucida Sans Unicode\" style=\"font-family:Lucida Sans Unicode\">Lucida Sans Unicode</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Lucida Grande')\" title=\"Lucida Grande\" style=\"font-family:Lucida Grande\">Lucida Grande</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'MS Serif')\" title=\"MS Serif\" style=\"font-family:MS Serif\">MS Serif</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'New York')\" title=\"New York\" style=\"font-family:New York\">New York</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Lucida Console')\" title=\"Lucida Console\" style=\"font-family:Lucida Console\">Lucida Console</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(1,'Comic Sans MS')\" title=\"Comic Sans MS\" style=\"font-family:Comic Sans MS\">Comic Sans MS</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Verdana')\" title=\"Verdana\" style=\"font-family:Verdana\">Verdana</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Geneva')\" title=\"Geneva\" style=\"font-family:Geneva\">Geneva</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'sans-serif')\" title=\"sans-serif\" style=\"font-family:sans-serif\">sans-serif</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Georgia')\" title=\"Georgia\" style=\"font-family:Georgia\">Georgia</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Times')\" title=\"Times\" style=\"font-family:Times\">Times</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'serif')\" title=\"serif\" style=\"font-family:serif\">serif</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Courier')\" title=\"Courier\" style=\"font-family:Courier\">Courier</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'monospace')\" title=\"monospace\" style=\"font-family:monospace\">monospace</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Arial')\" title=\"Arial\" style=\"font-family:Arial\">Arial</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Helvetica')\" title=\"Helvetica\" style=\"font-family:Helvetica\">Helvetica</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Tahoma')\" title=\"Tahoma\" style=\"font-family:Tahoma\">Tahoma</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Helvetica')\" title=\"Helvetica\" style=\"font-family:Helvetica\">Helvetica</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Gadget')\" title=\"Gadget\" style=\"font-family:Gadget\">Gadget</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Palatino')\" title=\"Palatino\" style=\"font-family:Palatino\">Palatino</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'Monaco')\" title=\"Monaco\" style=\"font-family:Monaco\">Monaco</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sziti(0,'cursive')\" title=\"cursive\" style=\"font-family:cursive\">cursive</a>\
</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-40px\" title=\"字号\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(288,0)+"\">\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:5px>','</span>')\" title=\"[微号]\" style=\"font-size:12px\">[微号]</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:3px>','</span>')\" title=\"[小微]\" style=\"font-size:12px\">[小微]</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:1px>','</span>')\" title=\"[超微]\" style=\"font-size:12px\">[超微]</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:6.7px>','</span>')\" title=\"八号\" style=\"font-size:6.7px\">八号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:7.3px>','</span>')\" title=\"七号\" style=\"font-size:7.3px\">七号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:10px>','</span>')\" title=\"六号\" style=\"font-size:10px\">六号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:8.7px>','</span>')\" title=\"小六\" style=\"font-size:8.7px\">小六</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:12px>','</span>')\" title=\"小五\" style=\"font-size:12px\">小五</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:14px>','</span>')\" title=\"五号\" style=\"font-size:14px\">五号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:16px>','</span>')\" title=\"小四\" style=\"font-size:16px\">小四</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:18.7px>','</span>')\" title=\"四号\" style=\"font-size:18.7px\">四号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:20px>','</span>')\" title=\"小三\" style=\"font-size:20px\">小三</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:21.3px>','</span>')\" title=\"三号\" style=\"font-size:21.3px\">三号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:24px>','</span>')\" title=\"小二\" style=\"font-size:24px\">小二</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:29.3px>','</span>')\" title=\"二号\" style=\"font-size:29.3px\">二号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:32px>','</span>')\" title=\"小一\" style=\"font-size:32px\">小一</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:34.7px>','</span>')\" title=\"一号\" style=\"font-size:34.7px\">一号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:48px>','</span>')\" title=\"小初\" style=\"font-size:48px\">小初</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:56px>','</span>')\" title=\"初号\" style=\"font-size:56px\">初号</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:71.7px>','</span>')\" title=\"[特号]\" style=\"font-size:12px\">[特号]</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:83.7px>','</span>')\" title=\"[大特]\" style=\"font-size:12px\">[大特]</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sstyle('<span StylE=font-size:95.6px>','</span>')\" title=\"[超大]\" style=\"font-size:12px\">[超大]</a>\
</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-60px\" title=\"字体颜色\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(218,0)+"\">"+SAI_ESysx+"</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-80px\" title=\"背景颜色\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(218,0)+"\">"+SAI_ESysxb+"</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-380px\" title=\"插入自定义\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(108,0)+"line-height:200%;\">\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('0')\" title=\"分页标志\">分页标志</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('[asai.cc]')\" title=\"秘密标志\">秘密标志</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('1')\" title=\"版权文字\">版权文字</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('2')\" title=\"当前时间\">当前时间</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('<span style=font-weight:bold;font-size:58px;line-height:200%;color:#FF0000;>红头文件标题</span>')\" title=\"红头标题\">红头标题</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('<span style=display:block;background-color:#F00;height:5px;></span>')\" title=\"红头线条\">红头线条</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto('<hr>')\" title=\"一条横线\">一条横线</a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_Sinto(document.URL)\" title=\"插入当前链接\">当前链接</a>\
</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-400px\" title=\"插入特殊字符\"><div class=\"SAI_CSScon\" style=\""+SAI_SetWH(123,0)+"\">"+SAI_Ischar+"</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-100px\" title=\"加粗\" onClick=\"SAI_Sformat('Bold')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-120px\" title=\"斜体\" onClick=\"SAI_Sformat('Italic')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-140px\" title=\"下划线\" onClick=\"SAI_Sformat('Underline')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-160px\" title=\"将选中的对象左对齐\" onClick=\"SAI_Sstyle('<p style=text-align:left;display:block;>','</p>')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-180px\" title=\"将选中的对象居中对齐\" onClick=\"SAI_Sstyle('<p style=text-align:center;display:block;>','</p>')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-200px\" title=\"将选中的对象右对齐\" onClick=\"SAI_Sstyle('<p style=text-align:right;display:block;>','</p>')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-220px\" title=\"编号列表\" onClick=\"SAI_Sformat('insertorderedlist')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-240px\" title=\"项目列表\" onClick=\"SAI_Sformat('insertunorderedlist')\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-300px\" title=\"清除HTML格式(纯文本)\" onClick=\"SAI_Shtml()\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-320px\" title=\"清除Word格式\" onClick=\"SAI_Sword()\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-340px\" title=\"自动排版(保留表格、图片、链接、换行，压缩空行，段首加空格。)\" onClick=\"SAI_Sauto()\"></div>";
//--------精简版可删■■■↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
SAI_ESbar=SAI_ESbar+"\
<div class=\"SAI_CSSico\" style=\"background-position:-280px\" title=\"清除选中的连接\" onClick=\"SAI_Sformat('Unlink')\"></div>\
<div id=\""+SAI_ESid+"SAI_Inlink\" class=\"SAI_CSSicox\" onMouseOut=\"SAI_Inclose();\" onMouseOver=\"SAI_InlinkX();\" style=\"background-position:-260px\" title=\"对选中对象创建链接\"></div>\
<div id=\""+SAI_ESid+"SAI_Inemot\" class=\"SAI_CSSicox\" onMouseOut=\"SAI_Inclose();\" onMouseOver=\"SAI_InemotX();\" style=\"background-position:-420px\" title=\"插入表情\"></div>\
<div id=\""+SAI_ESid+"SAI_Intable\" class=\"SAI_CSSicox\" onMouseOut=\"SAI_Inclose();\" onMouseOver=\"SAI_IntableX()\" style=\"background-position:-440px\" title=\"插入表格\"></div>\
<div id=\""+SAI_ESid+"SAI_Inreplace\" class=\"SAI_CSSicox\" onMouseOut=\"SAI_Inclose();\" onMouseOver=\"SAI_InreplaceX();\" style=\"background-position:-560px\" title=\"查找替换\"></div>\
<div id=\""+SAI_ESid+"SAI_Infile\" class=\"SAI_CSSicox\" onMouseOut=\"SAI_Inclose();\" onMouseOver=\"SAI_InfileX();\" style=\"background-position:-460px\" title=\"插入媒体(图片、动画、视频等)\"></div>";
//--------精简版可删■■■↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
SAI_ESbar=SAI_ESbar+"<div class=\"SAI_CSSico\" style=\"background-position:-360px\" title=\"参考线\" onClick=\"SAI_Seborder()\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-480px\" title=\"关于编辑器\"><div class=\"SAI_CSScon\" style=\"right:0px;"+SAI_SetWH(388,0)+"\">"+SAI_ESabout+"</div></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-500px\" title=\"HTML代码\" onClick=\"SAI_Scodearea()\"></div>\
<div class=\"SAI_CSSico\" style=\"background-position:-540px\" title=\"全屏编辑\" onClick=\"SAI_Sfullscreen()\"></div>\
<div class=\"SAI_CSSicokx\" title=\"恢复操作选择\" onClick=\"SAI_ESave()\"><span class=\"SAI_CSSicotit\">⊙</span><div class=\"SAI_CSScon\" style=\"right:0px;"+SAI_SetWH(188,0)+"\">\
<a class=\"SAI_CSSa\" onClick=\"SAI_ERec('0')\">恢复定时缓存<span id=\"SAI_Ezsv0\"></span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_ERec('1')\">恢复手动缓存<span id=\"SAI_Ezsv1\"></span></a>\
<a class=\"SAI_CSSa\" onClick=\"SAI_ERec('2')\">恢复上次缓存<span id=\"SAI_Ezsv2\"></span></a>\
</div></div>\
<div class=\"SAI_CSSicok\" title=\"定时保存：单击立即保存。\" onClick=\"SAI_ESave()\"><span id=\"SAI_Ezsv\" class=\"SAI_CSSicotit\"></span></div>\
<div class=\"SAI_CSSstr\" title=\"编辑器内容字数统计\" id=\"SAI_Eztj\"></div>\
<div class=\"EM_CSScr\"></div>\
</div>";
if(document.getElementById(SAI_ESan)){
InitValue=document.getElementById(SAI_ESan).value;InitValue=SAI_Ehtmsi(InitValue)
}
document.write(SAI_EScss+"<div id='"+SAI_ESid+"' class='SAI_CSSk'>阿赛HTML在线编辑器[AsaiEdit]</div>");
SAI_EDDiv=document.getElementById(SAI_ESid);
SAI_EDDiv.innerHTML=SAI_ESbar;
SAI_Ktextarea=document.createElement("textarea");
SAI_Ktextarea.style.display="none";
SAI_Ktextarea.style.width=SAI_Vrwid;
SAI_Ktextarea.style.height=SAI_Vrheic;
SAI_Ktextarea.style.fontSize="12px";
SAI_Ktextarea.style.color=""+SAI_ESsy+"";
SAI_Ktextarea.style.background=""+SAI_ESqy+"";
SAI_Ktextarea.style.border="0px";
SAI_EDDiv.appendChild(SAI_Ktextarea);
SAI_Kiframe=document.createElement("iframe");
SAI_Kiframe.name=SAI_Kiframe.id="SAI_Efrm";
SAI_Kiframe.style.width=SAI_Vrwid;
SAI_Kiframe.style.height=SAI_Vrheic;
SAI_Kiframe.style.background="transparent";
SAI_Kiframe.frameBorder=0;
SAI_Kiframe.marginHeight=0;
SAI_Kiframe.marginWidth=0;
SAI_Kiframe.src="about:blank";
SAI_EDDiv.appendChild(SAI_Kiframe);
SAI_EDWindow=SAI_Kiframe.contentWindow;
with(SAI_EDWindow.document){
designMode="On";
contentEditable=true;
open();
writeln("<html><head><title>阿赛HTML在线编辑器[AsaiEdit]</title><style>#"+SAI_ESid+"body::selection{background-color:"+SAI_ESsy+";color:"+SAI_ESqy+";}#"+SAI_ESid+"body::-moz-selection{background-color:"+SAI_ESsy+";color:"+SAI_ESqy+";}#"+SAI_ESid+"body::-webkit-selection{background-color:"+SAI_ESsy+";color:"+SAI_ESqy+";}#"+SAI_ESid+"body::-webkit-scrollbar{width:10px;height:10px;}#"+SAI_ESid+"body::-webkit-scrollbar-track-piece{}#"+SAI_ESid+"body::-webkit-scrollbar-track{background-color:"+SAI_ESsy+";}#"+SAI_ESid+"body::-webkit-scrollbar-track-piece{-webkit-border-radius:0px;background-color:"+SAI_ESqy+";border:"+SAI_ESsy+" 1px solid;}#"+SAI_ESid+"body::-webkit-scrollbar-thumb{border-radius:0px;border:"+SAI_ESsy+" 1px solid;background-color:"+SAI_ESsy+";background-image:-webkit-gradient(linear,52% 2%,66% 98%,from("+SAI_ESsy+"),to("+SAI_ESsy+"),color-stop(.5,"+SAI_ESqy+"));}#"+SAI_ESid+"body::-webkit-scrollbar-thumb:hover{border:"+SAI_ESqy+" 1px solid;background-color:"+SAI_ESsy+";background-image:-webkit-gradient(linear,52% 2%,66% 98%,from("+SAI_ESsy+"),to("+SAI_ESsy+"),color-stop(.5,"+SAI_ESsy+"));}#"+SAI_ESid+"body::-webkit-scrollbar-button{background-color:"+SAI_ESsy+";}#"+SAI_ESid+"body::-webkit-scrollbar-corner{background-color:"+SAI_ESqy+";}</style>"+SAI_ESfs+"</head><body id="+SAI_ESid+"body></body></html>");
close();
//body.style.width=(SAI_Vrwid.toString().indexOf("%")==-1? parseInt(SAI_Vrwid)-30-10+"px":SAI_Vrwid);
//body.style.padding=(SAI_Vrwid.toString().indexOf("%")==-1? "10px":"0px");
body.style.width="100%";
//body.style.fontSize="14px";
body.innerHTML=InitValue;
}
SAI_EAddEventHandler(SAI_EDWindow.document,"contextmenu",SAI_Smon);
SAI_EAddEventHandler(SAI_EDWindow.document,"mouseup",SAI_Smup);
SAI_EAddEventHandler(SAI_EDWindow.document,"click",SAI_Smgo);
SAI_EAddEventHandler(SAI_EDWindow.document,"keydown",SAI_Skon);
SAI_EAddEventHandler(SAI_EDWindow.document,"keyup",SAI_Skup);
}
var SAI_Mtishi={'modcode':"当前代码模式，请返回编辑模式！"};
/* ---------------------------- 编辑器FUN ---------------------------- */
//定义编辑器区域鼠标与键盘动作
function SAI_EAddEventHandler(Target,EventType,Handler){if(Target.attachEvent){Target.attachEvent("on"+EventType,Handler);}else if(Target.addEventListener){Target.addEventListener(EventType,Handler,false);}else{Target["on"+EventType]=Handler;}}
//当鼠标离开编辑器按钮时候触发的动作
function SAI_Smgo(e){SAI_EGetContent();}
//当鼠标抵达编辑器按钮时候触发的动作
function SAI_Smon(e){SAI_EGetContent();SAI_Emenuk(e);if(document.all){return false;}else{e.preventDefault();}}
//当鼠标离开按钮或弹起时的动作
function SAI_Smup(e){if(document.all){SAI_EDCurGEditor=e.srcElement.document.parentWindow;}else{SAI_EDCurGEditor=e.target.ownerDocument.defaultView;}}
//当键盘按键抬起时候的动作
function SAI_Skup(e){SAI_EGetContent();}
//当键盘按键按下时候的动作
function SAI_Skon(e){SAI_Ekyinput(e);SAI_EGetContent();}
//获取时间
function SAI_ETime(){
var date = new Date();  
var month = date.getMonth()+1;  
var day = date.getDate();  
var house = date.getHours();  
var minutes = date.getMinutes();  
var second = date.getSeconds();  
return month + "-" + day + " " + house + ":" + minutes + ":" + second
}
//自动保存功能模块
SAI_ESaveat();
function SAI_ESaveat(){
var s=0;
setInterval(function(){
s++;
if(s===30){
var SAI_Enrs=SAI_EGetContent();
if(SAI_Enrs)localStorage.setItem("SAI_Enrsv0",SAI_Enrs);
s=0;
document.getElementById('SAI_Ezsv0').innerHTML="["+SAI_ETime()+"] ("+SAI_Enrs.replace(/<\/?[^>]*>|[\r\n]/gi,"").length+")";
}else{
document.getElementById('SAI_Ezsv').innerHTML=30-s;
};
},1000);
};
function SAI_ESave(){
var SAI_Enrs=SAI_EGetContent();
if(SAI_Enrs){
var SAI_Enrsbc=localStorage.getItem("SAI_Enrsv1");
localStorage.setItem("SAI_Enrsv2",SAI_Enrsbc);
document.getElementById('SAI_Ezsv2').innerHTML=document.getElementById('SAI_Ezsv1').innerHTML;
localStorage.setItem("SAI_Enrsv1",SAI_Enrs);
document.getElementById('SAI_Ezsv1').innerHTML="["+SAI_ETime()+"] ("+SAI_Enrs.replace(/<\/?[^>]*>|[\r\n]/gi,"").length+")";
}
document.getElementById('SAI_Ezsv').innerHTML="OK";
};
function SAI_ERec(ty){
var SAI_Enrs=localStorage.getItem("SAI_Enrsv"+ty);
if(SAI_Enrs){
SAI_EDWindow.document.body.innerHTML=SAI_Enrs;
document.getElementById(SAI_ESan).value=SAI_Enrs;
};
};
//获取编辑器内容（全部）
function SAI_EGetContent(){
SAI_EDValue=SAI_Ktextarea.value=SAI_Ehtmsi(SAI_EDWindow.document.body.innerHTML);
if(document.getElementById(SAI_ESid)){
if(isNaN(SAI_ESlen)){SAI_ESlen=1000;}
var obj=document.getElementById(SAI_ESid);
var conlen=SAI_EDValue.length;
if(conlen>SAI_ESlen){alert("注意:文档大小"+conlen+">"+SAI_ESlen+"(限长).")}
obj.value=SAI_EDValue.substr(0,SAI_ESlen);}
document.getElementById('SAI_Eztj').innerHTML="<span title=文档大小"+conlen+"/限长"+SAI_ESlen+">"+SAI_EDValue.replace(/<\/?[^>]*>|[\r\n]/gi,"").length+"字符</span>";//获取当前文档代码字数；
if(document.getElementById(SAI_ESan)){document.getElementById(SAI_ESan).value=SAI_EDValue;}
return SAI_EDValue;
}
//检测按键执行动作
function SAI_Ekyinput(e){if(e.keyCode==13){if(document.all){SAI_Sincode("<br />");e.returnValue=false;}else{/*e.preventDefault();*/}}}
//获取编辑器中"&SAI_tcxz&"内容（动作）
function SAI_EGetRange(){
with(SAI_EDWindow){focus();
if(document.all){return document.selection.createRange();}else{var selection=getSelection();
return selection.getRangeAt(selection.rangeCount-1).cloneRange();}}}
//获取编辑器内容（"&SAI_tcxz&"部分）
function SAI_EGetContentPart(){
var oRange=SAI_EGetRange();
if(document.all){return oRange.htmlText;}
else{var contents=oRange.cloneContents();
var cnt=document.createElement("div");
cnt.appendChild(contents);
return cnt.innerHTML;}
}
//向编辑器中插入代码
function SAI_Sincode(sHTML){
if(!SAI_EDMode){alert(SAI_Mtishi['modcode']);return;}
var oRange=SAI_EGetRange();
if(document.all){oRange.pasteHTML(sHTML);}else{var oFrag=oRange.createContextualFragment(sHTML);
oRange.deleteContents();
oRange.insertNode(oFrag);}
SAI_EGetContent();}
//向编辑器中插入图片
function SAI_imgin(sSTR){
SAI_Sincode("<img src="+sSTR+">");
}
//给内容加样式
function SAI_Sstyle(Mark1,Mark2){
if(!SAI_EDMode){alert(SAI_Mtishi['modcode']);return;}
var oRange=SAI_EGetRange();
with(SAI_EDWindow){focus();
var html=SAI_EGetContentPart();
if(html!=""){
html=Mark1+html+Mark2
if(document.all){oRange.pasteHTML(html);}else{var oFrag=oRange.createContextualFragment(html);
oRange.deleteContents();
oRange.insertNode(oFrag);}}
SAI_EGetContent();}
}
//字体
function SAI_Sziti(Scty,Scstr){
if(!SAI_EDMode){alert(SAI_Mtishi['modcode']);return;}
var oRange=SAI_EGetRange();
with(SAI_EDWindow){focus();
var html=SAI_EGetContentPart();
if(html!=""){
if(Scty=="0"){
html="<span StylE=\"font-family:"+Scstr+"\">"+html+"</span>"
}else{
html="<span StylE=\"font-family:'"+Scstr+"'\">"+html+"</span>"
}
if(document.all){oRange.pasteHTML(html);}else{var oFrag=oRange.createContextualFragment(html);
oRange.deleteContents();
oRange.insertNode(oFrag);}}
SAI_EGetContent();}
}
//文字背景与文字颜色
function SAI_Scolor(Scty,Scstr){
if(!SAI_EDMode){alert(SAI_Mtishi['modcode']);return;}
var oRange=SAI_EGetRange();
with(SAI_EDWindow){focus();
var html=SAI_EGetContentPart();
if(html!=""){
if(Scty=="0"){
html="<span StylE=\"Color:"+Scstr+"\">"+html+"</span>"
}else{
html="<span StylE=\"background-color:"+Scstr+"\">"+html+"</span>"
}
if(document.all){oRange.pasteHTML(html);}else{var oFrag=oRange.createContextualFragment(html);
oRange.deleteContents();
oRange.insertNode(oFrag);}}
SAI_EGetContent();}
}
//JS编辑器常规命令
function SAI_Sformat(what,opt){
if(!SAI_EDMode){alert(SAI_Mtishi['modcode']);return;}
with(SAI_EDWindow){focus();
if(!opt){document.execCommand(what,false,null);}else{if(document.all){document.execCommand(what,"",opt);
}else{document.execCommand(what,false,opt);}}}
SAI_EGetContent();
}
//全屏编辑器的命令
function SAI_Sfullscreen(){
var oHtml=document.getElementsByTagName("html");
var sl=parseInt(document.body.scrollLeft);
var st=parseInt(document.body.scrollTop);
if(SAI_SfullscreenMode==1){document.body.style.width=document.body.style.height="";
document.body.style.overflow="";
oHtml[0].style.overflow="";
SAI_EDDiv.style.position="";
SAI_EDDiv.style.background="transparent";
SAI_EDDiv.style.zIndex="";
SAI_Kiframe.style.width=SAI_Ktextarea.style.width=SAI_EDDiv.style.width=SAI_Vrwid;
SAI_Kiframe.style.height=SAI_Ktextarea.style.height=SAI_Vrheic;
SAI_EDDiv.style.height=SAI_Vrhei;
SAI_SfullscreenMode=0;}else{oHtml[0].style.overflow="hidden";
document.body.style.overflow=document.all? "hidden":"visible";
document.body.style.width=document.body.style.height=0;
var page=SAI_Esizegt();
SAI_EDDiv.style.position="fixed";
SAI_EDDiv.style.zIndex=1000;
SAI_EDDiv.style.background=""+SAI_ESqy+"";
SAI_EDDiv.style.left=sl+"px";
SAI_EDDiv.style.top=st+"px";
SAI_Kiframe.style.width=SAI_Ktextarea.style.width=SAI_EDDiv.style.width=page[2]+"px";
SAI_Kiframe.style.height=SAI_Ktextarea.style.height=SAI_EDDiv.style.height=(page[3]-parseInt(SAI_Vrheit))+"px";
SAI_SfullscreenMode=1;}
document.body.scrollLeft=sl;
document.body.scrollTop=st;
}
//全屏时候获取浏览器长宽
function SAI_Esizegt(){
var xScroll,yScroll;
if(window.innerHeight && window.scrollMaxY){xScroll=document.body.scrollWidth;
yScroll=window.innerHeight+window.scrollMaxY;}else if(document.body.scrollHeight>document.body.offsetHeight){xScroll=document.body.scrollWidth;
yScroll=document.body.scrollHeight;}else{xScroll=document.body.offsetWidth;
yScroll=document.body.offsetHeight;}
var windowWidth,windowHeight;
if(self.innerHeight){windowWidth=self.innerWidth;
windowHeight=self.innerHeight;}else if(document.documentElement && document.documentElement.clientHeight){windowWidth=document.documentElement.clientWidth;
windowHeight=document.documentElement.clientHeight;}else if(document.body){windowWidth=document.body.clientWidth;
windowHeight=document.body.clientHeight;}
if(yScroll<windowHeight){pageHeight=windowHeight;}else{pageHeight=yScroll;}
if(xScroll<windowWidth){pageWidth=windowWidth;}else{pageWidth=xScroll;}
arrayPageSize=new Array(pageWidth,pageHeight,windowWidth,windowHeight)
return arrayPageSize;
}
//即时处理编辑区代码
function SAI_Ehtmsi(html){
html=html.replace(/<(BR [^>]+)>/gi,'<br>');
//if(SAI_Vrhei.substring(2,3)=="8"){
//html=html.replace(/<div/gi,'<p');
//html=html.replace(/<\/div>/gi,'</p>');
//}
return html;
}
//清理html标签
function SAI_Shtml(){
var html=SAI_EGetContent();
html=html.replace(/\<br[^>]*>/gi,"[$br]");
html=html.replace(/<\/div>/gi,'[$br]');
html=html.replace(/<\/p>/gi,'[$br]');
html=html.replace(/<[^>]+>/g,"");
html=html.replace(/(^\s+)|(\s+$)/g,"");
html=html.replace(/\[\$br\]/gi,"<br>");
html=html.replace(/　　/ig,'');
SAI_EDWindow.document.body.innerHTML=html;
document.getElementById(SAI_ESan).value=html;
}
//处理编辑器多余的word格式
function SAI_Sword(){
var html=SAI_EGetContent();
//清理word标签
html=html.replace(/<STYLE[^>]*>[\s\S]*?<\/STYLE>/gi,'');
html=html.replace(/<SCRIPT[^>]*>[\s\S]*?<\/SCRIPT>/gi,'');
html=html.replace(/<\/?span[^>]*>/gi,"");
html=html.replace(/<(\w[^>]*) style="([^"]*)"([^>]*)/gi,"<$1$3") ;
html=html.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi,"<$1$3") ;
html=html.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi,"<$1$3") ;
html=html.replace(/<\\?\?xml[^>]*>/gi,"") ;
html=html.replace(/<\/?\w+:[^>]*>/gi,"") ;
html=html.replace(/<!--.*?-->/gi,'');

//压缩代码
html=html.replace(/　　/ig,'');
html=html.replace(/[\f|\r|\n|\t|\v]/gi,'');
html=html.replace(/>\s+</gi,'><');
html=html.replace(/(^\s+)|(\s+$)/g,"");
html=html.replace(/<p><\/p>/gi,'');
html=html.replace(/<br><p/gi,'<p');
html=html.replace(/p><br>/gi,'p>');
html=html.replace(/<br><br>/gi,'<br>');
SAI_EDWindow.document.body.innerHTML=html;
document.getElementById(SAI_ESan).value=html;
}
//全自动纯文本+图片+表格排版
function SAI_Sauto(){
var html=SAI_EGetContent();
//替换需要保留的标签
html=html.replace(/\<br[^>]*>/gi,"[$br]");
html=html.replace(/<\/div>/gi,'[$br]');
html=html.replace(/<\/p>/gi,'[$br]');
html=html.replace(/\<img([^>]*)>/gim,"[img$1]");
html=html.replace(/\<table([^>]*)>/gim,"[table$1]");
html=html.replace(/<\/table>/gi,'[$xtable]');
html=html.replace(/\<tbody([^>]*)>/gim,"[tbody$1]");
html=html.replace(/<\/tbody>/gi,'[$xtbody]');
html=html.replace(/\<tr([^>]*)>/gim,"[tr$1]");
html=html.replace(/<\/tr>/gi,'[$xtr]');
html=html.replace(/\<td([^>]*)>/gim,"[td$1]");
html=html.replace(/<\/td>/gi,'[$xtd]');
html=html.replace(/\<a([^>]*)>/gim,"[a$1]");
html=html.replace(/<\/a>/gi,'[$xa]');
html=html.replace(/\<b[^>]*>/gi,"[$b]");
html=html.replace(/\<strong[^>]*>/gi,"[$b]");
html=html.replace(/<\/b>/gi,'[$xb]');
html=html.replace(/<\/strong>/gi,'[$xb]');
//清理剩余HTML标签
html=html.replace(/<[^>]+>/g,"");
html=html.replace(/(^\s+)|(\s+$)/g,"");
//替换回需要保留的标签
html=html.replace(/　　/ig,'');
html='　　'+html
html=html.replace(/\[\$br\]/gi,"<br>");
html=html.replace(/<br><br>/gi,'<br>');
html=html.replace(/<br><br>/gi,'<br>');
html=html.replace(/<br>/gi,"<br>　　");//每个换行符前加空格
html=html.replace(/　　<br>　　<br>/gi,"　　<br>");
html=html.replace(/<br>　　<br>　　/gi,"<br>　　");
html=html.replace(/\[img([^\]]*)\]/gim,"<img$1>");
html=html.replace(/\[table([^\]]*)\]/gim,"<table$1>");
html=html.replace(/\[\$xtable\]/gi,"</table>");
html=html.replace(/\[tbody([^\]]*)\]/gim,"<tbody$1>");
html=html.replace(/\[\$xtbody\]/gi,"</tbody>");
html=html.replace(/\[tr([^\]]*)\]/gim,"<tr$1>");
html=html.replace(/\[\$xtr\]/gi,"</tr>");
html=html.replace(/\[td([^\]]*)\]/gim,"<td$1>");
html=html.replace(/\[\$xtd\]/gi,"</td>");
html=html.replace(/\[a([^\]]*)\]/gim,"<a$1>");
html=html.replace(/\[\$xa\]/gi,"</a>");
html=html.replace(/\[\$b\]/gi,"<b>");
html=html.replace(/\[\$xb\]/gi,"</b>");
html=html.replace(/\<img([^>]*)>/gim,"<center><img$1></center>");
html=html+'<.>'
html=html.replace(/<br>　　<.>/gi,"");
html=html.replace(/<.>/gi,"");
SAI_EDWindow.document.body.innerHTML=html;
document.getElementById(SAI_ESan).value=html;
//Only for asai.cc用来自动得到摘要内容
document.getElementById("ss").value=html.replace(/<[^>]+>/g,"").substring(0,180).replace(/　/ig,'');
}
//向内容中插入
function SAI_Sinto(Mark1){
if(!SAI_EDMode){alert(SAI_Mtishi['modcode']);return;}
var oRange=SAI_EGetRange();
with(SAI_EDWindow){focus();
var html=Mark1;
if(html!=""){
if(html=="0"){html="[page]"}
if(html=="1"){html="[asai.cc]"}
if(html=="2"){
var itime=new Date()
html=itime.getFullYear()+"-"+(itime.getMonth()+1)+"-"+itime.getDate()+" "+itime.getHours()+":"+itime.getMinutes()+":"+itime.getSeconds();
}
if(document.all){oRange.pasteHTML(html);}else{var oFrag=oRange.createContextualFragment(html);
oRange.deleteContents();
oRange.insertNode(oFrag);}}
SAI_EGetContent();}
}
//插入弹窗返回的代码
function SAI_Opcode(value){if(value){SAI_Sincode(""+value+"");}}
//使用第三方编辑器编辑内容
function SAI_Opue(){if(SAI_ESpop!=""){SAI_Opcode(window.prompt("第三方编辑器：","阿赛HTML在线编辑器[AsaiEdit]"));}else{SAI_Opcode(showModalDialog(""+SAI_ESpop+"",window,"dialogWidth:520px;dialogHeight:320px;status:0;help:0;scroll:no;"));}}
//显示隐藏HTML编码区域Show And Hidden Code Area
function SAI_Scodearea(){
var selects=document.getElementsByTagName("select");
if(SAI_Ktextarea.style.display=="none"){SAI_Ktextarea.style.display="";
SAI_Kiframe.style.display="none";
SAI_EDMode=0;}else{SAI_EDWindow.document.body.innerHTML=SAI_Ktextarea.value;
SAI_Ktextarea.style.display="none";
SAI_Kiframe.style.display="";
SAI_EDMode=1;}
SAI_EGetContent();
}
//显示参考线Show And Hidden Edit->document.body Elements Borders
function SAI_Seborder(){
var oCssRules;
var cssTxt="strong,b,i,em,u,li{border:"+SAI_ESsy+" 1px dotted;padding:0px 2px;}a{border-bottom:"+SAI_ESsy+" 2px dotted;margin:0px 3px;}font{border:"+SAI_ESsy+" 1px dashed;margin:0px 3px;}span{border:"+SAI_ESsy+" 1px dotted;margin:0px 5px;}p{border:"+SAI_ESsy+" 1px dashed;padding:3px;}img{border:"+SAI_ESsy+" 2px dotted;padding:5px;margin:5px;}div{border:"+SAI_ESsy+" 3px dashed;margin:5px;}table{border:"+SAI_ESsy+" 2px dotted;margin:3px;}td{border-left:"+SAI_ESsy+" 1px dashed;border-right:"+SAI_ESsy+" 1px dashed;border-top:"+SAI_ESsy+" 1px dotted;border-bottom:"+SAI_ESsy+" 1px dashed;padding:8px;}";
with(SAI_EDWindow){oCssRules=document.styleSheets[0].ownerNode || document.styleSheets[0];}
if(document.all){if(oCssRules.cssText==""){oCssRules.cssText=cssTxt;}else{oCssRules.cssText="";}}else{if(oCssRules.innerHTML==""){oCssRules.innerHTML=cssTxt;}else{oCssRules.innerHTML="";}}}
// 高和宽样式处理函数
function SAI_SetWH(w,h){
var str='';
if(w){str+='width:'+w+'px;min-width:'+w+'px;'}
if(h){str+='height:'+h+'px;'}
return str;
}
//--------精简版可删■■■↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//插入链接
function SAI_InlinkX(){
SAI_Inclose(""+SAI_ESid+"SAI_Inlinkcon");
if(document.getElementById(SAI_ESid+'SAI_Inlink').innerHTML==''){
var SAI_Inlinkva='<div id="'+SAI_ESid+'SAI_Inlinkcon" class="SAI_CSSconx" style="'+SAI_SetWH(228,0)+'">\
链接：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_lkurl" style="width:168px;" value="http://">\
<p>属性：<select class="SAI_CSSselect"  id="'+SAI_ESid+'SAI_lktarget"><option selected="selected">默认打开</option><option value="_self">当前页打开</option><option value="_blank">新页面打开</option><option value="_parent">父框架打开</option><option value="_top">最顶部打开</option></select></p>\
<p><button class="SAI_CSSbutton" onClick="SAI_InlinkDo();" type="button">确定插入</button>　<button class="SAI_CSSbutton" onClick="SAI_InlinkG();" type="button">关闭</button></p>\
</div>';
document.getElementById(''+SAI_ESid+'SAI_Inlink').innerHTML=SAI_Inlinkva;
}else{
document.getElementById(''+SAI_ESid+'SAI_Inlinkcon').style.display='';
}
}
function SAI_InlinkDo(){
var SAI_Inlinkur=document.getElementById(''+SAI_ESid+'SAI_lkurl').value;
if(SAI_Inlinkur!=""&&SAI_Inlinkur!="http://"){
var SAI_Inlinkot='';
SAI_Inlinkot=SAI_Inlinkot+'<a href="'+SAI_Inlinkur+'"'
if(document.getElementById(''+SAI_ESid+'SAI_lktarget').value!=""){SAI_Inlinkot=SAI_Inlinkot+' target="'+document.getElementById(''+SAI_ESid+'SAI_lktarget').value+'"';}
SAI_Inlinkot=SAI_Inlinkot+'>'
SAI_Sstyle(SAI_Inlinkot,'</a>')
document.getElementById(''+SAI_ESid+'SAI_Inlink').innerHTML='';
}else{
alert('链接不能为空。');
}
}
function SAI_InlinkG(){
document.getElementById(''+SAI_ESid+'SAI_Inlinkcon').style.display='none';
}
//查找替换
function SAI_InreplaceX(){
SAI_Inclose(""+SAI_ESid+"SAI_Inreplacecon");
if(document.getElementById(''+SAI_ESid+'SAI_Inreplace').innerHTML==''){
var SAI_Inreplaceva='<div id="'+SAI_ESid+'SAI_Inreplacecon" class="SAI_CSSconx" style="'+SAI_SetWH(188,0)+'">';
SAI_Inreplaceva=SAI_Inreplaceva+'查找字符：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_rpstr" style="width:100px;" value="">\
<p>替换字符：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_rpstrx" style="width:100px;" value=""><br><input class="SAI_CSScheck" type="checkbox" id="'+SAI_ESid+'SAI_rpstrq" value="1"> <label for='+SAI_ESid+'SAI_rpstrq>区分大小写</label></p>\
<p><button class="SAI_CSSbutton" onClick="SAI_InreplaceDo();" type="button">确定替换</button>　<button class="SAI_CSSbutton" onClick="SAI_InreplaceG();" type="button">关闭</button></p>\
</div>';
document.getElementById(''+SAI_ESid+'SAI_Inreplace').innerHTML=SAI_Inreplaceva;
}else{
document.getElementById(''+SAI_ESid+'SAI_Inreplacecon').style.display='';
}
}
function SAI_Erecode(s,a,b,i)
{a=a.replace("?","\\?");
if(i==null){
var r=new RegExp(a,"gi");
}else if(i) {
var r=new RegExp(a,"g");
}else{
var r=new RegExp(a,"gi");}
return s.replace(r,b);
}
function SAI_InreplaceDo(){
var SAI_Inreplaceur=document.getElementById(''+SAI_ESid+'SAI_rpstr').value;
if(SAI_Inreplaceur!=""){
var SAI_Inreplaceot=document.getElementById(''+SAI_ESid+'SAI_rpstrx').value;
var SAI_InreplaceXstr=SAI_EGetContent();
if(document.getElementById(''+SAI_ESid+'SAI_rpstrq').value='1'){SAI_InreplaceXstr=SAI_Erecode(SAI_InreplaceXstr,SAI_Inreplaceur,SAI_Inreplaceot,true);}
else{SAI_InreplaceXstr=SAI_Erecode(SAI_InreplaceXstr,SAI_Inreplaceur,SAI_Inreplaceot);};
SAI_EDWindow.document.body.innerHTML=SAI_InreplaceXstr;
document.getElementById(''+SAI_ESid+'SAI_Inreplace').innerHTML='';
}else{
alert('查找字符不能为空。');
}
}
function SAI_InreplaceG(){
document.getElementById(''+SAI_ESid+'SAI_Inreplacecon').style.display='none';
}
//插入表情
function SAI_InemotX(){
SAI_Inclose(""+SAI_ESid+"SAI_Inemotcon");
var EESDir="http://x.asai.cc/js/";
if(document.getElementById(''+SAI_ESid+'SAI_Inemot').innerHTML==''){
var SAI_Inemotva='<div id="'+SAI_ESid+'SAI_Inemotcon" class="SAI_CSSconx" style="'+SAI_SetWH(288,0)+'">';
for(i=1;i<148;i++){
SAI_Inemotva=SAI_Inemotva+'<img style="max-height:27px;" src='+EESDir+'qqbq/qq'+i+'.gif onclick="SAI_Sinto(\'<img src='+EESDir+'qqbq/qq'+i+'.gif>\')">';
}
SAI_Inemotva=SAI_Inemotva+'<br><button class="SAI_CSSbutton" onClick="SAI_InemotG();" type="button">关闭</button>\
</div>';
document.getElementById(''+SAI_ESid+'SAI_Inemot').innerHTML=SAI_Inemotva;
}else{
document.getElementById(''+SAI_ESid+'SAI_Inemotcon').style.display='';
}
}
function SAI_InemotG(){
document.getElementById(''+SAI_ESid+'SAI_Inemotcon').style.display='none';
}
//插入表格
function SAI_IntableX(){
SAI_Inclose(""+SAI_ESid+"SAI_Intablecon");
if(document.getElementById(''+SAI_ESid+'SAI_Intable').innerHTML==''){
var SAI_Intableva='<div id="'+SAI_ESid+'SAI_Intablecon" class="SAI_CSSconx" style="'+SAI_SetWH(288,0)+'">\
<p>表格行数：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbhang" style="width:66px;" value="2">　表格列数：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tblie" style="width:66px;" value="2"></p>\
<p>表格宽度：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbwidth" style="width:66px;" value="100%">　表格边框：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbborder" style="width:66px;" value="0"></p>\
<p>单元边距：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbcellpadding" style="width:66px;" value="5">　单元间距：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbcellspacing" style="width:66px;" value="0"></p>\
<p>背景颜色：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbbgcolor" style="width:66px;" value="">　边框颜色：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_tbbordercolor" style="width:66px;" value=""></p>\
<p>表格位置：<select class="SAI_CSSselect" id="'+SAI_ESid+'SAI_tbalign" style="width:66px;"><option value="" selected="selected">默认</option><option value="center">居中</option><option value="left">左对齐</option><option value="right">右对齐</option></select>　表格样式：<select class="SAI_CSSselect" id="'+SAI_ESid+'SAI_tbstyle" style="width:66px;"><option value="" selected="selected">无样式</option><option value="border-collapse:separate;">分开边框</option><option value="border-collapse:collapse;">合并边框</option><option value="text-align:center;">文字居中</option><option value="border-style:dotted;">虚线边框</option></select></p>\
<p><button class="SAI_CSSbutton" onClick="SAI_IntableDo();" type="button">确定插入</button>　<button class="SAI_CSSbutton" onClick="SAI_IntableG();" type="button">关闭</button></p>\
</div>';
document.getElementById(''+SAI_ESid+'SAI_Intable').innerHTML=SAI_Intableva;
}else{
document.getElementById(''+SAI_ESid+'SAI_Intablecon').style.display='';
}
}
function SAI_IntableDo(){
var SAI_Intablehang=parseInt(document.getElementById(''+SAI_ESid+'SAI_tbhang').value);
var SAI_Intablelie=parseInt(document.getElementById(''+SAI_ESid+'SAI_tblie').value);
if(SAI_Intablehang>0&&SAI_Intablelie>0){
var SAI_Intableot='<table';
if(document.getElementById(''+SAI_ESid+'SAI_tbwidth').value!=""){SAI_Intableot=SAI_Intableot+' width="'+document.getElementById(''+SAI_ESid+'SAI_tbwidth').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbborder').value!=""){SAI_Intableot=SAI_Intableot+' border="'+document.getElementById(''+SAI_ESid+'SAI_tbborder').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbcellpadding').value!=""){SAI_Intableot=SAI_Intableot+' cellpadding="'+document.getElementById(''+SAI_ESid+'SAI_tbcellpadding').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbcellspacing').value!=""){SAI_Intableot=SAI_Intableot+' cellspacing="'+document.getElementById(''+SAI_ESid+'SAI_tbcellspacing').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbbgcolor').value!=""){SAI_Intableot=SAI_Intableot+' bgcolor="'+document.getElementById(''+SAI_ESid+'SAI_tbbgcolor').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbbordercolor').value!=""){SAI_Intableot=SAI_Intableot+' bordercolor="'+document.getElementById(''+SAI_ESid+'SAI_tbbordercolor').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbalign').value!=""){SAI_Intableot=SAI_Intableot+' align="'+document.getElementById(''+SAI_ESid+'SAI_tbalign').value+'"';}
if(document.getElementById(''+SAI_ESid+'SAI_tbstyle').value!=""){SAI_Intableot=SAI_Intableot+' style="'+document.getElementById(''+SAI_ESid+'SAI_tbstyle').value+'"';}
SAI_Intableot=SAI_Intableot+'><tbody>';
for(SAI_Intablei=0;SAI_Intablei<SAI_Intablehang;SAI_Intablei++)
{SAI_Intableot=SAI_Intableot+'<tr>';
for(SAI_Intablej=0;SAI_Intablej<SAI_Intablelie;SAI_Intablej++){SAI_Intableot=SAI_Intableot+'<td></td>';}
SAI_Intableot=SAI_Intableot+'</tr>';}
SAI_Intableot=SAI_Intableot+'</tbody></table>';
SAI_Sinto(SAI_Intableot);
document.getElementById(''+SAI_ESid+'SAI_Intable').innerHTML='';
}else{
alert('行、列必须大于0。');
}
}
function SAI_IntableG(){
document.getElementById(''+SAI_ESid+'SAI_Intablecon').style.display='none';
}
//插入媒体
function SAI_InfileX(){
SAI_Inclose(""+SAI_ESid+"SAI_Infilecon");
if(document.getElementById(''+SAI_ESid+'SAI_Infile').innerHTML==''){
var SAI_Infileva='<div id="'+SAI_ESid+'SAI_Infilecon" class="SAI_CSSconx" style="'+SAI_SetWH(258,0)+'">';
SAI_Infileva=SAI_Infileva+'媒体地址：<input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_Infilefile" style="width:158px;" value="http://">\
<p>媒体尺寸：宽 <input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_Infilewidth" style="width:38px;" value=""> px　高 <input class="SAI_CSSinput" id="'+SAI_ESid+'SAI_Infileheight" style="width:38px;" value=""> px</p>\
<p><button class="SAI_CSSbutton" onClick="SAI_InfileDo();" type="button">确定插入</button> <button class="SAI_CSSbutton" onClick="SAI_InfileG();" type="button">关闭</button></p>\
</div>';
document.getElementById(''+SAI_ESid+'SAI_Infile').innerHTML=SAI_Infileva;
}else{
document.getElementById(''+SAI_ESid+'SAI_Infilecon').style.display='';
}
}
function SAI_InfileDo(){
var SAI_Infileur=document.getElementById(''+SAI_ESid+'SAI_Infilefile').value;
if(SAI_Infileur!=""&&SAI_Infileur!="http://"){
var SAI_Infileot='';
var SAI_Infilewh='';
var SAI_Infilehz='';
var SAI_Infilewd=document.getElementById(''+SAI_ESid+'SAI_Infilewidth').value;
var SAI_Infileht=document.getElementById(''+SAI_ESid+'SAI_Infileheight').value;
if(SAI_Infilewd!=''){SAI_Infilewh=SAI_Infilewh+' width="'+SAI_Infilewd+'"';}
if(SAI_Infileht!=''){SAI_Infilewh=SAI_Infilewh+' height="'+SAI_Infileht+'"';}
SAI_Infilehz=SAI_Infileur.substring(SAI_Infileur.length-3).toLowerCase();
switch(SAI_Infilehz){case "gif":case "jpg":case "epg":case "pic":case "png":case "bmp":
SAI_Infileot='<img src="'+SAI_Infileur+'"'+SAI_Infilewh+'>'
break;
case "mp3":case "wma":
SAI_Infileot='<audio controls="controls"'+SAI_Infilewh+'>\
<source src="'+SAI_Infileur+'">\
<embed src="'+SAI_Infileur+'"'+SAI_Infilewh+'>\
</audio>';
break;
case "avi":case "wmv":case "asf":case "mpg":case "peg":case "mp4":case "3gp":case "ogg":
SAI_Infileot='<video src="'+SAI_Infileur+'" controls="controls"'+SAI_Infilewh+'>\
<a href="'+SAI_Infileur+'">阿赛提示：您的浏览器不支持 '+SAI_Infilehz+' 格式播放，点击下载到本地。</a>\
</video>';
break;
//case ".rm":case ".ra":case "ram":case "mvb":
//
//break;
case "swf":case "flv":
SAI_Infileot='<embed src="'+SAI_Infileur+'" allowFullScreen="true" quality="high"'+SAI_Infilewh+' align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'
break;
default:
SAI_Infileot='<a target="_blank" title="点击查看" href="'+SAI_Infileur+'">'+SAI_Infileur+'</a>';
}
SAI_Sinto(SAI_Infileot);
document.getElementById(''+SAI_ESid+'SAI_Infile').innerHTML='';
}else{
alert('无媒体资源可插入，请确认表单填写完整。');
}
}
function SAI_InfileG(){
document.getElementById(''+SAI_ESid+'SAI_Infilecon').style.display='none';
}
function SAI_Inclose(ifty){
if(ifty!=''+SAI_ESid+'SAI_Inemotcon'&&document.getElementById(''+SAI_ESid+'SAI_Inemotcon')){document.getElementById(''+SAI_ESid+'SAI_Inemotcon').style.display='none';}
if(ifty!=''+SAI_ESid+'SAI_Intablecon'&&document.getElementById(''+SAI_ESid+'SAI_Intablecon')){document.getElementById(''+SAI_ESid+'SAI_Intablecon').style.display='none';}
if(ifty!=''+SAI_ESid+'SAI_Infilecon'&&document.getElementById(''+SAI_ESid+'SAI_Infilecon')){document.getElementById(''+SAI_ESid+'SAI_Infilecon').style.display='none';}
if(ifty!=''+SAI_ESid+'SAI_Inlinkcon'&&document.getElementById(''+SAI_ESid+'SAI_Inlinkcon')){document.getElementById(''+SAI_ESid+'SAI_Inlinkcon').style.display='none';}
if(ifty!=''+SAI_ESid+'SAI_Inreplacecon'&&document.getElementById(''+SAI_ESid+'SAI_Inreplacecon')){document.getElementById(''+SAI_ESid+'SAI_Inreplacecon').style.display='none';}
if(ifty!=''+SAI_ESid+'SAI_Inaboutcon'&&document.getElementById(''+SAI_ESid+'SAI_Inaboutcon')){document.getElementById(''+SAI_ESid+'SAI_Inaboutcon').style.display='none';}
if(ifty!=''+SAI_ESid+'SAI_Inreplacecon'&&document.getElementById(''+SAI_ESid+'SAI_Inreplacecon')){document.getElementById(''+SAI_ESid+'SAI_Inreplacecon').style.display='none';}
}
//--------精简版可删■■■↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑