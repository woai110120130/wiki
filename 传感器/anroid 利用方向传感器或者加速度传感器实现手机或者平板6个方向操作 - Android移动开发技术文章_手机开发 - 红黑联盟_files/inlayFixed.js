/*! ver:1392089005 Copyright 2014 Baidu Inc. All Rights Reserved. */;(function(){var k=void 0,l=!0,p=null,q=!1,z=window.BAIDU_DUP_require,E=window.BAIDU_DUP_define;
E&&E("union/common/bom1392089005",[],function(){var d={};/msie (\d+\.\d)/i.test(navigator.userAgent)&&(d.a=document.documentMode||+RegExp.$1);/opera\/(\d+\.\d)/i.test(navigator.userAgent)&&(d.opera=+RegExp.$1);/firefox\/(\d+\.\d)/i.test(navigator.userAgent)&&(d.Yb=+RegExp.$1);/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent)&&(d.nc=+(RegExp.$1||RegExp.$2));/chrome\/(\d+\.\d)/i.test(navigator.userAgent)&&(d.Ub=+RegExp.$1);try{/(\d+\.\d)/.test(window.external.hc)&&
(d.ic=+RegExp.$1)}catch(h){}d.Ta=/webkit/i.test(navigator.userAgent);d.Db=/gecko/i.test(navigator.userAgent)&&!/like gecko/i.test(navigator.userAgent);d.Sa="CSS1Compat"==document.compatMode;return{f:d,t:function(){var c=l;if(this.f.a&&(7>this.f.a||"BackCompat"===document.compatMode))c=q;return c},cc:function(c){try{return c=c||window,"BackCompat"===c.document.compatMode?c.document.body.scrollWidth:c.document.documentElement.scrollWidth}catch(d){return 0}},bc:function(c){try{return c=c||window,"BackCompat"===
c.document.compatMode?c.document.body.scrollHeight:c.document.documentElement.scrollHeight}catch(d){return 0}},ma:function(c){try{return c=c||window,"BackCompat"===c.document.compatMode?c.document.body.clientWidth:c.document.documentElement.clientWidth}catch(d){return 0}},R:function(c){try{return c=c||window,"BackCompat"===c.document.compatMode?c.document.body.clientHeight:c.document.documentElement.clientHeight}catch(d){return 0}},U:function(c){c=(c||window).document;return window.pageYOffset||c.documentElement.scrollTop||
c.body.scrollTop},Oa:function(c){c=(c||window).document;return window.pageXOffset||c.documentElement.scrollLeft||c.body.scrollLeft},Ua:function(c){var d=q;try{c&&"object"===typeof c&&c.document&&"setInterval"in c&&(d=l)}catch(a){d=q}return d},H:function(c){c=c||window;return c!=window.top&&c!=c.parent||!this.Ua(c)},W:function(c,d){for(var d=2===arguments.length?d:c.parent,a=0;10>a++&&this.H(c,d);){var b;try{b=!!c.parent.location.toString()}catch(e){b=q}if(!b)return l;c=c.parent}return 10<=a?l:q},
Ib:function(c,d){var a=new Image,b="cpro_log_"+Math.floor(2147483648*Math.random()).toString(36),d=d||window;d[b]=a;a.onload=a.onerror=a.onabort=function(){a.onload=a.onerror=a.onabort=p;a=d[b]=p};a.src=c},na:function(c){if(!c)return document;"string"===typeof c&&(c=document.getElementById(c));return 9===c.nodeType?c:c.ownerDocument||c.document},oa:function(c){"string"===typeof c&&(c=document.getElementById(c));c=this.na(c);return c.parentWindow||c.defaultView||p},fc:function(c){c=c||window;return this.H(c)&&
!this.W(c,c.top)&&this.Ua(c.top)?c.top:c}}});
E&&E("union/common/logic1392089005",[],function(){return{Wb:function(d){(d=d||"")&&(d=d.replace(/%u[\d|\w]{4}/g,function(d){return encodeURIComponent(unescape(d))}));return d},bb:function(d,h){return d.replace(/{(.*?)}/g,function(c,d){return h[d]||""})},Eb:function(d){return(new Function("return "+d))()},Pa:function(d,h){if(d&&h){var c=d.match(RegExp("(^|&|\\?|#)"+h+"=([^&]*)(&|$)",""));if(c)return c[2]}return p},kc:function(d,h){var d=d||"",h=h||"?",c=arguments.callee;c.hasOwnProperty[h]||(c[h]={});c=c[h];
if(c.hasOwnProperty(d))return c[d];var g={},a=d.indexOf(h),b=d.substring(a+1).split("&");if(-1!==a)for(var a=0,e=b.length;a<e;a++){var i=b[a].split("="),j=decodeURIComponent(i[0]),i=decodeURIComponent(i[1]);g.hasOwnProperty(j)?(g[j].constructor!==Array&&(g[j]=[g[j]]),g[j].push(i)):g[j]=i}return c[d]=g}}});
E&&E("union/common/cookie1392089005",[],function(){return{T:function(d,h){var c,g=RegExp("(^| )"+d+"=([^;]*)(;|$)").exec((h||window).document.cookie);g&&(c=g[2]);return c},va:function(d,h,c){var c=c||{},g=c.F;"number"==typeof c.F&&(g=new Date,g.setTime(g.getTime()+c.F));document.cookie=""+d+"="+h+(c.path?"; path="+c.path:"")+(g?"; expires="+g.toGMTString():"")+(c.domain?"; domain="+c.domain:"")+(c.oc?"; secure":"")},remove:function(d){var h=new Date;h.setTime(h.getTime()-86400);this.pc(d,"",{path:"/",F:h})}}});
E&&E("union/preview1392089005",["union/common/bom1392089005","union/common/logic1392089005","union/common/cookie1392089005"],function(d,h,c){function g(a){a=decodeURIComponent(a).replace(/\\x1e/g,"&").replace(/\\x1d/g,"=").replace(/\\x1c/g,"?").replace(/\\x5c/g,"\\");return h.Eb(a)}function a(a,e){var i;i=e?e.substring(e.indexOf("?")):d.W(window)?window.location.search.slice(1):window.top.location.search.slice(1);var j=document.referrer,f=0<=a.indexOf("inlay")||"ui"===a?"bd_cpro_prev":"bd_cpro_fprev",m="",v;try{v=document.cookie}catch(w){}-1!==
i.indexOf(f)&&(m=h.Pa(i,f));!m&&v&&-1!==v.indexOf(f)&&(m=c.T(f));!m&&-1!==j.indexOf(f)&&(m=h.Pa(j,f));return m}return{Na:function(b,e){var c=window.location.href,j=parseInt(b.rsi0,10),f=parseInt(b.rsi1,10),m=parseInt(b.at,10),v=q,w=a(e,c);if(w)if(w=g(w),m===k&&(m=1),1!==parseInt(w.type,10)&&2===(m&2))v=parseInt(w.imgWidth,10)===parseInt(j,10)&&parseInt(w.imgHeight,10)===parseInt(f,10);else if(1===parseInt(w.type,10)&&(1===(m&1)||64===(m&64)||32===(m&32)))v=l;return v?(j=0<=e.indexOf("inlay")||"ui"===
e?"bd_cpro_prev":"bd_cpro_fprev",c=a(e,c),f=b.tn,m=g(c),v=p,0<=e.indexOf("inlay")?v={serviceUrl:"http://cpro.baidu.com/cpro/ui/preview/templates/"+(1===parseInt(m.type,10)?f+".html":2===parseInt(m.type,10)?"image.html":4===parseInt(m.type,10)?"flash.html":"blank_tips.html")+"?",paramString:(""+j+"=#"+c+"&ut="+ +new Date).replace(/\.(?!swf)/g,"%252e")}:"float"===e&&(m=parseInt(m.type,10),m="http://cpro.baidu.com/cpro/ui/preview/templates/"+(2===m?"float_image.html":4===m?"float_flash.html":"blank_tips.html")+
"?",c="tn="+f+("&"+j+"="+c).replace(/\./g,"%252e")+"&ut="+ +new Date,v={serviceUrl:m,paramString:c}),v):p}}});
E&&E("union/business/businessLogic1392089005",["union/preview1392089005"],function(d){var h={inlay:8,"float":2,patch:2,linkunit:20,popup:1},c={inlay:0,"float":0,patch:0,linkunit:0,popup:0},g={1001:"inlay-fixed",1002:"inlay-float",2001:"float-left-middle",2002:"float-right-middle",2003:"float-left-bottom",2004:"float-right-bottom",2005:"float-top",2006:"float-bottom",2007:"float-linkunit-left",3001:"patch-webpage",3002:"patch-flash",4001:"captcha-webpage"};return{Wa:function(a){var b=a._html||{},c="",i="http://cb.baidu.com/ecom?",
j=a.id.split("_")[0],f=parseInt(b.conW||0,10)||parseInt(a._w,10)||parseInt(a.sw,10)||parseInt(b.rsi0,10),g=parseInt(b.conH||0,10)||parseInt(a._h,10)||parseInt(a.sh,10)||parseInt(b.rsi1,10),h=a.displayType,w=b.tn||"",G=w.toLowerCase(),n=b.ch||0,a=a.qn||"",s=b.n||"",t=b.dai||0;b.dtm="BAIDU_DUP2_SETJSONADSLOT";b.dc="2";b.di=j;var c=[],u;for(u in b)u&&b.hasOwnProperty(u)&&c.push(""+u+"="+encodeURIComponent(b[u].toString()));c=c.join("&");if((u=d.Na(b,h))&&u.serviceUrl!==k&&u.paramString!==k)i=u.serviceUrl,
c=u.paramString;return{slotId:j,slotWidth:f,slotHeight:g,displayType:h,styleType:G,unionAccount:s,adIndex:t,channel:n,pvId:a,stuffType:"unknown",serviceUrl:i,paramString:c,delayIn:b.delayIn,delayOut:b.delayOut,sessionSync:b.sessionSync!==q&&"false"!==b.sessionSync,closeFor:b.closeFor,xuantingType:b.xuanting,tn:w}},ra:function(a){var b={};b.ob=(a.ob||"pc").toLowerCase();b.k=(a.k||"inlay-fixed").toLowerCase();b.i=(a.i||"template_inlay_all_normal").toLowerCase();b.B=(a.B||"text").toLowerCase();if(-1<
b.i.indexOf("tlink")||-1<b.i.indexOf("linkunit"))b.k="linkunit-fixed";0<=b.i.indexOf("float_xuanfuwin")&&(b.k="popup-float");a=b.k.split("-");b.Q=a[0]||"inlay";b.Vb=a[1]||"fixed";return b},ca:function(a){a=this.ra(a);a=a.Q;return c[a]<h[a]},$b:function(a){a=this.ra(a);return c[a.Q]},ua:function(a){a=this.ra(a);c[a.Q]+=1;return l},Qa:function(a,b){var c=document.getElementById("cpro_"+a);c||(c=document.getElementById(b));return c},ub:function(a){return g[a]},mb:function(a){var b={"test.com":l,"people.com.cn":l,
"chinanews.com":l,"cri.cn":l,"chinadaily.com":l,"cnki.com.cn":l,"cnki.net":l,"ku6.com":l,"tgbus.com":l,"5068.com":l,"yzz.cn":l,"aipai.com":l,"stockstar.com":l},a=a||window,c="",d=a.document.domain.split("."),g=d.length;g&&2<g?c="cn"===d[g-1]&&"com"===d[g-2]?d[g-3]+"."+d[g-2]+"."+d[g-1]:d[g-2]+"."+d[g-1]:g&&(c=a.document.domain);return c&&b[c]?q:l}}});E&&E("union/inlayFixed",["union/business/businessLogic1392089005"],function(d){function h(c){return'<iframe width="{slotWidth}" height="{slotHeight}" src="{serviceUrl}{paramString}" align="center,center" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>'.replace(/{(.*?)}/g,function(d,a){return c[a]||""})}return{render:function(c,g){c.displayType="inlay-fixed";var a=d.Wa(c),b={k:a.displayType,i:a.styleType,B:a.stuffType};if(!d.ca(b))return q;d.Qa(a.slotId,g).innerHTML=
h(a);d.ua(b);(function(){var b=a.slotId,c=a.adIndex||0;z(["viewWatch"],function(j){j.register({id:b,wrapperId:g,logType:"block",extra:"did="+c+"&ch="+a.channel+"&jk="+a.pvId+"&tn="+a.tn+"&n="+a.unionAccount+"&js=c"})},l)})()}}});
})();
