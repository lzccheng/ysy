(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-29006348":"fe3fe618","chunk-2d0abe08":"25765f23","chunk-2d0de76f":"275c72b2","chunk-2d22cfdb":"bd46f41c","chunk-2d22fdad":"564400f9","chunk-fe68e930":"7010d9a5"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-29006348":1,"chunk-fe68e930":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-29006348":"b2eab266","chunk-2d0abe08":"31d6cfe0","chunk-2d0de76f":"31d6cfe0","chunk-2d22cfdb":"31d6cfe0","chunk-2d22fdad":"31d6cfe0","chunk-fe68e930":"1c7d23d5"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/ysy/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3d46":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),t["a"]=new a["a"].Store({state:{ajaxLoading:!1},mutations:{SET_AJAXLOADING:function(e,t){e.ajaxLoading=t}},actions:{},modules:{}})},"4cc3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view"),n("GlobleLoading")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"van-slide-down"}},[e.ajaxLoading?n("div",{staticClass:"loading_box"},[n("div",{staticClass:"loading"},[n("van-loading",{attrs:{size:"60px",color:"#23f357"}}),n("div",{staticClass:"text"},[e._v("加载中...")])],1)]):e._e()])],1)},c=[],u=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),s=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={computed:l({},Object(s["b"])({ajaxLoading:function(e){return e.ajaxLoading}}))},h=f,p=(n("625f"),n("2877")),b=Object(p["a"])(h,i,c,!1,null,"50a393d0",null),v=b.exports,m={components:{GlobleLoading:v}},g=m,y=(n("5c0b"),Object(p["a"])(g,a,o,!1,null,null,null)),k=y.exports,O=(n("99af"),n("d3b7"),n("2909")),j=n("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{title:e.title,noback:e.noback}}),n("div",{staticClass:"content_box",class:{marBottom:e.tabs}},[n("router-view")],1),n("TabBar",{directives:[{name:"show",rawName:"v-show",value:e.tabs,expression:"tabs"}]})],1)},x=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("van-nav-bar",{staticClass:"fixed_center",attrs:{title:e.title,"left-text":"","right-text":e.right,"left-arrow":!e.noback,fixed:"",border:!1},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}})],1)},E=[],L={props:{title:{type:String,default:""},noback:{type:Boolean,default:!1},right:{type:String,default:""}},methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){}}},C=L,P=(n("b272"),Object(p["a"])(C,_,E,!1,null,"07d7a5a0",null)),S=P.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{staticClass:"fixed_center",attrs:{fixed:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.barList,(function(t){return n("van-tabbar-item",{key:t.icon,attrs:{icon:t.icon,name:t.activeName,to:t.to}},[e._v(e._s(t.name))])})),1)},A=[],T=(n("caad"),n("d81d"),n("b0c0"),n("2532"),{data:function(){return{active:"",barList:[{icon:"wap-home-o",name:"首页",activeName:"home",to:"/home"},{icon:"video-o",name:"电影",activeName:"movie",to:"/movie"},{icon:"photo-o",name:"图片",activeName:"pic",to:"/pic"},{icon:"orders-o",name:"小说",activeName:"navel",to:"/navel"}]}},methods:{init:function(){var e=this.$route.name,t=this.barList.map((function(e){return e.activeName}));this.active=t.includes(e)?e:t[0]}},created:function(){this.init()}}),$=T,D=Object(p["a"])($,N,A,!1,null,null,null),B=D.exports,M={components:{Header:S,TabBar:B},data:function(){return{}},computed:{title:function(){return this.$route.meta.title},noback:function(){return!!this.$route.meta.noback},tabs:function(){return!!this.$route.meta.tabs}}},z=M,H=(n("ecdb"),Object(p["a"])(z,w,x,!1,null,"5dc32de6",null)),G=H.exports,J=[{path:"movieDetail",component:function(){return n.e("chunk-2d22fdad").then(n.bind(null,"ea94"))},meta:{title:"电影详情"}}];r["a"].use(j["a"]);var R=function(e,t,n){return[{path:"",redirect:"index"},{path:"index",component:function(){return t},name:n,meta:{title:e,noback:!0,tabs:!0}}]},W=[{path:"",redirect:"/home"},{path:"/home",component:G,children:Object(O["a"])(R("首页",n.e("chunk-2d0abe08").then(n.bind(null,"16c0")),"home"))},{path:"/movie",component:G,children:[].concat(Object(O["a"])(R("电影",n.e("chunk-29006348").then(n.bind(null,"5b98")),"movie")),Object(O["a"])(J))},{path:"/pic",component:G,children:Object(O["a"])(R("图片",n.e("chunk-2d0de76f").then(n.bind(null,"8683")),"pic"))},{path:"/navel",component:G,children:Object(O["a"])(R("小说",n.e("chunk-2d22cfdb").then(n.bind(null,"f61f")),"navel"))},{path:"*",component:function(){return n.e("chunk-fe68e930").then(n.bind(null,"4e33"))}}],q=new j["a"]({mode:"history",base:"/ysy/",routes:W}),I=q,F=n("4360"),K=(n("60d9"),n("5246"),n("6b41")),U=(n("ac1e"),n("543e")),X=(n("537a"),n("ac28")),Q=(n("a52c"),n("2ed4")),V=(n("2994"),n("2bdd"));r["a"].use(K["a"]).use(U["a"]).use(X["a"]).use(Q["a"]).use(V["a"]),r["a"].config.productionTip=!1,new r["a"]({router:I,store:F["a"],render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"60d9":function(e,t,n){n("466d"),function(e,t){var n=t.documentElement,r=e.devicePixelRatio||1,a=750;function o(){if(t.body){var e=12*r>16?16:12*r;t.body.style.fontSize=e+"px"}else t.addEventListener("DOMContentLoaded",o)}function i(){var e=n.clientWidth/10;navigator.userAgent.match(/[^(Android|iPhone|iPad)]/i)&&(e=n.clientWidth>a?a/10:n.clientWidth/10),n.style.fontSize=e+"px"}if(o(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",(function(e){e.persisted&&i()})),r>=2){var c=t.createElement("body"),u=t.createElement("div");u.style.border=".5px solid transparent",c.appendChild(u),n.appendChild(c),1===u.offsetHeight&&n.classList.add("hairlines"),n.removeChild(c)}}(window,document)},"625f":function(e,t,n){"use strict";var r=n("4cc3"),a=n.n(r);a.a},"9c0c":function(e,t,n){},b003:function(e,t,n){},b272:function(e,t,n){"use strict";var r=n("b003"),a=n.n(r);a.a},ecdb:function(e,t,n){"use strict";var r=n("3d46"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4b74b246.js.map