!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},c=e.matchMedia&&matchMedia("(orientation: landscape)"),a=function(){i(),c&&c.addListener&&c.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?a():document.addEventListener("DOMContentLoaded",a),i}())}(window),function(e,t,n){"use strict";function r(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function s(t,n){var r=new e.Image;return r.onerror=function(){z[t]=!1,ee()},r.onload=function(){z[t]=1===r.width,ee()},r.src=n,"pending"}function i(){B=!1,F=e.devicePixelRatio,W={},Q={},A.DPR=F||1,G.width=Math.max(e.innerWidth||0,b.clientWidth),G.height=Math.max(e.innerHeight||0,b.clientHeight),G.vw=G.width/100,G.vh=G.height/100,v=[G.height,G.width,F].join("-"),G.em=A.getEmValue(),G.rem=G.em}function c(e,t,n,r){var s,i,c,a;return"saveData"===T.algorithm?e>2.7?a=n+1:(i=t-n,s=Math.pow(e-.6,1.5),c=i*s,r&&(c+=.1*s),a=e+c):a=n>1?Math.sqrt(e*t):e,a>n}function a(e){var t,n=A.getSet(e),r=!1;"pending"!==n&&(r=v,n&&(t=A.setRes(n),A.applySetCandidate(t,e))),e[A.ns].evaled=r}function u(e,t){return e.res-t.res}function o(e,t,n){var r;return!n&&t&&(n=e[A.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=A.makeUrl(t),e[A.ns].curSrc=t,e[A.ns].curCan=r,r.res||Z(r,r.set.sizes)),r}function l(e,t){var n,r,s;if(e&&t)for(s=A.parseSet(t),e=A.makeUrl(e),n=0;n<s.length;n++)if(e===A.makeUrl(s[n].url)){r=s[n];break}return r}function f(e,t){var n,r,s,i,c=e.getElementsByTagName("source");for(n=0,r=c.length;r>n;n++)s=c[n],s[A.ns]=!0,i=s.getAttribute("srcset"),i&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function d(e,t){function n(t){var n,r=t.exec(e.substring(d));return r?(n=r[0],d+=n.length,n):void 0}function s(){var e,n,r,s,i,u,o,l,f,d=!1,m={};for(s=0;s<a.length;s++)i=a[s],u=i[i.length-1],o=i.substring(0,i.length-1),l=parseInt(o,10),f=parseFloat(o),V.test(o)&&"w"===u?((e||n)&&(d=!0),0===l?d=!0:e=l):J.test(o)&&"x"===u?((e||n||r)&&(d=!0),0>f?d=!0:n=f):V.test(o)&&"h"===u?((r||n)&&(d=!0),0===l?d=!0:r=l):d=!0;d||(m.url=c,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function i(){for(n(O),u="",o="in descriptor";;){if(l=e.charAt(d),"in descriptor"===o)if(r(l))u&&(a.push(u),u="",o="after descriptor");else{if(","===l)return d+=1,u&&a.push(u),void s();if("("===l)u+=l,o="in parens";else{if(""===l)return u&&a.push(u),void s();u+=l}}else if("in parens"===o)if(")"===l)u+=l,o="in descriptor";else{if(""===l)return a.push(u),void s();u+=l}else if("after descriptor"===o)if(r(l));else{if(""===l)return void s();o="in descriptor",d-=1}d+=1}}for(var c,a,u,o,l,f=e.length,d=0,p=[];;){if(n(j),d>=f)return p;c=n(q),a=[],","===c.slice(-1)?(c=c.replace(_,""),s()):i()}}function p(e){function t(e){function t(){i&&(c.push(i),i="")}function n(){c[0]&&(a.push(c),c=[])}for(var s,i="",c=[],a=[],u=0,o=0,l=!1;;){if(s=e.charAt(o),""===s)return t(),n(),a;if(l){if("*"===s&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(r(s)){if(e.charAt(o-1)&&r(e.charAt(o-1))||!i){o+=1;continue}if(0===u){t(),o+=1;continue}s=" "}else if("("===s)u+=1;else if(")"===s)u-=1;else{if(","===s){t(),n(),o+=1;continue}if("/"===s&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}i+=s,o+=1}}}function n(e){return l.test(e)&&parseFloat(e)>=0?!0:f.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var s,i,c,a,u,o,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(i=t(e),c=i.length,s=0;c>s;s++)if(a=i[s],u=a[a.length-1],n(u)){if(o=u,a.pop(),0===a.length)return o;if(a=a.join(" "),A.matchesMedia(a))return o}return"100vw"}t.createElement("picture");var m,h,g,v,A={},w=function(){},x=t.createElement("img"),S=x.getAttribute,y=x.setAttribute,E=x.removeAttribute,b=t.documentElement,z={},T={algorithm:""},C="data-pfsrc",L=C+"set",R=navigator.userAgent,M=/rident/.test(R)||/ecko/.test(R)&&R.match(/rv\:(\d+)/)&&RegExp.$1>35,$="currentSrc",I=/\s+\+?\d+(e\d+)?w/,P=/(\([^)]+\))?\s*(.+)/,k=e.picturefillCFG,D="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",U="font-size:100%!important;",B=!0,W={},Q={},F=e.devicePixelRatio,G={px:1,"in":96},H=t.createElement("a"),N=!1,O=/^[ \t\n\r\u000c]+/,j=/^[, \t\n\r\u000c]+/,q=/^[^ \t\n\r\u000c]+/,_=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in W))if(W[t]=!1,r&&(s=t.match(e)))W[t]=s[1]*G[s[2]];else try{W[t]=new Function("e",n(t))(G)}catch(i){}return W[t]}}(),Z=function(e,t){return e.w?(e.cWidth=A.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){var n,r,s,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),n=i.elements||A.qsa(i.context||t,i.reevaluate||i.reselect?A.sel:A.selShort),s=n.length){for(A.setupRun(i),N=!0,r=0;s>r;r++)A.fillImg(n[r],i);A.teardownRun(i)}};m=e.console&&console.warn?function(e){console.warn(e)}:w,$ in x||($="src"),z["image/jpeg"]=!0,z["image/gif"]=!0,z["image/png"]=!0,z["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),A.ns=("pf"+(new Date).getTime()).substr(0,9),A.supSrcset="srcset"in x,A.supSizes="sizes"in x,A.supPicture=!!e.HTMLPictureElement,A.supSrcset&&A.supPicture&&!A.supSizes&&!function(e){x.srcset="data:,a",e.src="data:,a",A.supSrcset=x.complete===e.complete,A.supPicture=A.supSrcset&&A.supPicture}(t.createElement("img")),A.selShort="picture>img,img[srcset]",A.sel=A.selShort,A.cfg=T,A.supSrcset&&(A.sel+=",img["+L+"]"),A.DPR=F||1,A.u=G,A.types=z,g=A.supSrcset&&!A.supSizes,A.setSize=w,A.makeUrl=X(function(e){return H.href=e,H.href}),A.qsa=function(e,t){return e.querySelectorAll(t)},A.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?A.matchesMedia=function(e){return!e||matchMedia(e).matches}:A.matchesMedia=A.mMQ,A.matchesMedia.apply(this,arguments)},A.mMQ=function(e){return e?Y(e):!0},A.calcLength=function(e){var t=Y(e,!0)||!1;return 0>t&&(t=!1),t},A.supportsType=function(e){return e?z[e]:!0},A.parseSize=X(function(e){var t=(e||"").match(P);return{media:t&&t[1],length:t&&t[2]}}),A.parseSet=function(e){return e.cands||(e.cands=d(e.srcset,e)),e.cands},A.getEmValue=function(){var e;if(!h&&(e=t.body)){var n=t.createElement("div"),r=b.style.cssText,s=e.style.cssText;n.style.cssText=D,b.style.cssText=U,e.style.cssText=U,e.appendChild(n),h=n.offsetWidth,e.removeChild(n),h=parseFloat(h,10),b.style.cssText=r,e.style.cssText=s}return h||16},A.calcListLength=function(e){if(!(e in Q)||T.uT){var t=A.calcLength(p(e));Q[e]=t?t:G.width}return Q[e]},A.setRes=function(e){var t;if(e){t=A.parseSet(e);for(var n=0,r=t.length;r>n;n++)Z(t[n],e.sizes)}return t},A.setRes.res=Z,A.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,l,f,d,p,m=t[A.ns],h=A.DPR;if(l=m.curSrc||t[$],f=m.curCan||o(t,l,e[0].set),f&&f.set===e[0].set&&(p=M&&!t.complete&&f.res-.1>h,p||(f.cached=!0,f.res>=h&&(a=f))),!a)for(e.sort(u),i=e.length,a=e[i-1],r=0;i>r;r++)if(n=e[r],n.res>=h){s=r-1,a=e[s]&&(p||l!==A.makeUrl(n.url))&&c(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}a&&(d=A.makeUrl(a.url),m.curSrc=d,m.curCan=a,d!==l&&A.setSrc(t,a),A.setSize(t))}},A.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},A.getSet=function(e){var t,n,r,s=!1,i=e[A.ns].sets;for(t=0;t<i.length&&!s;t++)if(n=i[t],n.srcset&&A.matchesMedia(n.media)&&(r=A.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},A.parseSets=function(e,t,r){var s,i,c,a,u=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[A.ns];(o.src===n||r.src)&&(o.src=S.call(e,"src"),o.src?y.call(e,C,o.src):E.call(e,C)),(o.srcset===n||r.srcset||!A.supSrcset||e.srcset)&&(s=S.call(e,"srcset"),o.srcset=s,a=!0),o.sets=[],u&&(o.pic=!0,f(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:S.call(e,"sizes")},o.sets.push(i),c=(g||o.src)&&I.test(o.srcset||""),c||!o.src||l(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=n,o.supported=!(u||i&&!A.supSrcset||c),a&&A.supSrcset&&!o.supported&&(s?(y.call(e,L,s),e.srcset=""):E.call(e,L)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==A.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},A.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[A.ns]||(e[A.ns]={}),n=e[A.ns],(r||n.evaled!==v)&&((!n.parsed||t.reevaluate)&&A.parseSets(e,e.parentNode,t),n.supported?n.evaled=v:a(e))},A.setupRun=function(){(!N||B||F!==e.devicePixelRatio)&&i()},A.supPicture?(ee=w,A.fillImg=w):!function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,s=function(){var e=t.readyState||"";i=setTimeout(s,"loading"===e?200:999),t.body&&(A.fillImgs(),n=n||r.test(e),n&&clearTimeout(i))},i=setTimeout(s,t.body?9:99),c=function(e,t){var n,r,s=function(){var i=new Date-r;t>i?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}},a=b.clientHeight,u=function(){B=Math.max(e.innerWidth||0,b.clientWidth)!==G.width||b.clientHeight!==a,a=b.clientHeight,B&&A.fillImgs()};K(e,"resize",c(u,99)),K(t,"readystatechange",s)}(),A.picturefill=ee,A.fillImgs=ee,A.teardownRun=w,ee._=A,e.picturefillCFG={pf:A,push:function(e){var t=e.shift();"function"==typeof A[t]?A[t].apply(A,e):(T[t]=e[0],N&&A.fillImgs({reselect:!0}))}};for(;k&&k.length;)e.picturefillCFG.push(k.shift());e.picturefill=ee,"object"==typeof module&&"object"==typeof module.exports?module.exports=ee:"function"==typeof define&&define.amd&&define("picturefill",function(){return ee}),A.supPicture||(z["image/webp"]=s("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),function(){var e=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,t=navigator.userAgent.toLowerCase().indexOf("opera")>-1,n=navigator.userAgent.toLowerCase().indexOf("msie")>-1;(e||t||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t),e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus()))},!1)}();