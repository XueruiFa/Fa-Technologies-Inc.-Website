(function(){var g,aa=aa||{},l=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||l;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||l,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ba(a){a.getInstance=function(){return a.P?a.P:a.P=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function u(a){return"array"==ca(a)}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function ea(a){return"number"==typeof a}
function fa(a){return"function"==ca(a)}
function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ha(a){return a[ia]||(a[ia]=++ja)}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return w.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var x=Date.now||function(){return+new Date};
function na(a,b){q(a,b,void 0)}
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}}
;function oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(oa,Error);oa.prototype.name="CustomError";var pa;var qa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ra(a){return decodeURIComponent(a.replace(/\+/g," "))}
var sa=/&/g,ta=/</g,va=/>/g,wa=/"/g,xa=/'/g,ya=/\x00/g,za=/[\x00&<>"']/;function Aa(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=l.document.createElement("div");return a.replace(Ba,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})}
function Ca(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})}
var Ba=/&([^;\s<&]+);?/g,Da={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},Ea={"'":"\\'"};
function Fa(a,b){for(var c=0,d=qa(String(a)).split("."),e=qa(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var k=d[h]||"",m=e[h]||"",n=RegExp("(\\d*)(\\D*)","g"),Z=RegExp("(\\d*)(\\D*)","g");do{var ua=n.exec(k)||["","",""],Hc=Z.exec(m)||["","",""];if(0==ua[0].length&&0==Hc[0].length)break;c=Ga(0==ua[1].length?0:parseInt(ua[1],10),0==Hc[1].length?0:parseInt(Hc[1],10))||Ga(0==ua[2].length,0==Hc[2].length)||Ga(ua[2],Hc[2])}while(0==c)}return c}
function Ga(a,b){return a<b?-1:a>b?1:0}
function Ha(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ia=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ja=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=v(a)?a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];
b.call(c,m,k,a)&&(e[f++]=m)}return e},Ka=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e},La=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1},Ma=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};
function Na(a,b,c){b=Oa(a,b,c);return 0>b?null:v(a)?a.charAt(b):a[b]}
function Oa(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}
function A(a,b){return 0<=Ia(a,b)}
function Pa(a,b){A(a,b)||a.push(b)}
function Qa(a,b){var c=Ia(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Ra(a,b){var c=Oa(a,b,void 0);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Va(a,b,c,d){return Array.prototype.splice.apply(a,Wa(arguments,1))}
function Wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Xa(a,b){return a>b?1:a<b?-1:0}
;function Ya(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Za(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}
function $a(a){var b=0,c;for(c in a)b++;return b}
function ab(a,b){return bb(a,b)}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function db(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}
function bb(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(a){var b={},c;for(c in a)b[c]=a[c];return b}
function jb(a){var b=ca(a);if("object"==b||"array"==b){if(fa(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=jb(a[c]);return b}return a}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var mb;a:{var nb=l.navigator;if(nb){var ob=nb.userAgent;if(ob){mb=ob;break a}}mb=""}function B(a){return-1!=mb.indexOf(a)}
;function pb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function qb(){this.b=""}
qb.prototype.Kb=!0;qb.prototype.Fb=function(){return this.b};
qb.prototype.toString=function(){return"Const{"+this.b+"}"};
function rb(a){var b=new qb;b.b=a;return b}
;function sb(){this.b="";this.f=tb}
sb.prototype.Kb=!0;sb.prototype.Fb=function(){return this.b};
function ub(a){if(a instanceof sb&&a.constructor===sb&&a.f===tb)return a.b;ca(a);return"type_error:SafeUrl"}
var vb=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function wb(a){if(a instanceof sb)return a;a=a.Kb?a.Fb():String(a);vb.test(a)||(a="about:invalid#zClosurez");return xb(a)}
var tb={};function xb(a){var b=new sb;b.b=a;return b}
xb("about:blank");function yb(){this.b="";this.f=zb;this.g=null}
yb.prototype.Kb=!0;yb.prototype.Fb=function(){return this.b};
function Ab(a){if(a instanceof yb&&a.constructor===yb&&a.f===zb)return a.b;ca(a);return"type_error:SafeHtml"}
var zb={};function Bb(a,b){var c=new yb;c.b=a;c.g=b;return c}
Bb("<!DOCTYPE html>",0);Bb("",0);Bb("<br>",0);function Cb(a,b){var c;c=b instanceof sb?b:wb(b);a.href=ub(c)}
;function Db(a,b,c){a&&(a.dataset?a.dataset[Eb(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[Eb(b)]:a.getAttribute("data-"+b):null}
function Fb(a,b){a&&(a.dataset?delete a.dataset[Eb(b)]:a.removeAttribute("data-"+b))}
var Gb={};function Eb(a){return Gb[a]||(Gb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Hb(a){l.setTimeout(function(){throw a;},0)}
var Ib;
function Jb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ac;c.ac=null;a()}};
return function(a){d.next={ac:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}}
;function Kb(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
Kb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function Lb(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function Mb(){this.f=this.b=null}
var Ob=new Kb(function(){return new Nb},function(a){a.reset()},100);
Mb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Nb(){this.next=this.scope=this.b=null}
Nb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Nb.prototype.reset=function(){this.next=this.scope=this.b=null};function Pb(a,b){Qb||Rb();Sb||(Qb(),Sb=!0);var c=Tb,d=Ob.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Qb;function Rb(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);Qb=function(){a.then(Ub)}}else Qb=function(){var a=Ub;
!fa(l.setImmediate)||l.Window&&l.Window.prototype&&!B("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Ib||(Ib=Jb()),Ib(a)):l.setImmediate(a)}}
var Sb=!1,Tb=new Mb;function Ub(){for(var a;a=Tb.remove();){try{a.b.call(a.scope)}catch(b){Hb(b)}Lb(Ob,a)}Sb=!1}
;function D(){this.Fa=this.Fa;this.T=this.T}
D.prototype.Fa=!1;D.prototype.isDisposed=function(){return this.Fa};
D.prototype.dispose=function(){this.Fa||(this.Fa=!0,this.A())};
function Vb(a,b){a.Fa?b.call(void 0):(a.T||(a.T=[]),a.T.push(p(void 0)?w(b,void 0):b))}
D.prototype.A=function(){if(this.T)for(;this.T.length;)this.T.shift()()};
function E(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Wb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];da(d)?Wb.apply(null,d):E(d)}}
;function F(a){D.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.aa={};this.j=!!a}
y(F,D);g=F.prototype;g.subscribe=function(a,b,c){var d=this.aa[a];d||(d=this.aa[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
g.unsubscribe=function(a,b,c){if(a=this.aa[a]){var d=this.b;if(a=Na(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.ha(a)}return!1};
g.ha=function(a){var b=this.b[a];if(b){var c=this.aa[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
g.w=function(a,b){var c=this.aa[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var h=c[e];Xb(this.b[h+1],this.b[h+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.b[h+1].apply(this.b[h+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.ha(c)}}return 0!=e}return!1};
function Xb(a,b,c){Pb(function(){a.apply(b,c)})}
g.clear=function(a){if(a){var b=this.aa[a];b&&(z(b,this.ha,this),delete this.aa[a])}else this.b.length=0,this.aa={}};
g.N=function(a){if(a){var b=this.aa[a];return b?b.length:0}a=0;for(b in this.aa)a+=this.N(b);return a};
g.A=function(){F.B.A.call(this);this.clear();this.f.length=0};var Yb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",Yb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var Zb=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",Zb,void 0);function $b(a){ac(Yb,arguments)}
function G(a,b){return a in Yb?Yb[a]:b}
function H(a,b){fa(a)&&(a=bc(a));return window.setTimeout(a,b)}
function I(a){window.clearTimeout(a)}
function bc(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw cc(b),b;}}:a}
function cc(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=G("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),$b("ERRORS",c))}
function dc(){var a={},b="FLASH_UPGRADE"in Zb?Zb.FLASH_UPGRADE:'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>';if(b)for(var c in a)b=b.replace(new RegExp("\\$"+c,"gi"),function(){return a[c]});
return b}
function ac(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var ec=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},fc="Microsoft Internet Explorer"==navigator.appName;var gc=r("yt.pubsub.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ha;F.prototype.publish=F.prototype.w;F.prototype.clear=F.prototype.clear;q("yt.pubsub.instance_",gc,void 0);var hc=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",hc,void 0);var ic=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",ic,void 0);var jc=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",jc,void 0);
var kc=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",kc,void 0);function lc(a,b,c){var d=mc();if(d){var e=d.subscribe(a,function(){if(!kc||kc!=e){var d=arguments,h;h=function(){hc[e]&&b.apply(c||window,d)};
try{jc[a]?h():H(h,0)}catch(k){cc(k)}}},c);
hc[e]=!0;ic[a]||(ic[a]=[]);ic[a].push(e);return e}return 0}
function nc(a){var b=mc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),z(a,function(a){b.unsubscribeByKey(a);delete hc[a]}))}
function J(a,b){var c=mc();return c?c.publish.apply(c,arguments):!1}
function oc(a,b){jc[a]=!0;var c=mc();c&&c.publish.apply(c,arguments);jc[a]=!1}
function pc(a){ic[a]&&(a=ic[a],z(a,function(a){hc[a]&&delete hc[a]}),a.length=0)}
function qc(a){var b=mc();if(b)if(b.clear(a),a)pc(a);else for(var c in ic)pc(c)}
function mc(){return r("yt.pubsub.instance_")}
;function rc(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(sc,""),c=c.replace(tc,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else uc(a,b)}
function uc(a,b){var c=vc(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=lc(c,b),h=""+ha(b);wc[h]=e}f||(d=xc(a,c,function(){C(d,"loaded")||(Db(d,"loaded","true"),J(c),H(ma(qc,c),0))}))}}
function xc(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function yc(a,b){if(a&&b){var c=""+ha(b);(c=wc[c])&&nc(c)}}
function vc(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ha(a)}
var sc=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,tc=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,wc={};var zc=null;function Ac(){var a=G("BG_I",null),b=G("BG_IU",null),c=G("BG_P",void 0);b?rc(b,function(){zc=new botguard.bg(c)}):a&&(eval(a),zc=new botguard.bg(c))}
function Bc(){return null!=zc}
function Cc(){return zc?zc.invoke():null}
;function Dc(a,b){return Bb(b,null)}
;var Ec="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function Fc(){}
Fc.prototype.next=function(){throw Ec;};
Fc.prototype.ma=function(){return this};
function Gc(a){if(a instanceof Fc)return a;if("function"==typeof a.ma)return a.ma(!1);if(da(a)){var b=0,c=new Fc;c.next=function(){for(;;){if(b>=a.length)throw Ec;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ic(a,b,c){if(da(a))try{z(a,b,c)}catch(d){if(d!==Ec)throw d;}else{a=Gc(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==Ec)throw d;}}}
function Jc(a){if(da(a))return Ta(a);a=Gc(a);var b=[];Ic(a,function(a){b.push(a)});
return b}
;function Kc(a,b){this.f={};this.b=[];this.va=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Kc?(c=a.ja(),d=a.O()):(c=db(a),d=cb(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}
g=Kc.prototype;g.N=function(){return this.g};
g.O=function(){Lc(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.f[this.b[b]]);return a};
g.ja=function(){Lc(this);return this.b.concat()};
g.Ra=function(a){for(var b=0;b<this.b.length;b++){var c=this.b[b];if(Mc(this.f,c)&&this.f[c]==a)return!0}return!1};
g.equals=function(a,b){if(this===a)return!0;if(this.g!=a.N())return!1;var c=b||Nc;Lc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Nc(a,b){return a===b}
g.isEmpty=function(){return 0==this.g};
g.clear=function(){this.f={};this.va=this.g=this.b.length=0};
g.remove=function(a){return Mc(this.f,a)?(delete this.f[a],this.g--,this.va++,this.b.length>2*this.g&&Lc(this),!0):!1};
function Lc(a){if(a.g!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Mc(a.f,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.g!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Mc(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
g.get=function(a,b){return Mc(this.f,a)?this.f[a]:b};
g.set=function(a,b){Mc(this.f,a)||(this.g++,this.b.push(a),this.va++);this.f[a]=b};
g.forEach=function(a,b){for(var c=this.ja(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.clone=function(){return new Kc(this)};
g.ma=function(a){Lc(this);var b=0,c=this.va,d=this,e=new Fc;e.next=function(){if(c!=d.va)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Ec;var e=d.b[b++];return a?e:d.f[e]};
return e};
function Mc(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Oc(a){return a.N&&"function"==typeof a.N?a.N():da(a)||v(a)?a.length:$a(a)}
function Pc(a){if(a.O&&"function"==typeof a.O)return a.O();if(v(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return cb(a)}
function Qc(a){if(a.ja&&"function"==typeof a.ja)return a.ja();if(!a.O||"function"!=typeof a.O){if(da(a)||v(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return db(a)}}
function Rc(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(da(a)||v(a))z(a,b,c);else for(var d=Qc(a),e=Pc(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],d&&d[h],a)}
function Sc(a,b){if("function"==typeof a.every)return a.every(b,void 0);if(da(a)||v(a))return Ma(a,b,void 0);for(var c=Qc(a),d=Pc(a),e=d.length,f=0;f<e;f++)if(!b.call(void 0,d[f],c&&c[f],a))return!1;return!0}
;function Tc(a){this.b=new Kc;a&&Uc(this,a)}
function Vc(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+ha(a):b.substr(0,1)+a}
g=Tc.prototype;g.N=function(){return this.b.N()};
function Uc(a,b){for(var c=Pc(b),d=c.length,e=0;e<d;e++){var f=c[e];a.b.set(Vc(f),f)}}
g.remove=function(a){return this.b.remove(Vc(a))};
g.clear=function(){this.b.clear()};
g.isEmpty=function(){return this.b.isEmpty()};
g.contains=function(a){a=Vc(a);return Mc(this.b.f,a)};
g.O=function(){return this.b.O()};
g.clone=function(){return new Tc(this)};
g.equals=function(a){return this.N()==Oc(a)&&Wc(this,a)};
function Wc(a,b){var c=Oc(b);if(a.N()>c)return!1;!(b instanceof Tc)&&5<c&&(b=new Tc(b));return Sc(a,function(a){var c=b;return c.contains&&"function"==typeof c.contains?c.contains(a):c.Ra&&"function"==typeof c.Ra?c.Ra(a):da(c)||v(c)?A(c,a):bb(c,a)})}
g.ma=function(){return this.b.ma(!1)};function Xc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;var Yc=B("Opera"),K=B("Trident")||B("MSIE"),Zc=B("Edge"),$c=B("Gecko")&&!(-1!=mb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),ad=-1!=mb.toLowerCase().indexOf("webkit")&&!B("Edge"),bd=B("Macintosh"),cd=B("Windows");function dd(){var a=l.document;return a?a.documentMode:void 0}
var ed;a:{var fd="",gd=function(){var a=mb;if($c)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Zc)return/Edge\/([\d\.]+)/.exec(a);if(K)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ad)return/WebKit\/(\S+)/.exec(a);if(Yc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
gd&&(fd=gd?gd[1]:"");if(K){var hd=dd();if(null!=hd&&hd>parseFloat(fd)){ed=String(hd);break a}}ed=fd}var id=ed,jd={};function kd(a){return jd[a]||(jd[a]=0<=Fa(id,a))}
function ld(a){return Number(md)>=a}
var nd=l.document,md=nd&&K?dd()||("CSS1Compat"==nd.compatMode?parseInt(id,10):5):void 0;function od(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function pd(a){return eval("("+a+")")}
function L(a){return qd(new rd(void 0),a)}
function rd(a){this.b=a}
function qd(a,b){var c=[];sd(a,b,c);return c.join("")}
function sd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(u(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],sd(a,a.b?a.b.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),td(d,c),c.push(":"),sd(a,a.b?a.b.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":td(b,
c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ud={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},vd=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function td(a,b){b.push('"',a.replace(vd,function(a){var b=ud[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ud[a]=b);return b}),'"')}
;var wd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function xd(a){return(a=a.match(wd)[3]||null)?decodeURI(a):a}
function yd(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?ra(h):"")}}
function zd(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Ad(a,b,c){if(u(b))for(var d=0;d<b.length;d++)Ad(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Bd(a,b,c){for(c=c||0;c<b.length;c+=2)Ad(b[c],b[c+1],a);return a}
function Cd(a,b){for(var c in b)Ad(c,b[c],a);return a}
function Dd(a){a=Cd([],a);a[0]="";return a.join("")}
function Ed(a,b){return zd(2==arguments.length?Bd([a],arguments[1],0):Bd([a],arguments,1))}
function Fd(a,b){return zd(Cd([a],b))}
;function Gd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=ra(e[0]||""),e=ra(e[1]||"");f in b?u(b[f])?Ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Hd(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Gd(d[1]||""),e;for(e in b)d[e]=b[e];return Fd(a,d)+c}
function Id(a){a=xd(a);a=null===a?null:a.split(".").reverse();return(null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:-nocookie)?$/)?!0:!1)||(null===a?!1:"google"==a[1]?!0:"google"==a[2]?"au"==a[0]&&"com"==a[1]?!0:"uk"==a[0]&&"co"==a[1]?!0:!1:!1)}
;var Jd=null;"undefined"!=typeof XMLHttpRequest?Jd=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Jd=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function Kd(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ld(a,b,c,d,e,f,h){function k(){4==(m&&"readyState"in m?m.readyState:0)&&b&&bc(b)(m)}
var m=Jd&&Jd();if(!("open"in m))return null;"onloadend"in m?m.addEventListener("loadend",k,!1):m.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);f="POST"==c;if(e=Md(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(f=!1);f&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);return m}
function Md(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(wd)[1]||null,e=xd(a);d&&e?(d=c,c=a.match(wd),d=d.match(wd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?xd(c)==e&&(Number(c.match(wd)[4]||null)||null)==(Number(a.match(wd)[4]||null)||null):!0;for(var f in Nd){if((e=d=G(Nd[f]))&&!(e=c)){var e=f,h=G("CORS_HEADER_WHITELIST")||{},k=xd(a);e=k?(h=h[k])?A(h,e):!1:!0}e&&(b[f]=d)}return b}
function Od(a,b){var c=G("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Pe&&(!xd(a)||b.withCredentials||xd(a)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.R&&b.R[c])}
function Pd(a,b){var c=b.format||"JSON";b.Qe&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=G("XSRF_FIELD_NAME",void 0),e=G("XSRF_TOKEN",void 0),f=b.Rb;f&&(f[d]&&delete f[d],a=Hd(a,f||{}));var h=b.postBody||"",f=b.R;Od(a,b)&&(f||(f={}),f[d]=e);f&&v(h)&&(d=Gd(h),lb(d,f),h=b.Zd&&"JSON"==b.Zd?JSON.stringify(d):Dd(d));var k=!1,m,n=Ld(a,function(a){if(!k){k=!0;m&&I(m);var d=Kd(a),e=null;if(d||400<=a.status&&500>a.status)e=
Qd(c,a,b.Oe);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||l;d?b.$&&b.$.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Nb&&b.Nb.call(f,a,e)}},b.method,h,b.headers,b.responseType,b.withCredentials);
b.Da&&0<b.timeout&&(m=H(function(){k||(k=!0,n.abort(),I(m),b.Da.call(b.context||l,n))},b.timeout));
return n}
function Qd(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=pd(a));break;case "XML":if(b=(b=b.responseXML)?Rd(b):null)d={},z(b.getElementsByTagName("*"),function(a){d[a.tagName]=Sd(a)})}c&&Td(d);
return d}
function Td(a){if(ga(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=Dc(rb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):Td(a[b])}}
function Rd(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Sd(a){var b="";z(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Nd={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};var Ud={},Vd=0;function Wd(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):H(a,b||0)}
;var Xd=[],Yd=!1;function Zd(){function a(){Yd=!0;"google_ad_status"in window?$b("DCLKSTAT",1):$b("DCLKSTAT",2)}
rc("//static.doubleclick.net/instream/ad_status.js",a);Xd.push(Wd(function(){Yd||"google_ad_status"in window||(yc("//static.doubleclick.net/instream/ad_status.js",a),$b("DCLKSTAT",3))},5E3))}
function $d(){return parseInt(G("DCLKSTAT",0),10)}
;function ae(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function be(a,b){return a.classList?a.classList.contains(b):A(ae(a),b)}
function ce(a,b){a.classList?a.classList.add(b):be(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function de(a,b){a.classList?a.classList.remove(b):be(a,b)&&(a.className=Ja(ae(a),function(a){return a!=b}).join(" "))}
function ee(a,b,c){c?ce(a,b):de(a,b)}
;function fe(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
fe.prototype.clone=function(){return new fe(this.x,this.y)};
fe.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
fe.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
fe.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function ge(a,b){this.width=a;this.height=b}
g=ge.prototype;g.clone=function(){return new ge(this.width,this.height)};
g.Yc=function(){return this.width*this.height};
g.aspectRatio=function(){return this.width/this.height};
g.isEmpty=function(){return!this.Yc()};
g.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};!$c&&!K||K&&ld(9)||$c&&kd("1.9.1");var he=K&&!kd("9");function ie(a){return a?new je(ke(a)):pa||(pa=new je)}
function le(a){return v(a)?document.getElementById(a):a}
function me(a){var b=document;return v(a)?b.getElementById(a):a}
function ne(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):oe(a,void 0)}
function oe(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var k=c.className;"function"==typeof k.split&&A(k.split(/\s+/),a)&&(f[e++]=c)}f.length=e;return f}return h}
function pe(a){var b=a.scrollingElement?a.scrollingElement:!ad&&qe(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return K&&kd("10")&&a.pageYOffset!=b.scrollTop?new fe(b.scrollLeft,b.scrollTop):new fe(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function qe(a){return"CSS1Compat"==a.compatMode}
function re(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function se(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function te(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function ke(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ue(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{re(a);var c=ke(a);a.appendChild(c.createTextNode(String(b)))}}
var ve={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},we={IMG:" ",BR:"\n"};function xe(a){if(he&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];ye(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");he||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function ye(a,b,c){if(!(a.nodeName in ve))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in we)b.push(we[a.nodeName]);else for(a=a.firstChild;a;)ye(a,b,c),a=a.nextSibling}
function ze(a){var b=Ae.Oc;return b?Be(a,function(a){return!b||v(a.className)&&A(a.className.split(/\s+/),b)},!0,void 0):null}
function Be(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function je(a){this.b=a||l.document||document}
je.prototype.createElement=function(a){return this.b.createElement(String(a))};
je.prototype.appendChild=function(a,b){a.appendChild(b)};
je.prototype.isElement=function(a){return ga(a)&&1==a.nodeType};
je.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var Ce=r("yt.dom.getNextId_");if(!Ce){Ce=function(){return++De};
q("yt.dom.getNextId_",Ce,void 0);var De=0}function Ee(){var a=document,b;La(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function Fe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ge||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Fe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Ge={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var fb=r("yt.events.listeners_")||{};q("yt.events.listeners_",fb,void 0);var He=r("yt.events.counter_")||{count:0};q("yt.events.counter_",He,void 0);function Ie(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=Ie(a,b,c,d);if(e)return e;var e=++He.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),h;h=f?function(d){d=new Fe(d);if(!Be(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Fe(b);
b.currentTarget=a;return c.call(a,b)};
h=bc(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,h,d)):a.attachEvent("on"+b,h);fb[e]=[a,b,c,h,d];return e}
function Je(a){a&&("string"==typeof a&&(a=[a]),z(a,function(a){if(a in fb){var c=fb[a],d=c[0],e=c[1],f=c[3],c=c[4];d.removeEventListener?d.removeEventListener(e,f,c):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[a]}}))}
;function Ke(){if(null==r("_lact",window)){var a=parseInt(G("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&Le();M(document,"keydown",Le);M(document,"keyup",Le);M(document,"mousedown",Le);M(document,"mouseup",Le);lc("page-mouse",Le);lc("page-scroll",Le);lc("page-resize",Le)}}
function Le(){null==r("_lact",window)&&(Ke(),r("_lact",window));var a=x();q("_lact",a,window);J("USER_ACTIVE")}
function Me(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;function Ne(){}
;function Oe(a){this.b=a||{cookie:""}}
var Pe=/\s*;\s*/;g=Oe.prototype;g.isEnabled=function(){return navigator.cookieEnabled};
g.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
g.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Pe),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
g.ja=function(){return Qe(this).keys};
g.O=function(){return Qe(this).values};
g.isEmpty=function(){return!this.b.cookie};
g.N=function(){return this.b.cookie?(this.b.cookie||"").split(Pe).length:0};
g.Ra=function(a){for(var b=Qe(this).values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};
g.clear=function(){for(var a=Qe(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Qe(a){a=(a.b.cookie||"").split(Pe);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Re=new Oe("undefined"==typeof document?null:document);Re.f=3950;function Se(a,b,c){Re.set(""+a,b,c,"/","youtube.com")}
;function Te(a,b,c){var d=G("EVENT_ID");d&&(b||(b={}),b.ei||(b.ei=d));if(b){var d=G("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=xd(window.location.href);e&&d.push(e);e=xd(a);if(A(d,e)||!e&&0==a.lastIndexOf("/",0)){var f=a.match(wd),d=f[5],e=f[6],f=f[7],h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e))d="ST-"+Ha(d).toString(36),e=b?Dd(b):"",Se(d,e,5),b&&(b=b.itct||b.ved,d=r("yt.logging.screenreporter.storeParentElement"),b&&d&&d(new Ne))}}if(c)return!1;(window.ytspf||
{}).enabled?spf.navigate(a):(c=window.location,a=Fd(a,{})+"",a=a instanceof sb?a:wb(a),c.href=ub(a));return!0}
;function Ue(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||ib(Ve);this.assets=a.assets||{};this.attrs=a.attrs||ib(We);this.params=a.params||ib(Xe);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Ve={enablejsapi:1},We={},Xe={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Ye(a){a instanceof Ue||(a=new Ue(a));return a}
Ue.prototype.clone=function(){var a=new Ue,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==ca(c)?a[b]=ib(c):a[b]=c}return a};function Ze(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
g=Ze.prototype;g.getHeight=function(){return this.bottom-this.top};
g.clone=function(){return new Ze(this.top,this.right,this.bottom,this.left)};
g.contains=function(a){return this&&a?a instanceof Ze?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function $e(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
g=$e.prototype;g.clone=function(){return new $e(this.left,this.top,this.width,this.height)};
g.contains=function(a){return a instanceof fe?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function af(a){af[" "](a);return a}
af[" "]=t;function bf(a,b){var c=ke(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function cf(a,b){return bf(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function df(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}K&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function ef(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function ff(a){var b=gf;if("none"!=cf(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function gf(a){var b=a.offsetWidth,c=a.offsetHeight,d=ad&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new ge(b,c):(a=df(a),new ge(a.right-a.left,a.bottom-a.top))}
function hf(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function jf(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?hf(a,c):0}
var kf={thin:2,medium:4,thick:6};function lf(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in kf?kf[c]:hf(a,c)}
;var mf=B("Firefox"),nf=Xc()||B("iPod"),of=B("iPad"),pf=B("Android")&&!(pb()||B("Firefox")||B("Opera")||B("Silk")),qf=pb(),rf=B("Safari")&&!(pb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))&&!(Xc()||B("iPad")||B("iPod"));function sf(){var a;if(a=Re.get("PREF",void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tf[d]=c.toString())}}}
ba(sf);var tf=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",tf,void 0);function uf(a){if(/^f([1-9][0-9]*)$/.test(a))throw"ExpectedRegexMatch: "+a;}
function vf(a){if(!/^\w+$/.test(a))throw"ExpectedRegexMismatch: "+a;}
function wf(a){a=void 0!==tf[a]?tf[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
sf.prototype.get=function(a,b){vf(a);uf(a);var c=void 0!==tf[a]?tf[a].toString():null;return null!=c?c:b?b:""};
sf.prototype.set=function(a,b){vf(a);uf(a);if(null==b)throw"ExpectedNotNull";tf[a]=b.toString()};
function xf(a,b){return!!((wf("f"+(Math.floor(b/31)+1))||0)&1<<b%31)}
sf.prototype.remove=function(a){vf(a);uf(a);delete tf[a]};
sf.prototype.clear=function(){tf={}};function yf(a,b){(a=le(a))&&a.style&&(a.style.display=b?"":"none",ee(a,"hid",!b))}
function zf(a){z(arguments,function(a){!da(a)||a instanceof Element?yf(a,!0):z(a,function(a){zf(a)})})}
function Af(a){z(arguments,function(a){!da(a)||a instanceof Element?yf(a,!1):z(a,function(a){Af(a)})})}
;function Bf(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var h,k,m,n;if(fc)try{h=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(Z){h=null}else m=document.body,n=document.createElement("object"),n.setAttribute("type","application/x-shockwave-flash"),h=m.appendChild(n);if(h&&"GetVariable"in h)try{k=h.GetVariable("$version")}catch(Z){k=""}m&&n&&m.removeChild(n);(h=k||"")?(h=h.split(" ")[1].split(","),h=[parseInt(h[0],10)||0,parseInt(h[1],10)||0,parseInt(h[2],
10)||0]):h=[0,0,0];this.b=h[0];this.f=h[1];this.g=h[2]}}
ba(Bf);function Cf(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
function Df(a){return-1<a.i.indexOf("Gnash")&&-1==a.i.indexOf("AVM2")||9==a.b&&1==a.f||9==a.b&&0==a.f&&1==a.g?!1:9<=a.b}
function Ef(a){return cd?!Cf(a,11,2):bd?!Cf(a,11,3):!Df(a)}
;function Ff(a,b,c){if(b){a=v(a)?me(a):a;var d=ib(c.attrs);d.tabindex=0;var e=ib(c.params);e.flashvars=Dd(c.args);if(fc){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=b;b=document.createElement("object");for(var f in d)b.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),b.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=b;b=document.createElement("embed");b.setAttribute("name",d.id);for(f in d)b.setAttribute(f,
d[f]);for(f in e)b.setAttribute(f,e[f])}e=document.createElement("div");e.appendChild(b);a.innerHTML=e.innerHTML}}
function Gf(a,b,c){if(a&&a.attrs&&a.attrs.id){a=Ye(a);var d=!!b,e=le(a.attrs.id),f=e?e.parentNode:null;if(e&&f){if(window!=window.top){var h=null;if(document.referrer){var k=document.referrer.substring(0,128);Id(k)||(h=k)}else h="unknown";h&&(d=!0,a.args.framer=h)}h=Bf.getInstance();if(Cf(h,a.minVersion)){var k=Hf(a,h),m="";-1<navigator.userAgent.indexOf("Sony/COM2")||(m=e.getAttribute("src")||e.movie);(m!=k||d)&&Ff(f,k,a);Ef(h)&&If()}else Jf(f,a,h);c&&c()}else H(function(){Gf(a,b,c)},50)}}
function Jf(a,b,c){0==c.b&&b.fallback?b.fallback():0==c.b&&b.fallbackMessage?b.fallbackMessage():a.innerHTML='<div id="flash-upgrade">'+dc()+"</div>"}
function Hf(a,b){return Df(b)&&a.url||(-1<navigator.userAgent.indexOf("Sony/COM2")&&!Cf(b,9,1,58)?!1:!0)&&a.urlV9As2||a.url}
function If(){var a=le("flash10-promo-div"),b=xf(sf.getInstance(),107);a&&!b&&zf(a)}
;function Kf(a){if(window.spf){var b=a.match(Lf);spf.style.load(a,b?b[1]:"",void 0)}else Mf(a)}
function Mf(a){var b=Nf(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=Of(a,b,function(){C(c,"loaded")||(Db(c,"loaded","true"),J(b),H(ma(qc,b),0))}))}
function Of(a,b,c){var d=document.createElement("link");d.id=b;d.rel="stylesheet";d.onload=function(){c&&setTimeout(c,0)};
Cb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Nf(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ha(a)}
var Lf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var Pf;var Qf=mb,Qf=Qf.toLowerCase();if(-1!=Qf.indexOf("android")){var Rf=Qf.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Rf)Pf=Number(Rf[1]);else{var Sf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},Tf=Qf.match("("+db(Sf).join("|")+")");Pf=Tf?Sf[Tf[0]]:0}}else Pf=void 0;var Uf=nf||of;var Vf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Wf=['audio/mp4; codecs="mp4a.40.2"'];function Xf(a){D.call(this);this.b=[];this.f=a||this}
y(Xf,D);function Yf(a,b,c,d){d=bc(w(d,a.f));b.addEventListener(c,d);a.b.push({target:b,name:c,zb:d})}
Xf.prototype.qb=function(a){for(var b=0;b<this.b.length;b++)if(this.b[b]==a){this.b.splice(b,1);a.target.removeEventListener(a.name,a.zb);break}};
function Zf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.zb)}}
Xf.prototype.A=function(){Zf(this);Xf.B.A.call(this)};function $f(a){return G("EXPERIMENT_FLAGS",{})[a]}
;function ag(a,b){this.b=0;this.l=void 0;this.i=this.f=this.g=null;this.j=this.o=!1;if(a!=t)try{var c=this;a.call(b,function(a){bg(c,2,a)},function(a){bg(c,3,a)})}catch(d){bg(this,3,d)}}
function cg(){this.next=this.context=this.f=this.i=this.b=null;this.g=!1}
cg.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.g=!1};
var dg=new Kb(function(){return new cg},function(a){a.reset()},100);
function eg(a,b,c){var d=dg.get();d.i=a;d.f=b;d.context=c;return d}
function fg(a){return new ag(function(b,c){c(a)})}
ag.prototype.then=function(a,b,c){return gg(this,fa(a)?a:null,fa(b)?b:null,c)};
ag.prototype.then=ag.prototype.then;ag.prototype.$goog_Thenable=!0;ag.prototype.cancel=function(a){0==this.b&&Pb(function(){var b=new hg(a);ig(this,b)},this)};
function ig(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,h=c.f;h&&(h.g||(d++,h.b==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.b&&1==d?ig(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):jg(c),kg(c,e,3,b)))}a.g=null}else bg(a,3,b)}
function lg(a,b){a.f||2!=a.b&&3!=a.b||mg(a);a.i?a.i.next=b:a.f=b;a.i=b}
function gg(a,b,c,d){var e=eg(null,null,null);e.b=new ag(function(a,h){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){h(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof hg?h(b):a(e)}catch(n){h(n)}}:h});
e.b.g=a;lg(a,e);return e.b}
ag.prototype.D=function(a){this.b=0;bg(this,2,a)};
ag.prototype.T=function(a){this.b=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.D,h=a.T;if(e instanceof ag)lg(e,eg(f||t,h||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)e.then(f,h,a),d=!0;else{if(ga(e))try{var m=e.then;if(fa(m)){ng(e,m,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}}d||(a.l=c,a.b=b,a.g=null,mg(a),3!=b||c instanceof hg||og(a,c))}}
function ng(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function h(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,h,f)}catch(m){f(m)}}
function mg(a){a.o||(a.o=!0,Pb(a.u,a))}
function jg(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
ag.prototype.u=function(){for(var a;a=jg(this);)kg(this,a,this.b,this.l);this.o=!1};
function kg(a,b,c,d){if(3==c&&b.f&&!b.g)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,pg(b,c,d);else try{b.g?b.i.call(b.context):pg(b,c,d)}catch(e){qg.call(null,e)}Lb(dg,b)}
function pg(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function og(a,b){a.j=!0;Pb(function(){a.j&&qg.call(null,b)})}
var qg=Hb;function hg(a){oa.call(this,a)}
y(hg,oa);hg.prototype.name="cancel";function rg(){this.b={apiaryHost:G("APIARY_HOST",void 0),Wc:G("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:G("GAPI_HINT_OVERRIDE"),gapiHintParams:G("GAPI_HINT_PARAMS",void 0),innertubeApiKey:G("INNERTUBE_API_KEY",void 0),innertubeApiVersion:G("INNERTUBE_API_VERSION",void 0),od:G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),qd:G("INNERTUBE_CONTEXT_HL",void 0),pd:G("INNERTUBE_CONTEXT_GL",void 0),Se:G("XHR_APIARY_HOST",void 0)};
sg||(sg=tg(this.b))}
var sg=null;function tg(a){return(new ag(function(b){rc(G("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){cc(c)}})})).then(function(){})}
rg.prototype.f=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Wc;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",G("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
function ug(a,b,c){var d={},e,f=!1;0<d.timeout&&(e=H(function(){f||(f=!0,d.Da&&d.Da())},d.timeout));
vg(a,b,c,function(a){if(!f)if(f=!0,e&&I(e),a)d.$&&d.$(a);else if(d.onError)d.onError()})}
function vg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":G("VISITOR_DATA")},method:"POST",body:L(c)},f=w(a.f,a);sg.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;var wg={log_event:"events",log_interaction:"interactions"},xg={},yg={},zg=0,Ag=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Ag,void 0);
function Bg(){I(zg);if(!gb(Ag)){for(var a in Ag){var b=xg[a];if(!b){b=yg[a];if(!b)continue;b=new b;xg[a]=b}var c=b.b,c={client:{hl:c.qd,gl:c.pd,clientName:c.od,clientVersion:c.innertubeContextClientVersion}};G("DELEGATED_SESSION_ID")&&(c.user={onBehalfOfUser:G("DELEGATED_SESSION_ID")});c={context:c};c.requestTimeMs=Math.round(ec());c[wg[a]]=Ag[a];ug(b,a,c);delete Ag[a]}gb(Ag)||Cg()}}
function Cg(){I(zg);zg=H(Bg,G("VISIBILITY_TIMEOUT",1E4))}
;function Dg(a,b,c){var d={};d.eventTimeMs=Math.round(c||ec());d[a]=b;Ag.log_event=Ag.log_event||[];a=Ag.log_event;a.push(d);yg.log_event=rg;20<=a.length?Bg():Cg()}
;function Eg(a,b){this.f=this.u=this.i="";this.l=null;this.j=this.b="";this.o=!1;var c;a instanceof Eg?(this.o=p(b)?b:a.o,Fg(this,a.i),this.u=a.u,Gg(this,a.f),Hg(this,a.l),this.b=a.b,Ig(this,a.g.clone()),this.j=a.j):a&&(c=String(a).match(wd))?(this.o=!!b,Fg(this,c[1]||"",!0),this.u=Jg(c[2]||""),Gg(this,c[3]||"",!0),Hg(this,c[4]),this.b=Jg(c[5]||"",!0),Ig(this,c[6]||"",!0),this.j=Jg(c[7]||"")):(this.o=!!b,this.g=new Kg(null,0,this.o))}
Eg.prototype.toString=function(){var a=[],b=this.i;b&&a.push(Lg(b,Mg,!0),":");var c=this.f;if(c||"file"==b)a.push("//"),(b=this.u)&&a.push(Lg(b,Mg,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.b)this.f&&"/"!=c.charAt(0)&&a.push("/"),a.push(Lg(c,"/"==c.charAt(0)?Ng:Og,!0));(c=this.g.toString())&&a.push("?",c);(c=this.j)&&a.push("#",Lg(c,Pg));return a.join("")};
Eg.prototype.resolve=function(a){var b=this.clone(),c=!!a.i;c?Fg(b,a.i):c=!!a.u;c?b.u=a.u:c=!!a.f;c?Gg(b,a.f):c=null!=a.l;var d=a.b;if(c)Hg(b,a.l);else if(c=!!a.b){if("/"!=d.charAt(0))if(this.f&&!this.b)d="/"+d;else{var e=b.b.lastIndexOf("/");-1!=e&&(d=b.b.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?b.b=d:c=""!==a.g.toString();c?Ig(b,Jg(a.g.toString())):c=!!a.j;c&&(b.j=a.j);return b};
Eg.prototype.clone=function(){return new Eg(this)};
function Fg(a,b,c){a.i=c?Jg(b,!0):b;a.i&&(a.i=a.i.replace(/:$/,""))}
function Gg(a,b,c){a.f=c?Jg(b,!0):b}
function Hg(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}
function Ig(a,b,c){b instanceof Kg?(a.g=b,Qg(a.g,a.o)):(c||(b=Lg(b,Rg)),a.g=new Kg(b,0,a.o))}
function N(a,b,c){a.g.set(b,c)}
function Sg(a,b,c){u(c)||(c=[String(c)]);Tg(a.g,b,c)}
function Ug(a){N(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^x()).toString(36));return a}
function Vg(a){return a instanceof Eg?a.clone():new Eg(a,void 0)}
function Wg(a,b,c,d){var e=new Eg(null,void 0);a&&Fg(e,a);b&&Gg(e,b);c&&Hg(e,c);d&&(e.b=d);return e}
function Jg(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Lg(a,b,c){return v(a)?(a=encodeURI(a).replace(b,Xg),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Xg(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Mg=/[#\/\?@]/g,Og=/[\#\?:]/g,Ng=/[\#\?]/g,Rg=/[\#\?@]/g,Pg=/#/g;function Kg(a,b,c){this.f=this.b=null;this.g=a||null;this.i=!!c}
function Yg(a){a.b||(a.b=new Kc,a.f=0,a.g&&yd(a.g,function(b,c){Zg(a,ra(b),c)}))}
g=Kg.prototype;g.N=function(){Yg(this);return this.f};
function Zg(a,b,c){Yg(a);a.g=null;b=$g(a,b);var d=a.b.get(b);d||a.b.set(b,d=[]);d.push(c);a.f=a.f+1}
g.remove=function(a){Yg(this);a=$g(this,a);return Mc(this.b.f,a)?(this.g=null,this.f=this.f-this.b.get(a).length,this.b.remove(a)):!1};
g.clear=function(){this.b=this.g=null;this.f=0};
g.isEmpty=function(){Yg(this);return 0==this.f};
function ah(a,b){Yg(a);b=$g(a,b);return Mc(a.b.f,b)}
g.Ra=function(a){var b=this.O();return A(b,a)};
g.ja=function(){Yg(this);for(var a=this.b.O(),b=this.b.ja(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.O=function(a){Yg(this);var b=[];if(v(a))ah(this,a)&&(b=Sa(b,this.b.get($g(this,a))));else{a=this.b.O();for(var c=0;c<a.length;c++)b=Sa(b,a[c])}return b};
g.set=function(a,b){Yg(this);this.g=null;a=$g(this,a);ah(this,a)&&(this.f=this.f-this.b.get(a).length);this.b.set(a,[b]);this.f=this.f+1;return this};
g.get=function(a,b){var c=a?this.O(a):[];return 0<c.length?String(c[0]):b};
function Tg(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.b.set($g(a,b),Ta(c)),a.f=a.f+c.length)}
g.toString=function(){if(this.g)return this.g;if(!this.b)return"";for(var a=[],b=this.b.ja(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.O(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.g=a.join("&")};
g.clone=function(){var a=new Kg;a.g=this.g;this.b&&(a.b=this.b.clone(),a.f=this.f);return a};
function $g(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c}
function Qg(a,b){b&&!a.i&&(Yg(a),a.g=null,a.b.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),Tg(this,e,a))},a));
a.i=b}
g.extend=function(a){for(var b=0;b<arguments.length;b++)Rc(arguments[b],function(a,b){Zg(this,b,a)},this)};var bh="corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com lh2.google.com picasaweb.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "),ch="";
function dh(a){return a&&a==ch?!0:(new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*("+bh.join("|").replace(/\./g,".")+")(:[0-9]+)?([/?#]|$)","i")).test(a)?(ch=a,!0):!1}
;var eh={},fh=0;function gh(a){var b=new Image,c=""+fh++;eh[c]=b;b.onload=b.onerror=function(){delete eh[c]};
b.src=a}
;function O(a,b){this.version=a;this.args=b}
function hh(a){if(!a.va){var b={};a.call(b);a.va=b.version}return a.va}
function ih(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=hh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function P(a,b){this.topic=a;this.b=b}
P.prototype.toString=function(){return this.topic};var jh=r("yt.pubsub2.instance_")||new F;F.prototype.subscribe=F.prototype.subscribe;F.prototype.unsubscribeByKey=F.prototype.ha;F.prototype.publish=F.prototype.w;F.prototype.clear=F.prototype.clear;q("yt.pubsub2.instance_",jh,void 0);var kh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",kh,void 0);var lh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",lh,void 0);var mh=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",mh,void 0);
q("yt.pubsub2.skipSubKey_",null,void 0);function Q(a,b){var c=nh();c&&c.publish.call(c,a.toString(),a,b)}
function oh(a,b,c){var d=nh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,h){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var k=function(){if(kh[e])try{if(h&&a instanceof P&&a!=d)try{h=ih(a.b,h)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,h)}catch(k){cc(k)}};
mh[a.toString()]?r("yt.scheduler.instance")?Wd(k,void 0):H(k,0):k()}});
kh[e]=!0;lh[a.toString()]||(lh[a.toString()]=[]);lh[a.toString()].push(e);return e}
function ph(a){var b=nh();b&&(ea(a)&&(a=[a]),z(a,function(a){b.unsubscribeByKey(a);delete kh[a]}))}
function nh(){return r("yt.pubsub2.instance_")}
;var qh=x().toString();var rh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function sh(a){O.call(this,1,arguments)}
y(sh,O);var th=new P("timing-sent",sh);var uh={vc:!0},vh=/^mark_/i,wh={ad_at:"ad_type",cpn:"client_playback_nonce",csn:"client_screen_nonce",yt_lt:"load_type",yt_ad:"is_monetized",yt_ad_pr:"preroll_allowed",yt_red:"is_red_subscriber",yt_vis:"is_visible"},xh=["is_monetized","preroll_allowed","is_red_subscriber","is_visible"],yh=w(rh.clearResourceTimings||rh.webkitClearResourceTimings||rh.mozClearResourceTimings||rh.msClearResourceTimings||rh.oClearResourceTimings||t,rh);
function zh(a){if("_"!=a[0]){var b=a;rh.mark&&(vh.test(b)||(b="mark_"+b),rh.mark(b))}var b=Ah(),c=ec();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;Bh()["tick_"+a]=void 0;$f("csi_on_gel")?(b=Ch(),"_start"==a?Dg("latencyActionBaselined",{clientActionNonce:b},void 0):Dg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;a||(a=!!r("yt.timing.pingSent_")&&!!$f("navigation_only_csi_reset"));if(!a&&(b=G("TIMING_ACTION",void 0),a=Ah(),r("yt.timing.ready_")&&b&&a._start&&
Dh())){b=!0;c=G("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Eh()}}
function Fh(){var a=Gh().info.yt_lt="hot_bg";Bh().info_yt_lt=a;if($f("csi_on_gel"))if("yt_lt"in wh){var b={},c=wh.yt_lt;c in xh&&(a=!!a);b[c]=a;a=Ch();b.clientActionNonce=a;Dg("latencyActionInfo",b)}else cc(Error("Unknown label yt_lt logged with GEL CSI."))}
function Dh(){var a=Ah();if(a.aft)return a.aft;for(var b=G("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Eh(){var a=Ah(),b=Gh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&u(a[d])){var e=d.slice(1);if(e in uh){var f=Ka(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))Hh(f,e),Ih(),yh(),Jh(!1)}else{var h=G("CSI_SERVICE_NAME","youtube"),f={v:2,s:h,action:G("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=rh.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var m=window.location.protocol+r("ytplayer.config.assets.js");(m=rh.getEntriesByName?rh.getEntriesByName(m)[0]:
null)?b.h5jse=Math.round(b.h5jse-m.responseEnd):delete b.h5jse}a.aft=Dh();Kh()&&"youtube"==h&&(Fh(),h=a.vc,m=a.pbs,delete a.aft,b.aft=Math.round(m-h));for(var n in b)"_"!=n.charAt(0)&&(f[n]=b[n]);a.ps=ec();b={};n=[];for(d in a)"_"!=d.charAt(0)&&(h=Math.round(a[d]-c),$f("enable_negative_ticks")||(h=Math.max(h,0)),b[d]=h,n.push(d+"."+h));f.rt=n.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);$f("navigation_only_csi_reset")||(Ih(),yh(),Jh(!1));G("EXP_DEFER_CSI_PING")?(Lh(),q("yt.timing.deferredPingArgs_",
f,void 0),na("yt.timing.deferredPingTimer_",H(Lh,0))):Hh(f,e);Q(th,new sh(b.aft+(k||0)))}}
function Hh(a,b){if($f("debug_csi_data")){var c=r("yt.timing.csiData");c||(c=[],q("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}G("EXP_DEFER_CSI_PING")&&(I(r("yt.timing.deferredPingTimer_")),q("yt.timing.deferredPingArgs_",null,void 0));var c="",d;for(d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(!$f("beacon_abandoned_only")||b))try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(d,
"")||d&&gh(d)}catch(e){d&&gh(d)}else d&&gh(d);Jh(!0)}
function Lh(a){if(G("EXP_DEFER_CSI_PING")){var b=r("yt.timing.deferredPingArgs_");b&&(a&&(b.yt_fss=a),Hh(b,!0))}}
function Ch(){var a=Gh().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(qh)for(c=1,d=0;d<qh.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^qh.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");Gh().nonce=a}return a}
function Ah(){return Gh().tick}
function Bh(){var a=Gh();"gel"in a||(a.gel={});return a.gel}
function Gh(){return r("ytcsi.data_")||Ih()}
function Ih(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Jh(a){q("yt.timing.pingSent_",a,void 0)}
function Kh(){var a=Ah(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Gh().info.yt_vis}
;var Mh={"api.invalidparam":2,auth:150,"drm.auth":150,heartbeat:150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function Nh(a,b){D.call(this);this.o=this.j=a;this.ba=b;this.D=!1;this.f={};this.qa=this.X=null;this.ca=new F;Vb(this,ma(E,this.ca));this.i={};this.l=this.Ga=this.g=this.xb=this.b=null;this.ia=!1;this.F=this.u=this.K=this.L=null;this.ab={};this.Uc=["onReady"];this.ka=new Xf(this);Vb(this,ma(E,this.ka));this.yb=null;this.Xb=NaN;this.la={};Oh(this);this.na("onDetailedError",w(this.Ed,this));this.na("onTabOrderChange",w(this.Zc,this));this.na("onTabAnnounce",w(this.Yb,this));this.na("WATCH_LATER_VIDEO_ADDED",
w(this.Fd,this));this.na("WATCH_LATER_VIDEO_REMOVED",w(this.Gd,this));mf||(this.na("onMouseWheelCapture",w(this.Bd,this)),this.na("onMouseWheelRelease",w(this.Cd,this)));this.na("onAdAnnounce",w(this.Yb,this));this.H=new Xf(this);Vb(this,ma(E,this.H));this.wb=!1;this.vb=null}
y(Nh,D);var Ph=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];g=Nh.prototype;g.Tb=function(a,b){this.isDisposed()||(Qh(this,a),Rh(this,b),this.D&&Sh(this))};
function Qh(a,b){a.xb=b;a.b=b.clone();a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.ba,a.b.attrs.id=a.ba);a.o.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.ba;a.Ga||(a.Ga=Th(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=ef(Number(c)||c,!0));if(c=a.b.attrs.height)a.o.style.height=ef(Number(c)||c,!0)}
g.fd=function(){return this.xb};
function Sh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Uh(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Cf(Bf.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Vh(a,b){if((!b||(5!=(Mh[b.errorCode]||5)?0:-1!=Ph.indexOf(b.errorCode)))&&Uh(a)){var c=Wh(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Ye(c));d.args.autoplay=1;d.args.html5_unavailable="1";Qh(a,d);Rh(a,"flash")}}
function Rh(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.b.html5&&Uh(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Pf)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("video"),na("yt.player.utils.videoElement_",c));try{if(c.canPlayType)for(var e=e?Vf:Wf,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(h){d="html5.missingapi"}}d=!d}d&&(d=Xh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Uh(a)?"flash":"unsupported":"html5"}d=a.b&&a.b.args.fflags&&-1!=a.b.args.fflags.indexOf("legacy_upgrade_message=true");("flash"==b?a.oe:"html5"!=b&&d?a.qe:a.pe).call(a)}}
function Xh(a){var b=!0,c=Wh(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
g.pe=function(){if(!this.ia){var a=Xh(this);a&&"html5"==Yh(this)?(this.l="html5",this.D||this.La()):(Zh(this),this.l="html5",a&&this.K?(this.j.appendChild(this.K),this.La()):(this.b.loaded=!0,this.L=w(function(){var a=this.j,c=this.b.clone();r("yt.player.Application.create")(a,c);this.La()},this),this.ia=!0,a?this.L():(rc(this.b.assets.js,this.L),Kf(this.b.assets.css))))}};
g.oe=function(){var a=this.b.clone();if(!this.u){var b=Wh(this);b&&(this.u=document.createElement("span"),this.u.tabIndex=0,Yf(this.ka,this.u,"focus",this.kc),this.F=document.createElement("span"),this.F.tabIndex=0,Yf(this.ka,this.F,"focus",this.kc),b.parentNode&&b.parentNode.insertBefore(this.u,b),b.parentNode&&b.parentNode.insertBefore(this.F,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Yh(this))this.l="flash",this.D||Gf(a,!1,w(this.La,this));
else{Zh(this);this.l="flash";this.b.loaded=!0;b=this.j;b=v(b)?me(b):b;a=Ye(a);if(window!=window.top){var c=null;document.referrer&&(c=document.referrer.substring(0,128));a.args.framer=c}c=Bf.getInstance();Cf(c,a.minVersion)?(c=Hf(a,c),Ff(b,c,a)):Jf(b,a,c);this.La()}};
g.kc=function(){Wh(this).focus()};
function Wh(a){var b=le(a.g);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.g));return b}
g.La=function(){if(!this.isDisposed()){var a=Wh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.ia=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Vh(this);else{Oh(this);this.D=!0;a=Wh(this);a.addEventListener&&(this.X=$h(this,a,"addEventListener"));a.removeEventListener&&(this.qa=$h(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=$h(this,a,d))}for(var e in this.i)this.X(e,
this.i[e]);Sh(this);this.Ga&&this.Ga(this.f);this.ca.w("onReady",this.f)}else this.Xb=H(w(this.La,this),50)}};
function $h(a,b,c){var d=b[c];return function(){try{return a.yb=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.yb=e,cc(e,"WARNING"))}}}
function Oh(a){a.D=!1;if(a.qa)for(var b in a.i)a.qa(b,a.i[b]);for(var c in a.la)I(parseInt(c,10));a.la={};a.X=null;a.qa=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.na,a);a.f.removeEventListener=w(a.be,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.gd,a);a.f.getPlayerType=w(a.hd,a);a.f.getCurrentVideoConfig=w(a.fd,a);a.f.loadNewVideoConfig=w(a.Tb,a);a.f.isReady=w(a.Be,a)}
g.Be=function(){return this.D};
g.na=function(a,b){if(!this.isDisposed()){var c=Th(this,b);if(c){if(!A(this.Uc,a)&&!this.i[a]){var d=ai(this,a);this.X&&this.X(a,d)}this.ca.subscribe(a,c);"onReady"==a&&this.D&&H(ma(c,this.f),0)}}};
g.be=function(a,b){if(!this.isDisposed()){var c=Th(this,b);c&&this.ca.unsubscribe(a,c)}};
function Th(a,b){var c=b;if("string"==typeof b){if(a.ab[b])return a.ab[b];c=function(){var a=r(b);a&&a.apply(l,arguments)};
a.ab[b]=c}return c?c:null}
function ai(a,b){var c="ytPlayer"+b+a.ba;a.i[b]=c;l[c]=function(c){var e=H(function(){if(!a.isDisposed()){a.ca.w(b,c);var f=a.la,h=String(e);h in f&&delete f[h]}},0);
hb(a.la,String(e))};
return c}
g.Zc=function(a){a=a?te:se;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.u||b==this.F||(b.focus(),b!=document.activeElement));)b=a(b)};
g.Yb=function(a){J("a11y-announce",a)};
g.Ed=function(a){Vh(this,a)};
g.Fd=function(a){J("WATCH_LATER_VIDEO_ADDED",a)};
g.Gd=function(a){J("WATCH_LATER_VIDEO_REMOVED",a)};
g.Bd=function(){this.wb||(qf?(this.vb=pe(document),Yf(this.H,window,"scroll",this.Wd),Yf(this.H,this.j,"touchmove",this.Qd)):(Yf(this.H,this.j,"mousewheel",this.nc),Yf(this.H,this.j,"wheel",this.nc)),this.wb=!0)};
g.Cd=function(){Zf(this.H);this.wb=!1};
g.nc=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.Wd=function(){window.scrollTo(this.vb.x,this.vb.y)};
g.Qd=function(a){a.preventDefault()};
g.qe=function(){Zh(this);this.l="unsupported";var a='Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>',b=navigator.userAgent.match(/Version\/(\d).*Safari/);b&&5<=parseInt(b[1],10)&&(a='Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/"> Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>');
b=this.b.messages.player_fallback||a;a=le("player-unavailable");if(le("unavailable-submessage")&&a){le("unavailable-submessage").innerHTML=b;var b=a||document,c=null;b.getElementsByClassName?c=b.getElementsByClassName("icon")[0]:b.querySelectorAll&&b.querySelector?c=b.querySelector(".icon"):c=oe("icon",a)[0];if(c=b=c||null)c=b?b.dataset?Eb("icon")in b.dataset:b.hasAttribute?!!b.hasAttribute("data-icon"):!!b.getAttribute("data-icon"):!1;c&&(b.src=C(b,"icon"));a.style.display="";ce(le("player"),"off-screen-trigger")}};
g.hd=function(){return this.l||Yh(this)};
g.gd=function(){return this.yb};
function Yh(a){return(a=Wh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Zh(a){zh("dcp");a.cancel();Oh(a);a.l=null;a.b&&(a.b.loaded=!1);var b=Wh(a);"html5"==Yh(a)?a.K=b:b&&b.destroy&&b.destroy();re(a.j);Zf(a.ka);a.u=null;a.F=null}
g.cancel=function(){this.L&&yc(this.b.assets.js,this.L);I(this.Xb);this.ia=!1};
g.A=function(){Zh(this);if(this.K&&this.b)try{this.K.destroy()}catch(b){cc(b)}this.ab=null;for(var a in this.i)l[this.i[a]]=null;this.xb=this.b=this.f=null;delete this.j;delete this.o;Nh.B.A.call(this)};var bi={},ci="player_uid_"+(1E9*Math.random()>>>0);function di(a,b){a=v(a)?me(a):a;b=Ye(b);var c=ci+"_"+ha(a),d=bi[c];if(d)return d.Tb(b),d.f;d=new Nh(a,c);bi[c]=d;J("player-added",d.f);Vb(d,ma(ei,d));H(function(){d.Tb(b)},0);
return d.f}
function ei(a){bi[a.ba]=null}
function fi(a){a=le(a);if(!a)return null;var b=ci+"_"+ha(a),c=bi[b];c||(c=new Nh(a,b),bi[b]=c);return c.f}
;var gi=r("yt.abuse.botguardInitialized")||Bc;q("yt.abuse.botguardInitialized",gi,void 0);var hi=r("yt.abuse.invokeBotguard")||Cc;q("yt.abuse.invokeBotguard",hi,void 0);var ii=r("yt.abuse.dclkstatus.checkDclkStatus")||$d;q("yt.abuse.dclkstatus.checkDclkStatus",ii,void 0);var ji=r("yt.player.exports.navigate")||Te;q("yt.player.exports.navigate",ji,void 0);var ki=r("yt.player.embed")||di;q("yt.player.embed",ki,void 0);var li=r("yt.player.getPlayerByElement")||fi;q("yt.player.getPlayerByElement",li,void 0);
var mi=r("yt.util.activity.init")||Ke;q("yt.util.activity.init",mi,void 0);var ni=r("yt.util.activity.getTimeSinceActive")||Me;q("yt.util.activity.getTimeSinceActive",ni,void 0);var oi=r("yt.util.activity.setTimestamp")||Le;q("yt.util.activity.setTimestamp",oi,void 0);function pi(a){O.call(this,1,arguments);this.b=a}
y(pi,O);function qi(a){O.call(this,1,arguments);this.b=a}
y(qi,O);function ri(a,b){O.call(this,1,arguments);this.b=a;this.isEnabled=b}
y(ri,O);function si(a,b,c,d,e){O.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(si,O);function ti(a,b,c){O.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(ti,O);function ui(a,b,c,d,e,f,h){O.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=h||null}
y(ui,O);
var vi=new P("subscription-batch-subscribe",pi),wi=new P("subscription-batch-unsubscribe",pi),xi=new P("subscription-pref-email",ri),yi=new P("subscription-subscribe",si),zi=new P("subscription-subscribe-loading",qi),Ai=new P("subscription-subscribe-loaded",qi),Bi=new P("subscription-subscribe-success",ti),Ci=new P("subscription-subscribe-external",si),Di=new P("subscription-unsubscribe",ui),Ei=new P("subscription-unsubscirbe-loading",qi),Fi=new P("subscription-unsubscribe-loaded",qi),Gi=new P("subscription-unsubscribe-success",
qi),Hi=new P("subscription-external-unsubscribe",ui),Ii=new P("subscription-enable-ypc",qi),Ji=new P("subscription-disable-ypc",qi);function Ki(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Ed(c,"mode",b));c=Ed("/signin?context=popup","next",c);c=Ed(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=lc("LOGGED_IN",function(b){nc(G("LOGGED_IN_PUBSUB_KEY",void 0));$b("LOGGED_IN",!0);a(b)});
$b("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",J,void 0);function Li(){var a=G("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!G("SESSION_INDEX")&&!G("LOGGED_IN"))}
;function Mi(){var a=Ee();return a?a:null}
;var Ni={},Oi="ontouchstart"in document;function Pi(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return Be(c,function(a){return be(a,b)},!0,d)}
function Qi(a){var b="mouseover"==a.type&&"mouseenter"in Ni||"mouseout"==a.type&&"mouseleave"in Ni,c=a.type in Ni||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Ni[b],d;for(d in c.aa){var e=Pi(b,d,a.target);e&&!Be(a.relatedTarget,function(a){return a==e},!0)&&c.w(d,e,b,a)}}if(b=Ni[a.type])for(d in b.aa)(e=Pi(a.type,d,a.target))&&b.w(d,e,a.type,a)}}
M(document,"blur",Qi,!0);M(document,"change",Qi,!0);M(document,"click",Qi);M(document,"focus",Qi,!0);M(document,"mouseover",Qi);M(document,"mouseout",Qi);M(document,"mousedown",Qi);M(document,"keydown",Qi);M(document,"keyup",Qi);M(document,"keypress",Qi);M(document,"cut",Qi);M(document,"paste",Qi);Oi&&(M(document,"touchstart",Qi),M(document,"touchend",Qi),M(document,"touchcancel",Qi));function Ri(a){this.j=a;this.g={};this.mb=[];this.i=[]}
function R(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
Ri.prototype.unregister=function(){nc(this.mb);this.mb.length=0;ph(this.i);this.i.length=0};
Ri.prototype.init=t;Ri.prototype.dispose=t;function Si(a,b,c){a.i.push(oh(b,c,a))}
function Ti(a,b,c){var d=R(a,void 0),e=w(c,a);b in Ni||(Ni[b]=new F);Ni[b].subscribe(d,e);a.g[c]=e}
function Ui(a,b,c){if(b in Ni){var d=Ni[b];d.unsubscribe(R(a,void 0),a.g[c]);0>=d.N()&&(d.dispose(),delete Ni[b])}delete a.g[c]}
function Vi(a,b){Db(a,"tooltip-text",b)}
;function Wi(){Ri.call(this,"tooltip");this.b=0;this.f={}}
y(Wi,Ri);ba(Wi);g=Wi.prototype;g.register=function(){Ti(this,"mouseover",this.jb);Ti(this,"mouseout",this.Ca);Ti(this,"focus",this.ec);Ti(this,"blur",this.$b);Ti(this,"click",this.Ca);Ti(this,"touchstart",this.Ec);Ti(this,"touchend",this.pb);Ti(this,"touchcancel",this.pb)};
g.unregister=function(){Ui(this,"mouseover",this.jb);Ui(this,"mouseout",this.Ca);Ui(this,"focus",this.ec);Ui(this,"blur",this.$b);Ui(this,"click",this.Ca);Ui(this,"touchstart",this.Ec);Ui(this,"touchend",this.pb);Ui(this,"touchcancel",this.pb);this.dispose();Wi.B.unregister.call(this)};
g.dispose=function(){for(var a in this.f)this.Ca(this.f[a]);this.f={}};
g.jb=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(Fb(a,"tooltip-hide-timer"),I(b));var b=w(function(){Xi(this,a);Fb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=H(b,c);
Db(a,"tooltip-show-timer",b.toString());a.title&&(Vi(a,Yi(a)),a.title="");b=ha(a).toString();this.f[b]=a}};
g.Ca=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(I(b),Fb(a,"tooltip-show-timer"));b=w(function(){if(a){var b=le(Zi(this,a));b&&($i(b),b&&b.parentNode&&b.parentNode.removeChild(b),Fb(a,"content-id"));(b=le(Zi(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Fb(a,"tooltip-hide-timer")},this);
b=H(b,50);Db(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=ha(a).toString();delete this.f[b]};
g.ec=function(a){this.b=0;this.jb(a)};
g.$b=function(a){this.b=0;this.Ca(a)};
g.Ec=function(a,b,c){c.changedTouches&&(this.b=0,a=Pi(b,R(this),c.changedTouches[0].target),this.jb(a))};
g.pb=function(a,b,c){c.changedTouches&&(this.b=x(),a=Pi(b,R(this),c.changedTouches[0].target),this.Ca(a))};
function aj(a,b){Vi(a,b);var c=C(a,"content-id");(c=le(c))&&ue(c,b)}
function Yi(a){return C(a,"tooltip-text")||a.title}
function Xi(a,b){if(b){var c=Yi(b);if(c){var d=le(Zi(a,b));if(!d){d=document.createElement("div");d.id=Zi(a,b);d.className=R(a,"tip");var e=document.createElement("div");e.className=R(a,"tip-body");var f=document.createElement("div");f.className=R(a,"tip-arrow");var h=document.createElement("div");h.setAttribute("aria-hidden","true");h.className=R(a,"tip-content");var k=bj(a,b),m=Zi(a,b,"content");h.id=m;Db(b,"content-id",m);e.appendChild(h);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=
xe(b),n=Zi(a,b,"arialabel"),f=document.createElement("div");ce(f,R(a,"arialabel"));f.id=n;"rtl"==document.body.getAttribute("dir")?ue(f,c+" "+m):ue(f,m+" "+c);b.setAttribute("aria-labelledby",n);m=Mi()||document.body;m.appendChild(f);m.appendChild(d);aj(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",ce(h,R(a,"normal-wrap")));h=be(b,R(a,"reverse"));cj(a,b,d,e,k,h)||cj(a,b,d,e,k,!h);var Z=R(a,"tip-visible");H(function(){ce(d,Z)},0)}}}}
function cj(a,b,c,d,e,f){ee(c,R(a,"tip-reverse"),f);var h=0;f&&(h=1);a=ff(b);f=new fe((a.width-10)/2,f?a.height:0);var k=ke(b),m=new fe(0,0),n;n=k?ke(k):document;n=!K||ld(9)||qe(ie(n).b)?n.documentElement:n.body;b!=n&&(n=df(b),k=pe(ie(k).b),m.x=n.left+k.x,m.y=n.top+k.y);f=new fe(m.x+f.x,m.y+f.y);f=f.clone();m=(h&8&&"rtl"==cf(c,"direction")?h^4:h)&-9;h=ff(c);k=h.clone();n=f.clone();k=k.clone();0!=m&&(m&4?n.x-=k.width+0:m&2&&(n.x-=k.width/2),m&1&&(n.y-=k.height+0));f=new $e(0,0,0,0);f.left=n.x;f.top=
n.y;f.width=k.width;f.height=k.height;k=new fe(f.left,f.top);k instanceof fe?(m=k.x,k=k.y):(m=k,k=void 0);c.style.left=ef(m,!1);c.style.top=ef(k,!1);k=new ge(f.width,f.height);if(!(h==k||h&&k&&h.width==k.width&&h.height==k.height))if(h=k,f=ke(c),m=qe(ie(f).b),!K||kd("10")||m&&kd("8"))f=c.style,$c?f.MozBoxSizing="border-box":ad?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(h.width,0)+"px",f.height=Math.max(h.height,0)+"px";else if(f=c.style,m){if(K){m=jf(c,"paddingLeft");
k=jf(c,"paddingRight");n=jf(c,"paddingTop");var Z=jf(c,"paddingBottom"),m=new Ze(n,k,Z,m)}else m=bf(c,"paddingLeft"),k=bf(c,"paddingRight"),n=bf(c,"paddingTop"),Z=bf(c,"paddingBottom"),m=new Ze(parseFloat(n),parseFloat(k),parseFloat(Z),parseFloat(m));if(K&&!ld(9)){k=lf(c,"borderLeft");n=lf(c,"borderRight");var Z=lf(c,"borderTop"),ua=lf(c,"borderBottom"),k=new Ze(Z,n,ua,k)}else k=bf(c,"borderLeftWidth"),n=bf(c,"borderRightWidth"),Z=bf(c,"borderTopWidth"),ua=bf(c,"borderBottomWidth"),k=new Ze(parseFloat(Z),
parseFloat(n),parseFloat(ua),parseFloat(k));f.pixelWidth=h.width-k.left-m.left-m.right-k.right;f.pixelHeight=h.height-k.top-m.top-m.bottom-k.bottom}else f.pixelWidth=h.width,f.pixelHeight=h.height;h=window.document;h=qe(h)?h.documentElement:h.body;f=new ge(h.clientWidth,h.clientHeight);1==c.nodeType?(c=df(c),k=new fe(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,k=new fe(c.clientX,c.clientY));c=ff(d);n=Math.floor(c.width/2);h=!!(f.height<k.y+a.height);a=!!(k.y<a.height);m=!!(k.x<n);f=!!(f.width<
k.x+n);k=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||m)k=-5;else if("right"==b||f)k=20-c.width-3;b=Math.floor(k)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||a)}
function Zi(a,b,c){a=R(a);var d=b.__yt_uid_key;d||(d=Ce(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function bj(a,b){var c=null;cd&&be(b,R(a,"masked"))&&((c=le("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),zf(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=R(a,"tip-mask")));return c}
function $i(a){var b=le("yt-uix-tooltip-shared-mask"),c=b&&Be(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Af(b),document.body.appendChild(b))}
;function dj(){Ri.call(this,"subscription-button")}
y(dj,Ri);ba(dj);dj.prototype.register=function(){Ti(this,"click",this.Bb);Si(this,zi,this.mc);Si(this,Ai,this.lc);Si(this,Bi,this.Od);Si(this,Ei,this.mc);Si(this,Fi,this.lc);Si(this,Gi,this.Ud);Si(this,Ii,this.Ad);Si(this,Ji,this.zd)};
dj.prototype.unregister=function(){Ui(this,"click",this.Bb);dj.B.unregister.call(this)};
var Ae={Ub:"hover-enabled",Mc:"yt-uix-button-subscribe",Nc:"yt-uix-button-subscribed",De:"ypc-enabled",Oc:"yt-uix-button-subscription-container",Pc:"yt-subscription-button-disabled-mask-container"},ej={Ee:"channel-external-id",Qc:"subscriber-count-show-when-subscribed",Rc:"subscriber-count-tooltip",Sc:"subscriber-count-title",Fe:"href",Vb:"is-subscribed",He:"parent-url",Je:"clicktracking",Tc:"style-type",Wb:"subscription-id",Me:"target",Vc:"ypc-enabled"};g=dj.prototype;
g.Bb=function(a){var b=C(a,"href"),c=Li();if(b)a=C(a,"target")||"_self",window.open(b,a);else if(c){var b=C(a,"channel-external-id"),c=C(a,"clicktracking"),d;if(C(a,"ypc-enabled")){d=C(a,"ypc-item-type");var e=C(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");Q(Di,new ui(b,f,d,a,c,e))}else Q(yi,new si(b,d,c,e))}else fj(this,a)};
g.mc=function(a){this.Ha(a.b,this.Bc,!0)};
g.lc=function(a){this.Ha(a.b,this.Bc,!1)};
g.Od=function(a){this.Ha(a.b,this.Cc,!0,a.subscriptionId)};
g.Ud=function(a){this.Ha(a.b,this.Cc,!1)};
g.Ad=function(a){this.Ha(a.b,this.bd)};
g.zd=function(a){this.Ha(a.b,this.ad)};
g.Cc=function(a,b,c){b?(Db(a,ej.Vb,"true"),c&&Db(a,ej.Wb,c)):(Fb(a,ej.Vb),Fb(a,ej.Wb));gj(a)};
g.Bc=function(a,b){var c;c=ze(a);ee(c,Ae.Pc,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function gj(a){var b=C(a,ej.Tc),c=!!C(a,"is-subscribed"),b="-"+b,d=Ae.Nc+b;ee(a,Ae.Mc+b,!c);ee(a,d,c);C(a,ej.Rc)&&!C(a,ej.Qc)&&(b=R(Wi.getInstance()),ee(a,b,!c),a.title=c?"":C(a,ej.Sc));c?H(function(){ce(a,Ae.Ub)},1E3):de(a,Ae.Ub)}
g.bd=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(ce(a,"ypc-enabled"),Db(a,ej.Vc,"true"))};
g.ad=function(a){C(a,"ypc-enabled")&&(de(a,"ypc-enabled"),Fb(a,"ypc-enabled"))};
function hj(a,b){var c=ne(R(a));return Ja(c,function(a){return b==C(a,"channel-external-id")},a)}
g.Xc=function(a,b,c){var d=Wa(arguments,2);z(a,function(a){b.apply(this,Sa(a,d))},this)};
g.Ha=function(a,b,c){var d=hj(this,a),d=Sa([d],Wa(arguments,1));this.Xc.apply(this,d)};
function fj(a,b){var c=w(function(a){a.discoverable_subscriptions&&$b("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Bb(b)},a);
Ki(c,"subscribe")}
;var ij=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",ij,void 0);function jj(a,b){this.source=null;this.j=a||null;this.origin="*";this.u=window.document.location.protocol+"//"+window.document.location.hostname;this.o=b;this.g=this.b=this.f=this.channel=this.i=null;M(window,"message",w(this.l,this))}
jj.prototype.l=function(a){var b=this.o||G("POST_MESSAGE_ORIGIN",void 0)||this.u;if("*"!=b&&a.origin!=b)window.console&&window.console.warn("Untrusted origin: "+a.origin);else if(!this.j||a.source==this.j)if(this.source=a.source,this.origin="null"==a.origin?this.origin:a.origin,a=a.data,v(a)){try{a=od(a)}catch(c){return}this.i=a.id;switch(a.event){case "listening":this.b&&(this.b(),this.b=null);break;case "command":this.f&&(this.g&&!A(this.g,a.func)||this.f(a.func,a.args))}}};
jj.prototype.sendMessage=function(a){this.source&&(a.id=this.i,this.channel&&(a.channel=this.channel),a=L(a),this.source.postMessage(a,this.origin))};function kj(){}
;function lj(){}
y(lj,kj);lj.prototype.N=function(){var a=0;Ic(this.ma(!0),function(){a++});
return a};
lj.prototype.clear=function(){var a=Jc(this.ma(!0)),b=this;z(a,function(a){b.remove(a)})};function mj(a){this.b=a}
y(mj,lj);g=mj.prototype;g.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
g.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.get=function(a){a=this.b.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.remove=function(a){this.b.removeItem(a)};
g.N=function(){return this.b.length};
g.ma=function(a){var b=0,c=this.b,d=new Fc;d.next=function(){if(b>=c.length)throw Ec;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
g.clear=function(){this.b.clear()};
g.key=function(a){return this.b.key(a)};function nj(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(nj,mj);function oj(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(oj,mj);function pj(a){this.b=a}
pj.prototype.set=function(a,b){p(b)?this.b.set(a,L(b)):this.b.remove(a)};
pj.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return od(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pj.prototype.remove=function(a){this.b.remove(a)};function qj(a){this.b=a}
y(qj,pj);function rj(a){this.data=a}
function sj(a){return!p(a)||a instanceof rj?a:new rj(a)}
qj.prototype.set=function(a,b){qj.B.set.call(this,a,sj(b))};
qj.prototype.f=function(a){a=qj.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qj.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function tj(a){this.b=a}
y(tj,qj);function uj(a){var b=a.creation;a=a.expiration;return!!a&&a<x()||!!b&&b>x()}
tj.prototype.set=function(a,b,c){if(b=sj(b)){if(c){if(c<x()){tj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}tj.B.set.call(this,a,b)};
tj.prototype.f=function(a,b){var c=tj.B.f.call(this,a);if(c)if(!b&&uj(c))tj.prototype.remove.call(this,a);else return c};function vj(a){this.b=a}
y(vj,tj);function wj(a,b){var c=[];Ic(b,function(a){var b;try{b=vj.prototype.f.call(this,a,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}p(b)?uj(b)&&c.push(a):c.push(a)},a);
return c}
function xj(a,b){var c=wj(a,b);z(c,function(a){vj.prototype.remove.call(this,a)},a)}
function yj(){var a=zj;xj(a,a.b.ma(!0))}
;function S(a,b,c){var d=c&&0<c?c:0;c=d?x()+1E3*d:0;if((d=d?zj:Aj)&&window.JSON){v(b)||(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}}
function T(a){if(!Aj&&!zj||!window.JSON)return null;var b;try{b=Aj.get(a)}catch(c){}if(!v(b))try{b=zj.get(a)}catch(c){}if(!v(b))return null;try{b=JSON.parse(b,void 0)}catch(c){}return b}
function Bj(a){Aj&&Aj.remove(a);zj&&zj.remove(a)}
var zj,Cj=new nj;zj=Cj.isAvailable()?new vj(Cj):null;var Aj,Dj=new oj;Aj=Dj.isAvailable()?new vj(Dj):null;function Ej(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Fj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=a;c=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);b.videoId=c&&c[2]?c[2]:null;return Gj(a)}
function Gj(a,b,c){if(ga(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Hj(a,b,c,d){if(ga(a)&&!u(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Ij(a){var b=a.video_id||a.videoId;if(v(b)){var c=T("yt-player-two-stage-token")||{},d=T("yt-player-two-stage-token")||{};p(void 0)?d[b]=void 0:delete d[b];S("yt-player-two-stage-token",d,300);(b=c[b])&&(a.two_stage_token=b)}}
;function Jj(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return a?50<=parseInt(a[1],10):!1}
var Kj=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",Lj=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],Mj=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],Nj=Jj()?Mj.concat(Lj):Lj.concat(Mj);function Oj(a,b){var c=new XMLHttpRequest;c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(!0)};
c.onerror=function(){b(!1)};
try{c.open("GET",a,!0),c.send()}catch(d){b(!1)}}
function Pj(a){if(a>=Nj.length)Qj();else{var b=Nj[a],c="chrome-extension://"+b+Kj;0<=Lj.indexOf(b)?Oj(c,function(d){d?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=b,Rj(c,Qj)):Pj(a+1)}):Rj(c,function(){Pj(a+1)})}}
function Rj(a,b){var c=document.createElement("script");c.onerror=b;c.src=a;(document.head||document.documentElement).appendChild(c)}
function Qj(){var a=window.__onGCastApiAvailable;a&&"function"==typeof a&&a(!1,"No cast extension found")}
function Sj(){if(0<=window.navigator.userAgent.indexOf("CriOS")){var a=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(a){a({command:"cast.sender.init"});return}}window.chrome?(a=window.navigator.userAgent,0<=a.indexOf("Android")&&0<=a.indexOf("Chrome/")&&window.navigator.presentation?(a=Jj()?"50":"",Rj("//www.gstatic.com/eureka/clank"+a+Kj,Qj)):Pj(0)):Qj()}
;var Tj=x(),Uj=null,Vj=Array(50),Wj=-1,Xj=!1;function Yj(){var a=Zj;ak();Uj.push(a);bk(Uj)}
function ck(a,b){ak();var c=Uj,d=dk(a,String(b));0==c.length?ek(d):(bk(c),z(c,function(a){a(d)}))}
function ak(){Uj||(Uj=r("yt.mdx.remote.debug.handlers_")||[],q("yt.mdx.remote.debug.handlers_",Uj,void 0))}
function ek(a){var b=(Wj+1)%50;Wj=b;Vj[b]=a;Xj||(Xj=49==b)}
function bk(a){var b=Vj;if(b[0]){var c=Wj,d=Xj?c:-1;do{var d=(d+1)%50,e=b[d];z(a,function(a){a(e)})}while(d!=c);
Vj=Array(50);Wj=-1;Xj=!1}}
function dk(a,b){var c=(x()-Tj)/1E3;c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")}
;function fk(a){a=a||{};this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""}
function gk(a,b){return!!b&&(a.id==b||a.uuid==b)}
function hk(a){return{name:a.name,screenId:a.id,loungeToken:a.token,dialId:a.uuid}}
function ik(a){return new fk(a)}
function jk(a){return u(a)?Ka(a,ik):[]}
function kk(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"}
function lk(a){return u(a)?"["+Ka(a,kk).join(",")+"]":"null"}
;var mk={Ce:"atp",Le:"ska",Ie:"que",Ge:"mus",Ke:"sus"};function nk(a){this.i=this.g="";this.b="/api/lounge";this.f=!0;a=a||document.location.href;var b=Number(a.match(wd)[4]||null)||null||"";b&&(this.i=":"+b);this.g=xd(a)||"";a=mb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>Fa(a,"10.0")&&(this.f=!1))}
function ok(a,b,c,d){var e=a.b;if(p(d)?d:a.f)e="https://"+a.g+a.i+a.b;return Fd(e+b,c||{})}
function pk(a,b,c,d,e){a={format:"JSON",method:"POST",context:a,timeout:5E3,withCredentials:!1,$:ma(a.o,d,!0),onError:ma(a.j,e),Da:ma(a.l,e)};c&&(a.R=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return Pd(b,a)}
nk.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
nk.prototype.j=function(a,b){a(Error("Request error: "+b.status))};
nk.prototype.l=function(a){a(Error("request timed out"))};function qk(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)})}
function rk(a,b){return Na(a,function(a){return a.key==b})}
function sk(a){return Ka(a,function(a){return{key:a.id,name:a.name}})}
function tk(a,b){return Na(a,function(a){return a||b?!a!=!b?!1:a.id==b.id:!0})}
function uk(a,b){return Na(a,function(a){return gk(a,b)})}
;function U(){D.call(this);this.o=new F;Vb(this,ma(E,this.o))}
y(U,D);U.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.o.subscribe(a,b,c)};
U.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.o.unsubscribe(a,b,c)};
U.prototype.ha=function(a){return this.isDisposed()?!1:this.o.ha(a)};
U.prototype.w=function(a,b){return this.isDisposed()?!1:this.o.w.apply(this.o,arguments)};function vk(a){U.call(this);this.l=a;this.screens=[]}
y(vk,U);vk.prototype.U=function(){return this.screens};
vk.prototype.contains=function(a){return!!tk(this.screens,a)};
vk.prototype.get=function(a){return a?uk(this.screens,a):null};
function wk(a,b){var c=a.get(b.uuid)||a.get(b.id);if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0}
function xk(a,b){var c=a.screens.length!=b.length;a.screens=Ja(a.screens,function(a){return!!tk(b,a)});
for(var d=0,e=b.length;d<e;d++)c=wk(a,b[d])||c;return c}
function yk(a,b){var c=a.screens.length;a.screens=Ja(a.screens,function(a){return!(a||b?!a!=!b?0:a.id==b.id:1)});
return a.screens.length<c}
vk.prototype.info=function(a){ck(this.l,a)};function zk(a,b,c,d){U.call(this);this.u=a;this.l=b;this.i=c;this.j=d;this.g=0;this.b=null;this.f=NaN}
y(zk,U);var Ak=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g=zk.prototype;g.start=function(){!this.b&&isNaN(this.f)&&this.xc()};
g.stop=function(){this.b&&(this.b.abort(),this.b=null);isNaN(this.f)||(I(this.f),this.f=NaN)};
g.A=function(){this.stop();zk.B.A.call(this)};
g.xc=function(){this.f=NaN;this.b=Pd(ok(this.u,"/pairing/get_screen"),{method:"POST",R:{pairing_code:this.l},timeout:5E3,$:w(this.te,this),onError:w(this.se,this),Da:w(this.ue,this)})};
g.te=function(a,b){this.b=null;var c=b.screen||{};c.dialId=this.i;c.name=this.j;this.w("pairingComplete",new fk(c))};
g.se=function(a){this.b=null;a.status&&404==a.status?this.g>=Ak.length?this.w("pairingFailed",Error("DIAL polling timed out")):(a=Ak[this.g],this.f=H(w(this.xc,this),a),this.g++):this.w("pairingFailed",Error("Server error "+a.status))};
g.ue=function(){this.b=null;this.w("pairingFailed",Error("Server not responding"))};function Bk(a){this.app=this.name=this.id="";this.type="REMOTE_CONTROL";this.avatar=this.username="";this.capabilities=new Tc;this.experiments=new Tc;this.theme="u";if(a){this.id=a.id||a.name;this.name=a.name;this.app=a.app;this.type=a.type||"REMOTE_CONTROL";this.username=a.user||"";this.avatar=a.userAvatarUri||"";this.theme=a.theme||"u";var b=a.capabilities||"";this.capabilities.clear();Uc(this.capabilities,Ja(b.split(","),ma(ab,mk)));a=a.experiments||"";this.experiments.clear();Uc(this.experiments,
a.split(","))}}
Bk.prototype.equals=function(a){return a?this.id==a.id:!1};var Ck;function Dk(){var a=Ek(),b=Fk();A(a,b);if(Gk()){var c=a,d;d=0;for(var e=c.length,f;d<e;){var h=d+e>>1,k;k=Xa(b,c[h]);0<k?d=h+1:(e=h,f=!k)}d=f?d:~d;0>d&&Va(c,-(d+1),0,b)}a=Hk(a);if(0==a.length)try{Re.remove("remote_sid","/","youtube.com")}catch(m){}else try{Se("remote_sid",a.join(","),-1)}catch(m){}}
function Ek(){var a=T("yt-remote-connected-devices")||[];a.sort(Xa);return a}
function Hk(a){if(0==a.length)return[];var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return Ka(a,function(a,b){return 0==b?a:a.substring(c.length)})}
function Ik(a){S("yt-remote-connected-devices",a,86400)}
function Fk(){if(Jk)return Jk;var a=T("yt-remote-device-id");a||(a=qk(),S("yt-remote-device-id",a,31536E3));for(var b=Ek(),c=1,d=a;A(b,d);)c++,d=a+"#"+c;return Jk=d}
function Kk(){return T("yt-remote-session-browser-channel")}
function Gk(){return T("yt-remote-session-screen-id")}
function Lk(a){5<a.length&&(a=a.slice(a.length-5));var b=Ka(Mk(),function(a){return a.loungeToken}),c=Ka(a,function(a){return a.loungeToken});
Ma(c,function(a){return!A(b,a)})&&Nk();
S("yt-remote-local-screens",a,31536E3)}
function Mk(){return T("yt-remote-local-screens")||[]}
function Nk(){S("yt-remote-lounge-token-expiration",!0,86400)}
function Ok(a,b){S("yt-remote-session-browser-channel",a);S("yt-remote-session-screen-id",b);var c=Ek(),d=Fk();A(c,d)||c.push(d);Ik(c);Dk()}
function Pk(a){a||(Bj("yt-remote-session-screen-id"),Bj("yt-remote-session-video-id"));Dk();a=Ek();Qa(a,Fk());Ik(a)}
function Qk(){if(!Ck){var a;a=new nj;(a=a.isAvailable()?a:null)&&(Ck=new pj(a))}return Ck?!!Ck.get("yt-remote-use-staging-server"):!1}
var Jk="";function Rk(a){vk.call(this,"LocalScreenService");this.f=a;this.b=NaN;Sk(this);this.info("Initializing with "+lk(this.screens))}
y(Rk,vk);g=Rk.prototype;g.start=function(){Sk(this)&&this.w("screenChange");!T("yt-remote-lounge-token-expiration")&&Tk(this);I(this.b);this.b=H(w(this.start,this),1E4)};
g.ub=function(a,b){Sk(this);wk(this,a);Uk(this,!1);this.w("screenChange");b(a);a.token||Tk(this)};
g.remove=function(a,b){var c=Sk(this);yk(this,a)&&(Uk(this,!1),c=!0);b(a);c&&this.w("screenChange")};
g.rb=function(a,b,c,d){var e=Sk(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,Uk(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.w("screenChange")};
g.A=function(){I(this.b);Rk.B.A.call(this)};
function Tk(a){if(a.screens.length){var b=Ka(a.screens,function(a){return a.id}),c=ok(a.f,"/pairing/get_lounge_token_batch");
pk(a.f,c,{screen_ids:b.join(",")},w(a.ld,a),w(a.kd,a))}}
g.ld=function(a){Sk(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}Uk(this,!b);b&&ck(this.l,"Missed "+b+" lounge tokens.")};
g.kd=function(a){ck(this.l,"Requesting lounge tokens failed: "+a)};
function Sk(a){var b=jk(Mk()),b=Ja(b,function(a){return!a.uuid});
return xk(a,b)}
function Uk(a,b){Lk(Ka(a.screens,hk));b&&Nk()}
;function Vk(a,b){U.call(this);this.l=b;for(var c=T("yt-remote-online-screen-ids")||"",c=c?c.split(","):[],d={},e=this.l(),f=0,h=e.length;f<h;++f){var k=e[f].id;d[k]=A(c,k)}this.b=d;this.j=a;this.g=this.i=NaN;this.f=null;Wk("Initialized with "+L(this.b))}
y(Vk,U);g=Vk.prototype;g.start=function(){var a=parseInt(T("yt-remote-fast-check-period")||"0",10);(this.i=x()-144E5<a?0:a)?Xk(this):(this.i=x()+3E5,S("yt-remote-fast-check-period",this.i),this.Ob())};
g.isEmpty=function(){return gb(this.b)};
g.update=function(){Wk("Updating availability on schedule.");var a=this.l(),b=Za(this.b,function(b,d){return b&&!!uk(a,d)},this);
Yk(this,b)};
function Zk(a,b,c){var d=ok(a.j,"/pairing/get_screen_availability");pk(a.j,d,{lounge_token:b.token},w(function(a){a=a.screens||[];for(var d=0,h=a.length;d<h;++d)if(a[d].loungeToken==b.token){c("online"==a[d].status);return}c(!1)},a),w(function(){c(!1)},a))}
g.A=function(){I(this.g);this.g=NaN;this.f&&(this.f.abort(),this.f=null);Vk.B.A.call(this)};
function Yk(a,b){var c;a:if($a(b)!=$a(a.b))c=!1;else{c=db(b);for(var d=0,e=c.length;d<e;++d)if(!a.b[c[d]]){c=!1;break a}c=!0}c||(Wk("Updated online screens: "+L(a.b)),a.b=b,a.w("screenChange"));$k(a)}
function Xk(a){isNaN(a.g)||I(a.g);a.g=H(w(a.Ob,a),0<a.i&&a.i<x()?2E4:1E4)}
g.Ob=function(){I(this.g);this.g=NaN;this.f&&this.f.abort();var a=al(this);if($a(a)){var b=ok(this.j,"/pairing/get_screen_availability");this.f=pk(this.j,b,{lounge_token:db(a).join(",")},w(this.Md,this,a),w(this.Ld,this))}else Yk(this,{}),Xk(this)};
g.Md=function(a,b){this.f=null;var c;a:{c=db(al(this));var d=db(a);if(da(c)&&da(d)&&c.length==d.length){for(var e=c.length,f=0;f<e;f++)if(c[f]!==d[f]){c=!1;break a}c=!0}else c=!1}if(c){c=b.screens||[];d={};e=0;for(f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;Yk(this,d);Xk(this)}else this.I("Changing Screen set during request."),this.Ob()};
g.Ld=function(a){this.I("Screen availability failed: "+a);this.f=null;Xk(this)};
function Wk(a){ck("OnlineScreenService",a)}
g.I=function(a){ck("OnlineScreenService",a)};
function al(a){var b={};z(a.l(),function(a){a.token?b[a.token]=a.id:this.I("Requesting availability of screen w/o lounge token.")});
return b}
function $k(a){a=db(Za(a.b,function(a){return a}));
a.sort(Xa);a.length?S("yt-remote-online-screen-ids",a.join(","),60):Bj("yt-remote-online-screen-ids")}
;function V(a){vk.call(this,"ScreenService");this.j=a;this.b=this.f=null;this.g=[];this.i={};bl(this)}
y(V,vk);g=V.prototype;g.start=function(){this.f.start();this.b.start();this.screens.length&&(this.w("screenChange"),this.b.isEmpty()||this.w("onlineScreenChange"))};
g.ub=function(a,b,c){this.f.ub(a,b,c)};
g.remove=function(a,b,c){this.f.remove(a,b,c);this.b.update()};
g.rb=function(a,b,c,d){this.f.contains(a)?this.f.rb(a,b,c,d):(a="Updating name of unknown screen: "+a.name,ck(this.l,a),d(Error(a)))};
g.U=function(a){return a?this.screens:Sa(this.screens,Ja(this.g,function(a){return!this.contains(a)},this))};
g.Gc=function(){return Ja(this.U(!0),function(a){return!!this.b.b[a.id]},this)};
function cl(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);c||(c=a.i[b]);var h=a.U();if(h=(c?uk(h,c):null)||uk(h,b)){h.uuid=b;var k=dl(a,h);Zk(a.b,k,function(a){e(a?k:null)})}else c?el(a,c,w(function(a){var f=dl(this,new fk({name:d,
screenId:c,loungeToken:a,dialId:b||""}));Zk(this.b,f,function(a){e(a?f:null)})},a),f):e(null)}
g.Hc=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new zk(this.j,a,b,c);f.subscribe("pairingComplete",w(function(a){E(f);d(dl(this,a))},this));
f.subscribe("pairingFailed",function(a){E(f);e(a)});
f.start();return w(f.stop,f)};
function fl(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];return null}
g.we=function(a,b,c,d){Pd(ok(this.j,"/pairing/get_screen"),{method:"POST",R:{pairing_code:a},timeout:5E3,$:w(function(a,d){var h=new fk(d.screen||{});if(!h.name||fl(this,h.name)){var k;a:{k=h.name;for(var m=2,n=b(k,m);fl(this,n);){m++;if(20<m)break a;n=b(k,m)}k=n}h.name=k}c(dl(this,h))},this),
onError:w(function(a){d(Error("pairing request failed: "+a.status))},this),
Da:w(function(){d(Error("pairing request timed out."))},this)})};
g.A=function(){E(this.f);E(this.b);V.B.A.call(this)};
function el(a,b,c,d){a.info("requestLoungeToken_ for "+b);var e={R:{screen_ids:b},method:"POST",context:a,$:function(a,e){var k=e&&e.screens||[];k[0]&&k[0].screenId==b?c(k[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
Pd(ok(a.j,"/pairing/get_lounge_token_batch"),e)}
function gl(a){a.screens=a.f.U();var b=a.i,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+lk(a.screens))}
g.md=function(){gl(this);this.w("screenChange");this.b.update()};
function bl(a){hl(a);a.f=new Rk(a.j);a.f.subscribe("screenChange",w(a.md,a));gl(a);a.g=jk(T("yt-remote-automatic-screen-cache")||[]);hl(a);a.info("Initializing automatic screens: "+lk(a.g));a.b=new Vk(a.j,w(a.U,a,!0));a.b.subscribe("screenChange",w(function(){this.w("onlineScreenChange")},a))}
function dl(a,b){var c=a.get(b.id);c?(c.uuid=b.uuid,b=c):((c=uk(a.g,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.g.push(b),S("yt-remote-automatic-screen-cache",Ka(a.g,hk)));hl(a);a.i[b.uuid]=b.id;S("yt-remote-device-id-map",a.i,31536E3);return b}
function hl(a){a.i=T("yt-remote-device-id-map")||{}}
V.prototype.dispose=V.prototype.dispose;function il(a,b,c){U.call(this);this.L=c;this.F=a;this.f=b;this.g=null}
y(il,U);g=il.prototype;g.lb=function(a){this.g=a;this.w("sessionScreen",this.g)};
g.V=function(a){this.isDisposed()||(a&&jl(this,""+a),this.g=null,this.w("sessionScreen",null))};
g.info=function(a){ck(this.L,a)};
function jl(a,b){ck(a.L,b)}
g.Jc=function(){return null};
g.Qb=function(a){var b=this.f;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,w(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),w(function(){jl(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.A=function(){this.Qb("");il.B.A.call(this)};function kl(a,b){il.call(this,a,b,"CastSession");this.b=null;this.j=0;this.i=null;this.u=w(this.xe,this);this.l=w(this.Xd,this);this.j=H(w(function(){ll(this,null)},this),12E4)}
y(kl,il);g=kl.prototype;g.Pb=function(a){if(this.b){if(this.b==a)return;jl(this,"Overriding cast sesison with new session object");this.b.removeUpdateListener(this.u);this.b.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.l)}this.b=a;this.b.addUpdateListener(this.u);this.b.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.l);this.i&&ml(this);nl(this,"getMdxSessionStatus")};
g.Ka=function(a){this.info("launchWithParams: "+L(a));this.i=a;this.b&&ml(this)};
g.stop=function(){this.b?this.b.stop(w(function(){this.V()},this),w(function(){this.V(Error("Failed to stop receiver app."))},this)):this.V(Error("Stopping cast device witout session."))};
g.Qb=t;g.A=function(){this.info("disposeInternal");I(this.j);this.j=0;this.b&&(this.b.removeUpdateListener(this.u),this.b.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.l));this.b=null;kl.B.A.call(this)};
function ml(a){var b=a.i.videoId;b&&nl(a,"flingVideo",{videoId:b,currentTime:a.i.currentTime||0});a.i=null}
function nl(a,b,c){a.info("sendYoutubeMessage_: "+b+" "+L(c));var d={};d.type=b;c&&(d.data=c);a.b?a.b.sendMessage("urn:x-cast:com.google.youtube.mdx",d,t,w(function(){jl(this,"Failed to send message: "+b+".")},a)):jl(a,"Sending yt message without session: "+L(d))}
g.Xd=function(a,b){if(!this.isDisposed())if(b){var c=pd(b);if(c){var d=""+c.type,c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+L(c));switch(d){case "mdxSessionStatus":ll(this,c.screenId);break;default:jl(this,"Unknown youtube message: "+d)}}else jl(this,"Unable to parse message.")}else jl(this,"No data in message.")};
function ll(a,b){I(a.j);if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.g||a.g.id!=b){var c=w(a.lb,a),d=w(a.V,a);a.gc(b,c,d,5)}}else a.V(Error("Waiting for session status timed out."))}
g.gc=function(a,b,c,d){cl(this.F,this.f.label,a,this.f.friendlyName,w(function(e){e?b(e):0<=d?(jl(this,"Screen "+a+" appears to be offline. "+d+" retries left."),H(w(this.gc,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.Jc=function(){return this.b};
g.xe=function(a){this.isDisposed()||a||(jl(this,"Cast session died."),this.V())};function ol(a,b){il.call(this,a,b,"DialSession");this.i=this.D=null;this.H="";this.j=null;this.u=t;this.l=NaN;this.K=w(this.Ae,this);this.b=t}
y(ol,il);g=ol.prototype;g.Pb=function(a){this.i=a;this.i.addUpdateListener(this.K)};
g.Ka=function(a){this.j=a;this.u()};
g.stop=function(){this.b();this.b=t;I(this.l);this.i?this.i.stop(w(this.V,this,null),w(this.V,this,"Failed to stop DIAL device.")):this.V()};
g.A=function(){this.b();this.b=t;I(this.l);this.i&&this.i.removeUpdateListener(this.K);this.i=null;ol.B.A.call(this)};
function pl(a){a.b=a.F.Hc(a.H,a.f.label,a.f.friendlyName,w(function(a){this.b=t;this.lb(a)},a),w(function(a){this.b=t;
this.V(a)},a))}
g.Ae=function(a){this.isDisposed()||a||(jl(this,"DIAL session died."),this.b(),this.b=t,this.V())};
function ql(a){var b={};b.pairingCode=a.H;if(a.j){var c=a.j.currentTime||0;b.v=a.j.videoId;b.t=c}Qk()&&(b.env_useStageMdx=1);return Dd(b)}
g.Lb=function(a){this.H=qk();if(this.j){var b=new chrome.cast.DialLaunchResponse(!0,ql(this));a(b);pl(this)}else this.u=w(function(){I(this.l);this.u=t;this.l=NaN;var b=new chrome.cast.DialLaunchResponse(!0,ql(this));a(b);pl(this)},this),this.l=H(w(function(){this.u()},this),100)};
g.nd=function(a,b){cl(this.F,this.D.receiver.label,a,this.f.friendlyName,w(function(a){a&&a.token?(this.lb(a),b(new chrome.cast.DialLaunchResponse(!1))):this.Lb(b)},this),w(function(a){jl(this,"Failed to get DIAL screen: "+a);
this.Lb(b)},this))};function rl(a,b){il.call(this,a,b,"ManualSession");this.b=H(w(this.Ka,this,null),150)}
y(rl,il);rl.prototype.stop=function(){this.V()};
rl.prototype.Pb=t;rl.prototype.Ka=function(){I(this.b);this.b=NaN;var a=uk(this.F.U(),this.f.label);a?this.lb(a):this.V(Error("No such screen"))};
rl.prototype.A=function(){I(this.b);this.b=NaN;rl.B.A.call(this)};function W(a){U.call(this);this.f=a;this.b=null;this.j=!1;this.g=[];this.i=w(this.Jd,this)}
y(W,U);g=W.prototype;
g.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest("233637DE");c.dialRequest=new chrome.cast.DialRequest("YouTube");var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,c=new chrome.cast.ApiConfig(c,w(this.qc,this),w(this.Kd,this),d,e);c.customDialLaunchCallback=w(this.yd,this);chrome.cast.initialize(c,w(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.i),
Yj(),this.f.subscribe("onlineScreenChange",w(this.Ic,this)),this.g=sl(this),chrome.cast.setCustomReceivers(this.g,t,w(function(a){this.I("Failed to set initial custom receivers: "+L(a))},this)),this.w("yt-remote-cast2-availability-change",tl(this)),b(!0))},this),w(function(a){this.I("Failed to initialize API: "+L(a));
b(!1)},this))};
g.ke=function(a,b){ul("Setting connected screen ID: "+a+" -> "+b);if(this.b){var c=this.b.g;if(!a||c&&c.id!=a)ul("Unsetting old screen status: "+this.b.f.friendlyName),E(this.b),this.b=null}if(a&&b){if(!this.b){c=uk(this.f.U(),a);if(!c){ul("setConnectedScreenStatus: Unknown screen.");return}var d=vl(this,c);d||(ul("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.g.push(d),chrome.cast.setCustomReceivers(this.g,
t,w(function(a){this.I("Failed to set initial custom receivers: "+L(a))},this)));
ul("setConnectedScreenStatus: new active receiver: "+d.friendlyName);wl(this,new rl(this.f,d),!0)}this.b.Qb(b)}else ul("setConnectedScreenStatus: no screen.")};
function vl(a,b){return b?Na(a.g,function(a){return gk(b,a.label)},a):null}
g.le=function(a){this.isDisposed()?this.I("Setting connection data on disposed cast v2"):this.b?this.b.Ka(a):this.I("Setting connection data without a session")};
g.ze=function(){this.isDisposed()?this.I("Stopping session on disposed cast v2"):this.b?(this.b.stop(),E(this.b),this.b=null):ul("Stopping non-existing session")};
g.requestSession=function(){chrome.cast.requestSession(w(this.qc,this),w(this.Nd,this))};
g.A=function(){this.f.unsubscribe("onlineScreenChange",w(this.Ic,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.i);var a=Zj,b=r("yt.mdx.remote.debug.handlers_");Qa(b||[],a);E(this.b);W.B.A.call(this)};
function ul(a){ck("Controller",a)}
g.I=function(a){ck("Controller",a)};
function Zj(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)}
function tl(a){return a.j||!!a.g.length||!!a.b}
function wl(a,b,c){E(a.b);(a.b=b)?(c?a.w("yt-remote-cast2-receiver-resumed",b.f):a.w("yt-remote-cast2-receiver-selected",b.f),b.subscribe("sessionScreen",w(a.sc,a,b)),b.g?a.w("yt-remote-cast2-session-change",b.g):c&&a.b.Ka(null)):a.w("yt-remote-cast2-session-change",null)}
g.sc=function(a,b){this.b==a&&(b||wl(this,null),this.w("yt-remote-cast2-session-change",b))};
g.Jd=function(a,b){if(!this.isDisposed())if(a)switch(ul("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.b)if(this.b.f.label!=a.label)ul("onReceiverAction_: Stopping active receiver: "+this.b.f.friendlyName),this.b.stop();else{ul("onReceiverAction_: Casting to active receiver.");this.b.g&&this.w("yt-remote-cast2-session-change",this.b.g);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:wl(this,new rl(this.f,a));break;case chrome.cast.ReceiverType.DIAL:wl(this,
new ol(this.f,a));break;case chrome.cast.ReceiverType.CAST:wl(this,new kl(this.f,a));break;default:this.I("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.b&&this.b.f.label==a.label?this.b.stop():this.I("Stopping receiver w/o session: "+a.friendlyName)}else this.I("onReceiverAction_ called without receiver.")};
g.yd=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.I("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.b?this.b.f:null;if(!c||c.label!=b.label)return this.I("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.b.g)return ul("Reselecting dial screen."),
this.w("yt-remote-cast2-session-change",this.b.g),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.I('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);wl(this,new ol(this.f,b))}b=this.b;b.D=a;return b.D.appState==chrome.cast.DialAppState.RUNNING?new Promise(w(b.nd,b,(b.D.extraData||{}).screenId||null)):new Promise(w(b.Lb,b))};
g.qc=function(a){if(!this.isDisposed()){ul("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.b)if(b.receiverType==chrome.cast.ReceiverType.CAST)ul("Got resumed cast session before resumed mdx connection."),wl(this,new kl(this.f,b),!0);else{this.I("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.b.f,d=uk(this.f.U(),c.label);d&&gk(d,b.label)&&c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==
chrome.cast.ReceiverType.CAST&&(ul("onSessionEstablished_: manual to cast session change "+b.friendlyName),E(this.b),this.b=new kl(this.f,b),this.b.subscribe("sessionScreen",w(this.sc,this,this.b)),this.b.Ka(null));this.b.Pb(a)}}};
g.ye=function(){return this.b?this.b.Jc():null};
g.Nd=function(a){this.isDisposed()||(this.I("Failed to estabilish a session: "+L(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&wl(this,null))};
g.Kd=function(a){ul("Receiver availability updated: "+a);if(!this.isDisposed()){var b=tl(this);this.j=a==chrome.cast.ReceiverAvailability.AVAILABLE;tl(this)!=b&&this.w("yt-remote-cast2-availability-change",tl(this))}};
function sl(a){var b=a.f.Gc(),c=a.b&&a.b.f;a=Ka(b,function(a){c&&gk(a,c.label)&&(c=null);var b=a.uuid?a.uuid:a.id,f=vl(this,a);f?(f.label=b,f.friendlyName=a.name):(f=new chrome.cast.Receiver(b,a.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a}
g.Ic=function(){if(!this.isDisposed()){var a=tl(this);this.g=sl(this);ul("Updating custom receivers: "+L(this.g));chrome.cast.setCustomReceivers(this.g,t,w(function(){this.I("Failed to set custom receivers.")},this));
var b=tl(this);b!=a&&this.w("yt-remote-cast2-availability-change",b)}};
W.prototype.setLaunchParams=W.prototype.le;W.prototype.setConnectedScreenStatus=W.prototype.ke;W.prototype.stopSession=W.prototype.ze;W.prototype.getCastSession=W.prototype.ye;W.prototype.requestSession=W.prototype.requestSession;W.prototype.init=W.prototype.init;W.prototype.dispose=W.prototype.dispose;function xl(a,b,c){yl()?Al(a)&&(Bl(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Cl(b):(window.__onGCastApiAvailable=function(a,c){a?Cl(b):(Dl("Failed to load cast API: "+c),El(!1),Bl(!1),Bj("yt-remote-cast-available"),Bj("yt-remote-cast-receiver"),Fl(),b(!1))},c?rc("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):Sj())):zl("Cannot initialize because not running Chrome")}
function Fl(){zl("dispose");var a=Gl();a&&a.dispose();Hl=null;q("yt.mdx.remote.cloudview.instance_",null,void 0);Il(!1);nc(Jl);Jl.length=0}
function Kl(){return!!T("yt-remote-cast-installed")}
function Ll(){var a=T("yt-remote-cast-receiver");a?(a=a.friendlyName,a=-1!=a.indexOf("&")?"document"in l?Aa(a):Ca(a):a):a=null;return a}
function Ml(){zl("clearCurrentReciever");Bj("yt-remote-cast-receiver")}
function Nl(){Kl()?Gl()?Ol()?(zl("Requesting cast selector."),Hl.requestSession()):(zl("Wait for cast API to be ready to request the session."),Jl.push(lc("yt-remote-cast2-api-ready",Nl))):Dl("requestCastSelector: Cast is not initialized."):Dl("requestCastSelector: Cast API is not installed!")}
function Pl(a){Ol()?Gl().setLaunchParams(a):Dl("setLaunchParams called before ready.")}
function Ql(a,b){Ol()?Gl().setConnectedScreenStatus(a,b):Dl("setConnectedScreenStatus called before ready.")}
var Hl=null;function yl(){var a;a=0<=mb.search(/\ (CrMo|Chrome|CriOS)\//);return qf||a}
function Al(a){var b=!1;if(!Hl){var c=r("yt.mdx.remote.cloudview.instance_");c||(c=new W(a),c.subscribe("yt-remote-cast2-availability-change",function(a){S("yt-remote-cast-available",a);J("yt-remote-cast2-availability-change",a)}),c.subscribe("yt-remote-cast2-receiver-selected",function(a){zl("onReceiverSelected: "+a.friendlyName);
S("yt-remote-cast-receiver",a);J("yt-remote-cast2-receiver-selected",a)}),c.subscribe("yt-remote-cast2-receiver-resumed",function(a){zl("onReceiverResumed: "+a.friendlyName);
S("yt-remote-cast-receiver",a)}),c.subscribe("yt-remote-cast2-session-change",function(a){zl("onSessionChange: "+kk(a));
a||Bj("yt-remote-cast-receiver");J("yt-remote-cast2-session-change",a)}),q("yt.mdx.remote.cloudview.instance_",c,void 0),b=!0);
Hl=c}zl("cloudview.createSingleton_: "+b);return b}
function Gl(){Hl||(Hl=r("yt.mdx.remote.cloudview.instance_"));return Hl}
function Cl(a){El(!0);Bl(!1);Hl.init(!0,function(b){b?(Il(!0),J("yt-remote-cast2-api-ready")):(Dl("Failed to initialize cast API."),El(!1),Bj("yt-remote-cast-available"),Bj("yt-remote-cast-receiver"),Fl());a(b)})}
function zl(a){ck("cloudview",a)}
function Dl(a){ck("cloudview",a)}
function El(a){zl("setCastInstalled_ "+a);S("yt-remote-cast-installed",a)}
function Ol(){return!!r("yt.mdx.remote.cloudview.apiReady_")}
function Il(a){zl("setApiReady_ "+a);q("yt.mdx.remote.cloudview.apiReady_",a,void 0)}
function Bl(a){q("yt.mdx.remote.cloudview.initializing_",a,void 0)}
var Jl=[];function Rl(){}
;function Sl(a,b){this.action=a;this.params=b||null}
;function Tl(){this.b=x()}
new Tl;Tl.prototype.set=function(a){this.b=a};
Tl.prototype.reset=function(){this.set(x())};
Tl.prototype.get=function(){return this.b};function Ul(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.b=!1;this.zc=!0}
Ul.prototype.stopPropagation=function(){this.b=!0};
Ul.prototype.preventDefault=function(){this.defaultPrevented=!0;this.zc=!1};var Vl=!K||ld(9),Wl=K&&!kd("9");!ad||kd("528");$c&&kd("1.9b")||K&&kd("8")||Yc&&kd("9.5")||ad&&kd("528");$c&&!kd("8")||K&&kd("9");function Xl(a,b){Ul.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.f=this.state=null;a&&this.init(a,b)}
y(Xl,Ul);
Xl.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if($c){var f;a:{try{af(e.nodeName);f=!0;break a}catch(h){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||
0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.f=a;a.defaultPrevented&&this.preventDefault()};
Xl.prototype.stopPropagation=function(){Xl.B.stopPropagation.call(this);this.f.stopPropagation?this.f.stopPropagation():this.f.cancelBubble=!0};
Xl.prototype.preventDefault=function(){Xl.B.preventDefault.call(this);var a=this.f;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wl)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Yl="closure_listenable_"+(1E6*Math.random()|0),Zl=0;function $l(a,b,c,d,e){this.listener=a;this.b=null;this.src=b;this.type=c;this.cb=!!d;this.hb=e;this.key=++Zl;this.Ma=this.bb=!1}
function am(a){a.Ma=!0;a.listener=null;a.b=null;a.src=null;a.hb=null}
;function bm(a){this.src=a;this.b={};this.f=0}
function cm(a,b,c,d,e){var f=b.toString();b=a.b[f];b||(b=a.b[f]=[],a.f++);var h=dm(b,c,d,e);-1<h?(a=b[h],a.bb=!1):(a=new $l(c,a.src,f,!!d,e),a.bb=!1,b.push(a));return a}
bm.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=dm(e,b,c,d);return-1<b?(am(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.f--),!0):!1};
function em(a,b){var c=b.type;c in a.b&&Qa(a.b[c],b)&&(am(b),0==a.b[c].length&&(delete a.b[c],a.f--))}
function fm(a,b,c,d,e){a=a.b[b.toString()];b=-1;a&&(b=dm(a,c,d,e));return-1<b?a[b]:null}
function dm(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ma&&f.listener==b&&f.cb==!!c&&f.hb==d)return e}return-1}
;var gm="closure_lm_"+(1E6*Math.random()|0),hm={},im=0;
function jm(a,b,c,d,e){if(u(b)){for(var f=0;f<b.length;f++)jm(a,b[f],c,d,e);return null}c=km(c);if(a&&a[Yl])a=a.ib(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=lm(a);h||(a[gm]=h=new bm(a));c=cm(h,b,c,d,e);if(!c.b){d=mm();c.b=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(nm(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");im++}a=c}return a}
function mm(){var a=om,b=Vl?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function pm(a,b,c,d,e){if(u(b))for(var f=0;f<b.length;f++)pm(a,b[f],c,d,e);else c=km(c),a&&a[Yl]?a.qb(b,c,d,e):a&&(a=lm(a))&&(b=fm(a,b,c,!!d,e))&&qm(b)}
function qm(a){if(!ea(a)&&a&&!a.Ma){var b=a.src;if(b&&b[Yl])em(b.g,a);else{var c=a.type,d=a.b;b.removeEventListener?b.removeEventListener(c,d,a.cb):b.detachEvent&&b.detachEvent(nm(c),d);im--;(c=lm(b))?(em(c,a),0==c.f&&(c.src=null,b[gm]=null)):am(a)}}}
function nm(a){return a in hm?hm[a]:hm[a]="on"+a}
function rm(a,b,c,d){var e=!0;if(a=lm(a))if(b=a.b[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.cb==c&&!f.Ma&&(f=sm(f,d),e=e&&!1!==f)}return e}
function sm(a,b){var c=a.listener,d=a.hb||a.src;a.bb&&qm(a);return c.call(d,b)}
function om(a,b){if(a.Ma)return!0;if(!Vl){var c=b||r("window.event"),d=new Xl(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.b&&0<=h;h--){d.currentTarget=c[h];var k=rm(c[h],f,!0,d),e=e&&k}for(h=0;!d.b&&h<c.length;h++)d.currentTarget=c[h],k=rm(c[h],f,!1,d),e=e&&k}return e}return sm(a,new Xl(b,this))}
function lm(a){a=a[gm];return a instanceof bm?a:null}
var tm="__closure_events_fn_"+(1E9*Math.random()>>>0);function km(a){if(fa(a))return a;a[tm]||(a[tm]=function(b){return a.handleEvent(b)});
return a[tm]}
;function um(){D.call(this);this.g=new bm(this);this.qa=this;this.ca=null}
y(um,D);um.prototype[Yl]=!0;g=um.prototype;g.addEventListener=function(a,b,c,d){jm(this,a,b,c,d)};
g.removeEventListener=function(a,b,c,d){pm(this,a,b,c,d)};
function vm(a,b){var c,d=a.ca;if(d){c=[];for(var e=1;d;d=d.ca)c.push(d),++e}var d=a.qa,e=b,f=e.type||e;if(v(e))e=new Ul(e,d);else if(e instanceof Ul)e.target=e.target||d;else{var h=e,e=new Ul(f,d);lb(e,h)}var h=!0,k;if(c)for(var m=c.length-1;!e.b&&0<=m;m--)k=e.currentTarget=c[m],h=wm(k,f,!0,e)&&h;e.b||(k=e.currentTarget=d,h=wm(k,f,!0,e)&&h,e.b||(h=wm(k,f,!1,e)&&h));if(c)for(m=0;!e.b&&m<c.length;m++)k=e.currentTarget=c[m],h=wm(k,f,!1,e)&&h}
g.A=function(){um.B.A.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.b){for(var d=a.b[c],e=0;e<d.length;e++)++b,am(d[e]);delete a.b[c];a.f--}}this.ca=null};
g.ib=function(a,b,c,d){return cm(this.g,String(a),b,c,d)};
g.qb=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};
function wm(a,b,c,d){b=a.g.b[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.Ma&&h.cb==c){var k=h.listener,m=h.hb||h.src;h.bb&&em(a.g,h);e=!1!==k.call(m,d)&&e}}return e&&0!=d.zc}
;function xm(a,b){this.f=new rd(a);this.b=b?pd:od}
xm.prototype.stringify=function(a){return qd(this.f,a)};
xm.prototype.parse=function(a){return this.b(a)};function ym(a,b){um.call(this);this.b=a||1;this.f=b||l;this.i=w(this.ne,this);this.j=x()}
y(ym,um);g=ym.prototype;g.enabled=!1;g.Y=null;function zm(a,b){a.b=b;a.Y&&a.enabled?(a.stop(),a.start()):a.Y&&a.stop()}
g.ne=function(){if(this.enabled){var a=x()-this.j;0<a&&a<.8*this.b?this.Y=this.f.setTimeout(this.i,this.b-a):(this.Y&&(this.f.clearTimeout(this.Y),this.Y=null),vm(this,"tick"),this.enabled&&(this.Y=this.f.setTimeout(this.i,this.b),this.j=x()))}};
g.start=function(){this.enabled=!0;this.Y||(this.Y=this.f.setTimeout(this.i,this.b),this.j=x())};
g.stop=function(){this.enabled=!1;this.Y&&(this.f.clearTimeout(this.Y),this.Y=null)};
g.A=function(){ym.B.A.call(this);this.stop();delete this.f};
function Am(a,b,c){if(fa(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}
;function Bm(a,b,c){D.call(this);this.i=null!=c?w(a,c):a;this.g=b;this.f=w(this.Pd,this);this.b=[]}
y(Bm,D);g=Bm.prototype;g.Na=!1;g.Xa=0;g.za=null;g.dd=function(a){this.b=arguments;this.za||this.Xa?this.Na=!0:Cm(this)};
g.stop=function(){this.za&&(l.clearTimeout(this.za),this.za=null,this.Na=!1,this.b=[])};
g.pause=function(){this.Xa++};
g.resume=function(){this.Xa--;this.Xa||!this.Na||this.za||(this.Na=!1,Cm(this))};
g.A=function(){Bm.B.A.call(this);this.stop()};
g.Pd=function(){this.za=null;this.Na&&!this.Xa&&(this.Na=!1,Cm(this))};
function Cm(a){a.za=Am(a.f,a.g);a.i.apply(null,a.b)}
;function Dm(a){D.call(this);this.f=a;this.b={}}
y(Dm,D);var Em=[];Dm.prototype.ib=function(a,b,c,d){u(b)||(b&&(Em[0]=b.toString()),b=Em);for(var e=0;e<b.length;e++){var f=jm(a,b[e],c||this.handleEvent,d||!1,this.f||this);if(!f)break;this.b[f.key]=f}return this};
Dm.prototype.qb=function(a,b,c,d,e){if(u(b))for(var f=0;f<b.length;f++)this.qb(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.f||this,c=km(c),d=!!d,b=a&&a[Yl]?fm(a.g,String(b),c,d,e):a?(a=lm(a))?fm(a,b,c,d,e):null:null,b&&(qm(b),delete this.b[b.key]);return this};
function Fm(a){Ya(a.b,function(a,c){this.b.hasOwnProperty(c)&&qm(a)},a);
a.b={}}
Dm.prototype.A=function(){Dm.B.A.call(this);Fm(this)};
Dm.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function Gm(){}
Gm.prototype.b=null;function Hm(a){var b;(b=a.b)||(b={},Im(a)&&(b[0]=!0,b[1]=!0),b=a.b=b);return b}
;var Jm;function Km(){}
y(Km,Gm);function Lm(a){return(a=Im(a))?new ActiveXObject(a):new XMLHttpRequest}
function Im(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}
Jm=new Km;function Mm(a,b,c,d,e){this.b=a;this.g=c;this.u=d;this.l=e||1;this.j=45E3;this.i=new Dm(this);this.f=new ym;zm(this.f,250)}
g=Mm.prototype;g.Aa=null;g.fa=!1;g.Pa=null;g.Sb=null;g.Ya=null;g.Oa=null;g.ra=null;g.ua=null;g.Ea=null;g.J=null;g.$a=0;g.ga=null;g.tb=null;g.Ba=null;g.Va=-1;g.Ac=!0;g.wa=!1;g.Jb=0;g.nb=null;var Nm={},Om={};g=Mm.prototype;g.setTimeout=function(a){this.j=a};
function Pm(a,b,c){a.Oa=1;a.ra=Ug(b.clone());a.Ea=c;a.o=!0;Qm(a,null)}
function Rm(a,b,c,d,e){a.Oa=1;a.ra=Ug(b.clone());a.Ea=null;a.o=c;e&&(a.Ac=!1);Qm(a,d)}
function Qm(a,b){a.Ya=x();Sm(a);a.ua=a.ra.clone();Sg(a.ua,"t",a.l);a.$a=0;a.J=a.b.Cb(a.b.Za()?b:null);0<a.Jb&&(a.nb=new Bm(w(a.Fc,a,a.J),a.Jb));a.i.ib(a.J,"readystatechange",a.$d);var c=a.Aa?ib(a.Aa):{};a.Ea?(a.tb="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.J.send(a.ua,a.tb,a.Ea,c)):(a.tb="GET",a.Ac&&!ad&&(c.Connection="close"),a.J.send(a.ua,a.tb,null,c));a.b.ea(1)}
g.$d=function(a){a=a.target;var b=this.nb;b&&3==Tm(a)?b.dd():this.Fc(a)};
g.Fc=function(a){try{if(a==this.J)a:{var b=Tm(this.J),c=this.J.j,d=this.J.getStatus();if(K&&!ld(10)||ad&&!kd("420+")){if(4>b)break a}else if(3>b||3==b&&!Yc&&!Um(this.J))break a;this.wa||4!=b||7==c||(8==c||0>=d?this.b.ea(3):this.b.ea(2));Vm(this);var e=this.J.getStatus();this.Va=e;var f=Um(this.J);(this.fa=200==e)?(4==b&&Wm(this),this.o?(Xm(this,b,f),Yc&&this.fa&&3==b&&(this.i.ib(this.f,"tick",this.Yd),this.f.start())):Ym(this,f),this.fa&&!this.wa&&(4==b?this.b.kb(this):(this.fa=!1,Sm(this)))):(this.Ba=
400==e&&0<f.indexOf("Unknown SID")?3:0,X(),Wm(this),Zm(this))}}catch(h){this.J&&Um(this.J)}finally{}};
function Xm(a,b,c){for(var d=!0;!a.wa&&a.$a<c.length;){var e=$m(a,c);if(e==Om){4==b&&(a.Ba=4,X(),d=!1);break}else if(e==Nm){a.Ba=4;X();d=!1;break}else Ym(a,e)}4==b&&0==c.length&&(a.Ba=1,X(),d=!1);a.fa=a.fa&&d;d||(Wm(a),Zm(a))}
g.Yd=function(){var a=Tm(this.J),b=Um(this.J);this.$a<b.length&&(Vm(this),Xm(this,a,b),this.fa&&4!=a&&Sm(this))};
function $m(a,b){var c=a.$a,d=b.indexOf("\n",c);if(-1==d)return Om;c=Number(b.substring(c,d));if(isNaN(c))return Nm;d+=1;if(d+c>b.length)return Om;var e=b.substr(d,c);a.$a=d+c;return e}
function an(a,b){a.Ya=x();Sm(a);var c=b?window.location.hostname:"";a.ua=a.ra.clone();N(a.ua,"DOMAIN",c);N(a.ua,"t",a.l);try{a.ga=new ActiveXObject("htmlfile")}catch(n){Wm(a);a.Ba=7;X();Zm(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{if(h in Ea)h=Ea[h];else if(h in Da)h=Ea[h]=Da[h];else{var k,m=h.charCodeAt(0);if(31<m&&127>m)k=h;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");
k+=m.toString(16).toUpperCase()}h=Ea[h]=k}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=Dc(rb("b/12014412"),d);a.ga.open();a.ga.write(Ab(c));a.ga.close();a.ga.parentWindow.m=w(a.Td,a);a.ga.parentWindow.d=w(a.wc,a,!0);a.ga.parentWindow.rpcClose=w(a.wc,a,!1);c=a.ga.createElement("DIV");a.ga.parentWindow.document.body.appendChild(c);d=wb(a.ua.toString());d=ub(d);za.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(sa,"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(ta,"&lt;")),-1!=
d.indexOf(">")&&(d=d.replace(va,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(wa,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(xa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ya,"&#0;")));d=Dc(rb("b/12014412"),'<iframe src="'+d+'"></iframe>');c.innerHTML=Ab(d);a.b.ea(1)}
g.Td=function(a){bn(w(this.Sd,this,a),0)};
g.Sd=function(a){this.wa||(Vm(this),Ym(this,a),Sm(this))};
g.wc=function(a){bn(w(this.Rd,this,a),0)};
g.Rd=function(a){this.wa||(Wm(this),this.fa=a,this.b.kb(this),this.b.ea(4))};
g.cancel=function(){this.wa=!0;Wm(this)};
function Sm(a){a.Sb=x()+a.j;cn(a,a.j)}
function cn(a,b){if(null!=a.Pa)throw Error("WatchDog timer not null");a.Pa=bn(w(a.Vd,a),b)}
function Vm(a){a.Pa&&(l.clearTimeout(a.Pa),a.Pa=null)}
g.Vd=function(){this.Pa=null;var a=x();0<=a-this.Sb?(2!=this.Oa&&this.b.ea(3),Wm(this),this.Ba=2,X(),Zm(this)):cn(this,this.Sb-a)};
function Zm(a){a.b.ic()||a.wa||a.b.kb(a)}
function Wm(a){Vm(a);E(a.nb);a.nb=null;a.f.stop();Fm(a.i);if(a.J){var b=a.J;a.J=null;dn(b);b.dispose()}a.ga&&(a.ga=null)}
function Ym(a,b){try{a.b.pc(a,b),a.b.ea(4)}catch(c){}}
;function en(a,b,c,d,e){if(0==d)c(!1);else{var f=e||0;d--;fn(a,b,function(e){e?c(!0):l.setTimeout(function(){en(a,b,c,d,f)},f)})}}
function fn(a,b,c){var d=new Image;d.onload=function(){try{gn(d),c(!0)}catch(a){}};
d.onerror=function(){try{gn(d),c(!1)}catch(a){}};
d.onabort=function(){try{gn(d),c(!1)}catch(a){}};
d.ontimeout=function(){try{gn(d),c(!1)}catch(a){}};
l.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
d.src=a}
function gn(a){a.onload=null;a.onerror=null;a.onabort=null;a.ontimeout=null}
;function hn(a){this.b=a;this.f=new xm(null,!0)}
g=hn.prototype;g.Hb=null;g.W=null;g.ob=!1;g.Dc=null;g.eb=null;g.Mb=null;g.Ib=null;g.Z=null;g.pa=-1;g.Ua=null;g.Qa=null;g.connect=function(a){this.Ib=a;a=jn(this.b,null,this.Ib);X();this.Dc=x();var b=this.b.u;null!=b?(this.Ua=b[0],(this.Qa=b[1])?(this.Z=1,kn(this)):(this.Z=2,ln(this))):(Sg(a,"MODE","init"),this.W=new Mm(this,0,void 0,void 0,void 0),this.W.Aa=this.Hb,Rm(this.W,a,!1,null,!0),this.Z=0)};
function kn(a){var b=jn(a.b,a.Qa,"/mail/images/cleardot.gif");Ug(b);en(b.toString(),5E3,w(a.$c,a),3,2E3);a.ea(1)}
g.$c=function(a){if(a)this.Z=2,ln(this);else{X();var b=this.b;b.da=b.sa.pa;mn(b,9)}a&&this.ea(2)};
function ln(a){var b=a.b.D;if(null!=b)X(),b?(X(),nn(a.b,a,!1)):(X(),nn(a.b,a,!0));else if(a.W=new Mm(a,0,void 0,void 0,void 0),a.W.Aa=a.Hb,b=a.b,b=jn(b,b.Za()?a.Ua:null,a.Ib),X(),!K||ld(10))Sg(b,"TYPE","xmlhttp"),Rm(a.W,b,!1,a.Ua,!1);else{Sg(b,"TYPE","html");var c=a.W;a=!!a.Ua;c.Oa=3;c.ra=Ug(b.clone());an(c,a)}}
g.Cb=function(a){return this.b.Cb(a)};
g.ic=function(){return!1};
g.pc=function(a,b){this.pa=a.Va;if(0==this.Z)if(b){try{var c=this.f.parse(b)}catch(d){c=this.b;c.da=this.pa;mn(c,2);return}this.Ua=c[0];this.Qa=c[1]}else c=this.b,c.da=this.pa,mn(c,2);else if(2==this.Z)if(this.ob)X(),this.Mb=x();else if("11111"==b){if(X(),this.ob=!0,this.eb=x(),c=this.eb-this.Dc,!K||ld(10)||500>c)this.pa=200,this.W.cancel(),X(),nn(this.b,this,!0)}else X(),this.eb=this.Mb=x(),this.ob=!1};
g.kb=function(){this.pa=this.W.Va;if(this.W.fa)0==this.Z?this.Qa?(this.Z=1,kn(this)):(this.Z=2,ln(this)):2==this.Z&&((!K||ld(10)?!this.ob:200>this.Mb-this.eb)?(X(),nn(this.b,this,!1)):(X(),nn(this.b,this,!0)));else{0==this.Z?X():2==this.Z&&X();var a=this.b;a.da=this.pa;mn(a,2)}};
g.Za=function(){return this.b.Za()};
g.isActive=function(){return this.b.isActive()};
g.ea=function(a){this.b.ea(a)};function on(a){um.call(this);this.headers=new Kc;this.L=a||null;this.f=!1;this.K=this.b=null;this.ka=this.D="";this.j=0;this.o="";this.i=this.ba=this.u=this.X=!1;this.l=0;this.F=null;this.la="";this.H=this.ia=!1}
y(on,um);var pn=/^https?$/i,qn=["POST","PUT"];g=on.prototype;
g.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);b=b?b.toUpperCase():"GET";this.D=a;this.o="";this.j=0;this.ka=b;this.X=!1;this.f=!0;this.b=this.L?Lm(this.L):Lm(Jm);this.K=this.L?Hm(this.L):Hm(Jm);this.b.onreadystatechange=w(this.oc,this);try{Rl(rn(this,"Opening Xhr")),this.ba=!0,this.b.open(b,String(a),!0),this.ba=!1}catch(f){Rl(rn(this,"Error opening Xhr: "+f.message));sn(this,f);return}a=c||"";var e=this.headers.clone();
d&&Rc(d,function(a,b){e.set(b,a)});
d=Na(e.ja(),tn);c=l.FormData&&a instanceof l.FormData;!A(qn,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);
this.la&&(this.b.responseType=this.la);"withCredentials"in this.b&&this.b.withCredentials!==this.ia&&(this.b.withCredentials=this.ia);try{un(this),0<this.l&&(this.H=vn(this.b),Rl(rn(this,"Will abort after "+this.l+"ms if incomplete, xhr2 "+this.H)),this.H?(this.b.timeout=this.l,this.b.ontimeout=w(this.hc,this)):this.F=Am(this.hc,this.l,this)),Rl(rn(this,"Sending request")),this.u=!0,this.b.send(a),this.u=!1}catch(f){Rl(rn(this,"Send error: "+f.message)),sn(this,f)}};
function vn(a){return K&&kd(9)&&ea(a.timeout)&&p(a.ontimeout)}
function tn(a){return"content-type"==a.toLowerCase()}
g.hc=function(){"undefined"!=typeof aa&&this.b&&(this.o="Timed out after "+this.l+"ms, aborting",this.j=8,rn(this,this.o),vm(this,"timeout"),dn(this,8))};
function sn(a,b){a.f=!1;a.b&&(a.i=!0,a.b.abort(),a.i=!1);a.o=b;a.j=5;wn(a);xn(a)}
function wn(a){a.X||(a.X=!0,vm(a,"complete"),vm(a,"error"))}
function dn(a,b){a.b&&a.f&&(rn(a,"Aborting"),a.f=!1,a.i=!0,a.b.abort(),a.i=!1,a.j=b||7,vm(a,"complete"),vm(a,"abort"),xn(a))}
g.A=function(){this.b&&(this.f&&(this.f=!1,this.i=!0,this.b.abort(),this.i=!1),xn(this,!0));on.B.A.call(this)};
g.oc=function(){this.isDisposed()||(this.ba||this.u||this.i?yn(this):this.Hd())};
g.Hd=function(){yn(this)};
function yn(a){if(a.f&&"undefined"!=typeof aa)if(a.K[1]&&4==Tm(a)&&2==a.getStatus())rn(a,"Local request error detected and ignored");else if(a.u&&4==Tm(a))Am(a.oc,0,a);else if(vm(a,"readystatechange"),4==Tm(a)){rn(a,"Request complete");a.f=!1;try{var b=a.getStatus(),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.D).match(wd)[1]||null;if(!f&&l.self&&l.self.location)var h=l.self.location.protocol,
f=h.substr(0,h.length-1);e=!pn.test(f?f.toLowerCase():"")}d=e}if(d)vm(a,"complete"),vm(a,"success");else{a.j=6;var k;try{k=2<Tm(a)?a.b.statusText:""}catch(m){k=""}a.o=k+" ["+a.getStatus()+"]";wn(a)}}finally{xn(a)}}}
function xn(a,b){if(a.b){un(a);var c=a.b,d=a.K[0]?t:null;a.b=null;a.K=null;b||vm(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function un(a){a.b&&a.H&&(a.b.ontimeout=null);ea(a.F)&&(l.clearTimeout(a.F),a.F=null)}
g.isActive=function(){return!!this.b};
function Tm(a){return a.b?a.b.readyState:0}
g.getStatus=function(){try{return 2<Tm(this)?this.b.status:-1}catch(a){return-1}};
function Um(a){try{return a.b?a.b.responseText:""}catch(b){return""}}
function rn(a,b){return b+" ["+a.ka+" "+a.D+" "+a.getStatus()+"]"}
;function zn(a,b,c){this.l=a||null;this.b=1;this.f=[];this.i=[];this.j=new xm(null,!0);this.u=b||null;this.D=null!=c?c:null}
function An(a,b){this.b=a;this.map=b;this.context=null}
g=zn.prototype;g.Sa=null;g.S=null;g.G=null;g.Gb=null;g.fb=null;g.Zb=null;g.gb=null;g.Wa=0;g.sd=0;g.M=null;g.ta=null;g.oa=null;g.ya=null;g.sa=null;g.sb=null;g.Ja=-1;g.jc=-1;g.da=-1;g.Ta=0;g.Ia=0;g.xa=8;var Bn=new um;function Cn(a){Ul.call(this,"statevent",a)}
y(Cn,Ul);function Dn(a,b){Ul.call(this,"timingevent",a);this.size=b}
y(Dn,Ul);function En(a){Ul.call(this,"serverreachability",a)}
y(En,Ul);g=zn.prototype;g.connect=function(a,b,c,d,e){X();this.Gb=b;this.Sa=c||{};d&&p(e)&&(this.Sa.OSID=d,this.Sa.OAID=e);this.sa=new hn(this);this.sa.Hb=null;this.sa.f=this.j;this.sa.connect(a)};
function Fn(a){Gn(a);if(3==a.b){var b=a.Wa++,c=a.fb.clone();N(c,"SID",a.g);N(c,"RID",b);N(c,"TYPE","terminate");Hn(a,c);b=new Mm(a,0,a.g,b,void 0);b.Oa=2;b.ra=Ug(c.clone());(new Image).src=b.ra;b.Ya=x();Sm(b)}In(a)}
function Gn(a){if(a.sa){var b=a.sa;b.W&&(b.W.cancel(),b.W=null);b.pa=-1;a.sa=null}a.G&&(a.G.cancel(),a.G=null);a.oa&&(l.clearTimeout(a.oa),a.oa=null);Jn(a);a.S&&(a.S.cancel(),a.S=null);a.ta&&(l.clearTimeout(a.ta),a.ta=null)}
function Kn(a,b){if(0==a.b)throw Error("Invalid operation: sending map when state is closed");a.f.push(new An(a.sd++,b));2!=a.b&&3!=a.b||Ln(a)}
g.ic=function(){return 0==this.b};
function Ln(a){a.S||a.ta||(a.ta=bn(w(a.uc,a),0),a.Ta=0)}
g.uc=function(a){this.ta=null;Mn(this,a)};
function Mn(a,b){if(1==a.b){if(!b){a.Wa=Math.floor(1E5*Math.random());var c=a.Wa++,d=new Mm(a,0,"",c,void 0);d.Aa=null;var e=Nn(a),f=a.fb.clone();N(f,"RID",c);a.l&&N(f,"CVER",a.l);Hn(a,f);Pm(d,f,e);a.S=d;a.b=2}}else 3==a.b&&(b?On(a,b):0!=a.f.length&&(a.S||On(a)))}
function On(a,b){var c,d;b?6<a.xa?(a.f=a.i.concat(a.f),a.i.length=0,c=a.Wa-1,d=Nn(a)):(c=b.u,d=b.Ea):(c=a.Wa++,d=Nn(a));var e=a.fb.clone();N(e,"SID",a.g);N(e,"RID",c);N(e,"AID",a.Ja);Hn(a,e);c=new Mm(a,0,a.g,c,a.Ta+1);c.Aa=null;c.setTimeout(Math.round(1E4)+Math.round(1E4*Math.random()));a.S=c;Pm(c,e,d)}
function Hn(a,b){if(a.M){var c=a.M.fc(a);c&&Ya(c,function(a,c){N(b,c,a)})}}
function Nn(a){var b=Math.min(a.f.length,1E3),c=["count="+b],d;6<a.xa&&0<b?(d=a.f[0].b,c.push("ofs="+d)):d=0;for(var e=0;e<b;e++){var f=a.f[e].b,h=a.f[e].map,f=6>=a.xa?e:f-d;try{Rc(h,function(a,b){c.push("req"+f+"_"+b+"="+encodeURIComponent(a))})}catch(k){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.i=a.i.concat(a.f.splice(0,b));
return c.join("&")}
function Pn(a){a.G||a.oa||(a.o=1,a.oa=bn(w(a.tc,a),0),a.Ia=0)}
function Qn(a){if(a.G||a.oa||3<=a.Ia)return!1;a.o++;a.oa=bn(w(a.tc,a),Rn(a,a.Ia));a.Ia++;return!0}
g.tc=function(){this.oa=null;this.G=new Mm(this,0,this.g,"rpc",this.o);this.G.Aa=null;this.G.Jb=0;var a=this.Zb.clone();N(a,"RID","rpc");N(a,"SID",this.g);N(a,"CI",this.sb?"0":"1");N(a,"AID",this.Ja);Hn(this,a);if(!K||ld(10))N(a,"TYPE","xmlhttp"),Rm(this.G,a,!0,this.gb,!1);else{N(a,"TYPE","html");var b=this.G,c=!!this.gb;b.Oa=3;b.ra=Ug(a.clone());an(b,c)}};
function nn(a,b,c){a.sb=c;a.da=b.pa;a.cd(1,0);a.fb=jn(a,null,a.Gb);Ln(a)}
g.pc=function(a,b){if(0!=this.b&&(this.G==a||this.S==a))if(this.da=a.Va,this.S==a&&3==this.b)if(7<this.xa){var c;try{c=this.j.parse(b)}catch(f){c=null}if(u(c)&&3==c.length)if(0==c[0])a:{if(!this.oa){if(this.G)if(this.G.Ya+3E3<this.S.Ya)Jn(this),this.G.cancel(),this.G=null;else break a;Qn(this);X()}}else this.jc=c[1],0<this.jc-this.Ja&&37500>c[2]&&this.sb&&0==this.Ia&&!this.ya&&(this.ya=bn(w(this.td,this),6E3));else mn(this,11)}else"y2f%"!=b&&mn(this,11);else if(this.G==a&&Jn(this),!/^[\s\xa0]*$/.test(b)){c=
this.j.parse(b);u(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ja=e[0];e=e[1];2==this.b?"c"==e[0]?(this.g=e[1],this.gb=e[2],e=e[3],null!=e?this.xa=e:this.xa=6,this.b=3,this.M&&this.M.dc(this),this.Zb=jn(this,this.Za()?this.gb:null,this.Gb),Pn(this)):"stop"==e[0]&&mn(this,7):3==this.b&&("stop"==e[0]?mn(this,7):"noop"!=e[0]&&this.M&&this.M.cc(this,e),this.Ia=0)}}};
g.td=function(){null!=this.ya&&(this.ya=null,this.G.cancel(),this.G=null,Qn(this),X())};
function Jn(a){null!=a.ya&&(l.clearTimeout(a.ya),a.ya=null)}
g.kb=function(a){var b;if(this.G==a)Jn(this),this.G=null,b=2;else if(this.S==a)this.S=null,b=1;else return;this.da=a.Va;if(0!=this.b)if(a.fa)1==b?(x(),vm(Bn,new Dn(Bn,a.Ea?a.Ea.length:0)),Ln(this),this.i.length=0):Pn(this);else{var c=a.Ba,d;if(!(d=3==c||7==c||0==c&&0<this.da)){if(d=1==b)this.S||this.ta||1==this.b||2<=this.Ta?d=!1:(this.ta=bn(w(this.uc,this,a),Rn(this,this.Ta)),this.Ta++,d=!0);d=!(d||2==b&&Qn(this))}if(d)switch(c){case 1:mn(this,5);break;case 4:mn(this,10);break;case 3:mn(this,6);
break;case 7:mn(this,12);break;default:mn(this,2)}}};
function Rn(a,b){var c=5E3+Math.floor(1E4*Math.random());a.isActive()||(c*=2);return c*b}
g.cd=function(a){if(!A(arguments,this.b))throw Error("Unexpected channel state: "+this.b);};
function mn(a,b){if(2==b||9==b){var c=null;a.M&&(c=null);var d=w(a.me,a);c||(c=new Eg("//www.google.com/images/cleardot.gif"),Ug(c));fn(c.toString(),1E4,d)}else X();Sn(a,b)}
g.me=function(a){a?X():(X(),Sn(this,8))};
function Sn(a,b){a.b=0;a.M&&a.M.bc(a,b);In(a);Gn(a)}
function In(a){a.b=0;a.da=-1;if(a.M)if(0==a.i.length&&0==a.f.length)a.M.Ab(a);else{var b=Ta(a.i),c=Ta(a.f);a.i.length=0;a.f.length=0;a.M.Ab(a,b,c)}}
function jn(a,b,c){var d=Vg(c);if(""!=d.f)b&&Gg(d,b+"."+d.f),Hg(d,d.l);else var e=window.location,d=Wg(e.protocol,b?b+"."+e.hostname:e.hostname,e.port,c);a.Sa&&Ya(a.Sa,function(a,b){N(d,b,a)});
N(d,"VER",a.xa);Hn(a,d);return d}
g.Cb=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new on;a.ia=!1;return a};
g.isActive=function(){return!!this.M&&this.M.isActive(this)};
function bn(a,b){if(!fa(a))throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},b)}
g.ea=function(){vm(Bn,new En(Bn))};
function X(){vm(Bn,new Cn(Bn))}
g.Za=function(){return!(!K||ld(10))};
function Tn(){}
g=Tn.prototype;g.dc=function(){};
g.cc=function(){};
g.bc=function(){};
g.Ab=function(){};
g.fc=function(){return{}};
g.isActive=function(){return!0};function Un(a,b){ym.call(this);this.o=0;if(fa(a))b&&(a=w(a,b));else if(a&&fa(a.handleEvent))a=w(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a;jm(this,"tick",w(this.l,this));Vn(this)}
y(Un,ym);Un.prototype.l=function(){if(500<this.b){var a=this.b;24E4>2*a&&(a*=2);zm(this,a)}this.u()};
Un.prototype.start=function(){Un.B.start.call(this);this.o=x()+this.b};
Un.prototype.stop=function(){this.o=0;Un.B.stop.call(this)};
function Vn(a){a.stop();zm(a,5E3+2E4*Math.random())}
;function Wn(a,b){this.F=a;this.o=b;this.g=new F;this.f=new Un(this.re,this);this.b=null;this.T=!1;this.j=null;this.D="";this.u=this.i=0;this.l=[]}
y(Wn,Tn);g=Wn.prototype;g.subscribe=function(a,b,c){return this.g.subscribe(a,b,c)};
g.unsubscribe=function(a,b,c){return this.g.unsubscribe(a,b,c)};
g.ha=function(a){return this.g.ha(a)};
g.w=function(a,b){return this.g.w.apply(this.g,arguments)};
g.dispose=function(){this.T||(this.T=!0,this.g.clear(),Xn(this),E(this.g))};
g.isDisposed=function(){return this.T};
function Yn(a){return{firstTestResults:[""],secondTestResults:!a.b.sb,sessionId:a.b.g,arrayId:a.b.Ja}}
g.connect=function(a,b,c){if(!this.b||2!=this.b.b){this.D="";this.f.stop();this.j=a||null;this.i=b||0;a=this.F+"/test";b=this.F+"/bind";var d=new zn("1",c?c.firstTestResults:null,c?c.secondTestResults:null),e=this.b;e&&(e.M=null);d.M=this;this.b=d;e?this.b.connect(a,b,this.o,e.g,e.Ja):c?this.b.connect(a,b,this.o,c.sessionId,c.arrayId):this.b.connect(a,b,this.o)}};
function Xn(a,b){a.u=b||0;a.f.stop();a.b&&(3==a.b.b&&Mn(a.b),Fn(a.b));a.u=0}
g.sendMessage=function(a,b){var c={_sc:a};b&&lb(c,b);this.f.enabled||2==(this.b?this.b.b:0)?this.l.push(c):Zn(this)&&Kn(this.b,c)};
g.dc=function(){Vn(this.f);this.j=null;this.i=0;if(this.l.length){var a=this.l;this.l=[];for(var b=0,c=a.length;b<c;++b)Kn(this.b,a[b])}this.w("handlerOpened")};
g.bc=function(a,b){var c=2==b&&401==this.b.da;if(4!=b&&!c){if(6==b||410==this.b.da)c=this.f,c.stop(),zm(c,500);this.f.start()}this.w("handlerError",b)};
g.Ab=function(a,b,c){if(!this.f.enabled)this.w("handlerClosed");else if(c)for(a=0,b=c.length;a<b;++a){var d=c[a].map;d&&this.l.push(d)}};
g.fc=function(){var a={v:2};this.D&&(a.gsessionid=this.D);0!=this.i&&(a.ui=""+this.i);0!=this.u&&(a.ui=""+this.u);this.j&&lb(a,this.j);return a};
g.cc=function(a,b){"S"==b[0]?this.D=b[1]:"gracefulReconnect"==b[0]?(Vn(this.f),this.f.start(),Fn(this.b)):this.w("handlerMessage",new Sl(b[0],b[1]))};
function Zn(a){return!!a.b&&3==a.b.b}
function $n(a,b){(a.o.loungeIdToken=b)||a.f.stop()}
g.re=function(){this.f.stop();var a=this.b,b=0;a.G&&b++;a.S&&b++;0!=b?this.f.start():this.connect(this.j,this.i)};function ao(a){this.index=-1;this.videoId=this.f="";this.volume=this.b=-1;this.o=!1;this.audioTrackId=null;this.j=this.g=0;this.i=null;this.reset(a)}
function bo(a){a.audioTrackId=null;a.i=null;a.b=-1;a.g=0;a.j=x()}
ao.prototype.reset=function(a){this.f="";this.index=-1;this.videoId="";bo(this);this.volume=-1;this.o=!1;a&&(this.index=a.index,this.f=a.listId,this.videoId=a.videoId,this.b=a.playerState,this.volume=a.volume,this.o=a.muted,this.audioTrackId=a.audioTrackId,this.i=a.trackData,this.g=a.playerTime,this.j=a.playerTimeAt)};
function co(a){switch(a.b){case 1:return(x()-a.j)/1E3+a.g;case -1E3:return 0}return a.g}
function eo(a){var b={};b.index=a.index;b.listId=a.f;b.videoId=a.videoId;b.playerState=a.b;b.volume=a.volume;b.muted=a.o;b.audioTrackId=a.audioTrackId;b.trackData=jb(a.i);b.playerTime=a.g;b.playerTimeAt=a.j;return b}
ao.prototype.clone=function(){return new ao(eo(this))};function Y(a,b,c){U.call(this);this.i=NaN;this.K=!1;this.D=this.u=this.F=this.H=NaN;this.L=[];this.g=this.C=this.b=null;this.qa=a;this.L.push(M(window,"beforeunload",w(this.jd,this)));this.f=[];this.C=new ao;this.ba=b.id;this.b=fo(this,c);this.b.subscribe("handlerOpened",this.xd,this);this.b.subscribe("handlerClosed",this.ud,this);this.b.subscribe("handlerError",this.vd,this);this.b.subscribe("handlerMessage",this.wd,this);$n(this.b,b.token);this.subscribe("remoteQueueChange",function(){var a=this.C.videoId;
Gk()&&S("yt-remote-session-video-id",a)},this)}
y(Y,U);g=Y.prototype;g.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.index,f=b.currentTime||0;5>=f&&(f=0);var h={videoId:d,currentTime:f};c&&(h.listId=c);p(e)&&(h.currentIndex=e);c&&(this.C.f=c);this.C.videoId=d;this.C.index=e||0;this.C.state=3;c=this.C;c.g=f;c.j=x();go("Connecting with setPlaylist and params: "+L(h));this.b.connect({method:"setPlaylist",params:L(h)},a,Kk())}else go("Connecting without params"),this.b.connect({},a,Kk());ho(this)};
g.dispose=function(){this.isDisposed()||(this.w("beforeDispose"),io(this,3));Y.B.dispose.call(this)};
g.A=function(){jo(this);ko(this);lo(this);I(this.u);this.u=NaN;I(this.D);this.D=NaN;this.g=null;Je(this.L);this.L.length=0;this.b.dispose();Y.B.A.call(this);this.f=this.C=this.b=null};
function go(a){ck("conn",a)}
g.jd=function(){this.j(2)};
function fo(a,b){return new Wn(ok(a.qa,"/bc",void 0,!1),b)}
function io(a,b){a.w("proxyStateChange",b)}
function ho(a){a.i=H(w(function(){go("Connecting timeout");this.j(1)},a),2E4)}
function jo(a){I(a.i);a.i=NaN}
function lo(a){I(a.H);a.H=NaN}
function mo(a){ko(a);a.F=H(w(function(){no(this,"getNowPlaying")},a),2E4)}
function ko(a){I(a.F);a.F=NaN}
g.xd=function(){go("Channel opened");this.K&&(this.K=!1,lo(this),this.H=H(w(function(){go("Timing out waiting for a screen.");this.j(1)},this),15E3));
Ok(Yn(this.b),this.ba)};
g.ud=function(){go("Channel closed");isNaN(this.i)?Pk(!0):Pk();this.dispose()};
g.vd=function(a){Pk();isNaN(this.l())?(go("Channel error: "+a+" without reconnection"),this.dispose()):(this.K=!0,go("Channel error: "+a+" with reconnection in "+this.l()+" ms"),io(this,2))};
function oo(a,b){b&&(jo(a),lo(a));b==(Zn(a.b)&&isNaN(a.i))?b&&(io(a,1),no(a,"getSubtitlesTrack")):b?(a.X()&&a.C.reset(),io(a,1),no(a,"getNowPlaying"),po(a)):a.j(1)}
function qo(a,b){var c=b.params.videoId;delete b.params.videoId;c==a.C.videoId&&(gb(b.params)?a.C.i=null:a.C.i=b.params,a.w("remotePlayerChange"))}
function ro(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);a.C.f=b.params.listId||a.C.f;var e=a.C,f=e.videoId;e.videoId=c;e.index=d;c!=f&&bo(e);a.w("remoteQueueChange")}
function so(a,b){b.params=b.params||{};ro(a,b);to(a,b)}
function to(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10),d=a.C;d.g=isNaN(c)?0:c;d.j=x();c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.C.b&&(c=-1E3);a.C.b=c;1==a.C.b?mo(a):ko(a);a.w("remotePlayerChange")}
function uo(a,b){var c="true"==b.params.muted;a.C.volume=parseInt(b.params.volume,10);a.C.o=c;a.w("remotePlayerChange")}
g.wd=function(a){a.params?go("Received: action="+a.action+", params="+L(a.params)):go("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=od(a.params.devices);this.f=Ka(a,function(a){return new Bk(a)});
a=!!Na(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
oo(this,a);break;case "loungeScreenConnected":oo(this,!0);break;case "loungeScreenDisconnected":Ra(this.f,function(a){return"LOUNGE_SCREEN"==a.type});
oo(this,!1);break;case "remoteConnected":var b=new Bk(od(a.params.device));Na(this.f,function(a){return a.equals(b)})||Pa(this.f,b);
break;case "remoteDisconnected":b=new Bk(od(a.params.device));Ra(this.f,function(a){return a.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":ro(this,a);break;case "nowPlaying":so(this,a);break;case "onStateChange":to(this,a);break;case "onVolumeChanged":uo(this,a);break;case "onSubtitlesTrackChanged":qo(this,a);break;default:go("Unrecognized action: "+a.action)}};
g.ce=function(){if(this.g){var a=this.g;this.g=null;this.C.videoId!=a&&no(this,"getNowPlaying")}};
Y.prototype.subscribe=Y.prototype.subscribe;Y.prototype.unsubscribeByKey=Y.prototype.ha;Y.prototype.ia=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.l())?Zn(this.b)&&isNaN(this.i)&&(a=1):a=2);return a};
Y.prototype.getProxyState=Y.prototype.ia;Y.prototype.j=function(a){go("Disconnecting with "+a);jo(this);this.w("beforeDisconnect",a);1==a&&Pk();Xn(this.b,a);this.dispose()};
Y.prototype.disconnect=Y.prototype.j;Y.prototype.ca=function(){var a=this.C;if(this.g){var b=a=this.C.clone(),c=this.g,d=a.index,e=b.videoId;b.videoId=c;b.index=d;c!=e&&bo(b)}return eo(a)};
Y.prototype.getPlayerContextData=Y.prototype.ca;Y.prototype.la=function(a){var b=new ao(a);b.videoId&&b.videoId!=this.C.videoId&&(this.g=b.videoId,I(this.u),this.u=H(w(this.ce,this),5E3));var c=[];this.C.f==b.f&&this.C.videoId==b.videoId&&this.C.index==b.index||c.push("remoteQueueChange");this.C.b==b.b&&this.C.volume==b.volume&&this.C.o==b.o&&co(this.C)==co(b)&&L(this.C.i)==L(b.i)||c.push("remotePlayerChange");this.C.reset(a);z(c,function(a){this.w(a)},this)};
Y.prototype.setPlayerContextData=Y.prototype.la;Y.prototype.X=function(){var a=this.b.o.id,b=Na(this.f,function(b){return"REMOTE_CONTROL"==b.type&&b.id!=a});
return b?b.id:""};
Y.prototype.getOtherConnectedRemoteId=Y.prototype.X;Y.prototype.l=function(){var a=this.b;return a.f.enabled?a.f.o-x():NaN};
Y.prototype.getReconnectTimeout=Y.prototype.l;Y.prototype.Ga=function(){if(!isNaN(this.l())){var a=this.b.f;a.enabled&&(a.stop(),a.start(),a.l())}};
Y.prototype.reconnect=Y.prototype.Ga;function po(a){I(a.D);a.D=H(w(a.j,a,1),864E5)}
function no(a,b,c){c?go("Sending: action="+b+", params="+L(c)):go("Sending: action="+b);a.b.sendMessage(b,c)}
Y.prototype.ka=function(a,b){no(this,a,b);po(this)};
Y.prototype.sendMessage=Y.prototype.ka;function vo(a){vk.call(this,"ScreenServiceProxy");this.P=a;this.b=[];this.b.push(this.P.$_s("screenChange",w(this.ve,this)));this.b.push(this.P.$_s("onlineScreenChange",w(this.Dd,this)))}
y(vo,vk);g=vo.prototype;g.U=function(a){return this.P.$_gs(a)};
g.contains=function(a){return!!this.P.$_c(a)};
g.get=function(a){return this.P.$_g(a)};
g.start=function(){this.P.$_st()};
g.ub=function(a,b,c){this.P.$_a(a,b,c)};
g.remove=function(a,b,c){this.P.$_r(a,b,c)};
g.rb=function(a,b,c,d){this.P.$_un(a,b,c,d)};
g.A=function(){for(var a=0,b=this.b.length;a<b;++a)this.P.$_ubk(this.b[a]);this.b.length=0;this.P=null;vo.B.A.call(this)};
g.ve=function(){this.w("screenChange")};
g.Dd=function(){this.w("onlineScreenChange")};
V.prototype.$_st=V.prototype.start;V.prototype.$_gspc=V.prototype.we;V.prototype.$_gsppc=V.prototype.Hc;V.prototype.$_c=V.prototype.contains;V.prototype.$_g=V.prototype.get;V.prototype.$_a=V.prototype.ub;V.prototype.$_un=V.prototype.rb;V.prototype.$_r=V.prototype.remove;V.prototype.$_gs=V.prototype.U;V.prototype.$_gos=V.prototype.Gc;V.prototype.$_s=V.prototype.subscribe;V.prototype.$_ubk=V.prototype.ha;function wo(){var a={device:"Desktop",app:"youtube-desktop"};zj&&yj();Dk();xo||(xo=new nk,Qk()&&(xo.b="/api/loungedev"));yo||(yo=r("yt.mdx.remote.deferredProxies_")||[],q("yt.mdx.remote.deferredProxies_",yo,void 0));zo();var b=Ao();if(!b){var c=new V(xo);q("yt.mdx.remote.screenService_",c,void 0);b=Ao();xl(c,function(a){a?Bo()&&Ql(Bo(),"YouTube TV"):c.subscribe("onlineScreenChange",function(){J("yt-remote-receiver-availability-change")})},!(!a||!a.loadCastApiSetupScript))}if(a&&!r("yt.mdx.remote.initialized_")){q("yt.mdx.remote.initialized_",
!0,void 0);
Co("Initializing: "+L(a));Do.push(lc("yt-remote-cast2-availability-change",function(){J("yt-remote-receiver-availability-change")}));
Do.push(lc("yt-remote-cast2-receiver-selected",function(){Eo(null);J("yt-remote-auto-connect","cast-selector-receiver")}));
Do.push(lc("yt-remote-cast2-session-change",Fo));Do.push(lc("yt-remote-connection-change",function(a){a?Ql(Bo(),"YouTube TV"):Go()||(Ql(null,null),Ml())}));
var d=Ho();a.isAuto&&(d.id+="#dial");d.name=a.device;d.app=a.app;Co(" -- with channel params: "+L(d));Io(d);b.start();Bo()||Jo()}}
function Ko(){nc(Do);Do.length=0;E(Lo);Lo=null;yo&&(z(yo,function(a){a(null)}),yo.length=0,yo=null,q("yt.mdx.remote.deferredProxies_",null,void 0));
xo=null}
function Mo(){if(Kl()){var a=[];if(T("yt-remote-cast-available")||r("yt.mdx.remote.cloudview.castButtonShown_")||No())a.push({key:"cast-selector-receiver",name:Oo()}),na("yt.mdx.remote.cloudview.castButtonShown_",!0);return a}return r("yt.mdx.remote.cloudview.initializing_")?[]:Po()}
function Po(){var a;a=Ao().P.$_gos();var b=Qo();b&&No()&&(tk(a,b)||a.push(b));return sk(a)}
function Ro(){if(Kl()){var a=Ll();return a?{key:"cast-selector-receiver",name:a}:null}return So()}
function So(){var a=Po(),b=Qo();b||(b=Go());return Na(a,function(a){return b&&gk(b,a.key)?!0:!1})}
function Oo(){if(Kl())return Ll();var a=Qo();return a?a.name:null}
function Qo(){var a=Bo();if(!a)return null;var b=Ao().U();return uk(b,a)}
function Fo(a){Co("remote.onCastSessionChange_: "+kk(a));if(a){var b=Qo();b&&b.id==a.id?Ql(b.id,"YouTube TV"):(b&&To(),Uo(a,1))}else To()}
function Vo(a,b){Co("Connecting to: "+L(a));if("cast-selector-receiver"==a.key)Eo(b||null),Pl(b||null);else{To();Eo(b||null);var c=Ao().U();(c=uk(c,a.key))?Uo(c,1):H(function(){Wo(null)},0)}}
function To(){Ol()?Gl().stopSession():Dl("stopSession called before API ready.");var a=No();a?a.disconnect(1):(oc("yt-remote-before-disconnect",1),oc("yt-remote-connection-change",!1));Wo(null)}
function Co(a){ck("remote",a)}
function Ao(){if(!Lo){var a=r("yt.mdx.remote.screenService_");Lo=a?new vo(a):null}return Lo}
function Bo(){return r("yt.mdx.remote.currentScreenId_")}
function Xo(a){q("yt.mdx.remote.currentScreenId_",a,void 0)}
function Eo(a){q("yt.mdx.remote.connectData_",a,void 0)}
function No(){return r("yt.mdx.remote.connection_")}
function Wo(a){var b=No();Eo(null);a?No():Xo("");q("yt.mdx.remote.connection_",a,void 0);yo&&(z(yo,function(b){b(a)}),yo.length=0);
b&&!a?oc("yt-remote-connection-change",!1):!b&&a&&J("yt-remote-connection-change",!0)}
function Go(){var a=Gk();if(!a)return null;var b=Ao().U();return uk(b,a)}
function Uo(a,b){Bo();Xo(a.id);var c=new Y(xo,a,Ho());c.connect(b,r("yt.mdx.remote.connectData_"));c.subscribe("beforeDisconnect",function(a){oc("yt-remote-before-disconnect",a)});
c.subscribe("beforeDispose",function(){No()&&(No(),Wo(null))});
Wo(c)}
function Jo(){var a=Go();a?(Co("Resume connection to: "+kk(a)),Uo(a,0)):(Pk(),Ml(),Co("Skipping connecting because no session screen found."))}
var xo=null,yo=null,Lo=null;function zo(){var a=Ho();if(gb(a)){var a=Fk(),b=T("yt-remote-session-name")||"",c=T("yt-remote-session-app")||"",a={device:"REMOTE_CONTROL",id:a,name:b,app:c,"mdx-version":3};q("yt.mdx.remote.channelParams_",a,void 0)}}
function Ho(){return r("yt.mdx.remote.channelParams_")||{}}
function Io(a){a?(S("yt-remote-session-app",a.app),S("yt-remote-session-name",a.name)):(Bj("yt-remote-session-app"),Bj("yt-remote-session-name"));q("yt.mdx.remote.channelParams_",a,void 0)}
var Do=[];var Yo=null,Zo=[];function $o(){ap();if(Ro()){var a=Yo;"html5"!=a.getPlayerType()&&a.loadNewVideoConfig(a.getCurrentVideoConfig(),"html5")}}
function bp(a){"cast-selector-receiver"==a?Nl():cp(a)}
function cp(a){var b=Mo();if(a=rk(b,a)){var c=Yo;Vo(a,{listId:c.getVideoData().list,videoId:c.getVideoData().video_id,currentTime:c.getCurrentTime()});"html5"!=c.getPlayerType()?c.loadNewVideoConfig(c.getCurrentVideoConfig(),"html5"):c.updateRemoteReceivers&&c.updateRemoteReceivers(b,a)}}
function ap(){var a=Yo;a&&a.updateRemoteReceivers&&a.updateRemoteReceivers(Mo(),Ro())}
;var dp=null,ep=[];function fp(a){return{externalChannelId:a.externalChannelId,rd:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function gp(a){hp(fp(a))}
function hp(a){Li()?(Q(yi,new si(a.externalChannelId,a.rd?{itemType:"U",itemId:a.externalChannelId}:null)),(a="/gen_204?"+Dd({event:"subscribe",source:a.source}))&&gh(a)):ip(a)}
function ip(a){Ki(function(b){b.subscription_ajax&&hp(a)},null)}
function jp(a){a=fp(a);Q(Di,new ui(a.externalChannelId,a.subscriptionId,null));(a="/gen_204?"+Dd({event:"unsubscribe",source:a.source}))&&gh(a)}
function kp(a){dp&&dp.channelSubscribed(a.b,a.subscriptionId)}
function lp(a){dp&&dp.channelUnsubscribed(a.b)}
;function mp(a){D.call(this);this.f=a;this.f.subscribe("command",this.yc,this);this.g={};this.i=!1}
y(mp,D);g=mp.prototype;g.start=function(){this.i||this.isDisposed()||(this.i=!0,np(this.f,"RECEIVING"))};
g.yc=function(a,b){if(this.i&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.g))){var d=w(this.ee,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&op(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=pp(a,b||{}),c=this.b[a].apply(this.b,c),(c=qp(a,c))&&this.i&&!this.isDisposed()&&np(this.f,a,c))}}};
g.ee=function(a,b){this.i&&!this.isDisposed()&&np(this.f,a,this.Db(a,b))};
g.Db=function(a,b){if(null!=b)return{value:b}};
function op(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
g.A=function(){this.f.unsubscribe("command",this.yc,this);this.f=null;for(var a in this.g)op(this,a);mp.B.A.call(this)};function rp(a,b){mp.call(this,b);this.b=a;this.start()}
y(rp,mp);rp.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
rp.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function pp(a,b){switch(a){case "loadVideoById":return b=Gj(b),Ij(b),[b];case "cueVideoById":return b=Gj(b),Ij(b),[b];case "loadVideoByPlayerVars":return Ij(b),[b];case "cueVideoByPlayerVars":return Ij(b),[b];case "loadPlaylist":return b=Hj(b),Ij(b),[b];case "cuePlaylist":return b=Hj(b),Ij(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function qp(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
rp.prototype.Db=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return rp.B.Db.call(this,a,b)};
rp.prototype.A=function(){rp.B.A.call(this);delete this.b};function sp(){var a=this.f=new jj,b=w(this.ae,this);a.f=b;a.g=null;this.f.channel="widget";if(a=G("WIDGET_ID"))this.f.i=a;this.i=[];this.o=!1;this.j={}}
g=sp.prototype;g.ae=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,tp(this,c)),this.j[c]=!0)}else this.Kc(a,b)};
g.Kc=function(){};
function tp(a,b){return w(function(a){this.sendMessage(b,a)},a)}
g.addEventListener=function(){};
g.ed=function(){this.o=!0;this.sendMessage("initialDelivery",this.Eb());this.sendMessage("onReady");z(this.i,this.Lc,this);this.i=[]};
g.Eb=function(){return null};
function up(a,b){a.sendMessage("infoDelivery",b)}
g.Lc=function(a){this.o?this.f.sendMessage(a):this.i.push(a)};
g.sendMessage=function(a,b){this.Lc({event:a,info:void 0==b?null:b})};
g.dispose=function(){this.f=null};function vp(a){sp.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Id,this));this.addEventListener("onVideoProgress",w(this.ie,this));this.addEventListener("onVolumeChange",w(this.je,this));this.addEventListener("onApiChange",w(this.de,this));this.addEventListener("onPlaybackQualityChange",w(this.fe,this));this.addEventListener("onPlaybackRateChange",w(this.ge,this));this.addEventListener("onStateChange",w(this.he,this))}
y(vp,sp);g=vp.prototype;g.Kc=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Ej(a)){var c;c=b;if(ga(c[0])&&!u(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Gj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Fj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Hj.apply(window,c)}c=d}Ij(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Ej(a)&&up(this,this.Eb())}};
g.Id=function(){var a=w(this.ed,this);this.f.b=a};
g.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
g.Eb=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var k=this.b[e]();b[f]=k}catch(m){}}}b.videoData=this.b.getVideoData();return b};
g.he=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());
this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());up(this,a)};
g.fe=function(a){up(this,{playbackQuality:a})};
g.ge=function(a){up(this,{playbackRate:a})};
g.de=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var h=0,k=f.length;h<k;h++){var m=f[h],n=this.b.getOption(e,m);b[e][m]=n}}this.sendMessage("apiInfoDelivery",b)};
g.je=function(){up(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
g.ie=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());up(this,a)};
g.dispose=function(){vp.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function wp(a,b,c){U.call(this);this.b=a;this.f=b;this.g=c}
y(wp,U);function np(a,b,c){if(!a.isDisposed()){var d=a.b,e=a.f;a=a.g;d.isDisposed()||e!=d.b||(b={id:a,command:b},c&&(b.data=c),d.b.postMessage(L(b),d.g))}}
wp.prototype.A=function(){this.f=this.b=null;wp.B.A.call(this)};function xp(a,b,c){D.call(this);this.b=a;this.g=c;this.i=M(window,"message",w(this.j,this));this.f=new wp(this,a,b);Vb(this,ma(E,this.f))}
y(xp,D);xp.prototype.j=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,v(c))){try{c=od(c)}catch(d){return}c.command&&(a=this.f,b=c.command,c=c.data,a.isDisposed()||a.w("command",b,c))}};
xp.prototype.A=function(){Je(this.i);this.b=null;xp.B.A.call(this)};var yp=!1;function zp(a){if(a=a.match(/[\d]+/g))a.length=3}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(yp=!0,a.description)){zp(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){yp=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],yp=!(!a||!a.enabledPlugin))){zp(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");yp=!0;zp(b.GetVariable("$version"));return}catch(c){}try{b=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");yp=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),yp=!0,zp(b.GetVariable("$version"))}catch(c){}})();function Ap(a){return(a=a.exec(mb))?a[1]:""}
(function(){if(mf)return Ap(/Firefox\/([0-9.]+)/);if(K||Zc||Yc)return id;if(qf)return Ap(/Chrome\/([0-9.]+)/);if(rf&&!(Xc()||B("iPad")||B("iPod")))return Ap(/Version\/([0-9.]+)/);if(nf||of){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(mb);if(a)return a[1]+"."+a[2]}else if(pf)return(a=Ap(/Android\s+([0-9.]+)/))?a:Ap(/Version\/([0-9.]+)/);return""})();function Bp(){var a={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0};return new ag(function(b,c){a.$=function(a){Kd(a)?b(a):c(a)};
a.onError=c;a.Da=c;Pd("//googleads.g.doubleclick.net/pagead/id",a)})}
;var Cp=null;function Dp(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return Ep(""),"";a=JSON.parse(a.substr(4)).id;Ep(a);return a}
function Fp(){H(function(){Cp=null},3E5)}
function Ep(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Gp(){}
;function Hp(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&gh(c)}}
;function Ip(a){O.call(this,1,arguments);this.zb=a}
y(Ip,O);function Jp(a,b){O.call(this,2,arguments);this.f=a;this.b=b}
y(Jp,O);function Kp(a,b,c,d){O.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(Kp,O);function Lp(a,b){O.call(this,1,arguments);this.f=a;this.b=b||null}
y(Lp,O);function Mp(a){O.call(this,1,arguments)}
y(Mp,O);var Np=new P("ypc-core-load",Ip),Op=new P("ypc-guide-sync-success",Jp),Pp=new P("ypc-purchase-success",Kp),Qp=new P("ypc-subscription-cancel",Mp),Rp=new P("ypc-subscription-cancel-success",Lp),Sp=new P("ypc-init-subscription",Mp);var Tp=!1,Up=[],Vp=[];function Wp(a){a.b?Tp?Q(Ci,a):Q(Np,new Ip(function(){Q(Sp,new Mp(a.b))})):Xp(a.f,a.i,a.g,a.source)}
function Yp(a){a.b?Tp?Q(Hi,a):Q(Np,new Ip(function(){Q(Qp,new Mp(a.b))})):Zp(a.f,a.subscriptionId,a.i,a.g,a.source)}
function $p(a){aq(Ta(a.b))}
function bq(a){cq(Ta(a.b))}
function dq(a){eq(a.b,a.isEnabled,null)}
function fq(a,b,c,d){eq(a,b,c,d)}
function gq(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&Q(Bi,new ti(b,c,a.b.channelInfo))}
function hq(a){var b=a.b;Ya(a.f,function(a,d){Q(Bi,new ti(d,a,b[d]))})}
function iq(a){Q(Gi,new qi(a.f.itemId));a.b&&a.b.length&&(jq(a.b,Gi),jq(a.b,Ii))}
function Xp(a,b,c,d){var e=new qi(a);Q(zi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=G("PLAYBACK_ID"))&&(c.plid=d);(d=G("EVENT_ID"))&&(c.ei=d);b&&kq(b,c);Pd("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Rb:f,R:c,$:function(b,c){var d=c.response;Q(Bi,new ti(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&J("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Hp(d.actions)},
Nb:function(){Q(Ai,e)}})}
function Zp(a,b,c,d,e){var f=new qi(a);Q(Ei,f);var h={};d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=G("PLAYBACK_ID"))&&(d.plid=a);(a=G("EVENT_ID"))&&(d.ei=a);c&&kq(c,d);Pd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Rb:h,R:d,$:function(a,b){var c=b.response;Q(Gi,f);c.actions&&Hp(c.actions)},
Nb:function(){Q(Fi,f)}})}
function eq(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Pd("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",R:e,onError:function(){d&&d()}})}}
function aq(a){if(a.length){var b=Va(a,0,40);Q("subscription-batch-subscribe-loading");jq(b,zi);var c={};c.a=b.join(",");var d=function(){Q("subscription-batch-subscribe-loaded");jq(b,Ai)};
Pd("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",R:c,$:function(c,f){d();var h=f.response,k=h.id;if(u(k)&&k.length==b.length){var m=h.channel_info_map;z(k,function(a,c){var d=b[c];Q(Bi,new ti(d,a,m[d]))});
a.length?aq(a):Q("subscription-batch-subscribe-finished")}},
onError:function(){d();Q("subscription-batch-subscribe-failure")}})}}
function cq(a){if(a.length){var b=Va(a,0,40);Q("subscription-batch-unsubscribe-loading");jq(b,Ei);var c={};c.c=b.join(",");var d=function(){Q("subscription-batch-unsubscribe-loaded");jq(b,Fi)};
Pd("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",R:c,$:function(){d();jq(b,Gi);a.length&&cq(a)},
onError:function(){d()}})}}
function jq(a,b){z(a,function(a){Q(b,new qi(a))})}
function kq(a,b){var c=Gd(a),d;for(d in c)b[d]=c[d]}
;var lq,mq=null,nq=null,oq=null,pq=!1;
function qq(){var a=G("PLAYER_CONFIG",void 0),b=G("REVERSE_MOBIUS_PERCENT",void 0);if("1"!=a.privembed&&Uf&&100*Math.random()<b||$f("enable_server_side_ad_request_for_embeds"))try{var c;try{var d=r("yt.www.ads.biscotti.getId_"),e;if(d)e=d();else{if(!Cp){var f=Bp().then(Dp),h=eg(Fp,Fp,void 0);h.g=!0;lg(f,h);Cp=f}e=Cp}c=e}catch(k){c=fg(k)}gg(c,null,Gp,void 0)}catch(k){cc(k)}if(G("REQUEST_POST_MESSAGE_ORIGIN")){if(!lq){lq=new jj;lq.b=qq;return}lq.origin&&"*"!=lq.origin&&(a.args.post_message_origin=lq.origin)}d=
document.referrer;b=G("POST_MESSAGE_ORIGIN");c=!1;$f("legacy_cast2")&&v(d)&&v(b)&&-1<d.indexOf(b)&&dh(b)&&dh(d)&&(c=!0);window!=window.top&&d&&d!=document.URL&&(a.args.loaderUrl=d);G("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Ij(a.args);mq=di("player",a);d=G("POST_MESSAGE_ID","player");G("ENABLE_JS_API")?oq=new vp(mq):G("ENABLE_POST_API")&&v(d)&&v(b)&&(nq=new xp(window.parent,d,b),oq=new rp(mq,nq.f));$f("legacy_cast2")&&((pq=c&&!G("ENABLE_CAST_API"))?a.args.disableCast="1":(a=
mq,wo(),Yo=a,Yo.addEventListener("onReady",$o),Yo.addEventListener("onRemoteReceiverSelected",bp),Zo.push(lc("yt-remote-receiver-availability-change",ap)),Zo.push(lc("yt-remote-auto-connect",cp))));G("BG_P")&&(G("BG_I")||G("BG_IU"))&&Ac();Zd();dp=mq;dp.addEventListener("SUBSCRIBE",gp);dp.addEventListener("UNSUBSCRIBE",jp);ep.push(oh(Bi,kp),oh(Gi,lp))}
;q("yt.setConfig",$b,void 0);q("yt.setMsg",function(a){ac(Zb,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||G("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),version:d||G("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e;if(a&&e&&!(5<=Vd)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var h,k,m=!1;try{h=a.lineNumber||a.Re||"Not available"}catch(ua){h="Not available",m=!0}try{k=a.fileName||a.filename||a.sourceURL||
l.$googDebugFname||f}catch(ua){k="Not available",m=!0}a=!m&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(Ud[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={Rb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},R:{url:G("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.R.stack=e);for(var n in c)b.R["client."+n]=c[n];if(n=G("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var Z in n)b.R[Z]=n[Z];Pd("/error_204",b);Ud[a.message]=!0;Vd++}}},void 0);
q("writeEmbed",qq,void 0);q("yt.www.watch.ads.restrictioncookie.spr",function(a){(a+="mac_204?action_fcts=1")&&gh(a);return!0},void 0);
var rq=bc(function(){zh("ol");Tp=!0;Vp.push(oh(yi,Wp),oh(Di,Yp));Tp||(Vp.push(oh(Ci,Wp),oh(Hi,Yp),oh(vi,$p),oh(wi,bq),oh(xi,dq)),Up.push(lc("subscription-prefs",fq)),Vp.push(oh(Pp,gq),oh(Rp,iq),oh(Op,hq)));sf.getInstance();var a=1<window.devicePixelRatio;if(xf(0,119)!=a){var b="f"+(Math.floor(119/31)+1),c=wf(b)||0,c=a?c|67108864:c&-67108865;0==c?delete tf[b]:(a=c.toString(16),tf[b]=a.toString());var b=[],d;for(d in tf)b.push(d+"="+escape(tf[d]));Se("PREF",b.join("&"),63072E3)}}),sq=bc(function(){var a=
mq;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();G("PL_ATT")&&(zc=null);for(var a=0,b=Xd.length;a<b;a++){var c=Xd[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):I(c)}}Xd.length=0;a=vc("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))qc(a),b.parentNode.removeChild(b);Yd=!1;$b("DCLKSTAT",0);nc(Up);Up.length=0;ph(Vp);Vp.length=0;Tp=!1;dp&&(dp.removeEventListener("SUBSCRIBE",hp),dp.removeEventListener("UNSUBSCRIBE",jp));dp=null;ph(ep);ep.length=0;
$f("legacy_cast2")&&!pq&&(nc(Zo),Zo.length=0,Yo&&(Yo.removeEventListener("onRemoteReceiverSelected",bp),Yo.removeEventListener("onReady",$o),Yo=null),Ko());Wb(oq,nq);mq&&mq.destroy()});
window.addEventListener?(window.addEventListener("load",rq),window.addEventListener("unload",sq)):window.attachEvent&&(window.attachEvent("onload",rq),window.attachEvent("onunload",sq));var tq=dj.getInstance(),uq=R(tq);uq in ij||(tq.register(),tq.mb.push(lc("yt-uix-init-"+uq,tq.init,tq)),tq.mb.push(lc("yt-uix-dispose-"+uq,tq.dispose,tq)),ij[uq]=tq);})();
