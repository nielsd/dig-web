/*! jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.4",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssHas=ce(function(){try{return C.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssHas||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
(function(c){function g(a){var b=a||window.event,i=[].slice.call(arguments,1),e=0,h=0,f=0;a=c.event.fix(b);a.type="mousewheel";if(b.wheelDelta)e=b.wheelDelta/120;if(b.detail)e=-b.detail/3;f=e;if(b.axis!==undefined&&b.axis===b.HORIZONTAL_AXIS){f=0;h=-1*e}if(b.wheelDeltaY!==undefined)f=b.wheelDeltaY/120;if(b.wheelDeltaX!==undefined)h=-1*b.wheelDeltaX/120;i.unshift(a,e,h,f);return(c.event.dispatch||c.event.handle).apply(this,i)}var d=["DOMMouseScroll","mousewheel"];if(c.event.fixHooks)for(var j=d.length;j;)c.event.fixHooks[d[--j]]=
c.event.mouseHooks;c.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=d.length;a;)this.addEventListener(d[--a],g,false);else this.onmousewheel=g},teardown:function(){if(this.removeEventListener)for(var a=d.length;a;)this.removeEventListener(d[--a],g,false);else this.onmousewheel=null}};c.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/**@license
 *       __ _____                     ________                              __
 *      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 * /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 * \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *           \/              /____/                              version 2.35.3
 *
 * This file is part of jQuery Terminal. https://terminal.jcubic.pl
 *
 * Copyright (c) 2010-2022 Jakub T. Jankiewicz <https://jcubic.pl/me>
 * Released under the MIT license
 *
 * Contains:
 *
 * Storage plugin Distributed under the MIT License
 * modified to work from Data URIs that block storage and cookies in Chrome
 * Copyright (c) 2010 Dave Schindler
 *
 * jQuery Timers licenced with the WTFPL
 * <http://jquery.offput.ca/timers/>
 *
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 *
 * jQuery Caret
 * Copyright (c) 2009, Gideon Sireling
 * 3 clause BSD License
 *
 * sprintf.js
 * Copyright (c) 2007-2013 Alexandru Marasteanu <hello at alexei dot ro>
 * licensed under 3 clause BSD license
 *
 * debounce function from Lodash
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * The MIT License
 *
 * emoji regex v9.0.0 by Mathias Bynens
 * MIT license
 *
 * broken image by Sophia Bai from the Noun Project (CC-BY)
 *
 * Date: Mon, 06 Feb 2023 20:13:15 +0000
 */
