(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",s),f}}},DZdY:function(e,t,n){"use strict";var r=n("wx14"),o=n("q1tI"),a=n("SVgp"),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(a.a)((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n("cSFU"),l=n("eVQB"),u=n("Exhd"),f=s,p=function(e){return"theme"!==e},d=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p},m=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r};t.a=function e(t,n){var a,i,s=t.__emotion_real===t,f=s&&t.__emotion_base||t;void 0!==n&&(a=n.label,i=n.target);var p=m(t,n,s),h=p||d(f),y=!h("as");return function(){var b=arguments,g=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&g.push("label:"+a+";"),null==b[0]||void 0===b[0].raw)g.push.apply(g,b);else{0,g.push(b[0][0]);for(var v=b.length,T=1;T<v;T++)g.push(b[T],b[0][T])}var w=Object(c.e)((function(e,t,n){var r=y&&e.as||f,a="",s=[],m=e;if(null==e.theme){for(var b in m={},e)m[b]=e[b];m.theme=Object(o.useContext)(c.b)}"string"==typeof e.className?a=Object(l.a)(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var v=Object(u.a)(g.concat(s),t.registered,m);Object(l.b)(t,v,"string"==typeof r);a+=t.key+"-"+v.name,void 0!==i&&(a+=" "+i);var T=y&&void 0===p?d(r):h,w={};for(var O in e)y&&"as"===O||T(O)&&(w[O]=e[O]);return w.className=a,w.ref=n,Object(o.createElement)(r,w)}));return w.displayName=void 0!==a?a:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=f,w.__emotion_styles=g,w.__emotion_forwardProp=p,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,o){return e(t,Object(r.a)({},n,{},o,{shouldForwardProp:m(w,o,!0)})).apply(void 0,g)},w}}},L12J:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("DZdY"),i=n("Wbzz"),s=n("AeFk");var c=Object(a.a)("nav",{target:"eirb8h31",label:"Nav"})({name:"n4cwhr",styles:"display:flex;justify-content:center;padding-bottom:3rem;@media (min-width: 768px){padding-bottom:0;}"}),l=Object(a.a)(i.a,{target:"eirb8h30",label:"NavLink"})({name:"hj1myi",styles:"color:#ffffff;font-size:1.6rem;font-weight:700;line-height:1;font-family:'PT Sans',sans-serif;text-decoration:none;padding:1rem;margin-right:1rem;&:last-of-type{margin-right:0;}&.pagina-actual{border-bottom:2px solid #fff;}"}),u=function(){return Object(s.b)(c,null,Object(s.b)(l,{to:"/",activeClassName:"pagina-actual"},"Inicio"),Object(s.b)(l,{to:"/nosotros",activeClassName:"pagina-actual"},"Nosotros"))};var f=Object(a.a)(i.a,{target:"etq56ut0",label:"HeadTitle"})({name:"bda94p",styles:"text-decoration:none;text-align:center;color:#fff"}),p={name:"1jcs78a",styles:"color:#fff;text-align:center"},d={name:"1wqq5qc",styles:"max-width:1200px;margin:0 auto;@media (min-width: 768px){display:flex;align-items:center;justify-content:space-between;}"},m={name:"f4in14",styles:"background-color:rgba(44, 62, 80);padding:1rem"},h=function(){return Object(s.b)("header",{css:m},Object(s.b)("div",{css:d},Object(s.b)(f,{to:"/"},Object(s.b)("h1",{css:p},"Hotel Gatsby")),Object(s.b)(u,null)))},y=n("qhky");var b=Object(a.a)(i.a,{target:"e1r50yii0",label:"HeadTitle"})({name:"bda94p",styles:"text-decoration:none;text-align:center;color:#fff"}),g={name:"fz1ac",styles:"text-align:center;color:#fff;background-color:rgb(33, 44, 55);margin:0;padding:1rem"},v={name:"1jcs78a",styles:"color:#fff;text-align:center"},T={name:"1wqq5qc",styles:"max-width:1200px;margin:0 auto;@media (min-width: 768px){display:flex;align-items:center;justify-content:space-between;}"},w={name:"1hna6e7",styles:"background-color:rgba(44, 62, 80);margin-top:5rem;padding:1rem"},O=function(e){var t=e.title,n=(new Date).getFullYear();return Object(s.b)(o.a.Fragment,null,Object(s.b)("footer",{css:w},Object(s.b)("div",{css:T},Object(s.b)(u,null),Object(s.b)(b,{to:"/"},Object(s.b)("h1",{css:v},"Hotel Gatsby")))),Object(s.b)("p",{css:g},t,". Todos los derechos reservados ",n," ©"))},S=function(){return Object(i.c)("948868996").datoCmsSite.globalSeo};var A={name:"qmmum6",styles:"body{font-size:18px;font-size:1.8rem;line-height:1.5;font-family:'PT Sans',sans-serif;}html{font-size:62.5%;}h1,h2,h3{margin:0;line-height:1.8;}h1,h2{font-family:'Roboto Slab',serif;}h3{font-family:'PT Sans',sans-serif;}ul{list-style:none;margin:0;padding:0;}"};t.a=function(e){var t,n=S().fallbackSeo,r=n.description,a=n.title;return Object(s.b)(o.a.Fragment,null,Object(s.b)(s.a,{styles:A}),Object(s.b)(y.a,null,Object(s.b)("title",null,a),Object(s.b)("meta",{name:"description",content:r}),Object(s.b)("link",{href:"https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap",rel:"stylesheet"}),Object(s.b)("link",((t={rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",integrity:"sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==",crossorigin:"anonymous"}).rel="stylesheet",t))),Object(s.b)(h,null),e.children,Object(s.b)(O,{title:a}))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=i.length)return!1;for(c=s;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((s=t.length)!=i.length)return!1;for(c=s;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(n&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],i[l[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,o,a,i,s=n("17x9"),c=n.n(s),l=n("8+s/"),u=n.n(l),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("YVoz"),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),O="cssText",S="href",A="http-equiv",C="innerHTML",k="itemprop",j="name",x="property",E="rel",P="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",R="defer",M="encodeSpecialCharacters",N="onChangeClientState",q="titleTemplate",H=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),D=[T.NOSCRIPT,T.SCRIPT,T.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=$(e,T.TITLE),n=$(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,_);return t||r||void 0},K=function(e){return $(e,N)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],c=s.toLowerCase();-1===t.indexOf(c)||n===E&&"canonical"===e[n].toLowerCase()||c===E&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==C&&s!==O&&s!==k||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],c=y()({},r[s],o[s]);r[s]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ce(T.BODY,r),ce(T.HTML,o),se(f,p);var d={baseTag:le(T.BASE,n),linkTags:le(T.LINK,a),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,s),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(T.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=a.indexOf(c);-1!==u&&a.splice(u,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[m.a.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===O){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),m.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===O)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(g,o,r),link:pe(T.LINK,a,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,s,r),script:pe(T.SCRIPT,c,r),style:pe(T.STYLE,l,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:G([S,L],e),bodyAttributes:Z(b,e),defer:$(e,R),encode:$(e,M),htmlAttributes:Z(g,e),linkTags:J(T.LINK,[E,S],e),metaTags:J(T.META,[j,w,A,x,k],e),noscriptTags:J(T.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:J(T.SCRIPT,[P,C],e),styleTags:J(T.STYLE,[O],e),title:X(e),titleAttributes:Z(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),he=(o=me,i=a=function(e){function t(){return F(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return U({},o,((t={})[r.type]=i,t.titleAttributes=U({},a),t));case T.BODY:return U({},o,{bodyAttributes:U({},a)});case T.HTML:return U({},o,{htmlAttributes:U({},a)})}return U({},o,((n={})[r.type]=U({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(m.a.Component),a.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind,t.a=he}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=commons-a8ddabaacd6bf42294c4.js.map