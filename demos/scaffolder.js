"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(){function e(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=t.length;if(0>=e)return e;if(n>=e)return t[e-1];for(var r=e%n||n,a=[t[r-1]];(e=Math.floor((e-1)/n))>0;)r=e%n||n,a.push(t[r-1]);return a.reverse().join("")}function t(e){e=e.replace(/^([\x20\t]*\n)*|(\n\s*)*$/g,"");var t=e.match(/^[\t\x20]+(?=\S)/);t&&(e=e.replace(new RegExp("^"+t[0],"gm"),""));var n=e.split(/\n+/g),r=[],a=0,i=void 0,l=!0,o=!1,c=void 0;try{for(var h,s=n[Symbol.iterator]();!(l=(h=s.next()).done);l=!0){var u=h.value,f=u.match(/^\t*/)[0].length,d=u.replace(/^\t+/,""),p={level:f,name:d,toJSON:function(){var e=Object.assign({},this);return delete e.parent,e}};if(f>a)p.parent=i,(i.children=i.children||[]).push(p),a=f;else if(a>f)for(;i;){if(i.level<=f){a=i.level,i.parent?i.parent.children.push(p):r.push(p),p.parent=i.parent;break}i=i.parent}else f?(i=i.parent,i.children.push(p),p.parent=i):r.push(p);i=p}}catch(v){o=!0,c=v}finally{try{!l&&s["return"]&&s["return"]()}finally{if(o)throw c}}return r}function n(e,t){var n,r=document.createElement(e),a=function i(e,t){for(n in t)Object(e[n])===e[n]&&Object(t[n])===t[n]?i(e[n],t[n]):e[n]=t[n]};return t&&a(r,t),r}var r=function(){function t(e,r,a,i){_classCallCheck(this,t),a=a||1,this.el=n("li"),this.depth=a,this.parent=i,this.index=r||0,"+"===e.name&&(this.el.className="open");var l=n("h"+Math.min(6,a),{textContent:this.name}),o=n("div",{className:"fold"}),c=e.randomTexts;if(o.appendChild(n("p",{textContent:c[Math.round(Math.random()*(c.length-1))].textContent})),e.children){var h=o.appendChild(n("ul",{className:"accordion"})),s=0,u=!0,f=!1,d=void 0;try{for(var p,v=e.children[Symbol.iterator]();!(u=(p=v.next()).done);u=!0){var m=p.value;m.randomTexts=e.randomTexts,h.appendChild(new t(m,s++,a+1,this).el)}}catch(y){f=!0,d=y}finally{try{!u&&v["return"]&&v["return"]()}finally{if(f)throw d}}}this.el.appendChild(l),this.el.appendChild(o)}return _createClass(t,[{key:"name",get:function(){var t=this.index+1;return this.parent?this.parent.name+"."+t:e(t)}}]),t}(),a=function i(e,n,a){_classCallCheck(this,i);var l=t(e),o=0,c=!0,h=!1,s=void 0;try{for(var u,f=l[Symbol.iterator]();!(c=(u=f.next()).done);c=!0){var d=u.value;d.randomTexts=a.children,n.appendChild(new r(d,o++).el)}}catch(p){h=!0,s=p}finally{try{!c&&f["return"]&&f["return"]()}finally{if(h)throw s}}};window.Scaffold=a}();