(function(e){var m=function(){if(!m.cache.hasOwnProperty(arguments[0])){m.cache[arguments[0]]=m.parse(arguments[0])}return m.format.call(null,m.cache[arguments[0]],arguments)};m.format=function(e,t){var n=1,r=e.length,i="",u,a=[],o,s,l,f,c,p;for(o=0;o<r;o++){i=D(e[o]);if(i==="string"){a.push(e[o])}else if(i==="array"){l=e[o];if(l[2]){u=t[n];for(s=0;s<l[2].length;s++){if(!u.hasOwnProperty(l[2][s])){throw m('[sprintf] property "%s" does not exist',l[2][s])}u=u[l[2][s]]}}else if(l[1]){u=t[l[1]]}else{u=t[n++]}if(/[^s]/.test(l[8])&&D(u)!=="number"){throw m("[sprintf] expecting number but found %s",D(u))}switch(l[8]){case"b":u=u.toString(2);break;case"c":u=String.fromCharCode(u);break;case"d":u=parseInt(u,10);break;case"e":u=l[7]?u.toExponential(l[7]):u.toExponential();break;case"f":u=l[7]?parseFloat(u).toFixed(l[7]):parseFloat(u);break;case"o":u=u.toString(8);break;case"s":u=(u=String(u))&&l[7]?u.slice(0,l[7]):u;break;case"u":u=u>>>0;break;case"x":u=u.toString(16);break;case"X":u=u.toString(16).toUpperCase();break}u=/[def]/.test(l[8])&&l[3]&&u>=0?" +"+u:u;c=l[4]?l[4]==="0"?"0":l[4].charAt(1):" ";p=l[6]-String(u).length;f=l[6]?d(c,p):"";a.push(l[5]?u+f:f+u)}}return a.join("")};m.cache={};m.parse=function(e){var t=e,n=[],r=[],i=0;while(t){if((n=/^[^\x25]+/.exec(t))!==null){r.push(n[0])}else if((n=/^\x25{2}/.exec(t))!==null){r.push("%")}else if((n=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))!==null){if(n[2]){i|=1;var u=[],a=n[2],o=[];if((o=/^([a-z_][a-z_\d]*)/i.exec(a))!==null){u.push(o[1]);while((a=a.slice(o[0].length))!==""){if((o=/^\.([a-z_][a-z_\d]*)/i.exec(a))!==null){u.push(o[1])}else if((o=/^\[(\d+)\]/.exec(a))!==null){u.push(o[1])}else{throw"[sprintf] huh?"}}}else{throw"[sprintf] huh?"}n[2]=u}else{i|=2}if(i===3){throw"[sprintf] mixing positional and named placeholders is not (yet) supported"}r.push(n)}else{throw"[sprintf] huh?"}t=t.slice(n[0].length)}return r};var t=function(e,t,n){n=t.slice(0);n.splice(0,0,e);return m.apply(null,n)};function D(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function d(e,t){for(var n=[];t>0;n[--t]=e){}return n.join("")}e.sprintf=m;e.vsprintf=t})(typeof global!=="undefined"?global:self||window);(function(r,i){var n;if(typeof window!=="undefined"){n=window}else if(typeof self!=="undefined"){n=self}else if(typeof global!=="undefined"){n=global}else{throw new Error("Unknow context")}if(typeof define==="function"&&define.amd){define(["jquery","wcwidth"],function(e,t){r(e,t,n);return e})}else if(typeof module==="object"&&module.exports){module.exports=function(e,t,n){if(t===i){if(typeof window!=="undefined"){t=require("jquery")}else{t=require("jquery")(e)}}if(n===i){n=require("wcwidth")}r(t,n,e);return t}}else{if(!n.jQuery){n.$=n.cash}r(n.jQuery||n.cash,n.wcwidth,n)}})(function($,wcwidth,root,undefined){"use strict";function debug(e){if(false){console.log(e)}}function DelayQueue(){var t=$.Callbacks();var n=false;this.resolve=function(){t.fire();n=true};this.add=function(e){if(n){e()}else{t.add(e)}}}$.omap=function(n,r){var i={};$.each(n,function(e,t){i[e]=r.call(n,e,t)});return i};$.fn.text_length=function(){return this.map(function(){return $(this).text().length}).get().reduce(function(e,t){return e+t},0)};var Clone={clone_object:function(e){var t={};if(typeof e==="object"){if($.isArray(e)){return this.clone_array(e)}else if(e===null){return e}else{for(var n in e){if($.isArray(e[n])){t[n]=this.clone_array(e[n])}else if(typeof e[n]==="object"){t[n]=this.clone_object(e[n])}else{t[n]=e[n]}}}}return t},clone_array:function(e){if(!is_function(Array.prototype.map)){throw new Error("Your browser don't support ES5 array map "+"use es5-shim")}return e.slice(0).map(function(e){if(typeof e==="object"){return this.clone_object(e)}else{return e}}.bind(this))}};var clone=function(e){return Clone.clone_object(e)};if("Map"in root&&!("clear"in Map.prototype)){Map.prototype.clear=function(){this.forEach(function(e,t,n){n.delete(t)})}}var localStorage;(function(){var e=function(){try{var e="test",t=window.localStorage;t.setItem(e,"1");t.removeItem(e);return true}catch(e){return false}};var t=function(){try{document.cookie.split(";");return true}catch(e){return false}};var n=e();function r(e,t){var n;if(typeof e==="string"&&typeof t==="string"){localStorage[e]=t;return true}else if(typeof e==="object"&&typeof t==="undefined"){for(n in e){if(e.hasOwnProperty(n)){localStorage[n]=e[n]}}return true}return false}function i(e,t){var n,r,i;n=new Date;n.setTime(n.getTime()+31536e6);r="; expires="+n.toGMTString();if(typeof e==="string"&&typeof t==="string"){document.cookie=e+"="+t+r+"; path=/";return true}else if(typeof e==="object"&&typeof t==="undefined"){for(i in e){if(e.hasOwnProperty(i)){document.cookie=i+"="+e[i]+r+"; path=/"}}return true}return false}function u(e){return localStorage[e]}function a(e){var t,n,r,i;t=e+"=";n=document.cookie.split(";");for(r=0;r<n.length;r++){i=n[r];while(i.charAt(0)===" "){i=i.slice(1,i.length)}if(i.indexOf(t)===0){return i.slice(t.length,i.length)}}return null}function o(e){return delete localStorage[e]}function s(e){return i(e,"",-1)}if(!t()&&!n){localStorage={};$.extend({Storage:{set:r,get:u,remove:o}})}else{if(n){localStorage=window.localStorage}$.extend({Storage:{set:n?r:i,get:n?u:a,remove:n?o:s}})}})();var debounce=function(){var E="Expected a function";function x(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function $(){return Date.now()}return function e(r,i,t){var n=Math.max,u=Math.min;var a,o,s,l,f,c,p=0,m=false,D=false,d=true;if(typeof r!="function"){throw new TypeError(E)}i=i||0;if(x(t)){m=!!t.leading;D="maxWait"in t;s=D?n(t.maxWait||0,i):s;d="trailing"in t?!!t.trailing:d}function h(e){var t=a,n=o;a=o=undefined;p=e;l=r.apply(n,t);return l}function v(e){p=e;f=setTimeout(y,i);return m?h(e):l}function g(e){var t=e-c,n=e-p,r=i-t;return D?u(r,s-n):r}function _(e){var t=e-c,n=e-p;return c===undefined||t>=i||t<0||D&&n>=s}function y(){var e=$();if(_(e)){return b(e)}f=setTimeout(y,g(e))}function b(e){f=undefined;if(d&&a){return h(e)}a=o=undefined;return l}function C(){if(f!==undefined){clearTimeout(f)}p=0;a=c=o=f=undefined}function F(){return f===undefined?l:b($())}function w(){var e=$(),t=_(e);a=arguments;o=this;c=e;if(t){if(f===undefined){return v(c)}if(D){f=setTimeout(y,i);return h(c)}}if(f===undefined){f=setTimeout(y,i)}return l}w.cancel=C;w.flush=F;return w}}();var jQuery=$;(function(e){jQuery.fn.extend({everyTime:function(e,t,n,r,i){return this.each(function(){jQuery.timer.add(this,e,t,n,r,i)})},oneTime:function(e,t,n){return this.each(function(){jQuery.timer.add(this,e,t,n,1)})},stopTime:function(e,t){return this.each(function(){jQuery.timer.remove(this,e,t)})}});jQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1e3,das:1e4,hs:1e5,ks:1e6},timeParse:function(e){if(e===undefined||e===null){return null}var t=this.regex.exec(jQuery.trim(e.toString()));if(t[2]){var n=parseInt(t[1],10);var r=this.powers[t[2]]||1;return n*r}else{return e}},add:function(e,t,n,r,i,u){var a=0;if(jQuery.isFunction(n)){if(!i){i=r}r=n;n=t}t=jQuery.timer.timeParse(t);if(typeof t!=="number"||isNaN(t)||t<=0){return}if(i&&i.constructor!==Number){u=!!i;i=0}i=i||0;u=u||false;if(!e.$timers){e.$timers={}}if(!e.$timers[n]){e.$timers[n]={}}r.$timerID=r.$timerID||this.guid++;var o=function(){if(u&&o.inProgress){return}o.inProgress=true;if(++a>i&&i!==0||r.call(e,a)===false){jQuery.timer.remove(e,n,r)}o.inProgress=false};o.$timerID=r.$timerID;if(!e.$timers[n][r.$timerID]){e.$timers[n][r.$timerID]=setInterval(o,t)}if(!this.global[n]){this.global[n]=[]}this.global[n].push(e)},remove:function(e,t,n){var r=e.$timers,i;if(r){if(!t){for(var u in r){if(r.hasOwnProperty(u)){this.remove(e,u,n)}}}else if(r[t]){if(n){if(n.$timerID){clearInterval(r[t][n.$timerID]);delete r[t][n.$timerID]}}else{for(var a in r[t]){if(r[t].hasOwnProperty(a)){clearInterval(r[t][a]);delete r[t][a]}}}for(i in r[t]){if(r[t].hasOwnProperty(i)){break}}if(!i){i=null;delete r[t]}}for(i in r){if(r.hasOwnProperty(i)){break}}if(!i){e.$timers=null}}}}});if(/(msie) ([\w.]+)/.exec(navigator.userAgent.toLowerCase())){e(window).one("unload",function(){var e=jQuery.timer.global;for(var t in e){if(e.hasOwnProperty(t)){var n=e[t],r=n.length;while(--r){jQuery.timer.remove(n[r],t)}}}})}})(jQuery);(function(f){if(!String.prototype.split.toString().match(/\[native/)){return}var c=String.prototype.split,p=/()??/.exec("")[1]===f,n;n=function(e,t,n){if(Object.prototype.toString.call(t)!=="[object RegExp]"){return c.call(e,t,n)}var r=[],i=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),u=0,a,o,s,l;t=new RegExp(t.source,i+"g");e+="";if(!p){a=new RegExp("^"+t.source+"$(?!\\s)",i)}n=n===f?-1>>>0:n>>>0;while(o=t.exec(e)){s=o.index+o[0].length;if(s>u){r.push(e.slice(u,o.index));if(!p&&o.length>1){o[0].replace(a,function(){for(var e=1;e<arguments.length-2;e++){if(arguments[e]===f){o[e]=f}}})}if(o.length>1&&o.index<e.length){Array.prototype.push.apply(r,o.slice(1))}l=o[0].length;u=s;if(r.length>=n){break}}if(t.lastIndex===o.index){t.lastIndex++}}if(u===e.length){if(l||!t.test("")){r.push("")}}else{r.push(e.slice(u))}return r.length>n?r.slice(0,n):r};String.prototype.split=function(e,t){return n(this,e,t)};return n})();$.fn.caret=function(e){var t=this[0];var n=t.contentEditable==="true";if(arguments.length===0){if(window.getSelection){if(n){if(!this.is(":focus")){t.focus()}var r=window.getSelection().getRangeAt(0),i=r.cloneRange();i.selectNodeContents(t);i.setEnd(r.endContainer,r.endOffset);return i.toString().length}return t.selectionStart}if(document.selection){t.focus();if(n){var r=document.selection.createRange(),i=document.body.createTextRange();i.moveToElementText(t);i.setEndPoint("EndToEnd",r);return i.text.length}var e=0,u=t.createTextRange(),i=document.selection.createRange().duplicate(),a=i.getBookmark();u.moveToBookmark(a);while(u.moveStart("character",-1)!==0)e++;return e}return 0}if(e===-1)e=this[n?"text":"val"]().length;if(window.getSelection){if(n){if(!this.is(":focus")){t.focus()}var o=window.getSelection();o.collapse(o.focusNode,e)}else t.setSelectionRange(e,e)}else if(document.body.createTextRange){var u=document.body.createTextRange();u.moveToElementText(t);u.moveStart("character",e);u.collapse(true);u.select()}if(!n&&!this.is(":focus")){t.focus()}return e};function make_callback_plugin(e){var s=$.extend({init:$.noop,destroy:$.noop,name:"event"},e);return function(r,i){var u=arguments.length===0;var a=arguments[0]==="unbind";if(!u&&!a&&!is_function(r)){throw new Error("Invalid argument, it need to a function or string "+'"unbind" or no arguments.')}if(a){r=is_function(arguments[1])?arguments[1]:null}var o="callbacks_"+s.name;return this.each(function(){var t=$(this);var n;function e(e){n.fireWith(t,[e])}if(u||a){n=t.data(o);if(u){n&&n.fire()}else{if(r&&n){n.remove(r);if(!n.has()){n=null}}else{n=null}if(!n){t.removeData(o);s.destroy.call(this,e,i)}}}else if(t.data(o)){$(this).data(o).add(r)}else{n=$.Callbacks();n.add(r);t.data(o,n);s.init.call(this,e,i)}})}}$.fn.resizer=make_callback_plugin({name:"resize",init:function(e,t){var n=$.extend({prefix:""},t);var r=$(this);var i;var u=true;if(r.is("body")){$(window).on("resize.resizer",e)}else if(window.ResizeObserver){i=new ResizeObserver(function(){if(!u){e()}u=false});i.observe(this);r.data("observer",i)}else{var a=$("<iframe/>").addClass(n.prefix+"resizer").appendTo(this)[0];$(a.contentWindow).on("resize",e)}},destroy:function(){var e=$(this);if(window.ResizeObserver){var t=e.data("observer");if(t){t.unobserve(this);e.removeData("observer")}}else{var n=e.find('> iframe[class$="resizer"]');if(n.length){$(n[0].contentWindow).off("resize").remove();n.remove()}else if(e.is("body")){$(window).off("resize.resizer")}}}});$.fn.touch_scroll=make_callback_plugin({name:"touch",init:function(r){var i;var u;$(this).on("touchstart.scroll",function(e){e=e.originalEvent;if(e.target.tagName.toLowerCase()!=="a"&&e.touches.length===1){u=i=e.touches[0]}}).on("touchmove.scroll",function(e){e=e.originalEvent;if(i&&e.touches.length===1){var t=e.touches[0];var n=r({origin:i,previous:u,current:t});if(n===false){e.preventDefault()}u=t}}).on("touchend.scroll",function(){if(i||u){i=u=null}})},destroy:function(){$(this).off("touchstart.scroll touchmove.scroll touchend.scroll")}});$.fn.on_load=function(e){var n=$.extend({error:$.noop,load:$.noop,done:$.noop},e);var r=[];this.find("img,iframe").each(function(){var e=$(this);var t=new $.Deferred;e.on("load",t.resolve).on("error",function(){n.error(e);t.reject()});r.push(t)});n.load(!!r.length);if(r.length){$.when.apply($,r).then(function(){n.done(true)})}else{n.done(false)}return this};function jquery_resolve(e){var t=jQuery.Deferred();t.resolve(e);return t.promise()}function unpromise(e,t,n){if(e!==undefined){if(is_promise(e)){if(is_function(e.catch)&&is_function(n)){e.catch(n)}if(is_function(e.done)){return e.done(t)}else if(is_function(e.then)){return e.then(t)}}else if(e instanceof Array){var r=e.filter(function(e){return e&&(is_function(e.done)||is_function(e.then))});if(r.length){var i=$.when.apply($,e).then(function(){return t([].slice.call(arguments))});if(is_function(i.catch)){i=i.catch(n)}return i}}return t(e)}}function always(e){return e===undefined?true:e}$.fn.is_fully_in_viewport=function(){function t(e,t){var n=e.getBoundingClientRect();var r=t[0].getBoundingClientRect();var i=n.top-r.top;var u=n.bottom-r.top;var a=t.height();return u>0&&i<=a}if(root.IntersectionObserver){return function(e){var t=this[0];var n=jQuery.Deferred();var r=new root.IntersectionObserver(function(e){n.resolve(e[0].isIntersecting&&e[0].ratio===1);r.unobserve(t)},{root:e[0]});r.observe(t);return n.promise()}}else{return function(e){return jquery_resolve(t(this[0],e))}}}();var entity_re=/(&(?:[a-z\d]+|#\d+|#x[a-f\d]+);)/i;var combine_chr_re=/(.(?:[\u0300-\u036F]|[\u1AB0-\u1abE]|[\u1DC0-\u1DF9]|[\u1DFB-\u1DFF]|[\u20D0-\u20F0]|[\uFE20-\uFE2F])+)/;var astral_symbols_re=/([\uD800-\uDBFF][\uDC00-\uDFFF])/;var emoji_re=/(\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFE])|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69])(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83E\uDDD1(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC3B\u200D\u2744|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDF])\u200D[\u2640\u2642])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F?|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD]))/;var mobile_re=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;var tablet_re=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;var format_split_re=/(\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\](?:[^\]\\]*(?:\\\\)*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)\]?)/i;var format_parts_re=/\[\[((?:-?[@!gbiuso])*);([^;]*);([^;\]]*);?([^;\]]*);?([^\]]*)\]([^\]\\]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]+)\]?/gi;var format_re=/\[\[((?:-?[@!gbiuso])*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)\]?/gi;var format_exist_re=/\[\[((?:-?[@!gbiuso])*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\]([^\]]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)\]/gi;var format_full_re=/^(\[\[(?:(?:-?[@!gbiuso])*;[^;\]]*;[^;\]]*(?:;|[^\]()]*);?[^\]]*)\])([^\]]*\\\][^\]]*|[^\]]*|[^[]*\[[^\]]*)(\])$/i;var format_begin_re=/(\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\])/i;var format_start_re=/^(\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\])/i;var format_end_re=/\[\[(?:-?[@!gbiuso])*;[^;]*;[^\]]*\]?$/i;var self_closing_re=/^(?:\[\[)?[^;]*@[^;]*;/;var color_re=/^(?:#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})|rgba?\([^)]+\)|hsla?\([^)]+\))$/i;var url_re=/(\b(?:file|ftp|https?):\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'\\<>\][)])+)/gi;var url_nf_re=/\b(?![^"\s[\]]*])(https?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'\\<>\][)])+)/gi;var email_re=/((([^<>('")[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/g;var url_full_re=/^(https?:\/\/(?:(?:(?!&[^;]+;)|(?=&amp;))[^\s"'<>\\\][)])+)$/gi;var email_full_re=/^((([^<>('")[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/g;var command_re=/((?:"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`|\/[^\/\\]*(?:\\[\S\s][^\/\\]*)*\/[gimsuy]*(?=\s|$)|(?:\\\s|\S))+)(?=\s|$)/gi;var extended_command_re=/^\s*((terminal|cmd)::([a-z_]+)\(([\s\S]*)\))\s*$/;var format_exec_split_re=/(\[\[(?:-?[@!gbiuso])*;[^\]]+\](?:\\[[\]]|[^\]])*\]|\[\[[\s\S]+?\]\])/;var format_exec_re=/(\[\[[\s\S]+?\]\])/;var float_re=/^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;var re_re=/^\/((?:\\\/|[^/]|\[[^\]]*\/[^\]]*\])+)\/([gimsuy]*)$/;var string_re=/("(?:[^"\\]|\\(?:\\\\)*"|\\\\)*"|'(?:[^'\\]|\\(?:\\\\)*'|\\\\)*'|`(?:[^`\\]|\\(?:\\\\)*`|\\\\)*`)/;var unclosed_strings_re=/^(?=((?:[^"']+|"[^"\\]*(?:\\[^][^"\\]*)*"|'[^'\\]*(?:\\[^][^'\\]*)*')*))\1./;var broken_image='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14"><title id="title2">rounded</title><path id="terminal-broken-image" d="m 14,10 h 2 v 1 a 3,3 0 0 1 -3,3 H 3 A 3,3 0 0 1 0,11 H 4.5 A 1.00012,1.00012 0 0 0 5.207,10.707 L 6.5,9.414 7.793,10.707 a 0.99963,0.99963 0 0 0 1.41406,0 l 2.36719,-2.36719 1.80127,1.44092 A 0.99807,0.99807 0 0 0 14,10 Z M 16,3 V 8 H 14.35059 L 12.12451,6.21924 A 0.99846,0.99846 0 0 0 10.793,6.293 L 8.5,8.586 7.207,7.293 a 0.99962,0.99962 0 0 0 -1.41406,0 L 4.08594,9 H 0 V 3 A 3,3 0 0 1 3,0 h 10 a 3,3 0 0 1 3,3 z M 6,4.5 A 1.5,1.5 0 1 0 4.5,6 1.5,1.5 0 0 0 6,4.5 Z" /></svg>';var use_broken_image='<svg class="terminal-broken-image" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#terminal-broken-image"/></svg>';var animation_supported=function(){if(typeof document==="undefined"){return false}var e=false,t="Webkit Moz O ms Khtml".split(" "),n=document.createElement("div");if(n.style.animationName){e=true}if(e===false){for(var r=0;r<t.length;r++){var i=t[r]+"AnimationName";if(n.style[i]!==undefined){e=true;break}}}n=null;return e}();var agent=(root.navigator||window.navigator).userAgent;var is_IE=/MSIE|Trident/.test(agent)||/rv:11.0/i.test(agent);var is_IEMobile=/IEMobile/.test(agent);var is_ch_unit_supported=function(){if(is_IE&&!is_IEMobile){return false}if(typeof document==="undefined"){return true}var e=document.createElement("div");e.style.width="1ch";return e.style.width==="1ch"}();var is_css_variables_supported=root.CSS&&root.CSS.supports&&root.CSS.supports("--fake-var",0);var is_android=navigator.userAgent.toLowerCase().indexOf("android")!==-1;var is_key_native=function e(){if(!("KeyboardEvent"in root&&"key"in root.KeyboardEvent.prototype)){return false}var t=root.KeyboardEvent.prototype;var n=Object.getOwnPropertyDescriptor(t,"key").get;return!!n.toString().match(/\[native code\]/)}();var is_browser=function(){try{return this===window}catch(e){return false}}();var is_mobile=function(e){var t=false;if(mobile_re.test(e)||tablet_re.test(e.substr(0,4))){t=true}if(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1){return true}return t}(navigator.userAgent||navigator.vendor||root.opera);var ch_unit_bug=false;if(is_browser){$(function(){function e(e){return e[0].getBoundingClientRect().width}var t='<span style="font-family: monospace;visibility:hidden;';var n=$(t+'width:1ch;overflow: hidden">&nbsp;</span>');n.appendTo("body");var r=$(t+'">&nbsp;</span>').appendTo("body");ch_unit_bug=Math.abs(e(n)-e(r))>1e-4;n.remove();r.remove()})}function css(t,n,e){if(t instanceof $.fn.init){t.each(function(){css(this,n,e)})}else if($.isPlainObject(n)){Object.keys(n).forEach(function(e){t.style.setProperty(e,n[e])})}else if(typeof e==="undefined"){return t.style.getPropertyValue(n)}else{t.style.setProperty(n,e)}}function style_prop(e,t,n){var r=[e+":"+t+"px",e+":"+"calc("+t+"px / var(--pixel-density, 1))"];if(n){r=r.map(function(e){return e+" !important"})}return r.join(";")}function a11y_hide(e){e.attr({role:"presentation","aria-hidden":"true"})}var excepctions=[];function alert_exception(e,t){if(arguments[0]instanceof $.terminal.Exception){e=arguments[0].type;t=arguments[0]}var n=(e?e+": ":"")+exception_message(t);if(excepctions.indexOf(n)===-1){excepctions.push(n);setTimeout(function(){throw t},0)}}function generate_id(){var e=Math.random()*46656|0;var t=Math.random()*46656|0;e=("000"+e.toString(36)).slice(-3);t=("000"+t.toString(36)).slice(-3);return e+t}function scrollbar_event(e,t,n){n=n||1;var r=t.offset().left;var i=t.outerWidth()*n;return i<=e.clientX-r}function exception_message(e){if(typeof e==="string"){return e}else if(typeof e.fileName==="string"){return e.fileName+": "+e.message}else{return e.message}}function Cycle(){var r=[].slice.call(arguments);var i=0;$.extend(this,{get:function(){return r},index:function(){return i},rotate:function(e,t){if(t===undefined){t=i}else if(t===i){return}if(!e){var n=r.filter(function(e){return typeof e!=="undefined"});if(!n.length){return}}if(!r.length){return}if(r.length===1){return r[0]}else{if(i===r.length-1){i=0}else{++i}if(typeof r[i]!=="undefined"){return r[i]}else{return this.rotate(true,t)}}},length:function(){return r.length},remove:function(e){delete r[e]},set:function(e){for(var t=r.length;t--;){if(r[t]===e){i=t;return}}this.append(e);i=r.length-1},front:function(){if(r.length){var e=i;var t=false;while(!r[e]){e++;if(e>r.length){if(t){break}e=0;t=true}}return r[e]}},map:function(n){return r.map(function(e,t){if(typeof e!=="undefined"){return n(e,t)}return null}).filter(Boolean)},forEach:function(n){return r.forEach(function(e,t){if(typeof e!=="undefined"){n(e,t)}})},append:function(e){r.push(e)}})}function Stack(e){var t=is_array(e)?e:e?[e]:[];$.extend(this,{data:function(){return t},map:function(e){return $.map(t,e)},size:function(){return t.length},pop:function(){if(t.length===0){return null}else{var e=t[t.length-1];t=t.slice(0,t.length-1);return e}},push:function(e){t=t.concat([e]);return e},top:function(){return t.length>0?t[t.length-1]:null},clone:function(){return new Stack(t.slice(0))}})}function WorkerCache(e){var t=$.extend({validation:$.noop,action:$.noop,onCache:$.noop},e);this._onCache=t.onCache.bind(this);this._action=t.action.bind(this);this._validation=t.validation.bind(this);if("Map"in root){this._cache=new Map}}WorkerCache.prototype.validate=function(e){var t=this._validation(e);var n=t===undefined||t===true;if(!n){this._cache.clear()}return n};WorkerCache.prototype.clear=function(){this._cache.clear()};WorkerCache.prototype.get=function(e){if(!this._cache){return this._action(e)}var t;if(this.validate(e)&&this._cache.has(e)){t=this._cache.get(e);this._onCache({cache:t});return t}t=this._action(e);this._cache.set(e,t);return t};function History(e,t,n){var r=true;var i="";if(typeof e==="string"&&e!==""){i=e+"_"}i+="commands";var u;if(n){u=[]}else{u=$.Storage.get(i);u=u?JSON.parse(u):[]}var a=u.length-1;$.extend(this,{append:function(e){if(r){if(u[u.length-1]!==e){u.push(e);if(t&&u.length>t){u=u.slice(-t)}a=u.length-1;if(!n){$.Storage.set(i,JSON.stringify(u))}}}},set:function(e){if(is_array(e)){u=e;if(!n){$.Storage.set(i,JSON.stringify(u))}}},data:function(){return u},reset:function(){a=u.length-1},last:function(){return u[u.length-1]},end:function(){return a===u.length-1},position:function(){return a},current:function(){return u[a]},next:function(){var e=a;if(a<u.length-1){++a}if(e!==a){return u[a]}},previous:function(){var e=a;if(a>0){--a}if(e!==a){return u[a]}},clear:function(){u=[];this.purge()},enabled:function(){return r},enable:function(){r=true},purge:function(){if(!n){$.Storage.remove(i)}},disable:function(){r=false},toggle:function(e){if(typeof e==="undefined"){r=!r}else{r=e}}})}function OutputLines(e){this._settings=e;this._lines=[];this._snapshot=[]}OutputLines.prototype.make_snapshot=function(e){this._snapshot.push(e)};OutputLines.prototype.get_partial=function(){var e=this._snapshot[this._snapshot.length-1];return e};OutputLines.prototype.update_snapshot=function(e,t){this._snapshot[e]=t};OutputLines.prototype.limit_snapshot=function(e){this._snapshot=this._snapshot.slice(e)};OutputLines.prototype.clear_snapshot=function(){this._snapshot=[]};OutputLines.prototype.get_snapshot=function(){return this._snapshot.reduce(function(e,t){return e.concat(t)},[]).join("\n")};OutputLines.prototype.join=function(){var e=[].slice.call(arguments);if(e.some(is_function)){return function(){return e.reduce(function(e,t){if(is_function(e)){e=e()}if(is_function(t)){t=t()}if(is_promise(e)||is_promise(t)){return $.when(e,t).then(function(e,t){return e+t})}return t})}}else if(e.some(is_promise)){return e.reduce(function(e,t){return $.when(e,t).then(function(e,t){return e+t})})}return e.join("")};OutputLines.prototype.import=function(e){this._lines=e};OutputLines.prototype.push=function(e){var t=e[0];var n=e[1];if(this.has_newline()){this._lines.push(e)}else{var r=this.last_line();r[0]=this.join(r[0],t);r[1].newline=n.newline}};OutputLines.prototype.clear=function(r){this._lines.forEach(function(e,t){var n=e[1];if(is_function(n.onClear)){n.onClear.call(self,r(t))}});this._lines=[];this._snapshot=[]};OutputLines.prototype.data=function(){return this._lines};OutputLines.prototype.has_newline=function(){if(this._lines.length===0){return true}return this.last_line()[1].newline};OutputLines.prototype.unmount=function(e){var t=e.data("index");var n=this._lines[t];if(n){var r=n[1];if(is_function(r.unmount)){r.unmount.call(self,e)}}};OutputLines.prototype.last_line=function(){var e=this._lines.length;return this._lines[e-1]};OutputLines.prototype.update=function(e,t,n){if(t===null){this._lines.splice(e,1)}else{this._lines[e][0]=t;if(n){this._lines[e][1]=$.extend(this._lines[e][1],n)}return this._lines[e][1]}};OutputLines.prototype.length=function(){return this._lines.length};OutputLines.prototype.valid_index=function(e){return!!this._lines[e]};OutputLines.prototype.render=function(e,t){var n=this._settings();var i=[];this._snapshot=[];if(n.outputLimit>=0){var r;if(n.outputLimit===0){r=e}else{r=n.outputLimit}this._lines.forEach(function(e,t){var n=e[0];var r=e[1];i.push({value:n,index:t,options:r})});var u=i.length-r-1;i=i.slice(u)}else{i=this._lines.map(function(e,t){return{value:e[0],index:t,options:e[1]}})}return t(i)};function FormatBuffer(e){this._options=e;if("Map"in root){this._format_cache=new Map}this._output_buffer=[]}FormatBuffer.NEW_LINE=1;FormatBuffer.prototype.format=function e(t,n,r){var i=this._format_cache&&this._settings.useCache;if(i){var u=JSON.stringify([t,this._settings]);if(this._format_cache.has(u)){return this._format_cache.get(u)}}var a={line:$.terminal.format(t,this._settings),raw:r,newline:n};if(i){this._format_cache.set(u,a)}return a};FormatBuffer.prototype.empty=function(){return!this._output_buffer.length};FormatBuffer.prototype.append=function(e,t,n,r){this._settings=$.extend({useCache:true},this._options(n));this._output_buffer.push(FormatBuffer.NEW_LINE);if(e instanceof Array){var i=r.split("\n");for(var u=0,a=e.length;u<a;++u){if(e[u]===""||e[u]==="\r"){this._output_buffer.push({line:"",raw:""})}else{var o=this.format(e[u],u===a-1,i[u]);this._output_buffer.push(o)}}}else if(n.raw){this._output_buffer.push({line:e,raw:r})}else{this._output_buffer.push(this.format(e,false,r))}this._output_buffer.push({finalize:n.finalize,index:t,raw:n.raw,newline:n.newline})};FormatBuffer.prototype.clear_cache=function(){if(this._format_cache){this._format_cache.clear()}};FormatBuffer.prototype.output=function(){return this._output_buffer.slice()};FormatBuffer.prototype.is_empty=function(){return!this._output_buffer.length};FormatBuffer.prototype.clear=function(){this._output_buffer=[]};FormatBuffer.prototype.forEach=function(e){var t=0;while(t<this._output_buffer.length){var n=this._output_buffer[t++];if(n===FormatBuffer.NEW_LINE){e()}else{e(n)}}};FormatBuffer.prototype.flush=function(e){this.forEach(e);this.clear()};function with_prompt(e,n,t){function r(e){var t=$.terminal.escape_brackets("[ERR]> ");n("[[;red;]"+t+"]");alert_exception("Prompt",e)}function i(e){n(e);u.resolve()}var u=new $.Deferred;switch(typeof e){case"string":i(e);break;case"function":try{var a=e.call(t,function(e){i(e)});if(typeof a==="string"){i(a)}if(a&&a.then){a.then(i).catch(r)}}catch(e){r(e)}break}return u.promise()}var cmd_index=0;$.cmd={defaults:{mask:false,caseSensitiveSearch:true,historySize:60,prompt:"> ",enabled:true,history:true,onPositionChange:$.noop,onCommandChange:$.noop,inputStyle:"textarea",mobileDelete:is_mobile,onPaste:$.noop,clickTimeout:200,holdTimeout:400,holdRepeatTimeout:200,mobileIngoreAutoSpace:[],repeatTimeoutKeys:[],tabindex:1,tabs:4}};$.fn.cmd=function(I){var x=$.extend({},$.cmd.defaults,I);function z(e){return x.mobileIngoreAutoSpace.length&&x.mobileIngoreAutoSpace.indexOf(e)!==-1&&is_android}var k=this;var P=k.data("cmd");if(P){return P}var N=cmd_index++;k.addClass("cmd");var A=$('<div class="cmd-wrapper"/>').appendTo(k);A.append('<span class="cmd-prompt"></span>');A.append('<div class="cmd-cursor-line">'+"<span></span>"+'<span class="cmd-cursor">'+'<span data-text class="end"><span>&nbsp;</span></span>'+"</span>"+"<span></span>"+"</div>");var M=A.find(".cmd-cursor-line");a11y_hide(M);var B;if(is_mobile){B=function(){var t=$('<div class="cmd-editable" contenteditable/>').attr({autocapitalize:"off",autocorrect:"off",spellcheck:"false",tabindex:x.tabindex}).insertAfter(k);t.on("focus",function(){k.enable()}).on("blur",function(){k.disable()});var e;var n={$node:t,val:function(e){if(typeof e==="undefined"){return t.text()}else{t.html(e)}},reset:function(){clearTimeout(e);e=setTimeout(function(){t.css({top:"",bottom:""})},100)},focus:function(){css(t[0],{top:"calc(var(--terminal-scroll, 0) * 1px)"});n.reset()},blur:function(){t.css({top:"100%",bottom:0}).blur();window.getSelection().removeAllRanges();n.reset()}};return n}();k.addClass("cmd-mobile")}else{B=function(){var e=generate_id();var t=$("<textarea>").attr({autocapitalize:"off",spellcheck:"false",id:e,tabindex:x.tabindex}).addClass("cmd-clipboard").appendTo(k);t.before('<label class="visually-hidden" for="'+e+'">'+"Clipbard textarea for jQuery Terminal</label>");return{$node:t,val:function(e){if(typeof e==="undefined"){return t.val()}else{return t.val(e)}}}}();B.val(" ")}if(x.width){k.width(x.width)}var m;var D;var H;var W;var o;var s=0;var d;var h=k.find(".cmd-prompt");var a=false;var l="";var q=null;var U;var T="";var K;var u="";var S=0;var n;var f;var R=0;var J,c;var v=k.find(".cmd-cursor");var t;var Q;var Y=0;var V="￿";var G=/\uFFFF$/;var X=/^\uFFFF$/;function Z(e){var t=$(e.target);if(t.is("span,img,a")){t=t.closest("[data-text]");return t.index()+t.parent("span").prevAll().find("[data-text]").length+t.closest('[role="presentation"]').prevUntil(".cmd-prompt").find("[data-text]").length}else if(t.is('div[role="presentation"]')){var n=!t.next().length;return t.find("[data-text]").length+t.prevUntil(".cmd-prompt").find("[data-text]").length-(n?0:1)}}var ee={SPACEBAR:" ",UP:"ArrowUP",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",DEL:"Delete",MULTIPLY:"*",DIVIDE:"/",SUBTRACT:"-",ADD:"+"};function te(e){var t=e.key.toUpperCase();if(ee[t]){return ee[t]}return t}function ne(e){if(e.key){var t=te(e).toUpperCase();if(t==="CONTROL"){return"CTRL"}else{var n=[];if(e.ctrlKey){n.push("CTRL")}if(e.metaKey&&t!=="META"){n.push("META")}if(e.shiftKey&&t!=="SHIFT"){n.push("SHIFT")}if(e.altKey&&t!=="ALT"){n.push("ALT")}if(n.length&&t===" "){t="SPACEBAR"}if(e.key){n.push(t)}return n.join("+")}}}var e={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};var r;for(r=1;r<25;r++){e[111+r]="F"+r}var re="";for(r=65;r<91;r++){re=String.fromCharCode(r);e[r]=[re.toLowerCase(),re.toUpperCase()]}var ie={};Object.keys(e).forEach(function(t){if(is_array(e[t])){e[t].forEach(function(e){ie[e.toUpperCase()]=t})}else{ie[e[t].toUpperCase()]=t}});var i;var p={"ALT+D":ue({clipboard:true}),"HOLD+ALT+D":ue({clipboard:true,hold:true}),"HOLD+DELETE":ue({clipboard:false,hold:true}),"HOLD+SHIFT+DELETE":ue({clipboard:false,hold:true}),ENTER:function(){if(c&&T&&!x.mask&&(is_function(x.historyFilter)&&x.historyFilter(T)||x.historyFilter instanceof RegExp&&T.match(x.historyFilter)||!x.historyFilter)){c.append(T)}var e=T;B.$node.blur();c.reset();Ge="";F=true;var t;if(x.commands){t=x.commands.call(k,e)}if(is_function(n)){if(t&&is_function(t.then)){t.then(b)}else{b()}}k.set("");B.val("");B.$node.focus();return false},"SHIFT+ENTER":function(){k.insert("\n");return true},BACKSPACE:he,"SHIFT+BACKSPACE":he,TAB:function(){k.insert("\t")},"CTRL+D":function(){k["delete"](1);return false},DELETE:function(){k["delete"](1);return true},"HOLD+ARROWUP":De,ARROWUP:De,"CTRL+ARROWUP":le,"CTRL+P":le,ARROWDOWN:de,"HOLD+ARROWDOWN":de,"CTRL+N":fe,"CTRL+ARROWDOWN":fe,ARROWLEFT:ve,"HOLD+ARROWLEFT":debounce(ve,10),"CTRL+B":ve,"CTRL+ARROWLEFT":function(){var e=S-1;var t=0;if(T[e]===" "){--e}for(var n=e;n>0;--n){if(T[n]===" "&&T[n+1]!==" "){t=n+1;break}else if(T[n]==="\n"&&T[n+1]!=="\n"){t=n;break}}k.position(t)},"CTRL+R":function(){if(a){$e(true)}else{U=n;Ee();K=T;k.set("");y();a=true}return false},"CTRL+G":function(){if(a){n=U;b();k.set(K);y();a=false;l="";return false}},ARROWRIGHT:ge,"HOLD+ARROWRIGHT":debounce(ge,10),"CTRL+F":ge,"CTRL+ARROWRIGHT":function(){if(T[S]===" "){++S}var e=/\S[\n\s]{2,}|[\n\s]+\S?/;var t=T.slice(S).match(e);if(!t||t[0].match(/^\s+$/)){k.position(bare_text(T).length)}else if(t[0][0]!==" "){S+=t.index+1}else{S+=t.index+t[0].length-1;if(t[0][t[0].length-1]!==" "){--S}}y()},F12:g,END:ye(true),"CTRL+END":ye(),"CTRL+E":ye(),HOME:_e(true),"CTRL+HOME":_e(),"CTRL+A":_e(),"SHIFT+INSERT":oe,"CTRL+SHIFT+T":g,"CTRL+W":ae({clipboard:true,hold:false}),"HOLD+BACKSPACE":ae({clipboard:false,hold:true}),"HOLD+SHIFT+BACKSPACE":ae({clipboard:false,hold:true}),"CTRL+H":function(){if(T!==""&&S>0){k["delete"](-1)}return false},"CTRL+X":g,"CTRL+C":function(){return get_selected_html()===""},"CTRL+T":g,"CTRL+Y":function(){if(u!==""){k.insert(u)}},"CTRL+V":oe,"META+V":oe,"CTRL+K":function(){var e=text(T).length;if(e>S){u=k["delete"](e-S);text_to_clipboard(B.$node,u)}return false},"CTRL+U":function(){if(T!==""&&S!==0){u=k["delete"](-S);text_to_clipboard(B.$node,u)}return false},"CTRL+TAB":function(){return false},"META+`":g,"META+R":g,"META+L":g};function ue(i){i=i||{};if(i.hold&&!x.mobileDelete){return function e(){k["delete"](1);return false}}return function e(){var t=/ *[^ ]+ *(?= )|[^ ]+$/;var n=T.slice(S);var r=n.match(t);if(r){u=r[0];if(i.clipboard){text_to_clipboard(B.$node,u)}}k.set(T.slice(0,S)+T.slice(S).replace(t,""),true);return false}}function ae(n){n=n||{};if(n.hold&&!x.mobileDelete){return function e(){k["delete"](-1)}}return function e(){if(T!==""&&S!==0){var t=T.slice(0,S).match(/([^ ]* *$)/);if(t[0].length){u=k["delete"](-t[0].length);if(n.clipboard){text_to_clipboard(B.$node,u)}}}return false}}function g(){return true}function oe(){B.val("");Y=0;if(k.isenabled()&&!B.$node.is(":focus")){B.$node.trigger("focus",[true])}B.$node.one("input",se);return true}function se(){if(Y++>0){return}function n(){B.val(T);_()}function r(e){k.insert(e);n()}if(k.isenabled()){k.oneTime(100,function(){var e=B.val().replace(/\r/g,"");if(is_function(x.onPaste)){var t=x.onPaste.call(k,{target:k,text:e});if(t!==undefined){if(t&&is_function(t.then||t.done)){(t.then||t.done).call(t,r)}else if(typeof t==="string"){r(t)}else if(t===false){n()}return}}r(e)})}}function le(){if(We){K=T;k.set(c.current())}else{k.set(c.previous())}We=false;return false}function fe(){if(c.end()){We=true;k.set(K)}else{k.set(c.next())}return false}function ce(e){return e.match(/\n/)}function pe(e,t){var n=e.split("\n").map(function(e){return $.terminal.length(e)});if(t){n[0]+=t}var r=n.filter(function(e){return e>=m});return!!r.length}function me(e){var t=H;var n=$.terminal.split_equal(t+e,m);var r=new RegExp("^"+$.terminal.escape_regex(t));n=n.map($.terminal.unescape_brackets);n[0]=n[0].replace(r,"");return n}function De(){var e=$.terminal.substring(T,0,S);var t=k.column();var n=k.find(".cmd-cursor-line");var r=n.prevUntil("span").length;if(r===1&&t<=d){k.position(0);return false}if(r===0){return le()}if(ce(e)||pe(e,d)){var i=n.prev();var u=i.is(".cmd-end-line");var a=me(T);i=a[r-1];var o=a[r].substring(t).length;var s;if(o>0){s=t;if(r-1===0){s-=d}s=t+i.substring(s).length;if(u){++s}}else{s=t+1}k.position(-s,true);return false}else{return le()}}function de(){var e=$.terminal.substring(T,S);if(ce(e)||pe(e)){var t=me(T);var n=k.column();var r=k.find(".cmd-cursor-line");var i=r.prevUntil("span");var u=i.length;var a=r.is(".cmd-end-line");var o=r.next().is(".cmd-end-line");var s=t[u+1];if(!s){return fe()}var l=t[u].substring(n).length;var f;if(l===0){f=s.length;if(o){f++}}else{f=Math.min(n,s.length)+l;if(u===0){f+=d}if(a){f+=1}}k.position(f,true);return false}else{return fe()}}function he(){if(a){l=l.slice(0,-1);Ee()}else if(T!==""&&S>0){k["delete"](-1)}k.oneTime(1,function(){F=true})}function ve(){if(S>0){k.position(-1,true)}}function ge(){if(S<bare_text(T).length){k.position(1,true)}return false}function _e(e){function t(){k.position(0)}if(e){return function(){if(T.match(/\n/)){var e=T.substring(0,k.position());k.position(e.lastIndexOf("\n")+1)}else{t()}}}else{return t}}function ye(e){function i(){k.position(text(T).length)}if(e){return function(){if(T.match(/\n/)){var e=T.split("\n");var t=k.position();var n=0;for(var r=0;r<e.length;++r){n+=e[r].length;if(n>t){k.position(n+r);return}}}i()}}else{return i}}function be(){var e=B.$node;var t=e.is(":focus");if(f){if(!t){}k.oneTime(10,function(){if(!e.is(":focus")&&f){e.trigger("focus",[true])}})}else if(t&&!f){e.trigger("blur",[true])}}function Ce(){if(animation_supported){var e=window.getComputedStyle(v[0]);var t=e.getPropertyValue("--animation");t=t.replace(/^\s*|\s*$/g,"");var n=k.attr("class");if(n.match(/-animation/)){n=n.replace(/[a-z]+-animation/g,"")}if(t&&!t.match(/blink/)){var r=t.replace(/terminal-/,"")+"-animation";if(!n.match(r)){n+=" "+r}}n=n.replace(/\s+/g," ");if(n!==k.attr("class").replace(/\s+/g," ")){k.attr("class",n)}}}function _(e){if(!k.isenabled()){return}k.oneTime(10,function(){if(!is_mobile&&B.val()!==T&&!e){B.val(" "+T)}if(f){k.oneTime(10,function(){try{var e=!is_mobile?S+1:S;if(B.$node.caret()!==e){B.$node.caret(e)}}catch(e){}})}})}if(animation_supported&&!is_android){t=function(e){if(e){v.addClass("cmd-blink")}else{v.removeClass("cmd-blink")}};Q=function(){var e=v.clone();e.insertBefore(v);v.remove();v=e}}else{var Fe=false;t=function(e){if(e&&!Fe){Fe=true;v.addClass("cmd-inverted cmd-blink");k.everyTime(500,"blink",we)}else if(Fe&&!e){Fe=false;k.stopTime("blink",we);v.removeClass("cmd-inverted cmd-blink")}};Q=function(){t(false);t(true)}}function we(){v.toggleClass("cmd-inverted")}function Ee(){n="(reverse-i-search)`"+l+"': ";b()}function xe(){n=U;a=false;q=null;l=""}function $e(e){var t=c.data();var n,r;var i=t.length;if(e&&q>0){i-=q}if(l.length>0){for(var u=l.length;u>0;u--){r=$.terminal.escape_regex(l.slice(0,u));if(x.caseSensitiveSearch){n=new RegExp(r)}else{n=new RegExp(r,"i")}for(var a=i;a--;){if(n.test(t[a])){q=t.length-a;k.position(t[a].indexOf(r));k.set(t[a],true);y();if(l.length!==u){l=l.slice(0,u);Ee()}return}}}}l=""}function ke(){var e=k.find(".cmd-prompt");var t=e.html();e.html("<span>&nbsp;</span>");var n=e.find("span").get(0).getBoundingClientRect().width;e.html(t);return n}function Ae(e){var t=k.width();return Math.floor(t/e)}function Be(e){function t(e){return $.terminal.split_equal(e,m)}function n(n){var r=[];n.forEach(function(e,t){if($.terminal.strip(e).match(X)){r[t]=false;if(t>0){r[t-1]+=V}}else{r[t]=n[t]}});return r.filter(function(e){return e!==false})}var r=h.find(".cmd-line");var i;if(r.length){i=r.nextUntil(".cmd-line").text()}else{i=h.text()}i=$.terminal.escape_brackets(i);var u=Pe();var a=new RegExp("^"+u+$.terminal.escape_regex(i));var o;if(e.match(/\n/)){var s=e.split("\n");var l=m-d-1;for(var f=0;f<s.length-1;++f){s[f]+=V}if(strlen(s[0])>l){o=t(i+s[0]);o[0]=o[0].replace(a,"");o=n(o)}else{o=[s[0]]}for(f=1;f<s.length;++f){if(strlen(s[f])>m){var c=t(s[f]);if(f<s.length-1){c=n(c)}o=o.concat(c)}else{o.push(s[f])}}}else{o=t(u+i+e,m);o[0]=o[0].replace(a,"")}if(o.length>1){var p=$.terminal.length(o[o.length-1]);if(p===m){o.push("")}}return o}var Te=new WorkerCache({validation:function(e){var t=false;if((!this._previous_value||this._previous_value===e)&&(!this._cols||this._cols===m)){t=true}this._previous_value=e;this._cols=m;return t},action:Be});function Se(e){return Te.get(e)}function Re(t,e){try{t=$.terminal.escape_formatting(t);var n=$.extend({},x,{unixFormattingEscapeBrackets:true,position:S,command:true});var r=$.terminal.apply_formatters(t,n);var i=$.terminal.normalize(r[0]);var u=$.terminal.length(i);if(!e){R=r[1];if(R>u){R=u}}return i}catch(e){alert_exception("[Formatting]",e.stack);return t}}function j(e,t){var n=$.terminal.encode(je(e),{tabs:x.tabs,before:t});return $.terminal.format(n,{charWidth:x.charWidth,allowedAttributes:x.allowedAttributes||[]})}function je(e){return $.terminal.partition(e).join("")}function O(e,t){return $.terminal.length(e,t)}function Oe(e){return strlen(text(e))>m-d-1||e.match(/\n/)}function Le(e,t,n){return $.terminal.substring(e,t,n)}function Ie(e){if($.terminal.is_formatting(e)){return e.replace(format_parts_re,"$4").match(/^emoji /)}return false}var y=function(){var g=v.prev();var _=v.next();var y=v.parent();function b(e,t){var n=e.match(G);if(n){e=e.replace(G," ")}y.toggleClass("cmd-end-line",!!n);var r=false;var i=$.extend({prompt:"",last:false},t);var u=i.position;var a=O(e);var o=i.prompt;var s;if(u===a){g.html(j(e));s="&nbsp;";F();_.html("")}else if(u===0){g.html("");s=Le(e,0,1);v.html(j(s));_.html(j(Le(e,1),o+s))}else{var l=$.terminal.substring(e,0,u);g.html(j(l,o));s=Le(e,u,u+1);var f=(o+l).replace(/^.*\t/,"");v.html(j(s,f));if(u===a-1){r=true;_.html("")}else{if(s.match(/\t/)){f=""}else{f+=s}_.html(j(Le(e,u+1),f))}}if(ch_unit_bug){if(typeof wcwidth!=="undefined"){var c=strlen(text(s));if(c===1&&Ie(s)){c=2}v.width(D*c)}else{v.width(D)}}v.toggleClass("cmd-end-line",r);Ce();var p=$.terminal.length(v.text());if(p>1){var m=v.find("[data-text]")[0];m.style.setProperty("--length",p)}Q()}function C(e,t){var n=e.match(G);var r='<div role="presentation" aria-hidden="true"';if(n){e=e.replace(G," ");r+=' class="cmd-end-line"'}r+=">"+j(e,t||"")+"</div>";return r}function F(){v.html('<span data-text class="end"><span>&nbsp;<span></span>')}function w(e){var n=y;$.each(e,function(e,t){n=$(C(t)).insertAfter(n)})}function E(e){$.each(e,function(e,t){y.before(C(t,e===0?W:""))})}return function(){var e;switch(typeof x.mask){case"boolean":e=x.mask?T.replace(/./g,"*"):T;break;case"string":e=T.replace(/./g,x.mask);break}var t=Re(e);var n;if(O(t)===text(e).length){n=S}else{n=R}var r;A.css({display:"none"});A.find("div:not(.cmd-cursor-line)").remove();g.html("");if(Oe(t)){var i=t.match(/\t/g);var u=t;if(i){t=t.replace(/\t/g,"\0\0\0\0")}var a=Se(t);if(i){a=$.map(a,function(e){return e.replace(/\x00\x00\x00\x00/g,"\t")})}var o=O(a[0]);if(o===0&&a.length===1){}else if(n<o){b(a[0],{length:a.length,position:n,prompt:W});w(a.slice(1))}else if(n===o){y.before(C(a[0],W));b(a[1]||"",{length:a.length,position:0,last:a.length<=2});if(a.length>2){w(a.slice(2))}}else{var s=a.slice(-1)[0];var l=O(u);var f=l-n;var c=O(s);var p=0;if(f===-1){f=0}if(f<=c){E(a.slice(0,-1));if(c===f){p=0}else{p=c-f}b(s,{length:a.length,position:p,last:true})}else{var m;var D;p=n;for(r=0;r<a.length;++r){var d=$.terminal.length(a[r]);if(p>d){p-=d}else{break}}D=a[r];m=r;if(p===O(D)){p=0;D=a[++m];if(D===undefined){var h=$.terminal.defaults.strings.redrawError;throw new Error(h)}}b(D,{length:a.length,position:p});E(a.slice(0,m));w(a.slice(m+1))}}k.find(".cmd-cursor-line ~ div:last-of-type").append("<span></span>")}else if(t===""){g.html("");F();_.html("")}else{b(t,{length:1,position:n})}var v=y.prevUntil(".cmd-prompt").length;if(is_css_variables_supported){k[0].style.setProperty("--cursor-line",v)}else{B.$node.css("top",v*14+"px")}A.css({display:""})}}();var ze=function(){function u(e,t){var n=$.extend({},x,{position:t,command:true});return $.terminal.apply_formatters(e,n)[1]}function s(e,t,n){var r=u(n,t);if(r===e){var i=u(n,t+1);if(i>e){return 0}return 1}else if(r<e){return 1}else{return-1}}return function(e,t){if(t===0){return 0}e=bare_text(e);var n=e.length;var r=$.terminal.escape_brackets(T);var i=binary_search(0,n,t,s,[r]);var u=$.terminal.split_characters(e);if(n>u.length){var a=0;for(var o=0;o<u.length;++o){a+=u[o].length;if(a>=i){return a}}}return i}}();function Pe(){if(s){return new Array(s+1).join("￿")}return""}var Ne;var b=function(){function r(e){if(!e){o=0;d=o+s;return e}var t=Pe();var n=t+e;var r=$.terminal.split_equal(n,m);r=r.map(function(e){return e.replace(/^\uFFFF+/,"")}).filter(Boolean);r=r.map(function(e){if(!$.terminal.have_formatting(e)){return"[[;;]"+$.terminal.escape_brackets(e)+"]"}return $.terminal.format_split(e).map(function(e){if($.terminal.is_formatting(e)){return e}return"[[;;]"+$.terminal.escape_brackets(e)+"]"}).join("")});var i={charWidth:x.charWidth};W=r[r.length-1];var u=$.terminal.encode(r[r.length-1],{tabs:x.tabs});var a=$.terminal.format(u,i);o=strlen(text(u));d=o+s;return r.slice(0,-1).map(function(e){e=$.terminal.encode(e,{tabs:x.tabs});return'<span class="cmd-line">'+$.terminal.format(e,i)+"</span>"}).concat([a]).join("\n")}function e(e){if(e){e=$.terminal.apply_formatters(e,{prompt:true});e=$.terminal.normalize(e);e=crlf(e)}var t=r(e);H=e;t=t||$.terminal.format("[[;;]​]");if(h.html()!==t){h.html(t);var n=h.find("> span span");B.$node.attr("data-cmd-prompt",h.text());if(is_ch_unit_supported){h.hide();n.each(function(){var e=$(this);var t=strlen(e.text());if(t===0){e.css("width",1)}else{e.css("width",t+"ch")}});h.show()}}}return function(){if(Ne&&Ne.set){Ne.set=$.noop;Ne=null}var t=Ne={set:e};with_prompt(n,function(e){t.set(e)},k)}}();function Me(){if(is_function(x.onCommandChange)){x.onCommandChange.call(k,T)}}function He(e,t,n){var r=e.substring(0,t);if(t===0||!e.length){return 0}var i=/\n?([^\n]*)$/;var u=r.match(i);var a=u[1].length;if(!ce(r)&&(n||pe(r,d))){a+=d}if(a===0){return a}a%=m;if(a===0){return m}return a}$.extend(k,{option:function(e,t){if(typeof t==="undefined"){return x[e]}else{x[e]=t}return k},name:function(e){if(e!==undefined){J=e;var t=c&&c.enabled()||!c;c=new History(J,x.historySize,x.history==="memory");if(!t){c.disable()}return k}else{return J}},purge:function(){c.clear();return k},history:function(){return c},delete:function(e,t){var n,r;if(e===0){return""}else if(e<0){if(S>0){n=T.slice(0,S).slice(e);r=bare_text(T);r=r.slice(0,S+e)+r.slice(S,r.length);if(!t){k.position(S+e)}}}else if(T!==""){r=text(T);if(S<r.length){n=r.slice(S).slice(0,e);r=r.slice(0,S)+r.slice(S+e,r.length)}}if(n){T=r}y();_();Me();return n},set:function(e,t,n){if(e!==undefined){T=e;if(!t){k.position(bare_text(T).length)}y();_();if(!n){Me()}}return k},keymap:function(e,t){function n(e,t){var n=p[e];if(is_function(n)){n=n.bind(k)}return function(e){return t.call(k,e,n)}}if(e===null){i=p;return k}else if(typeof e==="undefined"){return i}else if(typeof e==="string"){if(typeof t==="undefined"){if(i[e]){return i[e]}else if(p[e]){return p[e]}}else{i[e]=n(e,t)}}else{i=$.extend({},i?i:p,$.omap(e||{},n));return k}},insert:function(e,t){var n=bare_text(T);var r=bare_text(e).length;if(S===n.length){e=n+e}else if(S===0){e=e+n}else{e=n.slice(0,S)+e+n.slice(S)}T=e;if(!t){k.position(r,true,true)}_();y();Me();return k},get:function(){return T},commands:function(e){if(e){x.commands=e;return k}else{return e}},destroy:function(){L.unbind("keypress.cmd",at);L.unbind("keydown.cmd",it);L.unbind("input.cmd",ft);k.stopTime("blink",we);k.find(".cmd-wrapper").remove();k.find(".cmd-prompt, .cmd-clipboard, .cmd-editable").remove();k.removeClass("cmd").removeData("cmd").off(".cmd");return k},display_column:function(e){var t=Re(T);t=$.terminal.strip(t);return He(t,R,e)},column:function(e){return He(T,S,e)},line:function(){var e=T.substring(0,S);if(S===0||!T.length){return 0}return e.split(/\n/).length-1},__set_prompt_margin:function(e){s=e;d=o+s},prompt:function(e){if(e===true){return H}else if(e===undefined){return n}else{var t=e!==n;if(typeof e==="string"||typeof e==="function"){n=e}else{throw new Error("prompt must be a function or string")}if(t){b();y()}return k}},kill_text:function(){return u},position:function(e,t,n){if(typeof e==="number"){var r=S;var i=bare_text(T).length;if(t){S+=e}else if(e<0){S=0}else if(e>i){S=i}else{S=e}if(r!==S){y();if(!n&&is_function(x.onPositionChange)){x.onPositionChange(S,R)}_(true)}return k}else{return S}},refresh:function(){b();y();_(true);return k},display_position:function(e,t){if(e===undefined){return R}else{var n=Re($.terminal.escape_formatting(T),true);var r=O(n);var i=bare_text(T).length;var u;if(t){u=R+e}else if(e>r){u=r}else{u=e}if(r===i){R=u;return k.position(u)}if(r===u){R=u;return k.position(i)}var a=ze(T,u);if(a!==-1){R=u;k.position(a)}return k}},visible:function(){var e=k.visible;return function(){e.apply(k,[]);y();b();return k}}(),show:function(){var e=k.show;return function(){e.apply(k,[]);y();b();return k}}(),resize:function(e){D=ke();var t;if(typeof e==="number"){t=e}else{t=Ae(D)}if(m!==t||arguments[0]===true){m=t;y();b()}return k},clear_cache:"Map"in root?function(){Te.clear()}:function(){return k},invoke_key:function(e){if(!f){warn('invoke_key("'+e+'") called on disabled terminal')}var t=e.toUpperCase().split("+");var n=t.pop();var r=t.indexOf("CTRL")!==-1;var i=t.indexOf("SHIFT")!==-1;var u=t.indexOf("ALT")!==-1;var a=t.indexOf("META")!==-1;var o=$.Event("keydown",{ctrlKey:r,shiftKey:i,altKey:u,metaKey:a,which:ie[n],key:n});var s=$(document.documentElement||window);s.trigger(o);o=$.Event("keypress");o.key=n;o.which=o.keyCode=0;s.trigger(o);return k},clip:function(){return B},enable:function(e){if(!f){f=true;k.addClass("enabled");try{if(!B.$node.is(":focus")){B.$node.focus()}B.$node.caret(S)}catch(e){}t(true);if(!e&&is_function(n)){b()}Ce();_()}be();return k},isenabled:function(){return f},disable:function(e){f=false;k.removeClass("enabled");t(false);if(!e){be()}return k},mask:function(e){if(typeof e==="undefined"){return x.mask}else{x.mask=e;y();return k}}});k.name(x.name||x.prompt||"");if(x.prompt!==false){n=x.prompt;b()}if(x.enabled===true){k.enable()}D=ke();m=Ae(D);if(!x.history){c.disable()}var We=true;var qe=false;var Ue=false;var Ke=false;var C=false;var Je=false;var F=true;var w=false;var Qe=false;var Ye=false;var Ve=false;var E;var Ge="";var Xe;function Ze(e){return e.key.toUpperCase()==="BACKSPACE"||e.which===8}function et(e){return e.key&&e.key.length===1&&!e.ctrlKey}function tt(e){var t=["HOLD+SHIFT+BACKSPACE","HOLD+BACKSPACE"];return t.indexOf(e)!==-1&&x.mobileDelete||x.repeatTimeoutKeys.indexOf(e)!==-1}function nt(e){return e.which===35||e.which===36||e.which===37||e.which===38||e.which===39||e.which===40||e.which===13||e.which===27}var rt=false;function it(e){debug('keydown "'+e.key+'" '+e.fake+" "+e.which);var t;Qe=(e.key||"").toLowerCase()==="process"||e.which===0;Ue=C&&Ke&&!Ze(e);try{if(!e.fake){Ke=et(e);Je=String(e.key).toLowerCase()==="unidentified";w=Ze(e)}}catch(e){}if(e.key==="Unidentified"){F=true;return}if(!e.fake&&["meta","os"].indexOf(e.key.toLowerCase())===-1){F=false}C=true;B.$node.off("input",se);var n=ne(e);if(is_function(x.keydown)){e.key=te(e);t=x.keydown.call(k,e);if(t!==undefined){if(!t){E=true}return t}}if(n!==Xe){ut()}if(f||n==="CTRL+C"&&is_terminal_selected(k)){if(Ye){Xe=n;n="HOLD+"+n;if(Ve){return}if(x.holdRepeatTimeout>0&&tt(n)){Ve=true;k.oneTime(x.holdRepeatTimeout,"delay",function(){Ve=false})}}else{k.oneTime(x.holdTimeout,"hold",function(){Ye=true});Xe=n}if(!e.fake&&is_android){if(rt){ut();rt=false;return false}if(z(n)){rt=true}else if(z(Xe)){rt=false}}Q();E=["CTRL+V","META+V"].indexOf(n)!==-1;if(n.toLowerCase()==="enter"){We=true}if(a&&nt(e)){xe();b();if(e.which===27){k.set("")}y();if(e.which===13){it.call(this,e)}}else if(is_function(i[n])){t=i[n](e);if(t===true){return}if(t!==undefined){return t}}else if(e.altKey){return}else{qe=false;return}}}function ut(){k.stopTime("hold");k.stopTime("delay");Ve=Ye=false}var L=$(document.documentElement||window);k.keymap(x.keymap||{});function at(e){debug('keypress "'+e.key+'" '+e.fake);ut();var t;if(!e.fake){C=false}if((e.ctrlKey||e.metaKey)&&!e.altKey){return}if(qe){return}if(is_function(x.keypress)){t=x.keypress.call(k,e);if(t!==undefined){if(!t){E=true}return t}}if(f){if(e.fake){return}var n;if(is_key_native){n=e.key;var r=n.toUpperCase();if(ee[r]){n=ee[r]}}if(!n||Je){n=String.fromCharCode(e.which)}if($.inArray(e.which,[13,0,8])>-1){if(e.keyCode===123){return}return false}else if(n&&(!e.ctrlKey||e.ctrlKey&&e.ctrlKey)&&(!(e.altKey&&e.which===100)||e.altKey)&&!Ue){if(a){l+=n;$e();Ee()}else if(n.length===1){k.insert(n)}}}}function ot(e,t,n){var r=$.Event(e);r.which=n;r.key=t;r.fake=true;L.trigger(r)}var st=false;function lt(){Ge=T;E=false;F=true}function ft(){debug("input "+F+" || "+Qe+" (("+C+" || "+Ue+") && !"+E+" && ("+Ke+" || "+Je+") && !"+w+")");var e=B.val();if(!is_mobile){e=e.replace(/^ /,"")}if(F||Qe||(C||Ue)&&!E&&(Ke||Je)&&!w){if(e&&e===T){if(is_android){if(F){ot("keydown","Enter",13)}}lt();return}var t=S;if(F){var n=Ge;w=n.slice(0,n.length-1).length===e.length}if(st){st=false;B.val(T);return}if(a){l=e;$e();Ee()}else{var r=e.slice(S);if(r.length===1||w){var i=get_next_character(r);if(z(i)){st=true}if(F){var u;if(w){u=8}else{u=r.toUpperCase().charCodeAt(0)}ot("keydown",w?"Backspace":r,u)}if(C&&!w){ot("keypress",i,r.charCodeAt(0))}}if(w){Ge=T;return}if(E){E=false;return}k.set(e)}if(w){k.position(t-1)}else{k.position(t+Math.abs(e.length-Ge.length))}}lt()}L.bind("keypress.cmd",at);L.bind("keydown.cmd",it);L.bind("keyup.cmd",ut);L.bind("input.cmd",ft);(function(){if(is_mobile){$(k[0]).add(B.$node).on("touchstart.cmd",function(){if(!k.isenabled()){B.focus()}else{B.blur()}});k.disable();return}var u=false;var a=0;k.on("mousedown.cmd",function(){u=true}).on("mouseup.cmd",function(n){function e(){var e=$(n.target);var t=e.is(".cmd-prompt");if(!t&&i&&get_selected_html()===""){if(f){if(e.is(".cmd")){k.position(text(T).length)}else{k.display_position(Z(n))}}}a=0}var t;if(n.originalEvent===undefined){t=n.button}else{t=n.originalEvent.button}if(t===0&&get_selected_html()===""){var r="click_"+N;if(++a===1){var i=u;if(f){if(x.clickTimeout===0){e()}else{k.oneTime(x.clickTimeout,r,e)}}else{a=0}}else{k.stopTime(r);a=0}}u=false})})();k.data("cmd",k);if(!("KeyboardEvent"in window&&"key"in window.KeyboardEvent.prototype)){setTimeout(function(){throw new Error("key event property not supported try https://github."+"com/inexorabletash/polyfill/blob/master/keyboard.js")},0)}return k};var strlen=function(){if(typeof wcwidth==="undefined"){return function(e){e=e.replace(/\u200B/g,"");return $.terminal.length(e)}}else{return wcwidth}}();function count_selfclosing_formatting(e){var n=0;if($.terminal.have_formatting(e)){var r=new RegExp(format_parts_re.source,"i");$.terminal.format_split(e).forEach(function(e){if($.terminal.is_formatting(e)){var t=e.match(r);if(t&&t[1].match(/@/)&&t[6]===""){n++}}})}return n}var entities={"&amp;":"&","&lt;":"<","&gt;":">","&Agrave;":"À","&Aacute;":"Á","&Acirc;":"Â","&Atilde;":"Ã","&Auml;":"Ä","&Aring;":"Å","&AElig;":"Æ","&Ccedil;":"Ç","&Egrave;":"È","&Eacute;":"É","&Ecirc;":"Ê","&Euml;":"Ë","&Igrave;":"Ì","&Iacute;":"Í","&Icirc;":"Î","&Iuml;":"Ï","&ETH;":"Ð","&Ntilde;":"Ñ","&Ograve;":"Ò","&Oacute;":"Ó","&Ocirc;":"Ô","&Otilde;":"Õ","&Ouml;":"Ö","&Oslash;":"Ø","&Ugrave;":"Ù","&Uacute;":"Ú","&Ucirc;":"Û","&Uuml;":"Ü","&Yacute;":"Ý","&THORN;":"Þ","&szlig;":"ß","&agrave;":"à","&aacute;":"á","&acirc;":"â","&atilde;":"ã","&auml;":"ä","&aring;":"å","&aelig;":"æ","&ccedil;":"ç","&egrave;":"è","&eacute;":"é","&ecirc;":"ê","&euml;":"ë","&igrave;":"ì","&iacute;":"í","&icirc;":"î","&iuml;":"ï","&eth;":"ð","&ntilde;":"ñ","&ograve;":"ò","&oacute;":"ó","&ocirc;":"ô","&otilde;":"õ","&ouml;":"ö","&oslash;":"ø","&ugrave;":"ù","&uacute;":"ú","&ucirc;":"û","&uuml;":"ü","&yacute;":"ý","&thorn;":"þ","&yuml;":"ÿ","&nbsp;":" ","&iexcl;":"¡","&cent;":"¢","&pound;":"£","&curren;":"¤","&yen;":"¥","&brvbar;":"¦","&sect;":"§","&uml;":"¨","&copy;":"©","&ordf;":"ª","&laquo;":"«","&not;":"¬","&shy;":"­","&reg;":"®","&macr;":"¯","&deg;":"°","&plusmn;":"±","&sup2;":"²","&sup3;":"³","&acute;":"´","&micro;":"µ","&para;":"¶","&cedil;":"¸","&sup1;":"¹","&ordm;":"º","&raquo;":"»","&frac14;":"¼","&frac12;":"½","&frac34;":"¾","&iquest;":"¿","&times;":"×","&divide;":"÷","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&fnof;":"ƒ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&bull;":"•","&hellip;":"…","&permil;":"‰","&prime;":"′","&Prime;":"″","&lsaquo;":"‹","&rsaquo;":"›","&oline;":"‾","&euro;":"€","&trade;":"™","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"};function render_entities(e){return e.replace(/&#(x?)([0-9]+);/g,function(e,t,n){n=parseInt(n,t?16:10);return String.fromCharCode(n)}).replace(/(&[^;]+;)/g,function(e,t){return entities[t]||t})}function bare_text(e){if(!e.match(/&/)){return e}return render_entities(safe(e))}function text(e){return bare_text($.terminal.strip(e))}function safe(e){if(!e.match(/[<>&]/)){return e}return e.replace(/&(?![^;]+;)/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;")}function crlf(e){return e.replace(/\r/g,"")}function char_len(e){return entity_re.test(e)?1:e.length}function make_re_fn(n){return function(e){var t=e.match(n);if(starts_with(t)){return t[1]}}}function starts_with(e){return e&&e.index===0}function make_next_char_fun(t){var i=[];[entity_re,emoji_re,combine_chr_re].forEach(function(e){if(t.match(e)){i.push(make_re_fn(e))}});if(t.match(astral_symbols_re)){i.push(function(e){var t=e.match(astral_symbols_re);if(starts_with(t)){var n=e.match(combine_chr_re);if(n&&n.index===1){return e.slice(0,3)}return t[1]}})}return function(e){for(var t=0;t<i.length;++t){var n=i[t];var r=n(e);if(r){return r}}return e[0]}}function get_next_character(e){var t=e.match(entity_re);if(starts_with(t)){return t[1]}var n=e.match(combine_chr_re);if(starts_with(n)){return n[1]}var r=e.match(emoji_re);if(starts_with(r)){return r[1]}else if(e.charCodeAt(0)<255){return e[0]}else{var i=e.match(astral_symbols_re);if(starts_with(i)){n=e.match(combine_chr_re);if(n&&n.index===1){return e.slice(0,3)}return e.slice(0,2)}else{return e[0]}}}function normalize_position(e,r){if(r===0){return r}e=$.terminal.strip(e);var t=$.terminal.split_characters(e).reduce(function(e,t){if(typeof e==="number"){return e}var n=e.length+char_len(t);if(n>=r){return e.position+1}return{position:e.position+1,length:n}},{position:0,length:0});if(typeof t==="number"){return t}else{return t.position}}function style_to_string(t){return Object.keys(t).map(function(e){return e+":"+t[e]}).join(";")}function escape_html_attr(e){return e.replace(/"/g,"&quot;")}function char_width_object(e,t){var n={};if(e===0){n["width"]="1px"}else if(is_ch_unit_supported){n["width"]=e+"ch"}else if(!is_css_variables_supported){if(t.charWidth){n["width"]=t.charWidth*e+"px"}}else{n["--length"]=e}return n}function char_width_prop(e,t){return style_to_string(char_width_object(e,t))}function extra_css(e,t){if(typeof wcwidth!=="undefined"){var n=bare_text(e);var r=strlen(n);if(r>1&&r!==$.terminal.length(n)){return char_width_object(r,t)}}}function wide_characters(e,n){if(typeof wcwidth!=="undefined"){var t=bare_text(e);var r=$.terminal.split_characters(t);if(r.length===1){return e}var i=r.map(function(e){return{len:strlen(e),chr:e}}).reduce(function(e,t){var n=e[e.length-1];if(n){if(n.len!==t.len){return e.concat([{sum:t.len,len:t.len,specs:[t]}])}else{e.pop();return e.concat([{sum:n.sum+t.len,len:n.len,specs:n.specs.concat(t)}])}}return[{sum:t.len,specs:[t],len:t.len}]},[]);return i.map(function(e){if(e.len===1){return u(e)}var t=char_width_prop(e.sum,n);if(e.sum===r.length||!t.length){return"<span>"+u(e)+"</span>"}else if(e.specs.length>1){return a(t,e.specs.map(function(e){return a(char_width_prop(e.len),e.chr)}).join(""))}else{return a(t,u(e))}}).join("")}function u(e){return e.specs.map(function(e){return e.chr}).join("")}function a(e,t){return'<span style="'+e+'">'+t+"</span>"}return e}function binary_search(e,t,n,r,i){var u=t-e;var a=e+Math.floor(u/2);var o=[n,a].concat(i);var s=r.apply(null,o);if(s===0){return a}else if(s>0&&u>1){return binary_search(a,t,n,r,i)}else if(s<0&&u>1){return binary_search(e,a,n,r,i)}else{return-1}}function is_terminal_selected(e){if(is_function(window.getSelection)){var t=window.getSelection();if(t.toString()){var n=t.getRangeAt(0).startContainer.parentNode;var r=$(n).closest(".terminal");return r.length&&(e&&r.find(".cmd").is(e)||!e)}}}function get_selected_html(){var e="";if(is_function(window.getSelection)){var t=window.getSelection();if(t.rangeCount){var n=document.createElement("div");for(var r=0,i=t.rangeCount;r<i;++r){n.appendChild(t.getRangeAt(r).cloneContents())}e=n.innerHTML}}return e}function with_selection(e){var t="";var n=[];if(is_function(window.getSelection)){var r=window.getSelection();if(r.rangeCount){var i=document.createElement("div");for(var u=0,a=r.rangeCount;u<a;++u){var o=r.getRangeAt(u).cloneRange();n.push(o);i.appendChild(o.cloneContents())}t=i.innerHTML}}e(t);if(n.length){r.removeAllRanges();n.forEach(function(e){r.addRange(e)})}return t!==""}function process_selected_line(){var e=$(this);var t=e.text();if(e.hasClass("cmd-end-line")){t+="\n"}return t}function process_div(e){return $(e).find("> div, > span").map(process_selected_line).get().join("\n").replace(/\n$/,"")}function process_selected_html(e){var t;var n="";var r=$("<div>"+e+"</div>");if(e.match(/<\/div>/)){t=r.find("div[data-index]").map(function(){return process_div(this)}).get().join("\n");if(!t&&e.match(/style="width: 100%;?"/)){t=process_div(r)}n=t}var i=r.find(".cmd-prompt");if(i.length){if(n.length){n+="\n"}n+=i.text()}var u=r.find('[role="presentation"]');if(u.length){n+=u.map(process_selected_line).get().join("")}if(!n.length&&e){n=r.text()}return n.replace(/\xA0/g," ")}var support_copy=function(){if(typeof document==="undefined"){return false}if(!is_function(document.queryCommandSupported)){return false}return document.queryCommandSupported("copy")}();var text_to_clipboard;if(support_copy){text_to_clipboard=function e(t,n){var r=t.val();var i=t.is(":focus");var u=t.caret();if(window.navigator&&window.navigator.clipboard){navigator.clipboard.writeText(n)}else if(i){t.val(n).focus();t[0].select();document.execCommand("copy");t.val(r);t.caret(u)}else{var a=$("<textarea/>").css({position:"fixed",top:0,left:0}).appendTo("body");a.val(n).focus();a[0].select();document.execCommand("copy");a.blur();a.remove()}return true}}else{text_to_clipboard=$.noop}var get_textarea_selection=function(){function e(){return""}if(typeof document==="undefined"){return e}var t=document.createElement("textarea");var n="selectionStart"in t;t=null;if(n){return function(e){var t=e.selectionEnd-e.selectionStart;return e.value.substr(e.selectionStart,t)}}else if(document.selection){return function(){var e=document.selection.createRange();return e.text()}}else{return e}}();function clear_textarea_selection(e){e.selectionStart=e.selectionEnd=0}function common_string(e,t,n){if(!t.length){return""}var r=string_case(e);var i=[];for(var u=e.length;u<t[0].length;++u){var a=false;var o=t[0].charAt(u),s=o.toLowerCase();for(var l=1;l<t.length;++l){a=true;var f=t[l].charAt(u),c=f.toLowerCase();if(o!==f){if(n||r==="mixed"){a=false;break}else if(s===c){if(r==="lower"){o=o.toLowerCase()}else if(r==="upper"){o=o.toUpperCase()}else{a=false;break}}else{a=false;break}}}if(a){i.push(o)}else{break}}return e+i.join("")}function trigger_terminal_change(t){terminals.forEach(function(e){e.settings().onTerminalChange.call(e,t)})}var select=function(){if(root.getSelection){var e=root.getSelection();if(e.setBaseAndExtent){return function(e,t){var n=root.getSelection();n.setBaseAndExtent(e,0,t,1)}}else{return function(e,t){var n=root.getSelection();var r=document.createRange();r.setStart(e,0);r.setEnd(t,t.childNodes.length);n.removeAllRanges();n.addRange(r)}}}else{return $.noop}}();function process_command(e,t){var n=e.trim();var r=n.match(command_re)||[];if(r.length){var i=r.shift();var u=$.map(r,function(e){if(e.match(/^["']/)){e=e.replace(/\n/g,"\\u0000\\u0000\\u0000\\u0000");e=t(e);return e.replace(/\x00\x00\x00\x00/g,"\n")}return t(e)});var a=$.map(r,function(e){var t=e.match(/^(['"`]).*\1$/);return t&&t[1]||""});var o=n.slice(i.length).trim();return{command:e,name:i,args:u,args_quotes:a,rest:o}}else{return{command:e,name:"",args:[],args_quotes:[],rest:""}}}$.terminal={version:"2.35.3",date:"Mon, 06 Feb 2023 20:13:15 +0000",color_names:["transparent","currentcolor","black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen","rebeccapurple"],Cycle:Cycle,History:History,Stack:Stack,valid_color:function e(t){if(t.match(color_re)){return true}else{return $.inArray(t.toLowerCase(),$.terminal.color_names)!==-1}},unclosed_strings:function e(t){return!!t.match(unclosed_strings_re)},escape_regex:function e(t){if(typeof t==="string"){var n=/([-\\^$[\]()+{}?*.|])/g;return t.replace(n,"\\$1")}},have_formatting:function e(t){return typeof t==="string"&&!!t.match(format_exist_re)},is_formatting:function e(t){return typeof t==="string"&&!!t.match(format_full_re)},is_extended_command:function e(t){return typeof t==="string"&&t.match(format_exec_re)&&!$.terminal.is_formatting(t)},each_extended_command:function(e,n){var t=e.split(format_exec_split_re);return $.map(t,function(e){if($.terminal.is_extended_command(e)){var t=e.replace(/^\[\[|\]\]$/g,"");return n(t)||""}return e}).join("")},format_split:function e(t){return t.split(format_split_re).filter(Boolean)},tracking_replace:function e(t,n,r,i){if(!(n instanceof RegExp)){throw new Error("tracking_replace: Second argument need to be RegExp")}function u(e,t,n){return e.slice(t,n)}function a(e){return $.terminal.strip(e).length}var o="";var s;var l=0;var f;var c=i;var p;n.lastIndex=0;while(s=n.exec(t)){if(n.global){var m=a(u(t,0,n.lastIndex));p=m-a(s[0])}else{p=s.index;m=p+a(s[0])}if(l<p){o+=u(t,l,p)}l=m;if(typeof r==="function"){f=r.apply(null,s)}else{f=r.replace(/\$(\$|\d)/g,function(e,t){if(t==="$"){return"$"}return s[t]})}o+=f;if(p<i){var D=a(f);D+=count_selfclosing_formatting(f);if(m<i){c=Math.max(0,c+D-a(s[0]))}else{c+=D-(i-p)}}if(!n.global){break}}if(l<a(t)){o+=u(t,l)}if(t===o){return[t,i]}return[o,c]},iterate_formatting:function e(t,n){function r(e){return t.slice(e-6,e)==="&nbsp;"||t.slice(e-1,e).match(/\s/)}function i(e){return t.slice(e).match(entity_re)}function u(e){return t[e]==="["&&t[e+1]==="["}function a(e){return t[e-1]!=="\\"&&t[e]==="\\"&&t[e+1]==="]"}function o(e){return k&&!A&&(t[e]!=="]"&&!x||!m)||d&&!D}var s=make_next_char_fun(t);function l(){var e=s(E);if(e.length>1&&$.terminal.length(E)>1){return e.length-1}return 0}function f(){return r(w)&&(k||A)&&(g===-1&&y!==w||g!==-1)}var c=false;function p(){if(w===t.length-1&&!c){c=true}else{c=D&&!!E.match(/^.]$/)}return c}var m=$.terminal.have_formatting(t);var D="";var d=false;var h=0;var v;var g=-1;var _=-1;var y;var b=0;var C=0;var F=/(&[^;]+);$/;for(var w=0;w<t.length;w++){var E=t.slice(w);var x=false;v=E.match(format_start_re);if(v){D=v[1];d=false}else if(D){if(t[w]==="]"){x=d;if(d){D="";d=false}else{d=true}}}else{d=true}var k=D&&d||!D;var A=u(w);if(f()){g=w;_=h}var B=t[w].match(/[[\]]/);C=0;if(k){if(t[w]==="&"){v=i(w);if(v){w+=v[1].length-2;continue}++h;++b}else if(a(w)){++h;++b;C=1;w+=1}else if(!B||!m||d&&!D){++h;++b}}if(o(w)){if(strlen(t[w])===2){b++}var T=s(E);var S=T.length;if(T===";"){v=t.slice(0,w+1).match(F);if(v){C=v[1].length;S=C+1}}var R={last:p(),count:h,index:w-C,formatting:D,length:b,text:d,size:S,space:g,space_count:_};var j=n(R);if(j===false){break}else if(j){if(j.count!==undefined){h=j.count}if(j.length!==undefined){b=j.length}if(j.space!==undefined){y=g;g=j.space}if(j.index!==undefined){w=j.index;continue}}}else if(w===t.length-1&&!c){n({last:true,count:h+1,index:w,formatting:D,length:0,text:d,space:g})}if(d){w+=l()}}},partition:function e(n,t){var r=$.extend({wrap:true},t);if(!$.terminal.have_formatting(n)){var i=$.terminal.split_characters(n);return i.map(a)}var u=[];function a(e){if(e.match(/\\$/)){e+="\\"}return"[[;;]"+e+"]"}function o(e){if($.terminal.is_formatting(e)){if(e.match(/\\]$/)){e=e.replace(/\\]/g,"\\\\]")}}else if(r.wrap){e=a(e)}return e}$.terminal.iterate_formatting(n,function(e){if(e.text){var t=[];if(e.formatting){t.push(e.formatting)}t.push(n.substring(e.index,e.index+e.size));if(e.formatting){t.push("]")}u.push(o(t.join("")))}});return u},substring:function e(t,n,r){var i=$.terminal.split_characters(t);if(!i.slice(n,r).length){return""}if(!$.terminal.have_formatting(t)){return i.slice(n,r).join("")}var u=0;var a;var o="";var s="";var l;var f=1;$.terminal.iterate_formatting(t,function(e){if(n&&e.count===n+1){u=e.index;if(e.formatting){o=e.formatting}}if(r&&e.count===r){s=e.formatting;l=e.index;f=e.size}if(e.count===r+1){a=e.index;if(e.formatting){a=l+f}}});if(n&&!u){return""}if(a===undefined){a=t.length}t=o+t.slice(u,a);if(s){t=t.replace(/(\[\[^\]]+)?\]$/,"");t+="]"}return t},normalize:function e(t){t=t.replace(format_re,function(e,t,n){if(t.match(self_closing_re)&&n===""){return"[["+t+"] ]"}if(n===""){return""}function r(e){return e.replace(/\\\]/g,"&#93;").replace(/\n/g,"\\n").replace(/&nbsp;/g," ")}t=r(t);var i=t.match(/;/g).length;if(i>=4){var u=t.split(/;/);var a=u.slice(0,4).join(";");var o=u.slice(4).join(";");return"[["+a+";"+(o||n)+"]"+n+"]"}else if(i===2){i=";;"}else if(i===3){i=";"}t+=i+r(n);return"[["+t+"]"+n+"]"});return $.terminal.amp(t)},split_equal:function e(t,c,p){var m="";var D=[];var n=$.terminal.normalize(t).split(/\n/g);for(var r=0,i=n.length;r<i;++r){if(n[r]===""){D.push("");continue}var d=n[r];var h=make_next_char_fun(d);var v=0;var g;var _=d.length;var y=!!d.match(/\[\[[^\]]+\](?:[^\][]|\\\])+\]$/);var b=!!d.match(/^(&nbsp;|\s)/);$.terminal.iterate_formatting(d,function(e){var t,n;if(e.length>=c||e.last||e.length===c-1&&strlen(d[e.index+1])===2){var r=false;if(p&&e.space!==-1){var i=text(d).substring(e.space_count);i=i.slice(0,c).replace(/\s+$/,"");var u=strlen(i);if(i.match(/\s/)||u<c){r=true}}var a=e.index+e.size;if(y){a+=1}var o;if(p&&e.space!==-1&&a!==_&&r){g=d.slice(v,e.space);o=e.space-1}else{n=d.slice(e.index);t=h(n);g=d.slice(v,e.index)+t;if(e.last&&y&&t!=="]"){g+="]"}o=e.index+t.length-1}if(p){g=g.replace(/(&nbsp;|\s)+$/g,"");if(!b){g=g.replace(/^(&nbsp;|\s)+/g,"")}}v=(o||e.index)+1;if(m){var s=g.match(/^[^\]]*\]/);g=m+g;if(s){m=""}}var l=g.match(format_re);if(l){var f=l[l.length-1];if(f[f.length-1]!=="]"){m=f.match(format_begin_re)[1];g+="]"}else if(g.match(format_end_re)){g=g.replace(format_end_re,"");m=f.match(format_begin_re)[1]}}D.push(g);return{index:o,length:0,space:-1}}})}return D},amp:function e(t){return t.replace(/&(?!#[0-9]+;|#x[0-9a-f]+;|[a-z]+;)/gi,"&amp;")},encode:function e(t,n){var s=$.extend({tabs:4,before:""},n);return $.terminal.amp(t).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/ /g,"&nbsp;").split("\n").map(function(e){var o=e.split(/((?:\[\[[^\]]+\])?\t(?:\])?)/);o=o.filter(Boolean);return o.map(function(e,a){if(e.match(/\t/)){return e.replace(/\t([^\t]*)$/,function(e,t){if(a!==0&&o[a-1].match(/\t\]?$/)){var n=new Array(s.tabs+1).join("&nbsp;");return n+t}else{var r=o.slice(a-1,a).join("");if(s.before&&a<=1){r=s.before+r}var i=$.terminal.length(r);var u=s.tabs-i%s.tabs;if(u===0){u=4}return new Array(u+1).join("&nbsp;")+t}})}return e}).join("")}).join("\n")},nested_formatting:function e(t){if(!$.terminal.have_formatting(t)){return t}var u=[];var n=/((?:\[\[(?:[^\][]|\\\])+\])?(?:[^\][]|\\\])*\]?)/;var a=/\[\[([^\][]+)\][\s\S]*/;var o=/^\[\[([^;]*);([^;]*);([^\]]*)\]/;var f=3;var c=5;function r(e,t,n){return n.indexOf(e)===t}function p(e,t){e=i(e);if(!t){return e}return $.extend(t,e)}function i(e){var i={};e.split(/\s*;\s*/).forEach(function(e){var t=e.split(":").map(function(e){return e.trim()});var n=t[0];var r=t[1];i[n]=r});return i}function m(e){var t=e.slice();if(e[c]){t[c]=l(e[c])}if(e[f]){t[f]=D(e[f])}t[0]=s(e[0]);return t.join(";")}function s(e){var t=e.filter(function(e){return e[0]==="-"}).map(function(e){return e[1]});return e.filter(function(e){return t.indexOf(e)===-1&&t.indexOf(e[1])===-1}).join("")}function l(e){return JSON.stringify(e,function(e,t){if(e==="style"){return d(t)}return t})}function D(e){return e.filter(r).join(" ")}function d(t){return Object.keys(t).map(function(e){return e+":"+t[e]}).join(";")}function h(e){function t(t){if(!i[c]){i[c]={}}try{var e=JSON.parse(t);if(e.style){var n=e.style;var r=i[c].style;e.style=p(n,r);i[c]=$.extend(e,i[c],{style:p(n,r)})}else{i[c]=$.extend(e,i[c])}}catch(e){warn("Invalid JSON "+t)}}var i=[[],"",""];if(!e.length){return i}for(var n=e.length;n--;){var r=$.terminal.parse_formatting(e[n]);if(r.length>5){var u=r.slice(5).join(";");r=r.slice(0,5).concat(u)}var a=r[0].split(/(-?[@!gbiuso])/g).filter(Boolean);a.forEach(function(e){if(i[0].indexOf(e)===-1){i[0].push(e)}});for(var o=1;o<r.length;++o){var s=r[o].trim();if(s){if(o===f){if(!i[f]){i[f]=[]}var l=s.split(/\s+/);i[f]=i[f].concat(l)}else if(o===c){t(s)}else if(!i[o]){i[o]=s}}}}return m(i)}return t.split(n).filter(Boolean).map(function(e){var t;if(e.match(/^\[\[/)&&!$.terminal.is_extended_command(e)){var n=e.replace(a,"$1");var r=$.terminal.is_formatting(e);e=e.replace(o,"");u.push(n);if($.terminal.nested_formatting.__inherit__){t=h(u)}else{t=n}if(!r){e+="]"}else{u.pop()}e="[["+t+"]"+e}else{var i=false;if(e.match(/\]/)){i=true}if(u.length){if($.terminal.nested_formatting.__inherit__){t=h(u)}else{t=u[u.length-1]}e="[["+t+"]"+e}if(i){u.pop()}else if(u.length){e+="]"}}return e}).join("")},escape_formatting:function e(t){return $.terminal.escape_brackets(t)},apply_formatters:function e(t,u){if(t===""){if(u&&typeof u.position==="number"){return["",u.position]}else{return""}}function i(e,t,n,r){if(!e.__no_warn__&&$.terminal.length(n)!==$.terminal.length(r)){warn("Your formatter["+t+"] change length of the string, "+"you should use [regex, replacement] formatter or function "+" that return [replacement, position] instead")}}function p(t){if(!u||!t){return true}var e=["echo","command","prompt"];var n=e.some(function(e){return t[e]===true});if(!n){return true}for(var r=e.length;r--;){var i=e[r];if(t[i]===true&&u[i]===true){return true}}return false}u=u||{};var n=u.formatters||$.terminal.defaults.formatters;var m=0;function D(e,t){var n=$.extend({},u,{position:t[1]});var r=e(t[0],n);if(typeof r==="string"){i(e,m-1,r,t[0]);if(typeof r==="string"){return[r,n.position]}return t}else if(is_array(r)&&r.length===2){return r}else{return t}}var r;if(typeof u.position==="number"){r=[t,u.position]}else{r=[t,0]}try{var a=n.reduce(function(o,s){m++;if(typeof s==="function"&&s.__meta__){return D(s,o)}else{var l=0;var f=false;var e=$.terminal.format_split(o[0]);var t=e.map(function(e){var t;var n=text(e).length;if(o[1]<l+n&&!f){t=o[1]-l;f=true}else if(f){t=-1}else{t=o[1]}var r=l;var i;l+=n;if($.terminal.is_formatting(e)){if(f){return[e,t]}return[e,-1]}else{if(is_array(s)){var u=s[2]||{};i=[e,t<0?0:t];if(i[0].match(s[0])&&p(s[2])){if(u.loop){while(i[0].match(s[0])){i=$.terminal.tracking_replace(i[0],s[0],s[1],i[1])}}else{i=$.terminal.tracking_replace(i[0],s[0],s[1],i[1])}}if(t<0){return[i[0],-1]}}else if(typeof s==="function"){i=D(s,[e,t])}if(typeof i!=="undefined"){if(i[1]!==-1){i[1]+=r}var a=text(i[0]).length;if(a!==n){}return i}return[e,-1]}});var n=t.filter(function(e){return e[1]!==-1})[0];var r=t.map(function(e){return e[0]}).join("");var i;if(typeof n==="undefined"){i=o[1]}else{i=n[1]}var u=text(r).length;u+=count_selfclosing_formatting(r);if(i>u){i=u}if(r===o[0]){return o}var a=$.terminal.strip(o[0]);var c=$.terminal.strip(r);if(a===c){return[r,o[1]]}return[r,i]}},r);if(typeof u.position==="number"){var o=$.terminal.strip(a[0]).length;if($.terminal.length(a[0])<o){var s=a[1];s=normalize_position(a[0],s);var l=$.terminal.length(a[0]);if(s>l){s=l}a[1]=s}return a}else{return a[0]}}catch(e){var f="Error in formatter ["+(m-1)+"]";n.splice(m-1);throw new $.terminal.Exception("formatting",f,e.stack)}},escape_brackets:function e(t){return t.replace(/\[/g,"&#91;").replace(/\]/g,"&#93;").replace(/\\/g,"&#92;")},unescape_brackets:function e(t){return t.replace(/&#91;/g,"[").replace(/&#93;/g,"]").replace(/&#92;/g,"\\")},length:function(e,t){if(!e){return 0}return $.terminal.split_characters(t?e:text(e)).length},split_characters:function e(t){var n=[];var r=make_next_char_fun(t);while(t.length){var i=r(t);t=t.slice(i.length);n.push(i)}return n},columns:function(e,t,n){e=e.map(function(e){if(typeof e!=="string"){return String(e)}return e});var r=e.map(function(e){return $.terminal.strip(e)});var i=r.map(function(e){return strlen(e)});if(typeof n==="undefined"){n=4}var u=Math.max.apply(null,i)+n;var a=Math.floor(t/u)-1;if(a<1){return e.join("\n")}var o=[];for(var s=0,l=e.length;s<l;s+=a){var f=e.slice(s,s+a);var c=f.pop();o.push(f.reduce(function(e,t){var n=$.terminal.strip(t);var r=new Array(u-n.length+1).join(" ");e.push(t+r);return e},[]).join("")+c)}return o.join("\n")},strip:function e(t){if(!$.terminal.have_formatting(t)){return t}return $.terminal.format_split(t).map(function(e){if($.terminal.is_formatting(e)){e=e.replace(format_parts_re,"$6");return e.replace(/\\([[\]])/g,function(e,t){return t})}return e}).join("")},active:function e(){return terminals.front()},last_id:function e(){var t=terminals.length();return t-1},parse_argument:function e(t,n){function r(e){return e.split(string_re).map(function(e){if(e.match(/^['"`]/)){if(e==='""'||e==="''"||e==="``"){return""}var t=e[0];var n=new RegExp("(\\\\\\\\(?:\\\\\\\\)*)"+t,"g");e=e.replace(n,"$1").replace(/^[`'"]|[`'"]$/g,"");if(t==="'"){e=e.replace(/"/g,'\\"')}}e='"'+e+'"';return JSON.parse(e)}).join("")}if(n===false){if(t[0]==="'"&&t[t.length-1]==="'"){return t.replace(/^'|'$/g,"")}else if(t[0]==="`"&&t[t.length-1]==="`"){return t.replace(/^`|`$/g,"")}else if(t[0]==='"'&&t[t.length-1]==='"'){return t.replace(/^"|"$/g,"").replace(/\\([" ])/g,"$1")}else if(t.match(/\/.*\/[gimy]*$/)){return t}else if(t.match(/['"`]]/)){return r(t)}else{return t.replace(/\\ /g," ")}}if(t==="true"){return true}else if(t==="false"){return false}var i=t.match(re_re);if(i){return new RegExp(i[1],i[2])}else if(t.match(/['"`]/)){return r(t)}else if(t.match(/^-?[0-9]+$/)){return parseInt(t,10)}else if(t.match(float_re)){return parseFloat(t)}else{return t.replace(/\\(['"() ])/g,"$1")}},parse_arguments:function e(t){return $.map(t.match(command_re)||[],$.terminal.parse_argument)},split_arguments:function e(t){return $.map(t.match(command_re)||[],function(e){return $.terminal.parse_argument(e,false)})},parse_command:function e(t){return process_command(t,$.terminal.parse_argument)},split_command:function e(t){return process_command(t,function(e){return $.terminal.parse_argument(e,false)})},parse_options:function e(t,n){var a=$.extend({},{boolean:[]},n);if(typeof t==="string"){return e($.terminal.split_arguments(t),n)}var o={_:[]};function s(e){this.value=e}var r=t.reduce(function(e,t){var n=typeof t==="string"?t:"";if(n.match(/^--?[^-]/)&&e instanceof s){o[e.value]=true}if(n.match(/^--[^-]/)){var r=n.replace(/^--/,"");if(a.boolean.indexOf(r)===-1){return new s(r)}else{o[r]=true}}else if(n.match(/^-[^-]/)){var i=n.replace(/^-/,"").split("");if(a.boolean.indexOf(i.slice(-1)[0])===-1){var u=i.pop()}i.forEach(function(e){o[e]=true});if(u){return new s(u)}}else if(e instanceof s){o[e.value]=t}else if(t){o._.push(t)}return null},null);if(r instanceof s){o[r.value]=true}return o},parse_formatting:function(e){var t=$.terminal.unescape_brackets(e).split(";");var n=4;if(t.length>=5){var r=$.terminal.escape_brackets(t[n]);t[n]=r}return t},extended_command:function extended_command(term,string,options){var settings=$.extend({invokeMethods:false},options);var deferred=new $.Deferred;try{change_hash=false;var m=string.match(extended_command_re);if(m){if(!settings.invokeMethods){warn("To invoke terminal or cmd methods you need to enable "+"invokeMethods option");deferred.reject()}else{string=m[1];var obj=m[2]==="terminal"?term:term.cmd();var fn=m[3];try{var args=eval("["+m[4]+"]");if(!obj[fn]){term.error("Unknow function "+fn)}else{var ret=obj[fn].apply(term,args);if(ret&&ret.then){return ret}}deferred.resolve()}catch(e){term.error("Invalid invocation in "+$.terminal.escape_brackets(string));deferred.reject()}}}else{return term.exec(string,true).done(function(){change_hash=true})}}catch(e){deferred.reject()}return deferred.promise()},iterator:function(t){function n(e){if($.terminal.is_formatting(e)){if(e.match(/\]\\\]/)){e=e.replace(/\]\\\]/g,"]\\\\]")}}return e}if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){var r=$.terminal.length(t);var i=0;var e={};e[Symbol.iterator]=function(){return{next:function(){if(i<r){var e=$.terminal.substring(t,i,i+1);i++;return{value:n(e)}}else{return{done:true}}}}};return e}},formatter:new function(){try{this[Symbol.split]=function(e){return $.terminal.format_split(e)};this[Symbol.match]=function(e){return e.match(format_re)};this[Symbol.replace]=function(e,t){return e.replace(format_parts_re,t)};this[Symbol.search]=function(e){return e.search(format_re)}}catch(e){}},process_formatting:function(e){return $.terminal.format_split(e).map(function(e){if($.terminal.is_formatting(e)){var t=e.match(new RegExp(format_parts_re,"i"));var n=t.pop();for(var r=1;r<=2;++r){if(!$.terminal.valid_color(t[r])){t[r]=""}}return t.slice(1,4).concat(n)}else{return["","","",e]}})},new_formatter:function(e){var t=$.terminal.defaults.formatters;for(var n=0;n<t.length;++n){if(t[n]===$.terminal.nested_formatting){t.splice(n,0,e);return}}t.push(e)}};(function(){function F(e,t){if(e===""){return t}else{return e.replace(/&#93;/g,"]").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}}function s(e){return e.match(/^\.{1,2}\//)||e.match(/^\//)||!(e.match(/\//)||e.match(/^[^:]+:/))}function l(n,r){return function(e){if(r.anyLinks){return true}var t=n(e);if(!t){warn("Invalid URL "+e+" only http(s) ftp and path "+"are allowed")}return t}}$.terminal.format=function i(e,t){var g=$.extend({},{linksNoReferrer:false,linksNoFollow:false,allowedAttributes:[],charWidth:undefined,escape:true,anyLinks:false},t||{});var u=l(function(e){return e.match(/^((https?|file|ftp):\/\/|\.{0,2}\/)/)||s(e)},g);var n=l(function(e){return e.match(/^(https?:|file:|blob:|data:)/)||s(e)},g);function _(e){if(e.length&&g.allowedAttributes.length){return e.filter(function(e){if(e==="data-text"){return false}var t=false;var n=g.allowedAttributes;for(var r=0;r<n.length;++r){if(n[r]instanceof RegExp){if(n[r].test(e)){t=true;break}}else if(n[r]===e){t=true;break}}return t})}return[]}function y(n,r){if(r){var e=_(Object.keys(r));if(e.length){var t=e.map(function(e){if(r[e]===null){return""}if(r[e]===true){return e}var t=escape_html_attr(r[e]);if(e==="style"){t=t?n+";"+t:n}return e+'="'+t+'"'}).filter(Boolean);if(!t.length){return""}return t.join(" ")}}if(!n){return""}return'style="'+n+'"'}function r(){var e=["noopener"];if(g.linksNoReferrer){e.unshift("noreferrer")}if(g.linksNoFollow){e.unshift("nofollow")}return e}var a=r().join(" ");function b(e,t,n){if(e.match(email_re)){return'<a href="mailto:'+e+'"'}else{var r=["<a"];if(e&&u(e)){r.push('href="'+e+'"')}if(t){if(n.includes("target")&&t.target===undefined){t.target="_blank"}if(n.includes("rel")&&t.rel===undefined){t.rel=a}}else{r.push('rel="'+a+'"');r.push('target="_blank"')}return r.join(" ")}}function C(e){var t="<img";if(n(e)){t+=' src="'+e+'"';if(text){t+=' alt="'+text+'"'}}return t}function i(e,t,n,r,i,u,a){var o;var s=[];if(u.match(/;/)){try{var l=u.split(";");var f=l.slice(1).join(";").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(f.match(/^\s*\{[^}]*\}\s*$/)){o=JSON.parse(f);s=_(Object.keys(o));u=l[0]}}catch(e){}}if(a===""&&!t.match(/@/)){return""}a=safe(a);a=a.replace(/\\\]/g,"&#93;");if(g.escape){a=a.replace(/\\\\/g,"\\")}var c={};if(t.indexOf("b")!==-1){c["font-weight"]="bold"}var p=[];if(t.indexOf("u")!==-1){p.push("underline")}if(t.indexOf("s")!==-1){p.push("line-through")}if(t.indexOf("o")!==-1){p.push("overline")}if(p.length){c["text-decoration"]=p.join(" ")}if(t.indexOf("i")!==-1){c["font-style"]="italic"}if($.terminal.valid_color(n)){$.extend(c,{color:n,"--color":n,"--original-color":n});if(t.indexOf("!")!==-1){c["--link-color"]=n}if(t.indexOf("g")!==-1){c["text-shadow"]="0 0 5px "+n}}if($.terminal.valid_color(r)){$.extend(c,{"background-color":r,"--background":r})}var m=F(u,a);var D=extra_css(a,g);if(D){a=wide_characters(a,g);$.extend(c,D)}var d;var h=style_to_string(c);if(t.indexOf("!")!==-1){d=b(m,o,s)}else if(t.indexOf("@")!==-1){d=C(m)}else{d="<span"}var v=y(h,o,s);if(v){d+=" "+v}if(i!==""){d+=' class="'+i+'"'}if(t.indexOf("!")!==-1){d+=" data-text>"+a+"</a>"}else if(t.indexOf("@")!==-1){d+=" data-text/>"}else{d+=' data-text="'+m+'">'+"<span>"+a+"</span></span>"}return d}if(typeof e==="string"){var o=$.terminal.format_split(e);e=$.map(o,function(e){if(e===""){return e}else if($.terminal.is_formatting(e)){e=e.replace(/\[\[[^\]]+\]/,function(e){return e.replace(/&nbsp;/g," ")});return e.replace(format_parts_re,i)}else{e=safe(e);e=e.replace(/\\\]/,"&#93;");var t=F(e);var n=extra_css(e,g);var r;if(n){e=wide_characters(e,g);r='<span style="'+style_to_string(n)+'"'}else{r="<span"}return r+' data-text="'+t+'">'+e+"</span>"}}).join("");return e.replace(/<span><br\s*\/?><\/span>/gi,"<br/>")}else{return""}}})();$.terminal.Exception=function e(t,n,r){if(arguments.length===1){this.message=arguments[0];this.type="TERMINAL"}else{this.type=t;this.message=n;if(r){this.stack=r}}};$.terminal.Exception.prototype=new Error;$.terminal.Exception.prototype.toString=function(){return this.message+"\n"+this.stack};$.fn.visible=function(){return this.css("visibility","visible")};$.fn.hidden=function(){return this.css("visibility","hidden")};var warnings=[];function warn(e){e="[jQuery Terminal] "+e;if(warnings.indexOf(e)===-1){warnings.push(e);if(console){if(console.warn){console.warn(e)}else if(console.log){console.log(e)}}else{setTimeout(function(){throw new Error("WARN: "+e)},0)}}}var ids={};$.jrpc=function(e,t,n,r,i){var a=new $.Deferred;var o;if($.isPlainObject(e)){o=e}else{o={url:e,method:t,params:n,success:r,error:i}}function s(e){return $.isNumeric(e.id)&&(typeof e.result!=="undefined"||typeof e.error!=="undefined")}ids[o.url]=ids[o.url]||0;var u={jsonrpc:"2.0",method:o.method,params:o.params,id:++ids[o.url]};$.ajax({url:o.url,beforeSend:function e(t,n){if(is_function(o.request)){o.request(t,u)}n.data=JSON.stringify(u)},success:function e(t,n,r){var i=r.getResponseHeader("Content-Type");if(!i.match(/(application|text)\/json/)){warn("Response Content-Type is neither application/json"+" nor text/json")}var u;try{u=JSON.parse(t)}catch(e){if(o.error){o.error(r,"Invalid JSON",e)}else{throw new $.terminal.Exception("JSON","Invalid JSON",e.stack)}a.reject({message:"Invalid JSON",response:t});return}if(is_function(o.response)){o.response(r,u)}if(s(u)||o.method==="system.describe"){if(o.success){o.success(u,n,r)}a.resolve(u)}else{if(o.error){o.error(r,"Invalid JSON-RPC")}a.reject({message:"Invalid JSON-RPC",response:t})}},error:o.error,contentType:"application/json",dataType:"text",async:true,cache:false,type:"POST"});return a.promise()};$.rpc=function(e,t,n){var r=new $.Deferred;function i(e){if(e.error){r.reject(e.error)}else{r.resolve(e.result)}}function u(e,t,n){r.reject({message:n})}$.jrpc(e,t,n,i,u);return r.promise()};function terminal_ready(e){return!!(e.closest("body").length&&e.is(":visible")&&e.find(".cmd-prompt").length)}function format_stack_trace(e){e=$.terminal.escape_brackets(e);return e.split(/\n/g).map(function(e){return"[[;;;terminal-error]"+e.replace(url_re,function(e){return"]"+e+"[[;;;terminal-error]"})+"]"}).join("\n")}function get_char_size(e){var t;if(terminal_ready(e)){var n=e.find(".cmd-prompt").clone().css({visiblity:"hidden",position:"absolute"});n.appendTo(e.find(".cmd")).html("&nbsp;").wrap('<div class="cmd-wrapper"/>');t={width:n.width(),height:n.height()};n.parent().remove()}else{var r=$('<div class="terminal terminal-temp"><div class="terminal-'+'wrapper"><div class="terminal-output"><div><div class="te'+'rminal-line" style="float: left"><span>&nbsp;</span></div'+'></div></div><div class="terminal-pixel"></div></div>').appendTo("body");r.addClass(e.attr("class")).attr("id",e.attr("id"));if(e){var i=e.attr("style");if(i){i=i.split(/\s*;\s*/).filter(function(e){return!e.match(/display\s*:\s*none/i)}).join(";");r.attr("style",i)}}var u=r.find(".terminal-line");t={width:u.width(),height:u.height()};r.remove()}return t}function get_num_chars(e,t){var n=e.find(".terminal-fill").width();var r=Math.floor(n/t.width);return r||1e3}function get_num_rows(e,t){var n=e.find(".terminal-fill");var r=n.height();return Math.floor(r/t.height)}function all(e,t){var n=e.filter(function(e){return e[t]()===e});return n.length===e.length}function string_case(e){var t=e.split("");if(all(t,"toLowerCase")){return"lower"}else if(all(t,"toUpperCase")){return"upper"}else{return"mixed"}}function same_case(e){return string_case(e)!=="mixed"}function is_function(e){return get_type(e)==="function"}function is_object(e){return e&&typeof e==="object"}function is_promise(e){return is_object(e)&&is_function(e.then||e.done)}function is_deferred(e){return is_promise(e)&&is_function(e.promise)}if(!Array.isArray){Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}function is_array(e){return Array.isArray(e)}function get_type(e){if(typeof e==="function"){return"function"}if(e===null){return e+""}if(Array.isArray(e)){return"array"}if(typeof e==="object"){return"object"}return typeof e}var version_set=!$.terminal.version.match(/^\{\{/);var copyright="Copyright (c) 2011-2022 Jakub T. Jankiewicz "+"<https://jcubic.pl/me>";var version_string=version_set?" v. "+$.terminal.version:" ";var reg=new RegExp(" {"+version_string.length+"}$");var name_ver="jQuery Terminal Emulator"+(version_set?version_string:"");var signatures=[["jQuery Terminal","(c) 2011-2022 jcubic"],[name_ver,copyright.replace(/^Copyright | *<.*>/g,"")],[name_ver,copyright.replace(/^Copyright /,"")],["      _______                 ________                        __","     / / _  /_ ____________ _/__  ___/______________  _____  / /"," __ / / // / // / _  / _/ // / / / _  / _/     / /  \\/ / _ \\/ /","/  / / // / // / ___/ // // / / / ___/ // / / / / /\\  / // / /__","\\___/____ \\\\__/____/_/ \\__ / /_/____/_//_/_/_/_/_/  \\/\\__\\_\\___/","         \\/          /____/                                   ".replace(reg," ")+version_string,copyright],["      __ _____                     ________                            "+"  __","     / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___ "+" / /"," __ / // // // // // _  // _// // / / // _  // _//     // //  \\/ // _ "+"\\/ /","/  / // // // // // ___// / / // / / // ___// / / / / // // /\\  // // "+"/ /__","\\___//____ \\\\___//____//_/ _\\_  / /_//____//_/ /_/ /_//_//_/ /_/ \\"+"__\\_\\___/",("          \\/              /____/                                     "+"     ").replace(reg,"")+version_string,copyright]];$.terminal.nested_formatting.__meta__=true;$.terminal.nested_formatting.__inherit__=true;$.terminal.nested_formatting.__no_warn__=true;$.terminal.defaults={prompt:"> ",history:true,exit:true,clear:true,enabled:true,maskChar:"*",wrap:true,checkArity:true,raw:false,tabindex:1,invokeMethods:false,exceptionHandler:null,pauseEvents:true,softPause:false,mousewheel:null,touchscroll:null,memory:false,cancelableAjax:true,processArguments:true,execAnimation:false,execAnimationDelay:100,linksNoReferrer:false,externalPause:true,useCache:true,anyLinks:false,linksNoFollow:false,processRPCResponse:null,completionEscape:true,onCommandChange:null,mobileDelete:is_mobile,onPositionChange:null,convertLinks:true,extra:{},tabs:4,historySize:60,scrollObject:null,historyState:false,importHistory:false,historyFilter:null,echoCommand:true,scrollOnEcho:true,login:null,outputLimit:-1,formatters:[$.terminal.nested_formatting],unixFormatting:{escapeBrackets:false,ansiParser:{},ansiArt:false},onAjaxError:null,pasteImage:true,scrollBottomOffset:20,wordAutocomplete:true,caseSensitiveAutocomplete:true,caseSensitiveSearch:true,clickTimeout:200,holdTimeout:400,holdRepeatTimeout:200,repeatTimeoutKeys:[],mobileIngoreAutoSpace:[],request:$.noop,response:$.noop,describe:"procs",onRPCError:null,keymap:null,doubleTab:null,doubleTabEchoCommand:false,completion:false,onInit:$.noop,onClear:$.noop,onBlur:$.noop,onFocus:$.noop,onTerminalChange:$.noop,onExit:$.noop,onPush:$.noop,onPop:$.noop,keypress:$.noop,keydown:$.noop,renderHandler:null,onAfterRedraw:$.noop,onEchoCommand:$.noop,onPaste:$.noop,onFlush:$.noop,onBeforeCommand:null,onAfterCommand:null,onBeforeEcho:null,onAfterEcho:null,onBeforeLogin:null,onAfterLogout:null,onBeforeLogout:null,allowedAttributes:["title","target","rel",/^aria-/,"id",/^data-/],strings:{comletionParameters:"From version 1.0.0 completion function need to"+" have two arguments",wrongPasswordTryAgain:"Wrong username or password try again!",wrongPassword:"Wrong username or password!",ajaxAbortError:"Error while aborting ajax call!",wrongArity:"Wrong number of arguments. Function '%s' expects %s got"+" %s!",commandNotFound:"Command '%s' Not Found!",oneRPCWithIgnore:"You can use only one rpc with describe == false "+"or rpc without system.describe",oneInterpreterFunction:"You can't use more than one function (rpc "+"without system.describe or with option describe == false count"+"s as one)",loginFunctionMissing:"You didn't specify a login function",noTokenError:"Access denied (no token)",serverResponse:"Server responded",wrongGreetings:"Wrong value of greetings parameter",notWhileLogin:"You can't call `%s' function while in login",loginIsNotAFunction:"Authenticate must be a function",canExitError:"You can't exit from main interpreter",invalidCompletion:"Invalid completion",invalidSelector:"Sorry, but terminal said that you use invalid "+"selector!",invalidTerminalId:"Invalid Terminal ID",login:"login",password:"password",recursiveLoop:"Recursive loop in echo detected, skip",notAString:"%s function: argument is not a string",redrawError:"Internal error, wrong position in cmd redraw",invalidStrings:"Command %s have unclosed strings",invalidMask:"Invalid mask used only string or boolean allowed",defunctTerminal:"You can't call method on terminal that was destroyed"}};var requests=[];var terminals=new Cycle;var save_state=[];var hash_commands;var change_hash=false;var fire_hash_change=true;var first_instance=true;$.fn.terminal=function(e,t){function n(n){if(n){this.storage={}}this.set=function(e,t){if(n){this.storage[e]=t}else{$.Storage.set(e,t)}};this.get=function(e){if(n){return this.storage[e]}else{return $.Storage.get(e)}};this.remove=function(e){if(n){delete this.storage[e]}else{$.Storage.remove(e)}}}function N(e){if($.terminal.unclosed_strings(e)){var t=$.terminal.escape_brackets(e);var n=sprintf(p().invalidStrings,"`"+t+"`");throw new $.terminal.Exception(n)}else if(is_function(C.processArguments)){return process_command(e,C.processArguments)}else if(C.processArguments){return $.terminal.parse_command(e)}else{return $.terminal.split_command(e)}}function M(e,n){n=n||{};if($.terminal.Animation&&e instanceof $.terminal.Animation){e.start(g);return false}if(is_function(C.renderHandler)){return unpromise(e,function(e){try{var t=C.renderHandler.call(g,e,n,g);if(t===false){return false}if(typeof t==="string"||W(t)||is_promise(t)){return t}else{return e}}catch(e){return["[[;red;]"+e.message+"]",format_stack_trace(e.stack)].join("\n")}})}return e}function s(t,n){if(W(t)){var e=$.extend({},n,{raw:true,finalize:function(e){e.find(".terminal-render-item").replaceWith(t);if(n&&is_function(n.finalize)){n.finalize(e,g)}}});return['<div class="terminal-render-item"/>',e]}}function H(e,t){var n=s(e,t);if(n){g.echo.apply(g,n);return true}}function i(e){return y.find("[data-index="+e+"]")}function W(e){return e instanceof $.fn.init||e instanceof Element}function q(e){e=M(e);if(e===false){return}if(H(e)){return}if(typeof e==="string"){g.echo(e)}else if(is_array(e)){g.echo($.map(e,function(e){return JSON.stringify(e)}).join(" "))}else if(typeof e==="object"){g.echo(JSON.stringify(e))}else{g.echo(e)}}function U(e,a){var t=/(.*):([0-9]+):([0-9]+)$/;var o=e.match(t);if(o){g.pause(C.softPause);$.get(o[1],function(e){var t=o[1];var n=e.split("\n");var i=+o[2]-1;var r=i>2?i-2:0;var u=n.slice(r,i+3).map(function(e,t){var n="["+(i+t-1)+"]: ";var r=a-n.length-4;if(e.length>r){e=e.substring(0,r)+"..."}if(i>2?t===2:t===i){e="[[;#f00;]"+$.terminal.escape_brackets(e)+"]"}return n+e}).filter(Boolean).join("\n");if(u.length){g.echo("[[b;white;]"+t+"]");g.echo(u).resume()}},"text")}}function K(e){if(is_function(C.onRPCError)){C.onRPCError.call(g,e)}else{g.error("&#91;RPC&#93; "+e.message);if(e.error&&e.error.message){e=e.error;var t="\t"+e.message;if(e.file){t+=' in file "'+e.file.replace(/.*\//,"")+'"'}if(e.at){t+=" at line "+e.at}g.error(t)}}}function J(n,r){var i=function(e,t){g.pause(C.softPause);$.jrpc({url:n,method:e,params:t,request:function(e,t){try{C.request.call(g,e,t,g)}catch(e){D(e,"USER")}},response:function(e,t){try{C.response.call(g,e,t,g)}catch(e){D(e,"USER")}},success:function e(t){if(t.error){K(t.error)}else if(is_function(C.processRPCResponse)){C.processRPCResponse.call(g,t.result,g)}else if(t.result!==null){q(t.result)}g.resume()},error:Y})};return function(e,t){if(e===""){return}try{e=N(e)}catch(e){D(e,"TERMINAL (get_processed_command)");return}if(!r||e.name==="help"){i(e.name,e.args)}else{var n=t.token(true);if(n){i(e.name,[n].concat(e.args))}else{t.error("&#91;AUTH&#93; "+p().noTokenError)}}}}function Q(a,o,s,l){return function(e,t){if(e===""){return}var n;try{n=N(e)}catch(e){if(is_function(C.exception)){C.exception(e,g)}else{g.error("Error: "+(e.message||e))}return}var r=a[n.name];var i=get_type(r);if(i==="function"){if(o&&r.length!==n.args.length){g.error("&#91;Arity&#93; "+sprintf(p().wrongArity,n.name,r.length,n.args.length))}else{return r.apply(g,n.args)}}else if(i==="object"||i==="string"){var u=[];if(i==="object"){u=Object.keys(r);r=Q(r,o,s)}t.push(r,{prompt:n.name+"> ",name:n.name,completion:i==="object"?u:undefined})}else if(is_function(l)){l(e,g)}else if(is_function(C.onCommandNotFound)){C.onCommandNotFound.call(g,e,g)}else{t.error(sprintf(p().commandNotFound,n.name))}}}function Y(e,t,n){g.resume();if(is_function(C.onAjaxError)){C.onAjaxError.call(g,e,t,n)}else if(t!=="abort"){g.error("&#91;AJAX&#93; "+t+" - "+p().serverResponse+":\n"+$.terminal.escape_brackets(e.responseText))}}function V(u,o,r){function s(e){if(e.error){K(e.error)}else if(is_function(C.processRPCResponse)){C.processRPCResponse.call(g,e.result,g)}else{q(e.result)}g.resume()}function l(e,t){try{C.request.call(g,e,t,g)}catch(e){D(e,"USER")}}function f(e,t){try{C.response.call(g,e,t,g)}catch(e){D(e,"USER")}}function e(e){var n=e;if(C.describe!==false&&C.describe!==""){C.describe.split(".").forEach(function(e){n=n[e]})}if(n&&n.length){var t={};$.each(n,function(e,i){if($.isPlainObject(i)&&typeof i.name==="string"){t[i.name]=function(){var e=o&&i.name!=="help";var t=Array.prototype.slice.call(arguments);var n=t.length+(e?1:0);if(C.checkArity&&i.params&&i.params.length!==n){g.error("&#91;Arity&#93; "+sprintf(p().wrongArity,i.name,i.params.length,n))}else{g.pause(C.softPause);if(e){var r=g.token(true);if(r){t=[r].concat(t)}else{g.error("&#91;AUTH&#93; "+p().noTokenError)}}$.jrpc({url:u,method:i.name,params:t,request:l,response:f,success:s,error:Y})}}}});var a=typeof o==="string"?o:"login";t.help=t.help||function(i){if(typeof i==="undefined"){var e=n.map(function(e){return e.name}).join(", ")+", help";g.echo("Available commands: "+e)}else{var u=false;$.each(n,function(e,t){if(t.name===i){u=true;var n="";n+="[[bu;;]"+t.name+"]";if(t.params){var r=t.params;if(o&&t.name!==a){r=r.slice(1)}n+=" "+r.join(" ")}if(t.help){n+="\n"+t.help}g.echo(n);return false}});if(!u){if(i==="help"){g.echo("[[bu;;]help] [method]\ndisplay help "+"for the method or list of methods if not"+" specified")}else{var t="Method `"+i+"' not found ";g.error(t)}}}};r(t)}else{r(null)}}return $.jrpc({url:u,method:"system.describe",params:[],success:e,request:l,response:f,error:function e(){r(null)}})}function G(t,a,n){n=n||$.noop;var e=get_type(t);var o;var r={};var s=0;var l;if(e==="array"){o={};(function t(e,n){if(e.length){var r=e[0];var i=e.slice(1);var u=get_type(r);if(u==="string"){g.pause(C.softPause);if(C.describe===false){if(++s===1){l=J(r,a)}else{g.error(p().oneRPCWithIgnore)}t(i,n)}else{V(r,a,function(e){if(e){$.extend(o,e)}else if(++s===1){l=J(r,a)}else{g.error(p().oneRPCWithIgnore)}g.resume();t(i,n)})}}else if(u==="function"){if(l){g.error(p().oneInterpreterFunction)}else{l=r}t(i,n)}else if(u==="object"){$.extend(o,r);t(i,n)}}else{n()}})(t,function(){n({interpreter:Q(o,false,a,l&&l.bind(g)),completion:Object.keys(o)})})}else if(e==="string"){if(C.describe===false){o={interpreter:J(t,a)};if($.isArray(C.completion)){o.completion=C.completion}n(o)}else{g.pause(C.softPause);V(t,a,function(e){if(e){r.interpreter=Q(e,false,a);r.completion=Object.keys(e)}else{r.interpreter=J(t,a)}n(r);g.resume()})}}else if(e==="object"){n({interpreter:Q(t,C.checkArity,a),completion:Object.keys(t)})}else{if(e==="undefined"){t=$.noop}else if(e!=="function"){var i=e+" is invalid interpreter value";throw new $.terminal.Exception(i)}n({interpreter:t,completion:C.completion})}}function X(r,e){var i=get_type(e)==="boolean"?"login":e;return function(e,t,n){g.pause(C.softPause);$.jrpc({url:r,method:i,params:[e,t],request:function(e,t){try{C.request.call(g,e,t,g)}catch(e){D(e,"USER")}},response:function(e,t){try{C.response.call(g,e,t,g)}catch(e){D(e,"USER")}},success:function e(t){if(!t.error&&t.result){n(t.result)}else{n(null)}g.resume()},error:Y})}}function D(e,t,n){if(is_function(C.exceptionHandler)){C.exceptionHandler.call(g,e,t)}else{g.exception(e,t);if(!n){setTimeout(function(){throw e},0)}}}function Z(e){function t(e,n,r,i,u,a,t){function o(e,t){return"[["+[n+(e||""),r,i,u,t||a].join(";")+"]"}function s(e){return"]"+o("!",e)+e+"]"+o()}if(!n.match(/!/)){var l=t.match(email_full_re)||t.match(url_full_re);if(l){return o("!",l[1])+t+"]"}else if(t.match(email_re)||t.match(url_nf_re)){var f=t.replace(email_re,s).replace(url_nf_re,s);return o("",a)+f+"]"}}return e}function n(e){return e.replace(email_re,"[[!;;]$1]").replace(url_nf_re,"[[!;;]$1]")}if(!$.terminal.have_formatting(e)){return n(e)}return $.terminal.format_split(e).map(function(e){if($.terminal.is_formatting(e)){return e.replace(format_parts_re,t)}else{return n(e)}}).join("")}function ee(e,t){return(strlen(text(e))>t.cols||e.match(/\n/))&&(C.wrap===true&&t.wrap===undefined||C.wrap===false&&t.wrap===true)}var c;if("Map"in root){c=new Map}function te(e,n,r){if(r.exec||n.options.clear_exec){return $.terminal.each_extended_command(e,function(e){if(r.exec){n.options.exec=false;n.options.clear_exec=true;var t=e.trim();if(_&&_===t){_="";g.error(p().recursiveLoop)}else{_=t;$.terminal.extended_command(g,e,{invokeMethods:r.invokeMethods}).then(function(){_=""})}}})}return e}function ne(t){try{var e=!is_function(t.value);var n=$.extend({exec:true,raw:false,finalize:$.noop,useCache:e,invokeMethods:false,formatters:true,convertLinks:C.convertLinks},t.options||{});var r=Dt(t.value);if(r&&is_function(r.then)){return r.then(function(e){ne($.extend(t,{value:e,options:n}))})}if(r!==""){if(!n.raw){if(C.useCache&&n.useCache){var i=r;if(c&&c.has(i)){var u=c.get(i);F.append(u.input,t.index,n,u.raw);return true}}if(n.formatters){try{r=$.terminal.apply_formatters(r,$.extend(C,{echo:true}))}catch(e){D(e,"FORMATTING")}}r=te(r,t,n);if(r===""){return}if(n.convertLinks){r=Z(r)}var a=r;r=crlf($.terminal.normalize(r));r=$.terminal.encode(r,{tabs:C.tabs});var o;var s=n.cols=g.cols();if(ee(r,n)){var l=n.keepWords;o=$.terminal.split_equal(r,s,l)}else if(r.match(/\n/)){o=r.split(/\n/)}}}else{a=""}var f=o||r;if(c&&i&&e){c.set(i,{input:f,raw:a})}F.append(f,t.index,n,a)}catch(e){F.clear();if(is_function(C.exceptionHandler)){C.exceptionHandler.call(g,e,"TERMINAL")}else{alert_exception("[Internal Exception(process_line)]",e)}}return true}function re(e){e=$.extend({},{update:false,scroll:true},e||{});if(!e.update){B.resize(u);var t=y.empty().detach()}try{F.clear();unpromise(w.render(g.rows(),function(e){return e.map(ne)}),function(){g.flush(e);if(!e.update){B.before(t)}v("onAfterRedraw")})}catch(e){if(is_function(C.exceptionHandler)){C.exceptionHandler.call(g,e,"TERMINAL (redraw)")}else{alert_exception("[redraw]",e)}}}function ie(){if(C.outputLimit>=0){var e;if(C.outputLimit===0){e=g.rows()}else{e=C.outputLimit}var t=y.find("> div > div");if(t.length+1>e){var n=t.length-e+1;var r=t.slice(0,n);var i=r.parent();r.remove();i.each(function(){var e=$(this);if(e.is(":empty")){w.unmount(e);e.remove()}});w.limit_snapshot(n)}}}function ue(){if(C.greetings===undefined){g.echo(g.signature,{finalize:a11y_hide,formatters:false})}else if(C.greetings){var e=typeof C.greetings;if(e==="string"){g.echo(C.greetings)}else if(e==="function"){g.echo(function(){if(C.greetings){try{var e=new $.Deferred;var t=C.greetings.call(g,e.resolve);if(t){e.resolve(t)}return e.promise()}catch(e){C.greetings=null;D(e,"greetings")}}})}else{g.error(p().wrongGreetings)}}}function ae(e){var t=B.mask();switch(typeof t){case"string":return e.replace(/./g,t);case"boolean":if(t){return e.replace(/./g,C.maskChar)}else{return $.terminal.escape_formatting(e)}}throw new $.terminal.Exception(p().invalidMask)}function h(n){if(typeof n==="undefined"){n=g.get_command()}var e=B.prompt(true);n=ae(n);var t={exec:false,formatters:false,convertLinks:false,finalize:function e(t){a11y_hide(t.addClass("terminal-command"));v("onEchoCommand",[t,n])}};n=$.terminal.apply_formatters(n,{command:true});g.echo(e+n,t)}function oe(){return j.outerWidth()!==g.outerWidth()}function se(e){var t=terminals.get()[e[0]];if(!t){throw new $.terminal.Exception(p().invalidTerminalId)}var n=e[1];if(save_state[n]){t.import_view(save_state[n])}else{change_hash=false;var r=e[2];if(r){t.exec(r).done(function(){change_hash=true;save_state[n]=t.export_view()})}}}function le(t){return function(e){g.error("["+t+"] "+(e.message||e)).resume()}}function fe(){if(change_hash){fire_hash_change=false;location.hash="#"+JSON.stringify(hash_commands);setTimeout(function(){fire_hash_change=true},100)}}var ce=true;var pe=[];function me(n,e,t){function r(){if(C.historyState||C.execHash&&t){if(!save_state.length){g.save_state()}else{g.save_state(null)}}}function i(){if(!t){change_hash=true;if(C.historyState){g.save_state(n,false)}change_hash=c}}function u(){f.resolve();v("onAfterCommand",[n])}function a(e,t){if(typeof e!=="undefined"){q(e)}u();if(t){g.resume()}}function o(e){return is_function(e.done||e.then)&&Je}function s(){var e=l.interpreter.call(g,n,g);i();if(e){if(!We){if(o(e)){k=true}else if(is_promise(e)){g.pause(C.softPause)}}We=false;var t=le("Command");if(is_function(e.done||e.then)){return unpromise(e,function(e){a(e,true)},t)}else{return $.when(e).done(a).catch(t)}}else{if(k){pe.push(function(){u()})}else{u()}return f.promise()}}if(ce){ce=false;r()}try{if(v("onBeforeCommand",[n])===false){return}if(t){_=n.trim();d=$.terminal.split_command(_)}else{d=$.terminal.split_command(n)}if(!Fe()){if(t&&(is_function(C.historyFilter)&&C.historyFilter(n)||n.match(C.historyFilter))){B.history().append(n)}}var l=A.top();if(!e&&C.echoCommand){h(n)}var f=new $.Deferred;var c=change_hash;if(n.match(/^\s*login\s*$/)&&g.token(true)){i();if(g.level()>1){g.logout(true)}else{g.logout()}u()}else if(C.exit&&n.match(/^\s*exit\s*$/)&&!b){i();var p=g.level();if(p===1&&g.get_token()||p>1){if(g.get_token(true)){g.set_token(undefined,true)}g.pop()}u()}else if(C.clear&&n.match(/^\s*clear\s*$/)&&!b){i();g.clear();u()}else{var m=s();if(m){return m}}return f.promise()}catch(e){D(e,"USER",t);g.resume();if(t){throw e}}}function De(){if(v("onBeforeLogout",[],true)===false){return}de();v("onAfterlogout",[],true);g.login(z,true,Ce)}function de(){var e=g.prefix_name(true)+"_";r.remove(e+"token");r.remove(e+"login")}function he(e){var t=g.prefix_name()+"_interpreters";var n=r.get(t);if(n){n=JSON.parse(n)}else{n=[]}if($.inArray(e,n)===-1){n.push(e);r.set(t,JSON.stringify(n))}}function ve(e){var t=A.top();var n=g.prefix_name(true);if(!Fe()){he(n)}var r=g.login_name(true);B.name(n+(r?"_"+r:""));var i=t.prompt;if(is_function(i)){i=dt(i)}if(i!==B.prompt()){if(is_function(t.prompt)){B.prompt("")}B.prompt(t.prompt)}if(typeof t.history!=="undefined"){g.history().toggle(t.history)}if($.isPlainObject(t.keymap)){B.keymap(null).keymap($.extend({},P,$.omap(t.keymap,function(e,t){return function(){var e=[].slice.call(arguments);try{return t.apply(g,e)}catch(e){D(e,"USER KEYMAP")}}})))}B.set("");Ye.resolve();if(!e&&is_function(t.onStart)){t.onStart.call(g,g)}}function v(t,e,n){e=(e||[]).concat([g]);var r=A&&A.top();if(r&&is_function(r[t])&&!n){try{return r[t].apply(g,e)}catch(e){delete r[t];D(e,t)}}else if(is_function(C[t])){try{return C[t].apply(g,e)}catch(e){C[t]=null;D(e,t)}}}var ge=function(){function e(e){if(!e){try{g.scroll_to(g.find(".cmd-cursor-line"));return true}catch(e){return true}}}if(typeof global!=="undefined"&&typeof global.it==="function"){return e}return debounce(e,100,{leading:true,trailing:false})}();function _e(){var e=g.find(".cmd-cursor-line");return e.is_fully_in_viewport(g).then(ge)}function ye(e){if(typeof history!=="undefined"&&history.replaceState){var t="#"+JSON.stringify(e);var n=location.href.replace(/#.*$/,t);history.replaceState(null,"",n)}}function be(){if(fire_hash_change&&C.execHash){try{if(location.hash){var e=location.hash.replace(/^#/,"");hash_commands=JSON.parse(decodeURIComponent(e))}else{hash_commands=[]}if(hash_commands.length){se(hash_commands[hash_commands.length-1])}else if(save_state[0]){g.import_view(save_state[0])}}catch(e){D(e,"TERMINAL")}}}function Ce(){ve();ue();if(w.length){if(a.length){$.when.apply($,a).then(g.refresh)}else{g.refresh()}}function t(){Xe=$.noop;if(!e&&g.enabled()){g.resume(true)}}var e=false;if(is_function(C.onInit)){Xe=function(){e=true};var n;try{n=C.onInit.call(g,g)}catch(e){D(e,"OnInit")}finally{if(!is_promise(n)){t()}else{n.then(t).catch(function(e){D(e,"OnInit");t()})}}}if(first_instance){first_instance=false;$(window).on("hashchange",be)}}function Fe(){return b||B.mask()!==false}function we(e){var t,n=A.top();if(is_function(n.keydown)){t=n.keydown.call(g,e,g);if(t!==undefined){return t}}else if(is_function(C.keydown)){t=C.keydown.call(g,e,g);if(t!==undefined){return t}}}var Ee={"CTRL+D":function(e,t){if(!b){if(B.get()===""){if(A.size()>1||is_function(z)){g.pop("")}else{g.resume()}}else{t()}}return false},"CTRL+C":function(){with_selection(function(e){if(e===""){var t=g.get_command();var n=g.get_position();t=t.slice(0,n)+"^C"+t.slice(n+2);h(t);g.set_command("")}else{var r=g.find("textarea");text_to_clipboard(r,process_selected_html(e))}});return false},"CTRL+L":function(){g.clear();return false},TAB:function(e,t){var n=A.top(),r,i;if(typeof n.caseSensitiveAutocomplete!=="undefined"){i=n.caseSensitiveAutocomplete}else{i=C.caseSensitiveAutocomplete}if(C.completion&&get_type(C.completion)!=="boolean"&&n.completion===undefined){r=C.completion}else{r=n.completion}if(r==="settings"){r=C.completion}function u(e){e=e.slice();if(!g.before_cursor(false).match(/\s/)){if(C.clear&&$.inArray("clear",e)===-1){e.push("clear")}if(C.exit&&$.inArray("exit",e)===-1){e.push("exit")}}g.complete(e,{echo:true,word:C.wordAutocomplete,escape:C.completionEscape,caseSensitive:i,echoCommand:C.doubleTabEchoCommand,doubleTab:C.doubleTab})}if(r){switch(get_type(r)){case"function":var a=g.before_cursor(C.wordAutocomplete);if(r.length===3){var o=new Error(p().comletionParameters);D(o,"USER");return false}var s=r.call(g,a,u);unpromise(s,u,le("Completion"));break;case"array":u(r);break;default:throw new $.terminal.Exception(p().invalidCompletion)}}else{t()}return false},"CTRL+V":function(e,t){t(e);g.oneTime(200,function(){g.scroll_to_bottom()});return true},"CTRL+TAB":function(){if(terminals.length()>1){g.focus(false);return false}},PAGEDOWN:function(){g.scroll(g.height())},PAGEUP:function(){g.scroll(-g.height())}};function xe(t){var e,n;if(Je){return false}if(g.enabled()){if(!g.paused()){e=we(t);if(e!==undefined){return e}if(t.which!==9){He=0}}else{if(!C.pauseEvents){e=we(t);if(e!==undefined){return e}}if(t.which===68&&t.ctrlKey){if(C.pauseEvents){e=we(t);if(e!==undefined){return e}}if(requests.length){for(n=requests.length;n--;){var r=requests[n];if(r.readyState!==4){try{r.abort()}catch(e){if(is_function(C.exceptionHandler)){C.exceptionHandler.call(g,t,"AJAX ABORT")}else{g.error(p().ajaxAbortError)}}}}requests=[]}g.resume()}return false}}}function $e(e){var t=A.top();if(E&&(!k||!C.pauseEvents)){if(is_function(t.keypress)){return t.keypress.call(g,e,g)}else if(is_function(C.keypress)){return C.keypress.call(g,e,g)}}}function ke(m){return function e(r,i){var u=$.terminal.apply_formatters(r,{animation:true});Je=true;var a=g.get_prompt();var o=0;var s=$.terminal.length(u);if(r.length>0){var l="";if(i.prompt){l=i.prompt}else{g.set_prompt("")}var f=g.is_bottom();var c=$.terminal.partition(u,{wrap:false});var p=setInterval(function(){if(!Qe){var e=c[o];if(i.mask){var t=B.mask();if(typeof t==="string"){e=t}else if(t){e=C.maskChar}}l+=e;g.set_prompt(l);if(f&&(e==="\n"||!g.is_bottom())){g.scroll_to_bottom()}o++}else{g.skip_stop();var n=$.terminal.substring(u,o,s);l+=n;g.set_prompt(l);o=s}if(o===s){clearInterval(p);setTimeout(function(){m(r,a,i);Je=false},i.delay)}},i.delay)}}}var Ae=ke(function(e,t,n){g.set_prompt(e);n.finalize()});var Be=function(){var r=ke(function(e,t,n){g.set_prompt(t);g.insert(e);n.finalize()});return function(e,t,n){return r(t,$.extend({},n,{prompt:e+g.get_command()}))}}();var Te=ke(function(e,t,n){g.set_prompt(t);g.echo(e,$.extend({},n,{typing:false}))});var Se=function(){var r=ke(function(r,e,i){g.set_prompt(e);with_prompt(e,function(e){var t=ae(r);t=$.terminal.apply_formatters(t,{command:true});var n=e+t;i=$.extend({},i,{typing:false,formatters:false,convertLinks:false});g.echo(n,i)},g)});return function(e,t,n){return r(t,$.extend({},n,{prompt:e,mask:true}))}}();function Re(a,o,s){return function e(r,i){var u=new $.Deferred;f(function e(){var t=$.extend({typing:false,delay:C.execAnimationDelay},i);if(t.typing){if(typeof r!=="string"){return u.reject(a+": Typing animation require string")}if(typeof t.delay!=="number"||isNaN(t.delay)){return u.reject(a+": Invalid argument, delay need to"+" be a number")}var n=g.typing(a,t.delay,r,t);n.then(function(){u.resolve()})}else{o(r,t)}if(is_function(s)){s(r,t)}});if(i&&i.typing){return u.promise()}return g}}function je(e,t,n){var r=v("onBeforeLogin",[e,t]);return unpromise(always(r),n,"validate_login")}function Oe(u,i,a,o){if(C.history){B.history().disable()}var e=g.level();t();function s(){while(g.level()>e){g.pop(undefined,true)}if(C.history){B.history().enable()}}function l(e,t){var n=g.prefix_name(true)+"_";r.set(n+"token",t);r.set(n+"login",e)}function t(){var e=g.prefix_name(true)+"_";r.remove(e+"token");r.remove(e+"login")}function f(e,t,n){var r;if(t){s();l(e,t);b=false;v("onAfterLogin",[e,t]);r=a}else{if(i){if(!n){g.error(p().wrongPasswordTryAgain)}g.pop(undefined,true).set_mask(false)}else{b=false;if(!n){g.error(p().wrongPassword)}g.pop(undefined,true).pop(undefined,true)}r=o}if(g.paused()){g.resume()}if(is_function(r)){r()}g.off("terminal.autologin")}g.on("terminal.autologin",function(e,t,n,r){je(t,n,function(e){if(e!==false){f(t,n,r)}})});g.push(function(i){g.set_mask(C.maskChar).push(function(r){try{je(i,r,function(e){if(e===false){s();return}g.pause();try{var t=[i,r,function(e,t){f(i,e,t)}];var n=u.apply(g,t);unpromise(n,function(e){f(i,e)},function(e){g.pop(undefined,true).pop(undefined,true);g.error(e.message);if(is_function(o)){o()}if(g.paused()){g.resume()}g.off("terminal.autologin")})}catch(e){D(e,"AUTH")}})}catch(e){D(e,"AUTH")}},{prompt:p().password+": ",name:"password"})},{prompt:p().login+": ",name:"login"})}function Le(t){return function(e){t.add(e)}}function p(){return $.extend({},$.terminal.defaults.strings,C&&C.strings||{})}var g=this;if(this.length>1){return this.each(function(){$.fn.terminal.call($(this),e,$.extend({name:g.selector},t))})}var Ie;if(g.is("body,html")){if(g.hasClass("full-screen-terminal")){var ze=g.find("> .terminal").data("terminal");if(ze){return ze}}Ie=g;g=$("<div/>").appendTo("body");$("body").addClass("full-screen-terminal")}else if(g.data("terminal")){return g.data("terminal")}var Pe=$.omap({id:function(){return m},clear:function(){if(v("onClear")!==false){F.clear();w.clear(function(e){return i(e)});y[0].innerHTML="";g.prop({scrollTop:0})}return g},export_view:function(){var e=v("onExport");e=e||{};return $.extend({},{focus:E,mask:B.mask(),prompt:g.get_prompt(),command:g.get_command(),position:B.position(),lines:clone(w.data()),interpreters:A.clone(),history:B.history().data},e)},import_view:function(t){if(b){throw new Error(sprintf(p().notWhileLogin,"import_view"))}v("onImport",[t]);f(function e(){g.set_prompt(t.prompt);g.set_command(t.command);B.position(t.position);B.mask(t.mask);if(t.focus){g.focus()}w.import(clone(t.lines).filter(function(e){return e[0]}));if(t.interpreters instanceof Stack){A=t.interpreters}if(C.importHistory){B.history().set(t.history)}re()});return g},save_state:function(e,t,n){if(typeof n!=="undefined"){save_state[n]=g.export_view()}else{save_state.push(g.export_view())}if(!$.isArray(hash_commands)){hash_commands=[]}if(e!==undefined&&!t){var r=[m,save_state.length-1,e];hash_commands.push(r);fe()}return g},exec:function(r,i,u){function a(e){var t=me(r,e,true);unpromise(t,function(){d=null;s.resolve()},function(){d=null;s.reject()})}if(i&&typeof i==="object"){u=i;i=null}var o=$.extend({deferred:null,silent:false,typing:false,delay:C.execAnimationDelay},u);if(i===null){i=o.silent}if(!is_deferred(o.deferred)){o.deferred=new $.Deferred}var s=o.deferred;l(function e(){if($.isArray(r)){(function e(){var t=r.shift();if(t){g.exec(t,i,u).done(e)}else{s.resolve()}})()}else if(k){tt.push([r,i,o])}else if(o.typing&&!i){var t=o.delay;k=true;var n=g.typing("enter",t,r,{delay:t});n.then(function(){k=false;a(true)});s.then(function(){k=false})}else{a(i)}});return s.promise()},autologin:function(e,t,n){g.trigger("terminal.autologin",[e,t,n]);return g},login:function(t,n,r,i){Ue.push([].slice.call(arguments));if(b){throw new Error(sprintf(p().notWhileLogin,"login"))}if(!is_function(t)){throw new Error(p().loginIsNotAFunction)}b=true;if(g.token()&&g.level()===1&&!rt){b=false;g.logout(true)}else{var e=g.token(true);var u=g.login_name(true);if(e&&u){b=false;g.pause();je(u,e,function(e){if(e!==false){if(is_function(r)){r()}}else{g.resume();Oe(t,n,r,i)}})}else{Oe(t,n,r,i)}}return g},settings:function(){return C},before_cursor:function(e){var t=B.position();var n=B.get().slice(0,t);var r=n.split(/\s/);var i;if(e){if(r.length===1){i=r[0]}else{var u=n.match(/(\\?")/g);var a=u?u.filter(function(e){return!e.match(/^\\/)}).length:0;u=n.match(/'/g);var o=u?u.length:0;if(o%2===1){i=n.match(/('[^']*)$/)[0]}else if(a%2===1){i=n.match(/("(?:[^"]|\\")*)$/)[0]}else{i=r[r.length-1];for(I=r.length-1;I>0;I--){var s=r[I-1];if(s[s.length-1]==="\\"){i=r[I-1]+" "+i}else{break}}}}}else{i=n}return i},complete:function(r,i){i=$.extend({word:true,echo:false,escape:true,echoCommand:false,caseSensitive:true,doubleTab:null},i||{});var u=i.caseSensitive;var a=g.before_cursor(i.word).replace(/\\"/g,'"');var s=false;if(i.word){if(a.match(/^"/)){s='"'}else if(a.match(/^'/)){s="'"}if(s){a=a.replace(/^["']/,"")}}if(He%2===0){qe=g.before_cursor(i.word)}else{var e=g.before_cursor(i.word);if(e!==qe){return}}var t=$.terminal.escape_regex(a);if(i.escape){t=t.replace(/(\\+)(["'() ])/g,function(e,t,n){if(n.match(/[()]/)){return t+"\\?\\"+n}else{return t+"?"+n}})}function o(e){if(s==='"'){e=e.replace(/"/g,'\\"')}if(!s&&i.escape){e=e.replace(/(["'() ])/g,"\\$1")}return e}function n(){var e=[];for(var t=r.length;t--;){if(r[t].match(/\n/)&&i.word){warn("If you use commands with newlines you "+"should use word option for complete or"+" wordAutocomplete terminal option")}if(f.test(r[t])){var n=o(r[t]);if(!u&&same_case(n)){if(a.toLowerCase()===a){n=n.toLowerCase()}else if(a.toUpperCase()===a){n=n.toUpperCase()}}e.push(n)}}return e}var l=u?"":"i";var f=new RegExp("^"+t,l);var c=n();function p(e,t){var n=g.get_command();var r=g.get_position();var i=new RegExp("^"+e,"i");var u=n.slice(0,r);var a=n.slice(r);var o=t.replace(i,"")+(s||"");g.set_command(u+o+a);g.set_position((u+o).length)}if(c.length===1){if(i.escape){p(t,c[0])}else{g.insert(c[0].replace(f,"")+(s||""))}qe=g.before_cursor(i.word);return true}else if(c.length>1){if(++He>=2){He=0;if(i.echo){if(is_function(i.doubleTab)){if(i.echoCommand){h()}var m=i.doubleTab.call(g,a,c,h);if(typeof m==="undefined"){return true}else{return m}}else if(i.doubleTab!==false){h();var D=c.slice().reverse().join("\t\t");g.echo($.terminal.escape_brackets(D),{keepWords:true,formatters:false})}return true}}else{var d=common_string(o(a),c,u);if(d){p(t,d);qe=g.before_cursor(i.word);return true}}}},commands:function(){return A.top().interpreter},set_interpreter:function(e,t){var n=$.Deferred();function r(){g.pause(C.softPause);G(e,t,function(e){g.resume();var t=A.top();$.extend(t,e);ve(true);n.resolve()})}if(is_function(t)){g.login(t,true,r)}else if(get_type(e)==="string"&&t){g.login(X(e,t),true,r)}else{r()}return n.promise()},greetings:function(){ue();return g},paused:function(){return k},pause:function(t){l(function e(){Xe();k=true;B.disable(t||is_android);if(!t){B.find(".cmd-prompt").hidden()}v("onPause")});return g},resume:function(i){l(function e(){k=false;if(E&&terminals.front()===g){B.enable(i)}B.find(".cmd-prompt").visible();var t=tt;tt=[];for(var n=0;n<t.length;++n){g.exec.apply(g,t[n])}g.trigger("resume");var r=pe.shift();if(r){r()}if(v("onResume")!==false){g.scroll_to_bottom()}});return g},skip:function(){Qe=true},skip_stop:function(){Qe=false},animating:function(){return Je},cols:function(){if(C.numChars){return C.numChars}if(!u||u===1e3){u=get_num_chars(g,L)}return u},rows:function(){if(C.numRows){return C.numRows}if(!o){o=get_num_rows(g,L)}return o},history:function(){return B.history()},geometry:function(){var t=window.getComputedStyle(S[0]);function e(e){return parseInt(t.getPropertyValue("padding-"+e),10)||0}var n=e("left");var r=e("right");var i=e("top");var u=e("bottom");return{terminal:{padding:{left:n,right:r,top:i,bottom:u},width:Ze+n+r,height:et+i+u},density:O,char:L,cols:this.cols(),rows:this.rows()}},history_state:function(e){function t(){C.historyState=true;if(!save_state.length){g.save_state()}else if(terminals.length()>1){g.save_state(null)}}if(e){if(typeof window.setImmediate==="undefined"){setTimeout(t,0)}else{setImmediate(t)}}else{C.historyState=false}return g},clear_history_state:function(){hash_commands=[];save_state=[];return g},next:function(){if(terminals.length()===1){return g}else{terminals.front().disable();var e=terminals.rotate().enable();var t=e.offset().top-50;$("html,body").animate({scrollTop:t},500);try{trigger_terminal_change(e)}catch(e){D(e,"onTerminalChange")}return e}},focus:function(n,r){l(function e(){if(terminals.length()===1){if(n===false){g.disable(r)}else{g.enable(r)}}else if(n===false){g.next()}else{var t=terminals.front();if(t!==g){terminals.forEach(function(e){if(e!==g&&e.enabled()){e.disable(r)}});if(!r){try{trigger_terminal_change(g)}catch(e){D(e,"onTerminalChange")}}}terminals.set(g);g.enable(r)}});return g},blur:function(e){return this.focus(false,e)},freeze:function(t){f(function e(){if(t){g.disable();x=true}else{x=false;g.enable()}});return g},frozen:function(){return x},enable:function(n){if(!E&&!x){if(u===undefined){g.resize()}l(function e(){var t;if(!n&&!E){v("onFocus")}if(!n&&t===undefined||n){E=true;if(!g.paused()){B.enable(true)}}})}return g},clear_cache:"Map"in root?function(){F.clear_cache();c.clear();B.clear_cache();return g}:function(){return g},disable:function(n){l(function e(){var t;if(!n&&E){t=v("onBlur")}if(!n&&t===undefined||n){E=false;B.disable()}});return g},enabled:function(){return E},signature:function(){var e=g.cols();for(var t=signatures.length;t--;){var n=signatures[t].map(function(e){return e.length});if(Math.max.apply(null,n)<=e){return signatures[t].join("\n")+"\n"}}return""},version:function(){return $.terminal.version},cmd:function(){return B},get_command:function(){return B.get()},enter:Re("enter",h),set_command:function(t,n){f(function e(){if(typeof t!=="string"){t=JSON.stringify(t)}B.set(t,undefined,n)});return g},set_position:function(t,n){f(function e(){B.position(t,n)});return g},get_position:function(){return B.position()},insert:function(u,e){if(typeof u==="string"){var a;var t={stay:false,typing:false,delay:100};if(!is_object(e)){e={stay:e}}a=$.extend(t,e);var o=new $.Deferred;f(function e(){function t(){if(C.scrollOnEcho||n){g.scroll_to_bottom()}}var n=g.is_bottom();if(a.typing){var r=a.delay;var i=g.typing("insert",r,u,C);i.then(function(){t();o.resolve()})}else{B.insert(u,C.stay);t()}});if(a.typing){return o.promise()}return g}else{throw new Error(sprintf(p().notAString,"insert"))}},set_prompt:Re("prompt",function(t){if(is_function(t)){B.prompt(function(e){return t.call(g,e,g)})}else{B.prompt(t)}},function(e){A.top().prompt=e}),get_prompt:function(){return A.top().prompt},set_mask:function(t){f(function e(){B.mask(t===true?C.maskChar:t)});return g},get_mask:function(){return B.mask()},get_output:function(e){if(e){return w.data()}else{return w.get_snapshot()}},resize:function(e,t){if(!g.is(":visible")){g.stopTime("resize");g.oneTime(500,"resize",function(){g.resize(e,t)})}else{if(e&&t){g.width(e);g.height(t)}e=g.width();t=g.height();if(typeof C.numChars!=="undefined"||typeof C.numRows!=="undefined"){if(typeof C.numChars!=="undefined"){B.resize(C.numChars);g.refresh()}v("onResize");return}var n=get_num_chars(g,L);var r=get_num_rows(g,L);if(n!==u||r!==o){g.clear_cache();var i=n!==u;u=n;o=r;if(i){B.resize(u);g.refresh()}v("onResize")}}return g},refresh:function(){if(L.width!==0){css(g[0],{"--char-width":L.width,"--pixel-density":O})}g.clear_cache();if(qe){B.resize()}re({scroll:false,update:true});return g},flush:function(d){d=$.extend({},{update:false,scroll:true},d||{});f(function e(){try{if(F.is_empty()){return g}var t=g.is_bottom();var u=C.scrollOnEcho&&d.scroll||t;var a;var o=true;var s=false;var l=$();var f;if(!d.update){l=g.find(".partial");f=w.get_partial()}F.flush(function(e){if(!e){if(!l.length){a=$("<div/>");f=[]}else if(o){o=false;s=true;a=l}}else if(is_function(e.finalize)){if(d.update&&e.raw===true&&e.newline){return}if(u){a.find("img").on("load",function(){g.scroll_to_bottom()})}if(d.update){w.update_snapshot(e.index,f);var t="> div[data-index="+e.index+"]";var n=y.find(t);if(n.html()!==a.html()){n.replaceWith(a)}}else{a.appendTo(y);if(!l.length){w.make_snapshot(f)}}a.attr("data-index",e.index);s=!e.newline;a.toggleClass("partial",s);if(s){l=a}e.finalize(a)}else{var r=e.line;var i;if(typeof e.raw==="string"){if(s){f[f.length-1]+=e.raw}else{f.push(e.raw)}}if(s){i=a.children().last().append(r);s=false}else{i=$("<div/>").html(r);if(e.newline){i.addClass("cmd-end-line")}a.append(i)}i.css("width","100%")}});l=g.find(".partial");var n;if(l.length===0){css(B[0],{"--prompt-offset":"",top:""});B.__set_prompt_margin(0);n=g.find(".terminal-output div:last-child"+" div:last-child");if(n.css("display")==="inline-block"){n.css({width:"100%",display:""})}}else if(f.length&&f[f.length-1]){var r=$.terminal.length(f[f.length-1]);r%=g.cols();n=l.children().last();var i=n[0].getBoundingClientRect();var c=is_ch_unit_supported?r+"ch":r+"px";css(B[0],{top:-i.height/O+"px","--prompt-offset":c});B.__set_prompt_margin(r)}ie();v("onFlush");var p=g.find(".cmd-cursor");var m=g.find(".cmd").offset();var D=g.offset();g.stopTime("flush").oneTime(1,"flush",function(){css(g[0],{"--terminal-height":g.height(),"--terminal-x":m.left-D.left,"--terminal-y":m.top-D.top,"--terminal-scroll":g.prop("scrollTop")});if(E){p.hide();g.oneTime(1,"flush",function(){p.show()})}});a.on_load({done:function(){if(u){g.scroll_to_bottom()}}})}catch(e){if(is_function(C.exceptionHandler)){try{C.exceptionHandler.call(g,e,"TERMINAL (Flush)")}catch(e){C.exceptionHandler=$.noop;alert_exception("[exceptionHandler]",e)}}else{alert_exception("[Flush]",e)}}finally{F.clear()}});return g},update:function(r,t,i){f(function e(){if(r<0){r=w.length()+r}if(!w.valid_index(r)){g.error("Invalid line number "+r)}else if(t===null){w.update(r,null);y.find("[data-index="+r+"]").remove()}else{t=M(t,{update:true,line:r});if(t===false){return g}unpromise(t,function(e){var t=s(e,i);if(t){e=t[0];i=t[1]}i=w.update(r,e,i);var n=ne({value:e,index:r,options:i});unpromise(n,function(){g.flush({scroll:false,update:true})})})}});return g},remove_line:function(e){return g.update(e,null)},last_index:function(){return w.length()-1},echo:function(e,r,t){var o=arguments.length>0;var s=t||new $.Deferred;function l(){Me=false;var e=a;a=[];for(var t=0;t<e.length;++t){g.echo.apply(g,e[t])}}function f(e){l();D(e,"ECHO",true)}function n(i){try{var u=$.extend({flush:true,exec:true,raw:C.raw,finalize:$.noop,unmount:$.noop,delay:C.execAnimationDelay,ansi:false,typing:false,externalPause:true,keepWords:false,invokeMethods:C.invokeMethods,onClear:null,formatters:true,allowedAttributes:C.allowedAttributes,newline:true},r||{});var n=C.externalPause&&u.externalPause;(function(t){if(W(i)){return}u.finalize=function(e){if(u.raw){e.addClass("raw")}if(u.ansi){e.addClass("ansi")}try{if(is_function(t)){t.call(g,e)}e.on_load({error:function(e){e.replaceWith(use_broken_image)},done:function(e){if(e&&n){g.resume()}},load:function(e){if(e&&n){g.pause()}}})}catch(e){D(e,"USER:echo(finalize)");t=null}}})(u.finalize);if(u.flush){if(!F.empty()){g.flush()}}if(v("onBeforeEcho",[i])===false){return}if(u.typing){if(typeof i!=="string"){return s.reject("echo: Typing animation require string"+" or promise that resolve to string")}if(typeof u.delay!=="number"||isNaN(u.delay)){return s.reject("echo: Invalid argument, delay need to"+" be a number")}var e=g.typing("echo",u.delay,i,u);e.then(function(){s.resolve()});return}var t;if(typeof i==="function"){t=i.bind(g)}else if(typeof i==="undefined"){if(o){t=String(i)}else{t=""}}else{var a=M(i);if(a===false){return g}t=a}if(is_promise(t)){Me=true}unpromise(t,function(e){if(is_promise(a)&&e===false){return}if(H(e,u)){return g}var t=w.length();var n=w.has_newline();if(!n){t--}if(!u.newline&&e[e.length-1]==="\n"){e=e.slice(0,-1);u.newline=true}var r=ne({value:e,options:u,index:t});if(is_promise(r)){Me=true}w.push([e,u]);unpromise(r,function(){if(u.flush){g.flush();v("onAfterEcho",[i])}l()},f)},f)}catch(e){if(is_function(C.exceptionHandler)){C.exceptionHandler.call(g,e,"TERMINAL (echo)")}else{alert_exception("[Terminal.echo]",e)}}}var i=r&&r.typing;if(Me){var u=[e,r];if(i){u.push(s)}a.push(u)}else{n(e)}if(i){return s.promise()}return g},typing:function(t,e,n,r){var i=new $.Deferred;var u;var a;if(typeof r==="object"){a=r.finalize||$.noop;u=$.extend({},r,{delay:e,finalize:o})}else{a=r||$.noop;u={delay:e,finalize:o}}function o(){i.resolve();if(is_function(a)){a.apply(g,arguments)}}var s=["prompt","echo","enter","insert"];function l(){return s.indexOf(t)>=0}f(function e(){if(l()){if(t==="prompt"){Ae(n,u)}else if(t==="echo"){Te(n,u)}else if(t==="enter"){with_prompt(g.get_prompt(),function(e){Se(e,n,u)},g)}else if(t==="insert"){with_prompt(g.get_prompt(),function(e){Be(e,n,u)},g)}}else{i.reject("Invalid type only `echo` and `prompt` are supported")}});return i.promise()},error:function(e,t){t=$.extend({},t,{raw:false,formatters:false});function n(e){if(typeof e!=="string"){e=String(e)}var t=$.terminal.escape_brackets(e).replace(/\\$/,"&#92;").replace(url_re,"]$1[[;;;terminal-error]");return"[[;;;terminal-error]"+t+"]"}if(typeof e==="function"){return g.echo(function(){return n(e.call(g))},t)}if(e&&e.then){e.then(function(e){g.echo(n(e))}).catch(le("Echo Error"));return g}return g.echo(n(e),t)},exception:function(r,e){var t=exception_message(r);if(e){t="&#91;"+e+"&#93;: "+t}if(t){g.error(t,{finalize:function(e){e.addClass("terminal-exception terminal-message")},keepWords:true})}if(typeof r.fileName==="string"){g.pause(C.softPause);$.get(r.fileName,function(e){var t=r.lineNumber-1;var n=e.split("\n")[t];if(n){g.error("["+r.lineNumber+"]: "+n)}g.resume()},"text")}if(r.stack){g.echo(format_stack_trace(r.stack),{finalize:function(e){e.addClass("terminal-exception terminal-stack-trace")},formatters:false})}return g},scroll:function(e){var t;e=Math.round(e);if(g.prop){if(e>S.prop("scrollTop")&&e>0){S.prop("scrollTop",0)}t=S.prop("scrollTop");S.scrollTop(t+e)}else{if(e>S.prop("scrollTop")&&e>0){S.prop("scrollTop",0)}t=S.prop("scrollTop");S.scrollTop(t+e)}return g},logout:function(n){if(b){throw new Error(sprintf(p().notWhileLogin,"logout"))}f(function e(){if(n){var t=Ue.pop();g.set_token(undefined,true);g.login.apply(g,t)}else if(A.size()===1&&g.token()){g.logout(true)}else{while(A.size()>1){if(g.token()){g.logout(true).pop().pop()}else{g.pop()}}}});return g},token:function(e){return r.get(g.prefix_name(e)+"_token")},set_token:function(e,t){var n=g.prefix_name(t)+"_token";if(typeof e==="undefined"){r.remove(n)}else{r.set(n,e)}return g},get_token:function(e){return g.token(e)},login_name:function(e){return r.get(g.prefix_name(e)+"_login")},name:function(){return A.top().name},prefix_name:function(e,t){var n=(C.name?C.name+"_":"")+m;if(e&&A.size()>1){var r=A.map(function(e){return e.name||""}).slice(1,t).join("_");if(r){n+="_"+r}}return n},read:function(e,t,n){var r;if(typeof arguments[1]==="object"){r=$.extend({typing:false,delay:C.execAnimationDelay,success:$.noop,cancel:$.noop},arguments[1])}else{r={typing:false,success:t||$.noop,cancel:n||$.noop}}if(r.typing){var i=g.get_prompt();r.typing=false;return g.typing("prompt",r.delay,e).then(function(){return g.set_prompt(i).read(e,r)})}We=true;var u=jQuery.Deferred();var a=false;g.push(function(e){a=true;u.resolve(e);if(is_function(r.success)){r.success(e)}g.pop();if(C.history){B.history().enable()}},{name:"read",history:false,prompt:e||"",onExit:function(){if(!a){u.reject();if(is_function(r.cancel)){r.cancel()}}}});if(C.history){B.history().disable()}if(is_function(r.onReady)){r.onReady.call(g)}return u.promise()},push:function(a,o){l(function e(){o=o||{};var t={infiniteLogin:false};var r=$.extend({},t,o);if(!r.name&&d){r.name=d.name}if(r.prompt===undefined){r.prompt=(r.name||">")+" "}var n=A.top();if(n){n.mask=B.mask()}var i=k;function u(){v("onPush",[n,A.top()]);ve()}G(a,o.login,function(e){A.push($.extend({},e,r));if(r.completion===true){if($.isArray(e.completion)){A.top().completion=e.completion}else if(!e.completion){A.top().completion=false}}if(r.login){var t;var n=get_type(r.login);if(n==="function"){t=r.infiniteLogin?$.noop:g.pop;g.login(r.login,r.infiniteLogin,u,t)}else if(get_type(a)==="string"&&n==="string"||n==="boolean"){t=r.infiniteLogin?$.noop:g.pop;g.login(X(a,r.login),r.infiniteLogin,u,t)}}else{u()}if(!i&&g.enabled()){g.resume()}})});return g},pop:function(e,t){if(e!==undefined){h(e)}var n=g.token(true);var r;if(A.size()===1){r=A.top();if(C.login){if(!t){v("onPop",[r,null])}De();v("onExit")}else{g.error(p().canExitError)}}else{if(n){de()}var i=A.pop();r=A.top();ve();g.set_mask(r.mask);if(!t){v("onPop",[i,r])}if(b&&g.get_prompt()!==p().login+": "){b=false}if(is_function(i.onExit)){try{i.onExit.call(g,g)}catch(e){i.onExit=$.noop;D(e,"onExit")}}}return g},option:function(e,t){if(typeof t==="undefined"){if(typeof e==="string"){return C[e]}else if(typeof e==="object"){$.each(e,function(e,t){C[e]=t})}}else{C[e]=t;if(e.match(/^num(Chars|Rows)$/)){re()}}return g},invoke_key:function(e){B.invoke_key(e);return g},keymap:function(e,n){if(arguments.length===0){return B.keymap()}if(typeof n==="undefined"){if(typeof e==="string"){return B.keymap(e)}else if($.isPlainObject(e)){e=$.extend({},P,$.omap(e||{},function(n,r){if(!P[n]){return r.bind(g)}return function(e,t){return r.call(g,e,function(){return P[n](e,t)})}}));B.keymap(null).keymap(e)}}else if(typeof n==="function"){var r=e;if(!P[r]){B.keymap(r,n.bind(g))}else{B.keymap(r,function(e,t){return n.call(g,e,function(){return P[r](e,t)})})}}},level:function(){return A.size()},reset:function(){f(function e(){g.clear();while(A.size()>1){A.pop()}Ce()});return g},purge:function(){f(function e(){var t=g.prefix_name()+"_";var n=r.get(t+"interpreters");if(n){$.each(JSON.parse(n),function(e,t){r.remove(t+"_commands");r.remove(t+"_token");r.remove(t+"_login")})}B.purge();r.remove(t+"interpreters")});return g},destroy:function(){f(function e(){B.destroy().remove();g.resizer("unbind");g.touch_scroll("unbind");at.resizer("unbind").remove();ot.resizer("unbind").remove();$(document).unbind(".terminal_"+g.id());$(window).unbind(".terminal_"+g.id());g.unbind("click mousedown mouseup");g.removeData("terminal").removeClass("terminal").unbind(".terminal");if(C.width){g.css("width","")}if(C.height){g.css("height","")}$(window).off("blur",mt).off("focus",ct);g.find(".terminal-fill, .terminal-font").remove();g.stopTime();terminals.remove(m);if(T){if(T.unobserve){T.unobserve(g[0])}else{clearInterval(T)}}var t=g.find(".terminal-scroll-marker");if(Ge){Ge.unobserve(t[0])}t.remove();if(ut){ut.disconnect()}if(!terminals.length()){$(window).off("hashchange")}if(is_mobile){g.off(["touchstart.terminal","touchmove.terminal","touchend.terminal"].join(" "))}y.remove();S.remove();if(Ie){var n=$(Ie);if(n.attr("class")==="full-screen-terminal"){n.removeAttr("class")}else{n.removeClass("full-screen-terminal")}g.remove()}nt=true});return g},scroll_to:function(e){var t=S.scrollTop()-g.offset().top+$(e).offset().top;S.scrollTop(t);return g},scroll_to_bottom:function(){var e;if(g.prop){e=S.prop("scrollHeight")}else{e=S.attr("scrollHeight")}S.scrollTop(e);return g},is_bottom:function(){if(C.scrollBottomOffset===-1){return false}else if(typeof Ve==="boolean"){return Ve}else{var e,t,n;e=S[0].scrollHeight;t=S[0].scrollTop;n=S[0].offsetHeight;var r=e-C.scrollBottomOffset;return t+n>r}},duplicate:function(){var e=$(g);return $.extend(e,Pe)},get_output_buffer:function(e){var r=$.extend({html:false},e);var i=[];var u=false;F.forEach(function(e){if(e){if(is_function(e.finalize)){u=!e.newline}else{var t;if(r.html){t=e.line}else{t=e.raw}if(u){var n=i.length-1;i[n]+=t}else{i.push(t)}}}});if(r.html){return i.map(function(e){return"<div>"+e+"</div>"}).join("\n")}return i.join("\n")},clear_buffer:function(){F.clear();return g}},function(t,e){return function(){if(nt){if(!C.exceptionHandler){throw new $.terminal.Exception(p().defunctTerminal)}}try{return e.apply(g,[].slice.apply(arguments))}catch(e){if(t!=="exec"&&t!=="resume"){D(e,e.type||"TERMINAL",true)}if(!C.exceptionHandler){throw e}}}});$.extend(g,Pe);if(g.length===0){var Ne=sprintf(p().invalidSelector);throw new $.terminal.Exception(Ne)}g.data("terminal",g);var a=[];var Me=false;var d;var _;var He=0;var y;var m=terminals.length();var We=false;var u;var o;var qe;var Ue=new Stack;var Ke=new DelayQueue;var Je=false;var Qe=false;var Ye=new DelayQueue;var f=Le(Ye);var l=Le(Ke);var Ve;var Ge;var b=false;var Xe=$.noop;var Ze,et;var tt=[];var C=$.extend({},$.terminal.defaults,{name:g.selector,exit:!!(t&&t.login||!t)},t||{});if(typeof C.width==="number"){g.width(C.width)}if(typeof C.height==="number"){g.height(C.height)}delete C.formatters;var nt=false;var F=new FormatBuffer(function(e){return{linksNoReferrer:C.linksNoReferrer,linksNoFollow:C.linksNoFollow,anyLinks:C.anyLinks,charWidth:L.width,useCache:C.useCache,escape:false,allowedAttributes:e.allowedAttributes||[]}});var w=new OutputLines(function(){return C});var r=new n(C.memory);var E=C.enabled;var x=false;var k=false;var rt=true;var A;var B;var it;var T;var ut;if(C.ignoreSystemDescribe===true){C.describe=false}$(document).bind("ajaxSend.terminal_"+g.id(),function(e,t){requests.push(t)});var S=$('<div class="terminal-scroller"/>').appendTo(g);var R=$('<div class="terminal-wrapper"/>').appendTo(S);$(broken_image).hide().appendTo(R);var at=$('<div class="terminal-font">&nbsp;</div>').appendTo(g);var ot=$('<div class="terminal-pixel"/>').appendTo(g);var j=$('<div class="terminal-fill"/>').appendTo(S);y=$("<div>").addClass("terminal-output").attr("role","log").appendTo(R);g.addClass("terminal");var O=pt();var L=get_char_size(g);var st=!terminal_ready(g);if(C.login&&v("onBeforeLogin")===false){rt=false}var lt;if(typeof e==="string"){lt=e}else if(is_array(e)){for(var I=0,ft=e.length;I<ft;++I){if(typeof e[I]==="string"){lt=e[I];break}}}var z;if(is_function(C.login)){z=C.login}else if(lt&&(typeof C.login==="string"||C.login===true)){z=X(lt,C.login)}terminals.append(g);function ct(){if(it){g.focus();g.scroll_to_bottom()}}function pt(){var e=ot[0].getBoundingClientRect();return e.width||1}function mt(){it=E;g.disable().find(".cmd textarea").trigger("blur",[true])}function Dt(e){if(is_function(e)){e=e()}if(e&&is_function(e.then)){return e.then(Dt)}if(get_type(e)!=="string"){if(is_function(C.parseObject)){var t=C.parseObject(e);if(get_type(t)==="string"){e=t}}else if(is_array(e)){e=$.terminal.columns(e,g.cols(),C.tabs)}else{e=String(e)}}return e}function dt(t){if(t.proxy){return t}var e=function(e){return t.call(g,e,g)};e.proxy=true;return e}function ht(e){e=e.originalEvent;function t(e,t){return e.type.indexOf(t)!==-1}function i(e){g.echo('<img src="'+e+'"/>',{raw:true})}function u(e){var t=window.URL||window.webkitURL;return t.createObjectURL(e)}function a(e,t){if(!t){var n={target:g};if(typeof e==="string"){n.text=e}else if(e instanceof Blob){n.image=u(e)}var r=v("onPaste",[n]);if(r){if(is_function(r.then||r.done)){return(r.then||r.done).call(r,function(e){a(e,true)})}else{a(r,true)}}else if(r!==false){a(n.image||n.text,true)}}else if(e instanceof Blob){i(u(e))}else if(typeof e==="string"){if(e.match(/^(data:|blob:)/)){i(e)}else{g.insert(e)}}}if(e.clipboardData){if(g.enabled()){var n=e.clipboardData.items;if(n){for(var r=0;r<n.length;r++){if(t(n[r],"image")&&C.pasteImage){var o=n[r].getAsFile();a(o)}else if(t(n[r],"text/plain")){n[r].getAsString(function(e){a(e.replace(/\r/g,""))})}}}else if(e.clipboardData.getData){var s=e.clipboardData.getData("text/plain");a(s.replace(/\r/g,""))}return false}}}$(document).on("paste.terminal_"+g.id(),ht);var P=$.extend({},Ee,$.omap(C.keymap||{},function(n,r){if(!Ee[n]){return r.bind(g)}return function(e,t){return r.call(g,e,function(){return Ee[n](e,t)})}}));G(e,C.login,function(e){if(C.completion&&typeof C.completion!=="boolean"||!C.completion){e.completion="settings"}var t=C.prompt;if(is_function(t)){t=dt(t)}A=new Stack($.extend({},C.extra,{name:C.name,prompt:t,keypress:C.keypress,keydown:C.keydown,resize:C.onResize,greetings:C.greetings,mousewheel:C.mousewheel,history:C.history,keymap:P},e));B=$("<div/>").appendTo(R).cmd({tabindex:C.tabindex,mobileDelete:C.mobileDelete,mobileIngoreAutoSpace:C.mobileIngoreAutoSpace,prompt:z?false:t,history:C.memory?"memory":C.history,historyFilter:C.historyFilter,historySize:C.historySize,caseSensitiveSearch:C.caseSensitiveSearch,onPaste:C.onPaste,width:"100%",enabled:false,charWidth:L.width,keydown:xe,keymap:P,clickTimeout:C.clickTimeout,holdTimeout:C.holdTimeout,holdRepeatTimeout:C.holdRepeatTimeout,repeatTimeoutKeys:C.repeatTimeoutKeys,allowedAttributes:C.allowedAttributes,keypress:$e,tabs:C.tabs,onPositionChange:function(){var e=[].slice.call(arguments);_e();v("onPositionChange",e)},onCommandChange:function(e){if(Ze!==j.width()){g.resizer()}v("onCommandChange",[e]);_e()},commands:me});function n(e){if(is_mobile){return}e=e.originalEvent;if(e){var t=document.elementFromPoint(e.clientX,e.clientY);if(!$(t).closest(".terminal").length&&g.enabled()){g.disable()}}}g.oneTime(100,function(){$(document).bind("click.terminal_"+g.id(),n).bind("contextmenu.terminal_"+g.id(),n)});var r=$(window);document.addEventListener("resume",function(){g.disable()});if(is_mobile){(function(){g.addClass("terminal-mobile");var i;var u;var n;var a=3;var e=B.clip();var r=200;var o;e.$node.off("touchstart.cmd");g.on("touchstart.terminal",function(e){e=e.originalEvent;window.touch_event=e;if(e.target.tagName.toLowerCase()==="a"){return}if(!x&&e.touches.length===1){n=g.enabled();var t=e.touches[0];i={x:t.clientX,y:t.clientY};o=setTimeout(function(){i=null},r)}}).on("touchmove.terminal",function(e){if(e.touches.length===1&&i){var t=e.touches[0];var n=Math.abs(t.clientX-i.x);var r=Math.abs(t.clientY-i.y);if(n>a||r>a){u=true}}}).on("touchend.terminal",function(){if(i){clearTimeout(o);if(!u){if(!n){e.focus();g.focus()}else{e.blur();g.disable()}}}u=false;i=null})})()}else{r.on("focus.terminal_"+g.id(),ct).on("blur.terminal_"+g.id(),mt);var h;(function(){var t=0;var n;var r="click_"+g.id();var i=g.find(".cmd textarea");function u(){if(n.is(".terminal")||n.is(".terminal-scroller")||n.is(".terminal-wrapper")){var e=g.get_command().length;g.set_position(e)}else if(n.closest(".cmd-prompt").length){g.set_position(0)}if(!i.is(":focus")){i.focus()}a()}function a(){t=0;n=null}var o=".terminal-output textarea,"+".terminal-output input";g.mousedown(function(e){if(!scrollbar_event(e,j,O)){n=$(e.target)}}).mouseup(function(){if(h){h=false;return}if(n&&n.closest(o).length){if(E){g.disable()}}else if(get_selected_html()===""&&n){if(++t===1){if(!x){if(!E){g.focus();g.scroll_to_bottom()}else{var e=C.clickTimeout;g.oneTime(e,r,u);return}}}else{g.stopTime(r)}}a()}).dblclick(function(){a();g.stopTime(r)})})();(function(){var D=B.clip().$node;function d(e){return e.type==="mousedown"&&e.buttons===2||e.type==="contextmenu"}var e;if("oncontextmenu"in window){e="contextmenu.terminal"}else{e="mousedown.terminal"}g.on(e,function(e){h=get_selected_html()===""&&d(e)&&!e.ctrlKey;if(h){var t=$(e.target);if(t.is("img,value,audio,object,canvas,a")){return}if(!g.enabled()){g.enable()}var n=B.offset();var r=B[0].getBoundingClientRect();var i=g.offset();var u=i.top-n.top;var a=Math.max(e.pageY-n.top-20,u);var o=e.pageX-n.left-20;var s=4*14;var l=5*14;var f=g[0].getBoundingClientRect();var c=j.outerWidth()*O;var p=a+r.top+s;p=p-f.height-f.top;var m=o+r.left+l;m=m-c-f.left;if(p>0){s-=Math.ceil(p)}if(m>0){l-=Math.ceil(m)}D.attr("style",[style_prop("left",o,true),style_prop("top",a,true),style_prop("width",l,true),style_prop("height",s,true)].join(";"));if(!D.is(":focus")){D.focus()}g.stopTime("textarea");g.oneTime(100,"textarea",function(){var e={left:"",top:"",width:"",height:""};if(!is_css_variables_supported){var t=g.find(".cmd .cmd-cursor-line").prevUntil(".cmd-prompt").length;e.top=t*14+"px"}D.css(e)});g.stopTime("selection");g.everyTime(20,"selection",function(){if(D[0].selection!==D[0].value){if(get_textarea_selection(D[0])){clear_textarea_selection(D[0]);select(g.find(".terminal-output")[0],g.find(".cmd div:last-of-type")[0]);g.stopTime("selection")}}})}})})();g.on("scroll",function(){var e=g.find("textarea");var t=g[0].getBoundingClientRect();var n=g[0].scrollHeight;var r=S.scrollTop();var i=n-(r+t.height);if(i===0){e.css("top","")}else{e.css("top",-i)}})}g.on("click","a",function(e){var t=$(this);if(t.closest(".terminal-exception").length){var n=t.attr("href");if(n.match(/:[0-9]+$/)){e.preventDefault();U(n,g.cols())}}if(E){g.find(".cmd textarea").focus()}});function i(){var e=L.width;L=get_char_size(g);if(e!==L.width){B.option("charWidth",L.width).refresh()}}u();function u(){if(g.is(":visible")){var e=j.width();var t=j.height();var n=pt();css(g[0],{"--pixel-density":n});if(st){st=!terminal_ready(g);if(!st){L=get_char_size(g);i()}}if(et!==t||Ze!==e||O!==n){g.resize()}et=t;Ze=e;O=n}}function a(){var e={prefix:"terminal-"};g.resizer("unbind").resizer(u,e);at.resizer("unbind").resizer(function(){i();g.resize()},e);ot.resizer("unbind").resizer(function(){O=pt();g.resize()},e)}function o(e){Ve=e[0].intersectionRatio===1}function s(){if(window.IntersectionObserver){var e=$('<div class="terminal-scroll-marker"/>').appendTo(S);var t=e;if(C.scrollBottomOffset!==-1){var n=style_prop("height",C.scrollBottomOffset);t=$('<div style="'+n+'"/>').appendTo(e)}Ge=new IntersectionObserver(o,{root:S[0],rootMargin:"0px",threshold:1});Ge.observe(t[0])}}s();if(g.is(":visible")){a()}function l(){if(T){if(T.unobserve){T.unobserve(g[0])}else{clearInterval(T)}}var e=g.enabled();var t=g.is(":visible");if(e&&!t){g.disable()}if(t){a()}else{R.css("visibility","hidden")}function n(){if(g.is(":visible")&&!t){t=true;a();i();u();if(e){g.enable()}R.css("visibility","")}else if(t&&!g.is(":visible")){t=false;e=$.terminal.active()===g&&g.enabled();g.disable();R.css("visibility","hidden")}}if(window.IntersectionObserver&&g.css("position")!=="fixed"){T=new IntersectionObserver(n,{root:null});T.observe(g[0])}else{T=setInterval(n,100)}}var f=!!g.closest("body").length;var c=window.MutationObserver||window.WebKitMutationObserver;if(c){ut=new c(function(){if(g.closest("body").length){if(!f){g.scroll_to_bottom();l();u()}f=true}else if(f){f=false}});ut.observe(document.body,{childList:true})}if(f){l()}Ke.resolve();if(E&&g.is(":visible")&&!is_mobile){g.focus(undefined,true)}else{g.disable()}if(is_function(z)){g.login(z,true,Ce)}else{Ce()}function p(e,t){var n=terminals.get()[e[0]];var r=$.Deferred();if(n&&m===n.id()){if(!e[2]){r.resolve();return r.promise()}else if(k){pe.push(function(){return n.exec(e[2],t).done(function(){n.save_state(e[2],true,e[1]);r.resolve()})});return r.promise()}else{return n.exec(e[2],t).done(function(){n.save_state(e[2],true,e[1])})}}}if(C.execHash){if(location.hash){setTimeout(function(){try{var e=location.hash.replace(/^#/,"");hash_commands=JSON.parse(decodeURIComponent(e));if(!e.match(/\[/)){ye(hash_commands)}var n=0;var r={typing:C.execAnimation,delay:C.execAnimationDelay};(function e(){var t=hash_commands[n++];if(t){p(t,r).done(e)}else{change_hash=true}})()}catch(e){}})}else{change_hash=true}}else{change_hash=true}(function(){var i=false;$(document).bind("keydown.terminal_"+g.id(),function(e){if(e.shiftKey){i=true}}).bind("keyup.terminal_"+g.id(),function(e){if(e.shiftKey||e.which===16){i=false}});function n(e,t){if(!i){var n=A.top();var r;if(is_function(n.mousewheel)){r=n.mousewheel(e,t,g)}else if(is_function(C.mousewheel)){r=C.mousewheel(e,t,g)}if(r===true){return}if((oe()||r===false)&&!e.ctrlKey){e.stopPropagation();e.preventDefault()}if(r===false){return false}if(t>0){g.scroll(-40)}else{g.scroll(40)}}}if($.event.special.mousewheel){S.on("mousewheel",n)}else{var r;var e=document.createElement("div");if("onwheel"in e){r="wheel"}else if(document.onmousewheel!==undefined){r="mousewheel"}else{r="DOMMouseScroll"}e=null;g.on(r,function(e){var t;if(r==="mousewheel"){t=-1/40*e.originalEvent.wheelDelta}else{t=e.originalEvent.deltaY||e.originalEvent.detail}n(e,-t)})}S.touch_scroll(function(e){var t=e.current.clientY-e.previous.clientY;var n;var r=A.top();if(is_function(r.touchscroll)){n=r.touchscroll(e,t,g)}else if(is_function(C.touchscroll)){n=C.touchscroll(e,t,g)}css(g[0],{"--terminal-scroll":g.prop("scrollTop")});if(n===true){return}return false})})()});return g}});
//# sourceMappingURL=jquery.terminal.min.js.map
(function(global) {
  'use strict';

  var nativeKeyboardEvent = ('KeyboardEvent' in global);
  if (!nativeKeyboardEvent)
    global.KeyboardEvent = function KeyboardEvent() { throw TypeError('Illegal constructor'); };

  [
    ['DOM_KEY_LOCATION_STANDARD', 0x00], // Default or unknown location
    ['DOM_KEY_LOCATION_LEFT', 0x01], // e.g. Left Alt key
    ['DOM_KEY_LOCATION_RIGHT', 0x02], // e.g. Right Alt key
    ['DOM_KEY_LOCATION_NUMPAD', 0x03], // e.g. Numpad 0 or +
  ].forEach(function(p) { if (!(p[0] in global.KeyboardEvent)) global.KeyboardEvent[p[0]] = p[1]; });

  var STANDARD = global.KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
      LEFT = global.KeyboardEvent.DOM_KEY_LOCATION_LEFT,
      RIGHT = global.KeyboardEvent.DOM_KEY_LOCATION_RIGHT,
      NUMPAD = global.KeyboardEvent.DOM_KEY_LOCATION_NUMPAD;

  //--------------------------------------------------------------------
  //
  // Utilities
  //
  //--------------------------------------------------------------------

  function contains(s, ss) { return String(s).indexOf(ss) !== -1; }

  var os = (function() {
    if (contains(navigator.platform, 'Win')) { return 'win'; }
    if (contains(navigator.platform, 'Mac')) { return 'mac'; }
    if (contains(navigator.platform, 'CrOS')) { return 'cros'; }
    if (contains(navigator.platform, 'Linux')) { return 'linux'; }
    if (contains(navigator.userAgent, 'iPad') || contains(navigator.platform, 'iPod') || contains(navigator.platform, 'iPhone')) { return 'ios'; }
    return '';
  } ());

  var browser = (function() {
    if (contains(navigator.userAgent, 'Chrome/')) { return 'chrome'; }
    if (contains(navigator.vendor, 'Apple')) { return 'safari'; }
    if (contains(navigator.userAgent, 'MSIE')) { return 'ie'; }
    if (contains(navigator.userAgent, 'Gecko/')) { return 'moz'; }
    if (contains(navigator.userAgent, 'Opera/')) { return 'opera'; }
    return '';
  } ());

  var browser_os = browser + '-' + os;

  function mergeIf(baseTable, select, table) {
    if (browser_os === select || browser === select || os === select) {
      Object.keys(table).forEach(function(keyCode) {
        baseTable[keyCode] = table[keyCode];
      });
    }
  }

  function remap(o, key) {
    var r = {};
    Object.keys(o).forEach(function(k) {
      var item = o[k];
      if (key in item) {
        r[item[key]] = item;
      }
    });
    return r;
  }

  function invert(o) {
    var r = {};
    Object.keys(o).forEach(function(k) {
      r[o[k]] = k;
    });
    return r;
  }

  //--------------------------------------------------------------------
  //
  // Generic Mappings
  //
  //--------------------------------------------------------------------

  // "keyInfo" is a dictionary:
  //   code: string - name from UI Events KeyboardEvent code Values
  //     https://w3c.github.io/uievents-code/
  //   location (optional): number - one of the DOM_KEY_LOCATION values
  //   keyCap (optional): string - keyboard label in en-US locale
  // USB code Usage ID from page 0x07 unless otherwise noted (Informative)

  // Map of keyCode to keyInfo
  var keyCodeToInfoTable = {
    // 0x01 - VK_LBUTTON
    // 0x02 - VK_RBUTTON
    0x03: { code: 'Cancel' }, // [USB: 0x9b] char \x0018 ??? (Not in D3E)
    // 0x04 - VK_MBUTTON
    // 0x05 - VK_XBUTTON1
    // 0x06 - VK_XBUTTON2
    0x06: { code: 'Help' }, // [USB: 0x75] ???
    // 0x07 - undefined
    0x08: { code: 'Backspace' }, // [USB: 0x2a] Labelled Delete on Macintosh keyboards.
    0x09: { code: 'Tab' }, // [USB: 0x2b]
    // 0x0A-0x0B - reserved
    0X0C: { code: 'Clear' }, // [USB: 0x9c] NumPad Center (Not in D3E)
    0X0D: { code: 'Enter' }, // [USB: 0x28]
    // 0x0E-0x0F - undefined

    0x10: { code: 'Shift' },
    0x11: { code: 'Control' },
    0x12: { code: 'Alt' },
    0x13: { code: 'Pause' }, // [USB: 0x48]
    0x14: { code: 'CapsLock' }, // [USB: 0x39]
    0x15: { code: 'KanaMode' }, // [USB: 0x88]
    0x16: { code: 'Lang1' }, // [USB: 0x90]
    // 0x17: VK_JUNJA
    // 0x18: VK_FINAL
    0x19: { code: 'Lang2' }, // [USB: 0x91]
    // 0x1A - undefined
    0x1B: { code: 'Escape' }, // [USB: 0x29]
    0x1C: { code: 'Convert' }, // [USB: 0x8a]
    0x1D: { code: 'NonConvert' }, // [USB: 0x8b]
    0x1E: { code: 'Accept' }, // [USB: ????]
    0x1F: { code: 'ModeChange' }, // [USB: ????]

    0x20: { code: 'Space' }, // [USB: 0x2c]
    0x21: { code: 'PageUp' }, // [USB: 0x4b]
    0x22: { code: 'PageDown' }, // [USB: 0x4e]
    0x23: { code: 'End' }, // [USB: 0x4d]
    0x24: { code: 'Home' }, // [USB: 0x4a]
    0x25: { code: 'ArrowLeft' }, // [USB: 0x50]
    0x26: { code: 'ArrowUp' }, // [USB: 0x52]
    0x27: { code: 'ArrowRight' }, // [USB: 0x4f]
    0x28: { code: 'ArrowDown' }, // [USB: 0x51]
    0x29: { code: 'Select' }, // (Not in D3E)
    0x2A: { code: 'Print' }, // (Not in D3E)
    0x2B: { code: 'Execute' }, // [USB: 0x74] (Not in D3E)
    0x2C: { code: 'PrintScreen' }, // [USB: 0x46]
    0x2D: { code: 'Insert' }, // [USB: 0x49]
    0x2E: { code: 'Delete' }, // [USB: 0x4c]
    0x2F: { code: 'Help' }, // [USB: 0x75] ???

    0x30: { code: 'Digit0', keyCap: '0' }, // [USB: 0x27] 0)
    0x31: { code: 'Digit1', keyCap: '1' }, // [USB: 0x1e] 1!
    0x32: { code: 'Digit2', keyCap: '2' }, // [USB: 0x1f] 2@
    0x33: { code: 'Digit3', keyCap: '3' }, // [USB: 0x20] 3#
    0x34: { code: 'Digit4', keyCap: '4' }, // [USB: 0x21] 4$
    0x35: { code: 'Digit5', keyCap: '5' }, // [USB: 0x22] 5%
    0x36: { code: 'Digit6', keyCap: '6' }, // [USB: 0x23] 6^
    0x37: { code: 'Digit7', keyCap: '7' }, // [USB: 0x24] 7&
    0x38: { code: 'Digit8', keyCap: '8' }, // [USB: 0x25] 8*
    0x39: { code: 'Digit9', keyCap: '9' }, // [USB: 0x26] 9(
    // 0x3A-0x40 - undefined

    0x41: { code: 'KeyA', keyCap: 'a' }, // [USB: 0x04]
    0x42: { code: 'KeyB', keyCap: 'b' }, // [USB: 0x05]
    0x43: { code: 'KeyC', keyCap: 'c' }, // [USB: 0x06]
    0x44: { code: 'KeyD', keyCap: 'd' }, // [USB: 0x07]
    0x45: { code: 'KeyE', keyCap: 'e' }, // [USB: 0x08]
    0x46: { code: 'KeyF', keyCap: 'f' }, // [USB: 0x09]
    0x47: { code: 'KeyG', keyCap: 'g' }, // [USB: 0x0a]
    0x48: { code: 'KeyH', keyCap: 'h' }, // [USB: 0x0b]
    0x49: { code: 'KeyI', keyCap: 'i' }, // [USB: 0x0c]
    0x4A: { code: 'KeyJ', keyCap: 'j' }, // [USB: 0x0d]
    0x4B: { code: 'KeyK', keyCap: 'k' }, // [USB: 0x0e]
    0x4C: { code: 'KeyL', keyCap: 'l' }, // [USB: 0x0f]
    0x4D: { code: 'KeyM', keyCap: 'm' }, // [USB: 0x10]
    0x4E: { code: 'KeyN', keyCap: 'n' }, // [USB: 0x11]
    0x4F: { code: 'KeyO', keyCap: 'o' }, // [USB: 0x12]

    0x50: { code: 'KeyP', keyCap: 'p' }, // [USB: 0x13]
    0x51: { code: 'KeyQ', keyCap: 'q' }, // [USB: 0x14]
    0x52: { code: 'KeyR', keyCap: 'r' }, // [USB: 0x15]
    0x53: { code: 'KeyS', keyCap: 's' }, // [USB: 0x16]
    0x54: { code: 'KeyT', keyCap: 't' }, // [USB: 0x17]
    0x55: { code: 'KeyU', keyCap: 'u' }, // [USB: 0x18]
    0x56: { code: 'KeyV', keyCap: 'v' }, // [USB: 0x19]
    0x57: { code: 'KeyW', keyCap: 'w' }, // [USB: 0x1a]
    0x58: { code: 'KeyX', keyCap: 'x' }, // [USB: 0x1b]
    0x59: { code: 'KeyY', keyCap: 'y' }, // [USB: 0x1c]
    0x5A: { code: 'KeyZ', keyCap: 'z' }, // [USB: 0x1d]
    0x5B: { code: 'MetaLeft', location: LEFT }, // [USB: 0xe3]
    0x5C: { code: 'MetaRight', location: RIGHT }, // [USB: 0xe7]
    0x5D: { code: 'ContextMenu' }, // [USB: 0x65] Context Menu
    // 0x5E - reserved
    0x5F: { code: 'Standby' }, // [USB: 0x82] Sleep

    0x60: { code: 'Numpad0', keyCap: '0', location: NUMPAD }, // [USB: 0x62]
    0x61: { code: 'Numpad1', keyCap: '1', location: NUMPAD }, // [USB: 0x59]
    0x62: { code: 'Numpad2', keyCap: '2', location: NUMPAD }, // [USB: 0x5a]
    0x63: { code: 'Numpad3', keyCap: '3', location: NUMPAD }, // [USB: 0x5b]
    0x64: { code: 'Numpad4', keyCap: '4', location: NUMPAD }, // [USB: 0x5c]
    0x65: { code: 'Numpad5', keyCap: '5', location: NUMPAD }, // [USB: 0x5d]
    0x66: { code: 'Numpad6', keyCap: '6', location: NUMPAD }, // [USB: 0x5e]
    0x67: { code: 'Numpad7', keyCap: '7', location: NUMPAD }, // [USB: 0x5f]
    0x68: { code: 'Numpad8', keyCap: '8', location: NUMPAD }, // [USB: 0x60]
    0x69: { code: 'Numpad9', keyCap: '9', location: NUMPAD }, // [USB: 0x61]
    0x6A: { code: 'NumpadMultiply', keyCap: '*', location: NUMPAD }, // [USB: 0x55]
    0x6B: { code: 'NumpadAdd', keyCap: '+', location: NUMPAD }, // [USB: 0x57]
    0x6C: { code: 'NumpadComma', keyCap: ',', location: NUMPAD }, // [USB: 0x85]
    0x6D: { code: 'NumpadSubtract', keyCap: '-', location: NUMPAD }, // [USB: 0x56]
    0x6E: { code: 'NumpadDecimal', keyCap: '.', location: NUMPAD }, // [USB: 0x63]
    0x6F: { code: 'NumpadDivide', keyCap: '/', location: NUMPAD }, // [USB: 0x54]

    0x70: { code: 'F1' }, // [USB: 0x3a]
    0x71: { code: 'F2' }, // [USB: 0x3b]
    0x72: { code: 'F3' }, // [USB: 0x3c]
    0x73: { code: 'F4' }, // [USB: 0x3d]
    0x74: { code: 'F5' }, // [USB: 0x3e]
    0x75: { code: 'F6' }, // [USB: 0x3f]
    0x76: { code: 'F7' }, // [USB: 0x40]
    0x77: { code: 'F8' }, // [USB: 0x41]
    0x78: { code: 'F9' }, // [USB: 0x42]
    0x79: { code: 'F10' }, // [USB: 0x43]
    0x7A: { code: 'F11' }, // [USB: 0x44]
    0x7B: { code: 'F12' }, // [USB: 0x45]
    0x7C: { code: 'F13' }, // [USB: 0x68]
    0x7D: { code: 'F14' }, // [USB: 0x69]
    0x7E: { code: 'F15' }, // [USB: 0x6a]
    0x7F: { code: 'F16' }, // [USB: 0x6b]

    0x80: { code: 'F17' }, // [USB: 0x6c]
    0x81: { code: 'F18' }, // [USB: 0x6d]
    0x82: { code: 'F19' }, // [USB: 0x6e]
    0x83: { code: 'F20' }, // [USB: 0x6f]
    0x84: { code: 'F21' }, // [USB: 0x70]
    0x85: { code: 'F22' }, // [USB: 0x71]
    0x86: { code: 'F23' }, // [USB: 0x72]
    0x87: { code: 'F24' }, // [USB: 0x73]
    // 0x88-0x8F - unassigned

    0x90: { code: 'NumLock', location: NUMPAD }, // [USB: 0x53]
    0x91: { code: 'ScrollLock' }, // [USB: 0x47]
    // 0x92-0x96 - OEM specific
    // 0x97-0x9F - unassigned

    // NOTE: 0xA0-0xA5 usually mapped to 0x10-0x12 in browsers
    0xA0: { code: 'ShiftLeft', location: LEFT }, // [USB: 0xe1]
    0xA1: { code: 'ShiftRight', location: RIGHT }, // [USB: 0xe5]
    0xA2: { code: 'ControlLeft', location: LEFT }, // [USB: 0xe0]
    0xA3: { code: 'ControlRight', location: RIGHT }, // [USB: 0xe4]
    0xA4: { code: 'AltLeft', location: LEFT }, // [USB: 0xe2]
    0xA5: { code: 'AltRight', location: RIGHT }, // [USB: 0xe6]

    0xA6: { code: 'BrowserBack' }, // [USB: 0x0c/0x0224]
    0xA7: { code: 'BrowserForward' }, // [USB: 0x0c/0x0225]
    0xA8: { code: 'BrowserRefresh' }, // [USB: 0x0c/0x0227]
    0xA9: { code: 'BrowserStop' }, // [USB: 0x0c/0x0226]
    0xAA: { code: 'BrowserSearch' }, // [USB: 0x0c/0x0221]
    0xAB: { code: 'BrowserFavorites' }, // [USB: 0x0c/0x0228]
    0xAC: { code: 'BrowserHome' }, // [USB: 0x0c/0x0222]
    0xAD: { code: 'AudioVolumeMute' }, // [USB: 0x7f]
    0xAE: { code: 'AudioVolumeDown' }, // [USB: 0x81]
    0xAF: { code: 'AudioVolumeUp' }, // [USB: 0x80]

    0xB0: { code: 'MediaTrackNext' }, // [USB: 0x0c/0x00b5]
    0xB1: { code: 'MediaTrackPrevious' }, // [USB: 0x0c/0x00b6]
    0xB2: { code: 'MediaStop' }, // [USB: 0x0c/0x00b7]
    0xB3: { code: 'MediaPlayPause' }, // [USB: 0x0c/0x00cd]
    0xB4: { code: 'LaunchMail' }, // [USB: 0x0c/0x018a]
    0xB5: { code: 'MediaSelect' },
    0xB6: { code: 'LaunchApp1' },
    0xB7: { code: 'LaunchApp2' },
    // 0xB8-0xB9 - reserved
    0xBA: { code: 'Semicolon',  keyCap: ';' }, // [USB: 0x33] ;: (US Standard 101)
    0xBB: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
    0xBC: { code: 'Comma', keyCap: ',' }, // [USB: 0x36] ,<
    0xBD: { code: 'Minus', keyCap: '-' }, // [USB: 0x2d] -_
    0xBE: { code: 'Period', keyCap: '.' }, // [USB: 0x37] .>
    0xBF: { code: 'Slash', keyCap: '/' }, // [USB: 0x38] /? (US Standard 101)

    0xC0: { code: 'Backquote', keyCap: '`' }, // [USB: 0x35] `~ (US Standard 101)
    // 0xC1-0xCF - reserved

    // 0xD0-0xD7 - reserved
    // 0xD8-0xDA - unassigned
    0xDB: { code: 'BracketLeft', keyCap: '[' }, // [USB: 0x2f] [{ (US Standard 101)
    0xDC: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
    0xDD: { code: 'BracketRight', keyCap: ']' }, // [USB: 0x30] ]} (US Standard 101)
    0xDE: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
    // 0xDF - miscellaneous/varies

    // 0xE0 - reserved
    // 0xE1 - OEM specific
    0xE2: { code: 'IntlBackslash',  keyCap: '\\' }, // [USB: 0x64] \| (UK Standard 102)
    // 0xE3-0xE4 - OEM specific
    0xE5: { code: 'Process' }, // (Not in D3E)
    // 0xE6 - OEM specific
    // 0xE7 - VK_PACKET
    // 0xE8 - unassigned
    // 0xE9-0xEF - OEM specific

    // 0xF0-0xF5 - OEM specific
    0xF6: { code: 'Attn' }, // [USB: 0x9a] (Not in D3E)
    0xF7: { code: 'CrSel' }, // [USB: 0xa3] (Not in D3E)
    0xF8: { code: 'ExSel' }, // [USB: 0xa4] (Not in D3E)
    0xF9: { code: 'EraseEof' }, // (Not in D3E)
    0xFA: { code: 'Play' }, // (Not in D3E)
    0xFB: { code: 'ZoomToggle' }, // (Not in D3E)
    // 0xFC - VK_NONAME - reserved
    // 0xFD - VK_PA1
    0xFE: { code: 'Clear' } // [USB: 0x9c] (Not in D3E)
  };

  // No legacy keyCode, but listed in D3E:

  // code: usb
  // 'IntlHash': 0x070032,
  // 'IntlRo': 0x070087,
  // 'IntlYen': 0x070089,
  // 'NumpadBackspace': 0x0700bb,
  // 'NumpadClear': 0x0700d8,
  // 'NumpadClearEntry': 0x0700d9,
  // 'NumpadMemoryAdd': 0x0700d3,
  // 'NumpadMemoryClear': 0x0700d2,
  // 'NumpadMemoryRecall': 0x0700d1,
  // 'NumpadMemoryStore': 0x0700d0,
  // 'NumpadMemorySubtract': 0x0700d4,
  // 'NumpadParenLeft': 0x0700b6,
  // 'NumpadParenRight': 0x0700b7,

  //--------------------------------------------------------------------
  //
  // Browser/OS Specific Mappings
  //
  //--------------------------------------------------------------------

  mergeIf(keyCodeToInfoTable,
          'moz', {
            0x3B: { code: 'Semicolon', keyCap: ';' }, // [USB: 0x33] ;: (US Standard 101)
            0x3D: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
            0x6B: { code: 'Equal', keyCap: '=' }, // [USB: 0x2e] =+
            0x6D: { code: 'Minus', keyCap: '-' }, // [USB: 0x2d] -_
            0xBB: { code: 'NumpadAdd', keyCap: '+', location: NUMPAD }, // [USB: 0x57]
            0xBD: { code: 'NumpadSubtract', keyCap: '-', location: NUMPAD } // [USB: 0x56]
          });

  mergeIf(keyCodeToInfoTable,
          'moz-mac', {
            0x0C: { code: 'NumLock', location: NUMPAD }, // [USB: 0x53]
            0xAD: { code: 'Minus', keyCap: '-' } // [USB: 0x2d] -_
          });

  mergeIf(keyCodeToInfoTable,
          'moz-win', {
            0xAD: { code: 'Minus', keyCap: '-' } // [USB: 0x2d] -_
          });

  mergeIf(keyCodeToInfoTable,
          'chrome-mac', {
            0x5D: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
          });

  // Windows via Bootcamp (!)
  if (0) {
    mergeIf(keyCodeToInfoTable,
            'chrome-win', {
              0xC0: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
              0xDE: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
              0xDF: { code: 'Backquote', keyCap: '`' } // [USB: 0x35] `~ (US Standard 101)
            });

    mergeIf(keyCodeToInfoTable,
            'ie', {
              0xC0: { code: 'Quote', keyCap: '\'' }, // [USB: 0x34] '" (US Standard 101)
              0xDE: { code: 'Backslash',  keyCap: '\\' }, // [USB: 0x31] \| (US Standard 101)
              0xDF: { code: 'Backquote', keyCap: '`' } // [USB: 0x35] `~ (US Standard 101)
            });
  }

  mergeIf(keyCodeToInfoTable,
          'safari', {
            0x03: { code: 'Enter' }, // [USB: 0x28] old Safari
            0x19: { code: 'Tab' } // [USB: 0x2b] old Safari for Shift+Tab
          });

  mergeIf(keyCodeToInfoTable,
          'ios', {
            0x0A: { code: 'Enter', location: STANDARD } // [USB: 0x28]
          });

  mergeIf(keyCodeToInfoTable,
          'safari-mac', {
            0x5B: { code: 'MetaLeft', location: LEFT }, // [USB: 0xe3]
            0x5D: { code: 'MetaRight', location: RIGHT }, // [USB: 0xe7]
            0xE5: { code: 'KeyQ', keyCap: 'Q' } // [USB: 0x14] On alternate presses, Ctrl+Q sends this
          });

  //--------------------------------------------------------------------
  //
  // Identifier Mappings
  //
  //--------------------------------------------------------------------

  // Cases where newer-ish browsers send keyIdentifier which can be
  // used to disambiguate keys.

  // keyIdentifierTable[keyIdentifier] -> keyInfo

  var keyIdentifierTable = {};
  if ('cros' === os) {
    keyIdentifierTable['U+00A0'] = { code: 'ShiftLeft', location: LEFT };
    keyIdentifierTable['U+00A1'] = { code: 'ShiftRight', location: RIGHT };
    keyIdentifierTable['U+00A2'] = { code: 'ControlLeft', location: LEFT };
    keyIdentifierTable['U+00A3'] = { code: 'ControlRight', location: RIGHT };
    keyIdentifierTable['U+00A4'] = { code: 'AltLeft', location: LEFT };
    keyIdentifierTable['U+00A5'] = { code: 'AltRight', location: RIGHT };
  }
  if ('chrome-mac' === browser_os) {
    keyIdentifierTable['U+0010'] = { code: 'ContextMenu' };
  }
  if ('safari-mac' === browser_os) {
    keyIdentifierTable['U+0010'] = { code: 'ContextMenu' };
  }
  if ('ios' === os) {
    // These only generate keyup events
    keyIdentifierTable['U+0010'] = { code: 'Function' };

    keyIdentifierTable['U+001C'] = { code: 'ArrowLeft' };
    keyIdentifierTable['U+001D'] = { code: 'ArrowRight' };
    keyIdentifierTable['U+001E'] = { code: 'ArrowUp' };
    keyIdentifierTable['U+001F'] = { code: 'ArrowDown' };

    keyIdentifierTable['U+0001'] = { code: 'Home' }; // [USB: 0x4a] Fn + ArrowLeft
    keyIdentifierTable['U+0004'] = { code: 'End' }; // [USB: 0x4d] Fn + ArrowRight
    keyIdentifierTable['U+000B'] = { code: 'PageUp' }; // [USB: 0x4b] Fn + ArrowUp
    keyIdentifierTable['U+000C'] = { code: 'PageDown' }; // [USB: 0x4e] Fn + ArrowDown
  }

  //--------------------------------------------------------------------
  //
  // Location Mappings
  //
  //--------------------------------------------------------------------

  // Cases where newer-ish browsers send location/keyLocation which
  // can be used to disambiguate keys.

  // locationTable[location][keyCode] -> keyInfo
  var locationTable = [];
  locationTable[LEFT] = {
    0x10: { code: 'ShiftLeft', location: LEFT }, // [USB: 0xe1]
    0x11: { code: 'ControlLeft', location: LEFT }, // [USB: 0xe0]
    0x12: { code: 'AltLeft', location: LEFT } // [USB: 0xe2]
  };
  locationTable[RIGHT] = {
    0x10: { code: 'ShiftRight', location: RIGHT }, // [USB: 0xe5]
    0x11: { code: 'ControlRight', location: RIGHT }, // [USB: 0xe4]
    0x12: { code: 'AltRight', location: RIGHT } // [USB: 0xe6]
  };
  locationTable[NUMPAD] = {
    0x0D: { code: 'NumpadEnter', location: NUMPAD } // [USB: 0x58]
  };

  mergeIf(locationTable[NUMPAD], 'moz', {
    0x6D: { code: 'NumpadSubtract', location: NUMPAD }, // [USB: 0x56]
    0x6B: { code: 'NumpadAdd', location: NUMPAD } // [USB: 0x57]
  });
  mergeIf(locationTable[LEFT], 'moz-mac', {
    0xE0: { code: 'MetaLeft', location: LEFT } // [USB: 0xe3]
  });
  mergeIf(locationTable[RIGHT], 'moz-mac', {
    0xE0: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
  });
  mergeIf(locationTable[RIGHT], 'moz-win', {
    0x5B: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
  });


  mergeIf(locationTable[RIGHT], 'mac', {
    0x5D: { code: 'MetaRight', location: RIGHT } // [USB: 0xe7]
  });

  mergeIf(locationTable[NUMPAD], 'chrome-mac', {
    0x0C: { code: 'NumLock', location: NUMPAD } // [USB: 0x53]
  });

  mergeIf(locationTable[NUMPAD], 'safari-mac', {
    0x0C: { code: 'NumLock', location: NUMPAD }, // [USB: 0x53]
    0xBB: { code: 'NumpadAdd', location: NUMPAD }, // [USB: 0x57]
    0xBD: { code: 'NumpadSubtract', location: NUMPAD }, // [USB: 0x56]
    0xBE: { code: 'NumpadDecimal', location: NUMPAD }, // [USB: 0x63]
    0xBF: { code: 'NumpadDivide', location: NUMPAD } // [USB: 0x54]
  });


  //--------------------------------------------------------------------
  //
  // Key Values
  //
  //--------------------------------------------------------------------

  // Mapping from `code` values to `key` values. Values defined at:
  // https://w3c.github.io/uievents-key/
  // Entries are only provided when `key` differs from `code`. If
  // printable, `shiftKey` has the shifted printable character. This
  // assumes US Standard 101 layout

  var codeToKeyTable = {
    // Modifier Keys
    ShiftLeft: { key: 'Shift' },
    ShiftRight: { key: 'Shift' },
    ControlLeft: { key: 'Control' },
    ControlRight: { key: 'Control' },
    AltLeft: { key: 'Alt' },
    AltRight: { key: 'Alt' },
    MetaLeft: { key: 'Meta' },
    MetaRight: { key: 'Meta' },

    // Whitespace Keys
    NumpadEnter: { key: 'Enter' },
    Space: { key: ' ' },

    // Printable Keys
    Digit0: { key: '0', shiftKey: ')' },
    Digit1: { key: '1', shiftKey: '!' },
    Digit2: { key: '2', shiftKey: '@' },
    Digit3: { key: '3', shiftKey: '#' },
    Digit4: { key: '4', shiftKey: '$' },
    Digit5: { key: '5', shiftKey: '%' },
    Digit6: { key: '6', shiftKey: '^' },
    Digit7: { key: '7', shiftKey: '&' },
    Digit8: { key: '8', shiftKey: '*' },
    Digit9: { key: '9', shiftKey: '(' },
    KeyA: { key: 'a', shiftKey: 'A' },
    KeyB: { key: 'b', shiftKey: 'B' },
    KeyC: { key: 'c', shiftKey: 'C' },
    KeyD: { key: 'd', shiftKey: 'D' },
    KeyE: { key: 'e', shiftKey: 'E' },
    KeyF: { key: 'f', shiftKey: 'F' },
    KeyG: { key: 'g', shiftKey: 'G' },
    KeyH: { key: 'h', shiftKey: 'H' },
    KeyI: { key: 'i', shiftKey: 'I' },
    KeyJ: { key: 'j', shiftKey: 'J' },
    KeyK: { key: 'k', shiftKey: 'K' },
    KeyL: { key: 'l', shiftKey: 'L' },
    KeyM: { key: 'm', shiftKey: 'M' },
    KeyN: { key: 'n', shiftKey: 'N' },
    KeyO: { key: 'o', shiftKey: 'O' },
    KeyP: { key: 'p', shiftKey: 'P' },
    KeyQ: { key: 'q', shiftKey: 'Q' },
    KeyR: { key: 'r', shiftKey: 'R' },
    KeyS: { key: 's', shiftKey: 'S' },
    KeyT: { key: 't', shiftKey: 'T' },
    KeyU: { key: 'u', shiftKey: 'U' },
    KeyV: { key: 'v', shiftKey: 'V' },
    KeyW: { key: 'w', shiftKey: 'W' },
    KeyX: { key: 'x', shiftKey: 'X' },
    KeyY: { key: 'y', shiftKey: 'Y' },
    KeyZ: { key: 'z', shiftKey: 'Z' },
    Numpad0: { key: '0' },
    Numpad1: { key: '1' },
    Numpad2: { key: '2' },
    Numpad3: { key: '3' },
    Numpad4: { key: '4' },
    Numpad5: { key: '5' },
    Numpad6: { key: '6' },
    Numpad7: { key: '7' },
    Numpad8: { key: '8' },
    Numpad9: { key: '9' },
    NumpadMultiply: { key: '*' },
    NumpadAdd: { key: '+' },
    NumpadComma: { key: ',' },
    NumpadSubtract: { key: '-' },
    NumpadDecimal: { key: '.' },
    NumpadDivide: { key: '/' },
    Semicolon: { key: ';', shiftKey: ':' },
    Equal: { key: '=', shiftKey: '+' },
    Comma: { key: ',', shiftKey: '<' },
    Minus: { key: '-', shiftKey: '_' },
    Period: { key: '.', shiftKey: '>' },
    Slash: { key: '/', shiftKey: '?' },
    Backquote: { key: '`', shiftKey: '~' },
    BracketLeft: { key: '[', shiftKey: '{' },
    Backslash: { key: '\\', shiftKey: '|' },
    BracketRight: { key: ']', shiftKey: '}' },
    Quote: { key: '\'', shiftKey: '"' },
    IntlBackslash: { key: '\\', shiftKey: '|' }
  };

  mergeIf(codeToKeyTable, 'mac', {
    MetaLeft: { key: 'Meta' },
    MetaRight: { key: 'Meta' }
  });

  // Corrections for 'key' names in older browsers (e.g. FF36-, IE9, etc)
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.key#Key_values
  var keyFixTable = {
    Add: '+',
    Decimal: '.',
    Divide: '/',
    Subtract: '-',
    Multiply: '*',
    Spacebar: ' ',
    Esc: 'Escape',
    Nonconvert: 'NonConvert',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Menu: 'ContextMenu',
    MediaNextTrack: 'MediaTrackNext',
    MediaPreviousTrack: 'MediaTrackPrevious',
    SelectMedia: 'MediaSelect',
    HalfWidth: 'Hankaku',
    FullWidth: 'Zenkaku',
    RomanCharacters: 'Romaji',
    Crsel: 'CrSel',
    Exsel: 'ExSel',
    Zoom: 'ZoomToggle'
  };

  //--------------------------------------------------------------------
  //
  // Exported Functions
  //
  //--------------------------------------------------------------------


  var codeTable = remap(keyCodeToInfoTable, 'code');

  try {
    var nativeLocation = nativeKeyboardEvent && ('location' in new KeyboardEvent(''));
  } catch (_) {}

  function keyInfoForEvent(event) {
    var keyCode = 'keyCode' in event ? event.keyCode : 'which' in event ? event.which : 0;
    var keyInfo = (function(){
      if (nativeLocation || 'keyLocation' in event) {
        var location = nativeLocation ? event.location : event.keyLocation;
        if (location && keyCode in locationTable[location]) {
          return locationTable[location][keyCode];
        }
      }
      if ('keyIdentifier' in event && event.keyIdentifier in keyIdentifierTable) {
        return keyIdentifierTable[event.keyIdentifier];
      }
      if (keyCode in keyCodeToInfoTable) {
        return keyCodeToInfoTable[keyCode];
      }
      return null;
    }());

    // TODO: Track these down and move to general tables
    if (0) {
      // TODO: Map these for newerish browsers?
      // TODO: iOS only?
      // TODO: Override with more common keyIdentifier name?
      switch (event.keyIdentifier) {
      case 'U+0010': keyInfo = { code: 'Function' }; break;
      case 'U+001C': keyInfo = { code: 'ArrowLeft' }; break;
      case 'U+001D': keyInfo = { code: 'ArrowRight' }; break;
      case 'U+001E': keyInfo = { code: 'ArrowUp' }; break;
      case 'U+001F': keyInfo = { code: 'ArrowDown' }; break;
      }
    }

    if (!keyInfo)
      return null;

    var key = (function() {
      var entry = codeToKeyTable[keyInfo.code];
      if (!entry) return keyInfo.code;
      return (event.shiftKey && 'shiftKey' in entry) ? entry.shiftKey : entry.key;
    }());

    return {
      code: keyInfo.code,
      key: key,
      location: keyInfo.location,
      keyCap: keyInfo.keyCap
    };
  }

  function queryKeyCap(code, locale) {
    code = String(code);
    if (!codeTable.hasOwnProperty(code)) return 'Undefined';
    if (locale && String(locale).toLowerCase() !== 'en-us') throw Error('Unsupported locale');
    var keyInfo = codeTable[code];
    return keyInfo.keyCap || keyInfo.code || 'Undefined';
  }

  if ('KeyboardEvent' in global && 'defineProperty' in Object) {
    (function() {
      function define(o, p, v) {
        if (p in o) return;
        Object.defineProperty(o, p, v);
      }

      define(KeyboardEvent.prototype, 'code', { get: function() {
        var keyInfo = keyInfoForEvent(this);
        return keyInfo ? keyInfo.code : '';
      }});

      // Fix for nonstandard `key` values (FF36-)
      if ('key' in KeyboardEvent.prototype) {
        var desc = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, 'key');
        Object.defineProperty(KeyboardEvent.prototype, 'key', { get: function() {
          var key = desc.get.call(this);
          return keyFixTable.hasOwnProperty(key) ? keyFixTable[key] : key;
        }});
      }

      define(KeyboardEvent.prototype, 'key', { get: function() {
        var keyInfo = keyInfoForEvent(this);
        return (keyInfo && 'key' in keyInfo) ? keyInfo.key : 'Unidentified';
      }});

      define(KeyboardEvent.prototype, 'location', { get: function() {
        var keyInfo = keyInfoForEvent(this);
        return (keyInfo && 'location' in keyInfo) ? keyInfo.location : STANDARD;
      }});

      define(KeyboardEvent.prototype, 'locale', { get: function() {
        return '';
      }});
    }());
  }

  if (!('queryKeyCap' in global.KeyboardEvent))
    global.KeyboardEvent.queryKeyCap = queryKeyCap;

  // Helper for IE8-
  global.identifyKey = function(event) {
    if ('code' in event)
      return;

    var keyInfo = keyInfoForEvent(event);
    event.code = keyInfo ? keyInfo.code : '';
    event.key = (keyInfo && 'key' in keyInfo) ? keyInfo.key : 'Unidentified';
    event.location = ('location' in event) ? event.location :
      ('keyLocation' in event) ? event.keyLocation :
      (keyInfo && 'location' in keyInfo) ? keyInfo.location : STANDARD;
    event.locale = '';
  };

}(self));
/**@license
 *       __ _____                     ________                              __
 *      / // _  /__ __ _____ ___ __ _/__  ___/__ ___ ______ __ __  __ ___  / /
 *  __ / // // // // // _  // _// // / / // _  // _//     // //  \/ // _ \/ /
 * /  / // // // // // ___// / / // / / // ___// / / / / // // /\  // // / /__
 * \___//____ \\___//____//_/ _\_  / /_//____//_/ /_/ /_//_//_/ /_/ \__\_\___/
 *           \/              /____/
 * http://terminal.jcubic.pl
 *
 * This is example of how to create custom formatter for jQuery Terminal
 *
 * Copyright (c) 2014-2022 Jakub Jankiewicz <https://jcubic.pl/me>
 * Released under the MIT license
 *
 * Includes: node-ansiparser, MIT license, Copyright (c) 2014 Joerg Breitbart
 *
 * Last Update in jQuery Terminal 2.23.0
 *
 */
/* global define */
(function(factory) {
    var root;
    if (typeof window !== 'undefined') {
        root = window;
    } else if (typeof self !== 'undefined') {
        root = self;
    } else if (typeof global !== 'undefined') {
        root = global;
    } else {
        throw new Error('Unknow context');
    }
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        // istanbul ignore next
        define(['jquery', 'jquery.terminal'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            if (!jQuery.fn.terminal) {
                if (typeof window !== 'undefined') {
                    require('jquery.terminal');
                } else {
                    require('jquery.terminal')(jQuery);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser
        // istanbul ignore next
        factory(root.jQuery);
    }
})(function($) {
    var DEBUG = true;
    /* eslint-disable */
    /* istanbul ignore next */
    function warn(str) {
        if ('warn' in console) {
            console.warn(str);
        }
    }
    // node-ansiparser
    // The MIT License (MIT)
    // Copyright (c) 2014 Joerg Breitbart
    /* istanbul ignore next */
    var AnsiParser = (function () {
        'use strict';

        /**
         * range function for numbers [a, .., b-1]
         *
         * @param {number} a
         * @param {number} b
         * @return {Array}
         */
        function r(a, b) {
            var c = b - a;
            var arr = new Array(c);
            while (c--)
                arr[c] = --b;
            return arr;
        }

        /**
         * Add a transition to the transition table.
         *
         * @param table - table to add transition
         * @param {number} inp - input character code
         * @param {number} state - current state
         * @param {number=} action - action to be taken
         * @param {number=} next - next state
         */
        function add(table, inp, state, action, next) {
            table[state<<8|inp] = ((action | 0) << 4) | ((next === undefined) ? state : next);
        }

        /**
         * Add multiple transitions to the transition table.
         *
         * @param table - table to add transition
         * @param {Array} inps - array of input character codes
         * @param {number} state - current state
         * @param {number=} action - action to be taken
         * @param {number=} next - next state
         */
        function add_list(table, inps, state, action, next) {
            for (var i=0; i<inps.length; i++)
                add(table, inps[i], state, action, next);
        }

        /** global definition of printables and executables */
        var PRINTABLES = r(0x20, 0x7f);
        var EXECUTABLES = r(0x00, 0x18);
        EXECUTABLES.push(0x19);
        EXECUTABLES.push(0x1E);
        EXECUTABLES.concat(r(0x1c, 0x20));

        /* meaning of state and action indices
           var STATES = [
           'GROUND',
           'ESCAPE',
           'ESCAPE_INTERMEDIATE',
           'CSI_ENTRY',
           'CSI_PARAM',
           'CSI_INTERMEDIATE',
           'CSI_IGNORE',
           'SOS_PM_APC_STRING',
           'OSC_STRING',
           'DCS_ENTRY',
           'DCS_PARAM',
           'DCS_IGNORE',
           'DCS_INTERMEDIATE',
           'DCS_PASSTHROUGH'
           ];
           var ACTIONS = [
           'ignore',
           'error',
           'print',
           'execute',
           'osc_start',
           'osc_put',
           'osc_end',
           'csi_dispatch',
           'param',
           'collect',
           'esc_dispatch',
           'clear',
           'dcs_hook',
           'dcs_put',
           'dcs_unhook'
           ];
        */

        /**
         * create the standard transition table - used by all parser instances
         *
         *     table[state << 8 | character code] = action << 4 | next state
         *
         *     - states are indices of STATES (0 to 13)
         *     - control character codes defined from 0 to 159 (C0 and C1)
         *     - actions are indices of ACTIONS (0 to 14)
         *     - any higher character than 159 is handled by the 'error' action
         */
        var TRANSITION_TABLE = (function() {
            var t = new Uint8Array(4095);

            // table with default transition [any] --> [error, GROUND]
            for (var state=0; state<14; ++state) {
                for (var code=0; code<160; ++code) {
                    t[state<<8|code] = 16;
                }
            }

            // apply transitions
            // printables
            add_list(t, PRINTABLES, 0, 2);
            // global anywhere rules
            for (state=0; state<14; ++state) {
                add_list(t, [0x18, 0x1a, 0x99, 0x9a], state, 3, 0);
                add_list(t, r(0x80, 0x90), state, 3, 0);
                add_list(t, r(0x90, 0x98), state, 3, 0);
                add(t, 0x9c, state, 0, 0);   // ST as terminator
                add(t, 0x1b, state, 11, 1);  // ESC
                add(t, 0x9d, state, 4, 8);   // OSC
                add_list(t, [0x98, 0x9e, 0x9f], state, 0, 7);
                add(t, 0x9b, state, 11, 3);  // CSI
                add(t, 0x90, state, 11, 9);  // DCS
            }
            // rules for executables and 7f
            add_list(t, EXECUTABLES, 0, 3);
            add_list(t, EXECUTABLES, 1, 3);
            add(t, 0x7f, 1);
            add_list(t, EXECUTABLES, 8);
            add_list(t, EXECUTABLES, 3, 3);
            add(t, 0x7f, 3);
            add_list(t, EXECUTABLES, 4, 3);
            add(t, 0x7f, 4);
            add_list(t, EXECUTABLES, 6, 3);
            add_list(t, EXECUTABLES, 5, 3);
            add(t, 0x7f, 5);
            add_list(t, EXECUTABLES, 2, 3);
            add(t, 0x7f, 2);
            // osc
            add(t, 0x5d, 1, 4, 8);
            add_list(t, PRINTABLES, 8, 5);
            add(t, 0x7f, 8, 5);
            add_list(t, [0x9c, 0x1b, 0x18, 0x1a, 0x07], 8, 6, 0);
            add_list(t, r(0x1c, 0x20), 8, 0);
            // sos/pm/apc does nothing
            add_list(t, [0x58, 0x5e, 0x5f], 1, 0, 7);
            add_list(t, PRINTABLES, 7);
            add_list(t, EXECUTABLES, 7);
            add(t, 0x9c, 7, 0, 0);
            // csi entries
            add(t, 0x5b, 1, 11, 3);
            add_list(t, r(0x40, 0x7f), 3, 7, 0);
            add_list(t, r(0x30, 0x3a), 3, 8, 4);
            add(t, 0x3b, 3, 8, 4);
            add_list(t, [0x3c, 0x3d, 0x3e, 0x3f], 3, 9, 4);
            add_list(t, r(0x30, 0x3a), 4, 8);
            add(t, 0x3b, 4, 8);
            add_list(t, r(0x40, 0x7f), 4, 7, 0);
            add_list(t, [0x3a, 0x3c, 0x3d, 0x3e, 0x3f], 4, 0, 6);
            add_list(t, r(0x20, 0x40), 6);
            add(t, 0x7f, 6);
            add_list(t, r(0x40, 0x7f), 6, 0, 0);
            add(t, 0x3a, 3, 0, 6);
            add_list(t, r(0x20, 0x30), 3, 9, 5);
            add_list(t, r(0x20, 0x30), 5, 9);
            add_list(t, r(0x30, 0x40), 5, 0, 6);
            add_list(t, r(0x40, 0x7f), 5, 7, 0);
            add_list(t, r(0x20, 0x30), 4, 9, 5);
            // esc_intermediate
            add_list(t, r(0x20, 0x30), 1, 9, 2);
            add_list(t, r(0x20, 0x30), 2, 9);
            add_list(t, r(0x30, 0x7f), 2, 10, 0);
            add_list(t, r(0x30, 0x50), 1, 10, 0);
            add_list(t, [0x51, 0x52, 0x53, 0x54, 0x55, 0x56, 0x57, 0x59, 0x5a, 0x5c], 1, 10, 0);
            add_list(t, r(0x60, 0x7f), 1, 10, 0);
            // dcs entry
            add(t, 0x50, 1, 11, 9);
            add_list(t, EXECUTABLES, 9);
            add(t, 0x7f, 9);
            add_list(t, r(0x1c, 0x20), 9);
            add_list(t, r(0x20, 0x30), 9, 9, 12);
            add(t, 0x3a, 9, 0, 11);
            add_list(t, r(0x30, 0x3a), 9, 8, 10);
            add(t, 0x3b, 9, 8, 10);
            add_list(t, [0x3c, 0x3d, 0x3e, 0x3f], 9, 9, 10);
            add_list(t, EXECUTABLES, 11);
            add_list(t, r(0x20, 0x80), 11);
            add_list(t, r(0x1c, 0x20), 11);
            add_list(t, EXECUTABLES, 10);
            add(t, 0x7f, 10);
            add_list(t, r(0x1c, 0x20), 10);
            add_list(t, r(0x30, 0x3a), 10, 8);
            add(t, 0x3b, 10, 8);
            add_list(t, [0x3a, 0x3c, 0x3d, 0x3e, 0x3f], 10, 0, 11);
            add_list(t, r(0x20, 0x30), 10, 9, 12);
            add_list(t, EXECUTABLES, 12);
            add(t, 0x7f, 12);
            add_list(t, r(0x1c, 0x20), 12);
            add_list(t, r(0x20, 0x30), 12, 9);
            add_list(t, r(0x30, 0x40), 12, 0, 11);
            add_list(t, r(0x40, 0x7f), 12, 12, 13);
            add_list(t, r(0x40, 0x7f), 10, 12, 13);
            add_list(t, r(0x40, 0x7f), 9, 12, 13);
            add_list(t, EXECUTABLES, 13, 13);
            add_list(t, PRINTABLES, 13, 13);
            add(t, 0x7f, 13);
            add_list(t, [0x1b, 0x9c], 13, 14, 0);

            return t;
        })();


        /**
         *  AnsiParser - Parser for ANSI terminal escape sequences.
         *
         * @param {Object=} terminal emulation object
         * @constructor
         */
        function AnsiParser(terminal) {
            this.initial_state = 0;  // 'GROUND' is default
            this.current_state = this.initial_state|0;

            // clone global transition table
            this.transitions = new Uint8Array(4095);
            this.transitions.set(TRANSITION_TABLE);

            // global non pushable buffers for multiple parse invocations
            this.osc = '';
            this.params = [0];
            this.collected = '';

            // back reference to terminal
            this.term = terminal || {};
            var instructions = ['inst_p', 'inst_o', 'inst_x', 'inst_c',
                                'inst_e', 'inst_H', 'inst_P', 'inst_U', 'inst_E'];
            for (var i=0; i<instructions.length; ++i)
                if (!(instructions[i] in this.term))
                    this.term[instructions[i]] = function() {};
        }

        /**
         * Reset the parser.
         */
        AnsiParser.prototype.reset = function() {
            this.current_state = this.initial_state|0;
            this.osc = '';
            this.params = [0];
            this.collected = '';
        };

        /**
         * Parse string s.
         * @param {string} s
         */
        AnsiParser.prototype.parse = function(s) {
            var code = 0,
                transition = 0,
                error = false,
                current_state = this.current_state|0;

            // local buffers
            var printed = -1;
            var dcs = -1;
            var osc = this.osc;
            var collected = this.collected;
            var params = this.params;

            // process input string
            for (var i=0, l=s.length|0; i<l; ++i) {
                code = s.charCodeAt(i)|0;
                // shortcut for most chars (print action)
                if (current_state===0 && code>0x1f && code<0x80) {
                    printed = (printed + 1) ? printed|0: i|0;
                    continue;
                }
                transition = ((code < 0xa0) ? (this.transitions[(current_state<<8|code)|0])|0 : 16)|0;
                switch ((transition >> 4)|0) {
                    case 2: // print
                        printed = (printed + 1) ? printed|0: i|0;
                        break;
                    case 3: // execute
                        if (printed + 1) {
                            this.term.inst_p(s.substring(printed, i));
                            printed = -1;
                        }
                        this.term.inst_x(String.fromCharCode(code));
                        break;
                    case 0: // ignore
                        // handle leftover print and dcs chars
                        if (printed + 1) {
                            this.term.inst_p(s.substring(printed, i));
                            printed = -1;
                        } else if (dcs + 1) {
                            this.term.inst_P(s.substring(dcs, i));
                            dcs = -1;
                        }
                        break;
                    case 1: // error
                        // handle unicode chars in write buffers w'o state change
                        if (code > 0x9f) {
                            switch (current_state) {
                                case 0: // GROUND -> add char to print string
                                    printed = (!(printed+1)) ? i|0 : printed|0;
                                    break;
                                case 8: // OSC_STRING -> add char to osc string
                                    osc += String.fromCharCode(code);
                                    transition = (transition | 8)|0;
                                    break;
                                case 6: // CSI_IGNORE -> ignore char
                                    transition = (transition | 6)|0;
                                    break;
                                case 11: // DCS_IGNORE -> ignore char
                                    transition = (transition | 11)|0;
                                    break;
                                case 13: // DCS_PASSTHROUGH -> add char to dcs
                                    if (!(dcs + 1))
                                        dcs = i|0;
                                    transition = (transition | 13)|0;
                                    break;
                                default: // real error
                                    error = true;
                            }
                        } else { // real error
                            error = true;
                        }
                        if (error) {
                            if (this.term.inst_E(
                                {
                                    pos: i,                 // position in parse string
                                    character: String.fromCharCode(code), // wrong character
                                    state: current_state,   // in state
                                    print: printed,         // print buffer
                                    dcs: dcs,               // dcs buffer
                                    osc: osc,               // osc buffer
                                    collect: collected,     // collect buffer
                                    params: params          // params buffer
                                })) {
                                return;
                            }
                            error = false;
                        }
                        break;
                    case 7: // csi_dispatch
                        this.term.inst_c(collected, params, String.fromCharCode(code));
                        break;
                    case 8: // param
                        if (code === 0x3b)
                            params.push(0);
                        else
                            params[params.length-1] = (params[params.length-1] * 10 + code - 48)|0;
                        break;
                    case 9: // collect
                        collected += String.fromCharCode(code);
                        break;
                    case 10: // esc_dispatch
                        this.term.inst_e(collected, String.fromCharCode(code));
                        break;
                    case 11: // clear
                        if (printed + 1) {
                            this.term.inst_p(s.substring(printed, i));
                            printed = -1;
                        }
                        osc = '';
                        params = [0];
                        collected = '';
                        dcs = -1;
                        break;
                    case 12: // dcs_hook
                        this.term.inst_H(collected, params, String.fromCharCode(code));
                        break;
                    case 13: // dcs_put
                        if (!(dcs + 1))
                            dcs = i|0;
                        break;
                    case 14: // dcs_unhook
                        if (dcs + 1) {
                            this.term.inst_P(s.substring(dcs, i));
                        }
                        this.term.inst_U();
                        if (code === 0x1b)
                            transition = (transition | 1)|0;
                        osc = '';
                        params = [0];
                        collected = '';
                        dcs = -1;
                        break;
                    case 4: // osc_start
                        if (~printed) {
                            this.term.inst_p(s.substring(printed, i));
                            printed = -1;
                        }
                        osc = '';
                        break;
                    case 5: // osc_put
                        osc += s.charAt(i);
                        break;
                    case 6: // osc_end
                        if (osc && code !== 0x18 && code !== 0x1a)
                            this.term.inst_o(osc);
                        if (code === 0x1b)
                            transition = (transition | 1)|0;
                        osc = '';
                        params = [0];
                        collected = '';
                        dcs = -1;
                        break;
                }
                current_state = (transition & 15)|0;
            }

            // push leftover pushable buffers to terminal
            if (!current_state && (printed + 1)) {
                this.term.inst_p(s.substring(printed));
            } else if (current_state===13 && (dcs + 1)) {
                this.term.inst_P(s.substring(dcs));
            }

            // save non pushable buffers
            this.osc = osc;
            this.collected = collected;
            this.params = params;

            // save state
            this.current_state = current_state|0;
        };
        return AnsiParser;
    })();
    /* eslint-enable */
    // ---------------------------------------------------------------------
    $.terminal.AnsiParser = AnsiParser;
    // ---------------------------------------------------------------------
    // we match characters and html entities because command line escape brackets
    // echo don't, when writing formatter always process html entitites so it work
    // for cmd plugin as well for echo
    var chr = '[^\\x08]|[\\r\\n]{2}|&[^;]+;';
    var backspace_re = new RegExp('^(' + chr + ')?\\x08');
    var overtyping_re = new RegExp('^(?:(' + chr + ')?\\x08(_|\\1)|' +
                                   '(_)\\x08(' + chr + '))');
    var new_line_re = /^(\r\n|\n\r|\r|\n)/;
    var clear_line_re = /[^\r\n]+\r\x1B\[K/g;
    // ---------------------------------------------------------------------
    function length(string) {
        return $.terminal.length(string);
    }
    // ---------------------------------------------------------------------
    function get_settings(options) {
        var unixFormatting = {
            escapeBrackets: false,
            ansiParser: {},
            position: 0,
            ansiArt: false
        };
        if (options) {
            if (options.unixFormatting) {
                $.extend(unixFormatting, options.unixFormatting);
            }
            if ('position' in options) {
                unixFormatting.position = options.position;
            }
            if ('unixFormattingEscapeBrackets' in options) {
                unixFormatting.escapeBrackets = options.unixFormattingEscapeBrackets;
            }
            if ('ansiParser' in options) {
                unixFormatting.ansiParser = options.ansiParser;
            }
        }
        return unixFormatting;
    }
    // ---------------------------------------------------------------------
    // :: Replace overtyping (from man) formatting with terminal formatting
    // ---------------------------------------------------------------------
    $.terminal.overtyping = function overtyping(string, options) {
        string = $.terminal.unescape_brackets(string);
        var settings = get_settings(options);
        var removed_chars = [];
        var new_position;
        var char_count = 0;
        var backspaces = [];
        function replace(string, position) {
            var result = '';
            var push = 0;
            var start;
            char_count = 0;
            function correct_position(start, match, rep_string) {
                // logic taken from $.terminal.tracking_replace
                if (start < position) {
                    var last_index = start + length(match);
                    if (last_index < position) {
                        // It's after the replacement, move it
                        new_position = Math.max(
                            0,
                            new_position +
                            length(rep_string) -
                            length(match)
                        );
                    } else {
                        // It's *in* the replacement, put it just after
                        new_position += length(rep_string) - (position - start);
                    }
                }
            }
            for (var i = 0; i < string.length; ++i) {
                var partial = string.substring(i);
                var match = partial.match(backspace_re);
                var removed_char = removed_chars[0];
                if (match) {
                    // we remove backspace and character or html entity before it
                    // but we keep it in removed array so we can put it back
                    // when we have caritage return or line feed
                    if (match[1]) {
                        start = i - match[1].length + push;
                        removed_chars.push({
                            index: start,
                            string: match[1],
                            overtyping: partial.match(overtyping_re)
                        });
                        correct_position(start, match[0], '', 1);
                    }
                    if (char_count < 0) {
                        char_count = 0;
                    }
                    backspaces = backspaces.map(function(b) {
                        return b - 1;
                    });
                    backspaces.push(start);
                    return result + partial.replace(backspace_re, '');
                } else if (partial.match(new_line_re)) {
                    // if newline we need to add at the end all characters
                    // removed by backspace but only if there are no more
                    // other characters than backspaces added between
                    // backspaces and newline
                    if (removed_chars.length) {
                        var chars = removed_chars;
                        removed_chars = [];
                        chars.reverse().forEach(function(char) {
                            if (i > char.index) {
                                if (--char_count <= 0) {
                                    correct_position(char.index, '', char.string, 2);
                                    result += char.string;
                                }
                            } else {
                                removed_chars.unshift(char);
                            }
                        });
                    }
                    var m = partial.match(new_line_re);
                    result += m[1];
                    i += m[1].length - 1;
                } else {
                    if (backspaces.length) {
                        var backspace = backspaces[0];
                        if (i === backspace) {
                            backspaces.shift();
                        }
                        if (i >= backspace) {
                            char_count++;
                        }
                    }
                    if (removed_chars.length) {
                        // if we are in index of removed character we check if the
                        // character is the same it will be bold or if removed char
                        // or char at index is underscore then it will
                        // be terminal formatting with underscore
                        if (i > removed_char.index && removed_char.overtyping) {
                            removed_chars.shift();
                            correct_position(removed_char.index, '', removed_char.string);
                            // if we add special character we need to correct
                            // next push to removed_char array
                            push++;
                            // we use special characters instead of terminal
                            // formatting so it's easier to proccess when removing
                            // backspaces
                            if (removed_char.string === string[i]) {
                                result += string[i] + '\uFFF1';
                                continue;
                            } else if (removed_char.string === '_' ||
                                       string[i] === '_') {
                                var chr;
                                if (removed_char.string === '_') {
                                    chr = string[i];
                                } else {
                                    chr = removed_char.string;
                                }
                                result += chr + '\uFFF2';
                                continue;
                            }
                        }
                    }
                    result += string[i];
                }
            }
            return result;
        }
        var break_next = false;
        // loop until not more backspaces
        new_position = settings.position;
        // we need to clear line \x1b[K in overtyping because it need to be before
        // overtyping and from_ansi need to be called after so it escape stuff
        // between Escape Code and cmd will have escaped formatting typed by user
        var rep = $.terminal.tracking_replace(string, clear_line_re, '', new_position);
        string = rep[0];
        new_position = rep[1];
        while (string.match(/\x08/) || removed_chars.length) {
            string = replace(string, new_position);
            if (break_next) {
                break;
            }
            if (!string.match(/\x08/)) {
                // we break the loop so if removed_chars still chave items
                // we don't have infite loop
                break_next = true;
            }
        }
        function format(string, chr, style) {
            var re = new RegExp('((:?.' + chr + ')+)', 'g');
            return string.replace(re, function(_, string) {
                var re = new RegExp(chr, 'g');
                return '[[' + style + ']' + string.replace(re, '') + ']';
            });
        }
        // replace special characters with terminal formatting
        string = format(string, '\uFFF1', 'b;#fff;');
        string = format(string, '\uFFF2', 'u;;');
        if (settings.escapeBrackets) {
            string = $.terminal.escape_brackets(string);
        }
        if (options && typeof options.position === 'number') {
            return [string, new_position];
        }
        return string;
    };
    var CHARSETS = {};
    // taken from xterm.js MIT License
    // see https://github.com/xtermjs/xterm.js for more details
    CHARSETS['0'] = {
        '`': '\u25c6', // '◆'
        'a': '\u2592', // '▒'
        'b': '\u2409', // (HT)
        'c': '\u240c', // (FF)
        'd': '\u240d', // (CR)
        'e': '\u240a', // (LF)
        'f': '\u00b0', // '°'
        'g': '\u00b1', // '±'
        'h': '\u2424', // (NL)
        'i': '\u240b', // (VT)
        'j': '\u2518', // '┘'
        'k': '\u2510', // '┐'
        'l': '\u250c', // '┌'
        'm': '\u2514', // '└'
        'n': '\u253c', // '┼'
        'o': '\u23ba', // '⎺'
        'p': '\u23bb', // '⎻'
        'q': '\u2500', // '─'
        'r': '\u23bc', // '⎼'
        's': '\u23bd', // '⎽'
        't': '\u251c', // '├'
        'u': '\u2524', // '┤'
        'v': '\u2534', // '┴'
        'w': '\u252c', // '┬'
        'x': '\u2502', // '│'
        'y': '\u2264', // '≤'
        'z': '\u2265', // '≥'
        '{': '\u03c0', // 'π'
        '|': '\u2260', // '≠'
        '}': '\u00a3', // '£'
        '~': '\u00b7' // '·'
    };

    /**
     * British character set
     * ESC (A
     * Reference: http://vt100.net/docs/vt220-rm/table2-5.html
     */
    CHARSETS['A'] = {
        '#': '£'
    };

    /**
     * United States character set
     * ESC (B
     */
    CHARSETS['B'] = null;

    /**
     * Dutch character set
     * ESC (4
     * Reference: http://vt100.net/docs/vt220-rm/table2-6.html
     */
    CHARSETS['4'] = {
        '#': '£',
        '@': '¾',
        '[': 'ij',
        '\\': '½',
        ']': '|',
        '{': '¨',
        '|': 'f',
        '}': '¼',
        '~': '´'
    };

    /**
     * Finnish character set
     * ESC (C or ESC (5
     * Reference: http://vt100.net/docs/vt220-rm/table2-7.html
     */
    CHARSETS['C'] = CHARSETS['5'] = {
        '[': 'Ä',
        '\\': 'Ö',
        ']': 'Å',
        '^': 'Ü',
        '`': 'é',
        '{': 'ä',
        '|': 'ö',
        '}': 'å',
        '~': 'ü'
    };

    /**
     * French character set
     * ESC (R
     * Reference: http://vt100.net/docs/vt220-rm/table2-8.html
     */
    CHARSETS['R'] = {
        '#': '£',
        '@': 'à',
        '[': '°',
        '\\': 'ç',
        ']': '§',
        '{': 'é',
        '|': 'ù',
        '}': 'è',
        '~': '¨'
    };

    /**
     * French Canadian character set
     * ESC (Q
     * Reference: http://vt100.net/docs/vt220-rm/table2-9.html
     */
    CHARSETS['Q'] = {
        '@': 'à',
        '[': 'â',
        '\\': 'ç',
        ']': 'ê',
        '^': 'î',
        '`': 'ô',
        '{': 'é',
        '|': 'ù',
        '}': 'è',
        '~': 'û'
    };

    /**
     * German character set
     * ESC (K
     * Reference: http://vt100.net/docs/vt220-rm/table2-10.html
     */
    CHARSETS['K'] = {
        '@': '§',
        '[': 'Ä',
        '\\': 'Ö',
        ']': 'Ü',
        '{': 'ä',
        '|': 'ö',
        '}': 'ü',
        '~': 'ß'
    };

    /**
     * Italian character set
     * ESC (Y
     * Reference: http://vt100.net/docs/vt220-rm/table2-11.html
     */
    CHARSETS['Y'] = {
        '#': '£',
        '@': '§',
        '[': '°',
        '\\': 'ç',
        ']': 'é',
        '`': 'ù',
        '{': 'à',
        '|': 'ò',
        '}': 'è',
        '~': 'ì'
    };

    /**
     * Norwegian/Danish character set
     * ESC (E or ESC (6
     * Reference: http://vt100.net/docs/vt220-rm/table2-12.html
     */
    CHARSETS['E'] =
        CHARSETS['6'] = {
            '@': 'Ä',
            '[': 'Æ',
            '\\': 'Ø',
            ']': 'Å',
            '^': 'Ü',
            '`': 'ä',
            '{': 'æ',
            '|': 'ø',
            '}': 'å',
            '~': 'ü'
        };

    /**
     * Spanish character set
     * ESC (Z
     * Reference: http://vt100.net/docs/vt220-rm/table2-13.html
     */
    CHARSETS['Z'] = {
        '#': '£',
        '@': '§',
        '[': '¡',
        '\\': 'Ñ',
        ']': '¿',
        '{': '°',
        '|': 'ñ',
        '}': 'ç'
    };

    /**
     * Swedish character set
     * ESC (H or ESC (7
     * Reference: http://vt100.net/docs/vt220-rm/table2-14.html
     */
    CHARSETS['H'] =
        CHARSETS['7'] = {
            '@': 'É',
            '[': 'Ä',
            '\\': 'Ö',
            ']': 'Å',
            '^': 'Ü',
            '`': 'é',
            '{': 'ä',
            '|': 'ö',
            '}': 'å',
            '~': 'ü'
        };

    /**
     * Swiss character set
     * ESC (=
     * Reference: http://vt100.net/docs/vt220-rm/table2-15.html
     */
    CHARSETS['='] = {
        '#': 'ù',
        '@': 'à',
        '[': 'é',
        '\\': 'ç',
        ']': 'ê',
        '^': 'î',
        '_': 'è',
        '`': 'ô',
        '{': 'ä',
        '|': 'ö',
        '}': 'ü',
        '~': 'û'
    };
    // ---------------------------------------------------------------------
    // :: Html colors taken from ANSI formatting in Linux Terminal
    // ---------------------------------------------------------------------
    $.terminal.ansi_colors = {
        normal: {
            black: '#000',
            red: '#A00',
            green: '#008400',
            yellow: '#A50',
            blue: '#00A',
            magenta: '#A0A',
            cyan: '#0AA',
            white: '#AAA'
        },
        faited: {
            black: '#000',
            red: '#640000',
            green: '#006100',
            yellow: '#737300',
            blue: '#000087',
            magenta: '#650065',
            cyan: '#008787',
            white: '#818181'
        },
        bold: {
            black: '#555',
            red: '#F55',
            green: '#44D544',
            yellow: '#FF5',
            blue: '#55F',
            magenta: '#F5F',
            cyan: '#5FF',
            white: '#FFF'
        },
        // XTerm 8-bit pallete
        palette: [
            '#000000', '#AA0000', '#00AA00', '#AA5500', '#0000AA', '#AA00AA',
            '#00AAAA', '#AAAAAA', '#555555', '#FF5555', '#55FF55', '#FFFF55',
            '#5555FF', '#FF55FF', '#55FFFF', '#FFFFFF', '#000000', '#00005F',
            '#000087', '#0000AF', '#0000D7', '#0000FF', '#005F00', '#005F5F',
            '#005F87', '#005FAF', '#005FD7', '#005FFF', '#008700', '#00875F',
            '#008787', '#0087AF', '#0087D7', '#0087FF', '#00AF00', '#00AF5F',
            '#00AF87', '#00AFAF', '#00AFD7', '#00AFFF', '#00D700', '#00D75F',
            '#00D787', '#00D7AF', '#00D7D7', '#00D7FF', '#00FF00', '#00FF5F',
            '#00FF87', '#00FFAF', '#00FFD7', '#00FFFF', '#5F0000', '#5F005F',
            '#5F0087', '#5F00AF', '#5F00D7', '#5F00FF', '#5F5F00', '#5F5F5F',
            '#5F5F87', '#5F5FAF', '#5F5FD7', '#5F5FFF', '#5F8700', '#5F875F',
            '#5F8787', '#5F87AF', '#5F87D7', '#5F87FF', '#5FAF00', '#5FAF5F',
            '#5FAF87', '#5FAFAF', '#5FAFD7', '#5FAFFF', '#5FD700', '#5FD75F',
            '#5FD787', '#5FD7AF', '#5FD7D7', '#5FD7FF', '#5FFF00', '#5FFF5F',
            '#5FFF87', '#5FFFAF', '#5FFFD7', '#5FFFFF', '#870000', '#87005F',
            '#870087', '#8700AF', '#8700D7', '#8700FF', '#875F00', '#875F5F',
            '#875F87', '#875FAF', '#875FD7', '#875FFF', '#878700', '#87875F',
            '#878787', '#8787AF', '#8787D7', '#8787FF', '#87AF00', '#87AF5F',
            '#87AF87', '#87AFAF', '#87AFD7', '#87AFFF', '#87D700', '#87D75F',
            '#87D787', '#87D7AF', '#87D7D7', '#87D7FF', '#87FF00', '#87FF5F',
            '#87FF87', '#87FFAF', '#87FFD7', '#87FFFF', '#AF0000', '#AF005F',
            '#AF0087', '#AF00AF', '#AF00D7', '#AF00FF', '#AF5F00', '#AF5F5F',
            '#AF5F87', '#AF5FAF', '#AF5FD7', '#AF5FFF', '#AF8700', '#AF875F',
            '#AF8787', '#AF87AF', '#AF87D7', '#AF87FF', '#AFAF00', '#AFAF5F',
            '#AFAF87', '#AFAFAF', '#AFAFD7', '#AFAFFF', '#AFD700', '#AFD75F',
            '#AFD787', '#AFD7AF', '#AFD7D7', '#AFD7FF', '#AFFF00', '#AFFF5F',
            '#AFFF87', '#AFFFAF', '#AFFFD7', '#AFFFFF', '#D70000', '#D7005F',
            '#D70087', '#D700AF', '#D700D7', '#D700FF', '#D75F00', '#D75F5F',
            '#D75F87', '#D75FAF', '#D75FD7', '#D75FFF', '#D78700', '#D7875F',
            '#D78787', '#D787AF', '#D787D7', '#D787FF', '#D7AF00', '#D7AF5F',
            '#D7AF87', '#D7AFAF', '#D7AFD7', '#D7AFFF', '#D7D700', '#D7D75F',
            '#D7D787', '#D7D7AF', '#D7D7D7', '#D7D7FF', '#D7FF00', '#D7FF5F',
            '#D7FF87', '#D7FFAF', '#D7FFD7', '#D7FFFF', '#FF0000', '#FF005F',
            '#FF0087', '#FF00AF', '#FF00D7', '#FF00FF', '#FF5F00', '#FF5F5F',
            '#FF5F87', '#FF5FAF', '#FF5FD7', '#FF5FFF', '#FF8700', '#FF875F',
            '#FF8787', '#FF87AF', '#FF87D7', '#FF87FF', '#FFAF00', '#FFAF5F',
            '#FFAF87', '#FFAFAF', '#FFAFD7', '#FFAFFF', '#FFD700', '#FFD75F',
            '#FFD787', '#FFD7AF', '#FFD7D7', '#FFD7FF', '#FFFF00', '#FFFF5F',
            '#FFFF87', '#FFFFAF', '#FFFFD7', '#FFFFFF', '#080808', '#121212',
            '#1C1C1C', '#262626', '#303030', '#3A3A3A', '#444444', '#4E4E4E',
            '#585858', '#626262', '#6C6C6C', '#767676', '#808080', '#8A8A8A',
            '#949494', '#9E9E9E', '#A8A8A8', '#B2B2B2', '#BCBCBC', '#C6C6C6',
            '#D0D0D0', '#DADADA', '#E4E4E4', '#EEEEEE'
        ]
    };
    // ---------------------------------------------------------------------
    // :: Replace ANSI formatting with terminal formatting
    // ---------------------------------------------------------------------
    $.terminal.from_ansi = (function() {
        var color_list = {
            30: 'black',
            31: 'red',
            32: 'green',
            33: 'yellow',
            34: 'blue',
            35: 'magenta',
            36: 'cyan',
            37: 'white',

            39: 'inherit' // default color
        };
        var background_list = {
            40: 'black',
            41: 'red',
            42: 'green',
            43: 'yellow',
            44: 'blue',
            45: 'magenta',
            46: 'cyan',
            47: 'white',

            49: 'transparent' // default background
        };
        function format_ansi(controls, state, ansi_art) {
            var num;
            var styles = [];
            var output_color;
            var output_background;
            var _process_true_color = -1;
            var _ex_color = false;
            var _ex_background = false;
            var _process_8bit = false;
            var palette = $.terminal.ansi_colors.palette;
            function set_styles(num) {
                switch (num) {
                    case 0:
                        Object.keys(state).forEach(function(key) {
                            delete state[key];
                        });
                        state.blink = false;
                        state.bold = false;
                        state.faited = false;
                        break;
                    case 1:
                        styles.push('b');
                        state.bold = true;
                        state.faited = false;
                        break;
                    case 4:
                        styles.push('u');
                        break;
                    case 3:
                        styles.push('i');
                        break;
                    case 5:
                        if (_ex_color || _ex_background) {
                            _process_8bit = true;
                        } else {
                            state.blink = true;
                        }
                        break;
                    case 38:
                        _ex_color = true;
                        break;
                    case 48:
                        _ex_background = true;
                        break;
                    case 2:
                        if (_ex_color || _ex_background) {
                            _process_true_color = 0;
                        } else {
                            state.faited = true;
                            state.bold = false;
                        }
                        break;
                    case 7:
                        state.reverse = true;
                        break;
                    default:
                        if (color_list[num]) {
                            output_color = color_list[num];
                        }
                        if (background_list[num]) {
                            output_background = background_list[num];
                        }
                }
            }
            // -----------------------------------------------------------------
            function process_true_color() {
                if (_ex_color) {
                    if (!output_color) {
                        output_color = '#';
                    }
                    if (output_color.length < 7) {
                        output_color += ('0' + num.toString(16)).slice(-2);
                    }
                }
                if (_ex_background) {
                    if (!output_background) {
                        output_background = '#';
                    }
                    if (output_background.length < 7) {
                        output_background += ('0' + num.toString(16)).slice(-2);
                    }
                }
                if (_process_true_color === 2) {
                    _process_true_color = -1;
                } else {
                    _process_true_color++;
                }
            }
            // -----------------------------------------------------------------
            function should__process_8bit() {
                return _process_8bit && ((_ex_background && !output_background) ||
                                        (_ex_color && !output_color));
            }
            // -----------------------------------------------------------------
            function process_8bit() {
                if (_ex_color && palette[num] && !output_color) {
                    output_color = palette[num];
                }
                if (_ex_background && palette[num] && !output_background) {
                    output_background = palette[num];
                }
                _process_8bit = false;
            }
            // -----------------------------------------------------------------
            for (var i in controls) {
                if (controls.hasOwnProperty(i)) {
                    num = parseInt(controls[i], 10);
                    if (_process_true_color > -1) {
                        process_true_color();
                    } else if (should__process_8bit()) {
                        process_8bit();
                    } else {
                        set_styles(num);
                    }
                }
            }
            if (state.reverse) {
                if (output_color || output_background) {
                    var tmp = output_background;
                    output_background = output_color;
                    output_color = tmp;
                } else {
                    output_color = 'black';
                    output_background = 'white';
                }
            }
            output_color = output_color || state.color;
            output_background = output_background || state.background;
            var colors, color, background;
            if (state.bold) {
                colors = $.terminal.ansi_colors.bold;
            } else if (state.faited) {
                colors = $.terminal.ansi_colors.faited;
            } else {
                colors = $.terminal.ansi_colors.normal;
            }
            if (typeof output_color !== 'undefined') {
                if (output_color.match(/^#/)) {
                    color = output_color;
                } else if (output_color === 'inherit') {
                    color = output_color;
                } else {
                    color = colors[output_color];
                }
                state.color = output_color;
            } else {
                color = colors['white'];
            }
            if (typeof output_background !== 'undefined') {
                if (output_background.match(/^#/)) { // already 8bit color #460
                    background = output_background;
                } else if (output_background === 'transparent') {
                    background = output_background;
                } else if (state.blink && ansi_art) {
                    background = $.terminal.ansi_colors.bold[output_background];
                } else {
                    // background is not changed by bold flag
                    background = $.terminal.ansi_colors.normal[output_background];
                }
                state.background = output_background;
            } else if (state.blink && ansi_art) {
                background = $.terminal.ansi_colors.bold['black'];
            }
            var ret = [styles.join(''), color, background];
            if (state.blink && !ansi_art) {
                ret.push('terminal-blink');
            }
            return ret;
        }
        // -------------------------------------------------------------------------------
        return function from_ansi(input, options) {
            options = options || {};
            var settings = get_settings(options);
            var ansi_art = settings.ansiArt;
            // if there are SAUCE record if something after end of file
            input = input.replace(/\x1A.*/, '');
            input = input.replace(/\r?\n?\x1b\[A\x1b\[[0-9]+C/g, '');
            input = $.terminal.unescape_brackets(input);
            var code, inside, format, charset, saved_cursor;
            var print = function print(s) {
                var s_len = s.length;
                if (settings.escapeBrackets) {
                    s = $.terminal.escape_formatting(s);
                }
                if (charset) {
                    s = s.split('').map(function(chr) {
                        return charset[chr] || chr;
                    }).join('');
                }
                if (format) {
                    // this will always need to be escaped
                    if (s.match(/\\$|[[\]]/) &&
                        !settings.escapeBrackets &&
                        !$.terminal.have_formatting(s)) {
                        s = $.terminal.escape_formatting(s);
                    }
                    s = format + s + ']';
                }
                var line = this.result[this.cursor.y];
                var len, after, before, line_len;
                if (!line) {
                    if (this.cursor.x > 0) {
                        var space = new Array(this.cursor.x + 1).join(' ');
                        this.result[this.cursor.y] = space + s;
                    } else {
                        this.result[this.cursor.y] = s;
                    }
                } else {
                    var stripped = $.terminal.strip(line);
                    line_len = $.terminal.unescape_brackets(stripped).length;
                    if (this.cursor.x === 0) {
                        after = $.terminal.substring(line, s_len);
                        this.result[this.cursor.y] = s + after;
                    } else if (line_len < this.cursor.x) {
                        len = this.cursor.x - (line_len - 1);
                        this.result[this.cursor.y] += new Array(len).join(' ') + s;
                    } else if (line_len === this.cursor.x) {
                        this.result[this.cursor.y] += s;
                    } else {
                        before = $.terminal.substring(line, 0, this.cursor.x);
                        after = $.terminal.substring(line, this.cursor.x + s_len);
                        this.result[this.cursor.y] = before + s + after;
                    }
                }
                this.cursor.x += s_len;
            };
            var term = $.terminal.active();
            var ROWS = term && term.rows() || 1000;
            var COLS = term && term.cols() || 80;
            // correction to CP 437
            // ref: https://unix.stackexchange.com/a/611513/1806
            //      https://unix.stackexchange.com/a/611344/1806
            var cp_437_control = {
                0x00: ' ',
                0x01: '☺',
                0x02: '☻',
                0x03: '♥',
                0x07: '•',
                0x08: '█',
                0x0F: '*',
                0x10: '█',
                0x11: '◄',
                0x12: '↕',
                0x14: '¶',
                0x15: '§',
                0x16: '▬',
                0x17: '↨',
                0x18: '↑',
                0x19: '↓',
                0x1E: '▲'
            };
            var characters = 'qwertyuiopasdfghjklzxcvbnm';
            var prev_code;
            var parser_events = {
                cursor: {x: 0, y: 0},
                result: [],
                state: {},
                inst_p: print,
                inst_x: function(flag) {
                    var code = flag.charCodeAt(0);
                    if (code === 13) {
                        this.cursor.x = 0;
                    } else if (code === 10) {
                        this.cursor.y++;
                        if (prev_code !== 13) {
                            this.cursor.x = 0;
                        }
                    } else if (code === 9) {
                        print.call(this, '\t');
                    } else if (ansi_art && code in cp_437_control) {
                        // eslint-disable-next-line no-console
                        console.log({code: '0x' + code.toString(16)});
                        print.call(this, cp_437_control[code]);
                    } else if (DEBUG) {
                        var mod = code % characters.length;
                        var char = characters[mod];
                        // eslint-disable-next-line no-console
                        console.log({code: code, char: char});
                        print.call(this, char);
                    }
                    if (!this.result[this.cursor.y]) {
                        this.result[this.cursor.y] = '';
                    }
                    prev_code = code;
                },
                inst_e: function(collected, flag) {
                    if (collected === '(') {
                        if (flag in CHARSETS) {
                            charset = CHARSETS[flag];
                        }
                    }
                },
                inst_E: function(data) {
                    /* eslint-disable no-console */
                    console.log(data);
                    /* eslint-enable no-console */
                },
                inst_c: function(collected, params, flag) {
                    var value = params[0] === 0 ? 1 : params[0];
                    switch (flag) {
                        case 's':
                            saved_cursor = Object.assign({}, this.cursor);
                            break;
                        case 'u':
                            this.cursor = saved_cursor;
                            break;
                        case 'A': // UP
                            this.cursor.y -= value;
                            break;
                        case 'B': // Down
                            this.cursor.y += value;
                            break;
                        case 'C': // Forward
                            this.cursor.x += value;
                            break;
                        case 'D': // Backward
                            this.cursor.x -= value;
                            break;
                        case 'E': // Cursor Next Line
                            this.cursor.x = 0;
                            this.cursor.y += value;
                            break;
                        case 'F': // Cursor Previous Line
                            this.cursor.x = 0;
                            this.cursor.y -= value;
                            break;
                        case 'H':
                            // -1 since CUP is 1-based
                            this.cursor.y = Math.min(params[0] || 1, ROWS) - 1;
                            this.cursor.x = Math.min(params[1] || 1, COLS) - 1;
                            break;
                        case 'm':
                            code = format_ansi(params, this.state, ansi_art);
                            var empty = params.length === 1 && params[0] === 0;
                            if (inside) {
                                if (empty) {
                                    inside = false;
                                    format = null;
                                } else {
                                    format = '[[' + code.join(';') + ']';
                                }
                            } else if (empty) {
                                format = null;
                            } else {
                                format = '[[' + code.join(';') + ']';
                                inside = true;
                            }
                            break;
                    }
                    if (this.cursor.x < 0) {
                        this.cursor.x = 0;
                    }
                    if (this.cursor.y < 0) {
                        this.cursor.y = 0;
                    }
                }
            };
            // extra parser options not used by unix_formatting
            Object.keys(settings.ansiParser).forEach(function(name) {
                var original = parser_events[name];
                var fn = settings.ansiParser[name];
                if (typeof fn === 'function') {
                    parser_events[name] = original ? function() {
                        if (fn.apply(parser_events, arguments) !== false) {
                            return original.apply(parser_events, arguments);
                        }
                    } : function() {
                        return fn.apply(parser_events, arguments);
                    };
                    settings.ansiParser[name] = parser_events[name];
                }
            });
            var parser = new AnsiParser(parser_events);
            parser.parse(input);
            var output = parser_events.result.join('\n');
            if (input !== output) {
                return output;
            }
            if (typeof options !== 'undefined' && typeof options.position === 'number') {
                return [input, options.position];
            }
            return input;
        };
    })();
    $.terminal.from_ansi.__no_warn__ = true;
    $.terminal.defaults.formatters.unshift($.terminal.from_ansi);
    $.terminal.defaults.formatters.unshift($.terminal.overtyping);
});
/*
 * wcwidth is a simple JavaScript port of wcwidth implemented in C by Markus Kuhn.
 * JavaScript port originally written by Woong Jun woong.jun@gmail.com (http://code.woong.org/)
 *
 * Copyright (C) 2012 by Jun Woong.
 * license MIT
 *
 * file created using browserify, source at https://github.com/timoxley/wcwidth
 */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],2:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":1,"ieee754":3,"isarray":4}],3:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],4:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],5:[function(require,module,exports){
(function (Buffer){
var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

}).call(this,require("buffer").Buffer)
},{"buffer":2}],6:[function(require,module,exports){
var clone = require('clone');

module.exports = function(options, defaults) {
  options = options || {};

  Object.keys(defaults).forEach(function(key) {
    if (typeof options[key] === 'undefined') {
      options[key] = clone(defaults[key]);
    }
  });

  return options;
};
},{"clone":5}],7:[function(require,module,exports){
module.exports = [
    [ 0x0300, 0x036F ], [ 0x0483, 0x0486 ], [ 0x0488, 0x0489 ],
    [ 0x0591, 0x05BD ], [ 0x05BF, 0x05BF ], [ 0x05C1, 0x05C2 ],
    [ 0x05C4, 0x05C5 ], [ 0x05C7, 0x05C7 ], [ 0x0600, 0x0603 ],
    [ 0x0610, 0x0615 ], [ 0x064B, 0x065E ], [ 0x0670, 0x0670 ],
    [ 0x06D6, 0x06E4 ], [ 0x06E7, 0x06E8 ], [ 0x06EA, 0x06ED ],
    [ 0x070F, 0x070F ], [ 0x0711, 0x0711 ], [ 0x0730, 0x074A ],
    [ 0x07A6, 0x07B0 ], [ 0x07EB, 0x07F3 ], [ 0x0901, 0x0902 ],
    [ 0x093C, 0x093C ], [ 0x0941, 0x0948 ], [ 0x094D, 0x094D ],
    [ 0x0951, 0x0954 ], [ 0x0962, 0x0963 ], [ 0x0981, 0x0981 ],
    [ 0x09BC, 0x09BC ], [ 0x09C1, 0x09C4 ], [ 0x09CD, 0x09CD ],
    [ 0x09E2, 0x09E3 ], [ 0x0A01, 0x0A02 ], [ 0x0A3C, 0x0A3C ],
    [ 0x0A41, 0x0A42 ], [ 0x0A47, 0x0A48 ], [ 0x0A4B, 0x0A4D ],
    [ 0x0A70, 0x0A71 ], [ 0x0A81, 0x0A82 ], [ 0x0ABC, 0x0ABC ],
    [ 0x0AC1, 0x0AC5 ], [ 0x0AC7, 0x0AC8 ], [ 0x0ACD, 0x0ACD ],
    [ 0x0AE2, 0x0AE3 ], [ 0x0B01, 0x0B01 ], [ 0x0B3C, 0x0B3C ],
    [ 0x0B3F, 0x0B3F ], [ 0x0B41, 0x0B43 ], [ 0x0B4D, 0x0B4D ],
    [ 0x0B56, 0x0B56 ], [ 0x0B82, 0x0B82 ], [ 0x0BC0, 0x0BC0 ],
    [ 0x0BCD, 0x0BCD ], [ 0x0C3E, 0x0C40 ], [ 0x0C46, 0x0C48 ],
    [ 0x0C4A, 0x0C4D ], [ 0x0C55, 0x0C56 ], [ 0x0CBC, 0x0CBC ],
    [ 0x0CBF, 0x0CBF ], [ 0x0CC6, 0x0CC6 ], [ 0x0CCC, 0x0CCD ],
    [ 0x0CE2, 0x0CE3 ], [ 0x0D41, 0x0D43 ], [ 0x0D4D, 0x0D4D ],
    [ 0x0DCA, 0x0DCA ], [ 0x0DD2, 0x0DD4 ], [ 0x0DD6, 0x0DD6 ],
    [ 0x0E31, 0x0E31 ], [ 0x0E34, 0x0E3A ], [ 0x0E47, 0x0E4E ],
    [ 0x0EB1, 0x0EB1 ], [ 0x0EB4, 0x0EB9 ], [ 0x0EBB, 0x0EBC ],
    [ 0x0EC8, 0x0ECD ], [ 0x0F18, 0x0F19 ], [ 0x0F35, 0x0F35 ],
    [ 0x0F37, 0x0F37 ], [ 0x0F39, 0x0F39 ], [ 0x0F71, 0x0F7E ],
    [ 0x0F80, 0x0F84 ], [ 0x0F86, 0x0F87 ], [ 0x0F90, 0x0F97 ],
    [ 0x0F99, 0x0FBC ], [ 0x0FC6, 0x0FC6 ], [ 0x102D, 0x1030 ],
    [ 0x1032, 0x1032 ], [ 0x1036, 0x1037 ], [ 0x1039, 0x1039 ],
    [ 0x1058, 0x1059 ], [ 0x1160, 0x11FF ], [ 0x135F, 0x135F ],
    [ 0x1712, 0x1714 ], [ 0x1732, 0x1734 ], [ 0x1752, 0x1753 ],
    [ 0x1772, 0x1773 ], [ 0x17B4, 0x17B5 ], [ 0x17B7, 0x17BD ],
    [ 0x17C6, 0x17C6 ], [ 0x17C9, 0x17D3 ], [ 0x17DD, 0x17DD ],
    [ 0x180B, 0x180D ], [ 0x18A9, 0x18A9 ], [ 0x1920, 0x1922 ],
    [ 0x1927, 0x1928 ], [ 0x1932, 0x1932 ], [ 0x1939, 0x193B ],
    [ 0x1A17, 0x1A18 ], [ 0x1B00, 0x1B03 ], [ 0x1B34, 0x1B34 ],
    [ 0x1B36, 0x1B3A ], [ 0x1B3C, 0x1B3C ], [ 0x1B42, 0x1B42 ],
    [ 0x1B6B, 0x1B73 ], [ 0x1DC0, 0x1DCA ], [ 0x1DFE, 0x1DFF ],
    [ 0x200B, 0x200F ], [ 0x202A, 0x202E ], [ 0x2060, 0x2063 ],
    [ 0x206A, 0x206F ], [ 0x20D0, 0x20EF ], [ 0x302A, 0x302F ],
    [ 0x3099, 0x309A ], [ 0xA806, 0xA806 ], [ 0xA80B, 0xA80B ],
    [ 0xA825, 0xA826 ], [ 0xFB1E, 0xFB1E ], [ 0xFE00, 0xFE0F ],
    [ 0xFE20, 0xFE23 ], [ 0xFEFF, 0xFEFF ], [ 0xFFF9, 0xFFFB ],
    [ 0x10A01, 0x10A03 ], [ 0x10A05, 0x10A06 ], [ 0x10A0C, 0x10A0F ],
    [ 0x10A38, 0x10A3A ], [ 0x10A3F, 0x10A3F ], [ 0x1D167, 0x1D169 ],
    [ 0x1D173, 0x1D182 ], [ 0x1D185, 0x1D18B ], [ 0x1D1AA, 0x1D1AD ],
    [ 0x1D242, 0x1D244 ], [ 0xE0001, 0xE0001 ], [ 0xE0020, 0xE007F ],
    [ 0xE0100, 0xE01EF ]
]

},{}],8:[function(require,module,exports){
"use strict"

var defaults = require('defaults')
var combining = require('./combining')

var DEFAULTS = {
  nul: 0,
  control: 0
}

module.exports = function wcwidth(str) {
  return wcswidth(str, DEFAULTS)
}

module.exports.config = function(opts) {
  opts = defaults(opts || {}, DEFAULTS)
  return function wcwidth(str) {
    return wcswidth(str, opts)
  }
}

/*
 *  The following functions define the column width of an ISO 10646
 *  character as follows:
 *  - The null character (U+0000) has a column width of 0.
 *  - Other C0/C1 control characters and DEL will lead to a return value
 *    of -1.
 *  - Non-spacing and enclosing combining characters (general category
 *    code Mn or Me in the
 *    Unicode database) have a column width of 0.
 *  - SOFT HYPHEN (U+00AD) has a column width of 1.
 *  - Other format characters (general category code Cf in the Unicode
 *    database) and ZERO WIDTH
 *    SPACE (U+200B) have a column width of 0.
 *  - Hangul Jamo medial vowels and final consonants (U+1160-U+11FF)
 *    have a column width of 0.
 *  - Spacing characters in the East Asian Wide (W) or East Asian
 *    Full-width (F) category as
 *    defined in Unicode Technical Report #11 have a column width of 2.
 *  - All remaining characters (including all printable ISO 8859-1 and
 *    WGL4 characters, Unicode control characters, etc.) have a column
 *    width of 1.
 *  This implementation assumes that characters are encoded in ISO 10646.
*/

function wcswidth(str, opts) {
  if (typeof str !== 'string') return wcwidth(str, opts)

  var s = 0
  for (var i = 0; i < str.length; i++) {
    var n = wcwidth(str.charCodeAt(i), opts)
    if (n < 0) return -1
    s += n
  }

  return s
}

function wcwidth(ucs, opts) {
  // test for 8-bit control characters
  if (ucs === 0) return opts.nul
  if (ucs < 32 || (ucs >= 0x7f && ucs < 0xa0)) return opts.control

  // binary search in table of non-spacing characters
  if (bisearch(ucs)) return 0

  // if we arrive here, ucs is not a combining or C0/C1 control character
  return 1 +
      (ucs >= 0x1100 &&
       (ucs <= 0x115f ||                       // Hangul Jamo init. consonants
        ucs == 0x2329 || ucs == 0x232a ||
        (ucs >= 0x2e80 && ucs <= 0xa4cf &&
         ucs != 0x303f) ||                     // CJK ... Yi
        (ucs >= 0xac00 && ucs <= 0xd7a3) ||    // Hangul Syllables
        (ucs >= 0xf900 && ucs <= 0xfaff) ||    // CJK Compatibility Ideographs
        (ucs >= 0xfe10 && ucs <= 0xfe19) ||    // Vertical forms
        (ucs >= 0xfe30 && ucs <= 0xfe6f) ||    // CJK Compatibility Forms
        (ucs >= 0xff00 && ucs <= 0xff60) ||    // Fullwidth Forms
        (ucs >= 0xffe0 && ucs <= 0xffe6) ||
        (ucs >= 0x20000 && ucs <= 0x2fffd) ||
        (ucs >= 0x30000 && ucs <= 0x3fffd)));
}

function bisearch(ucs) {
  var min = 0
  var max = combining.length - 1
  var mid

  if (ucs < combining[0][0] || ucs > combining[max][1]) return false

  while (max >= min) {
    mid = Math.floor((min + max) / 2)
    if (ucs > combining[mid][1]) min = mid + 1
    else if (ucs < combining[mid][0]) max = mid - 1
    else return true
  }

  return false
}

},{"./combining":7,"defaults":6}],9:[function(require,module,exports){
window.wcwidth = require('./');
},{"./":8}]},{},[9]);
