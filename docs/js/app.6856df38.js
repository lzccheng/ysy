(function(e){function t(t){for(var a,i,r=t[0],l=t[1],u=t[2],s=0,d=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},o={app:0},c=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-1d778c74":"de355662","chunk-2d0abe08":"c33402b9","chunk-2d22cfdb":"4e939806","chunk-61f75a1e":"f1da8b89","chunk-7d80d5dc":"5282afba","chunk-d76fb9b8":"cddb9f2b","chunk-fe68e930":"061a14ca"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1d778c74":1,"chunk-7d80d5dc":1,"chunk-d76fb9b8":1,"chunk-fe68e930":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1d778c74":"c09656ce","chunk-2d0abe08":"31d6cfe0","chunk-2d22cfdb":"31d6cfe0","chunk-61f75a1e":"31d6cfe0","chunk-7d80d5dc":"ebcfc3f7","chunk-d76fb9b8":"d32d8c8e","chunk-fe68e930":"1c7d23d5"}[e]+".css",o=l.p+a,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],s=u.getAttribute("data-href");if(s===a||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete i[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=r(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/ysy/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1aea":function(e,t,n){},"3d46":function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),i=n("2f62");a["a"].use(i["a"]),t["a"]=new i["a"].Store({state:{ajaxLoading:!1},mutations:{SET_AJAXLOADING:function(e,t){e.ajaxLoading=t}},actions:{},modules:{}})},"4cc3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("keep-alive",[n("router-view")],1),n("GlobleLoading")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"van-slide-down"}},[e.ajaxLoading?n("div",{staticClass:"loading_box"},[n("div",{staticClass:"loading"},[n("van-loading",{attrs:{size:"60px",color:"#23f357"}}),n("div",{staticClass:"text"},[e._v("加载中...")])],1)]):e._e()])],1)},r=[],l=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),u=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={computed:d({},Object(u["b"])({ajaxLoading:function(e){return e.ajaxLoading}}))},h=f,p=(n("625f"),n("2877")),b=Object(p["a"])(h,c,r,!1,null,"50a393d0",null),v=b.exports,m={components:{GlobleLoading:v}},g=m,k=(n("5c0b"),Object(p["a"])(g,i,o,!1,null,null,null)),y=k.exports,_=(n("99af"),n("d3b7"),n("2909")),O=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{title:e.title,noback:e.noback}}),n("div",{staticClass:"content_box",class:{marBottom:e.tabs}},[n("router-view")],1),n("TabBar",{directives:[{name:"show",rawName:"v-show",value:e.tabs,expression:"tabs"}]})],1)},j=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("van-nav-bar",{staticClass:"fixed_center",attrs:{title:e.title,"left-text":"","right-text":e.right,"left-arrow":!e.noback,fixed:"",border:!1},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}})],1)},L=[],C={props:{title:{type:String,default:""},noback:{type:Boolean,default:!1},right:{type:String,default:""}},methods:{onClickLeft:function(){this.$router.back()},onClickRight:function(){}}},E=C,P=(n("b272"),Object(p["a"])(E,w,L,!1,null,"07d7a5a0",null)),S=P.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{staticClass:"fixed_center",attrs:{fixed:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.barList,(function(t){return n("van-tabbar-item",{key:t.icon,attrs:{icon:t.icon,name:t.activeName,to:t.to}},[e._v(e._s(t.name))])})),1)},T=[],N=(n("caad"),n("d81d"),n("b0c0"),n("2532"),{data:function(){return{active:"",barList:[{icon:"wap-home-o",name:"首页",activeName:"home",to:"/home"},{icon:"video-o",name:"电影",activeName:"movie",to:"/movie"},{icon:"photo-o",name:"图片",activeName:"pic",to:"/pic"},{icon:"orders-o",name:"小说",activeName:"navel",to:"/navel"}]}},methods:{init:function(){var e=this.$route.name,t=this.barList.map((function(e){return e.activeName}));this.active=t.includes(e)?e:t[0]}},created:function(){this.init()}}),A=N,B=Object(p["a"])(A,$,T,!1,null,null,null),D=B.exports,M={components:{Header:S,TabBar:D},data:function(){return{}},computed:{title:function(){return this.$route.meta.title},noback:function(){return!!this.$route.meta.noback},tabs:function(){return!!this.$route.meta.tabs}}},z=M,H=(n("ecdb"),Object(p["a"])(z,x,j,!1,null,"5dc32de6",null)),U=H.exports,G=[{path:"movieDetail",component:function(){return n.e("chunk-1d778c74").then(n.bind(null,"ea94"))},meta:{title:"电影详情"}}];a["a"].use(O["a"]);var J=function(e,t,n){return[{path:"",redirect:"index"},{path:"index",component:function(){return t},name:n,meta:{title:e,noback:!0,tabs:!0}}]},R=[{path:"",redirect:"/home"},{path:"/home",component:U,children:Object(_["a"])(J("首页",n.e("chunk-2d0abe08").then(n.bind(null,"16c0")),"home"))},{path:"/movie",component:U,children:[].concat(Object(_["a"])(J("电影",Promise.all([n.e("chunk-61f75a1e"),n.e("chunk-7d80d5dc")]).then(n.bind(null,"5b98")),"movie")),Object(_["a"])(G))},{path:"/pic",component:U,children:Object(_["a"])(J("图片",Promise.all([n.e("chunk-61f75a1e"),n.e("chunk-d76fb9b8")]).then(n.bind(null,"8683")),"pic"))},{path:"/navel",component:U,children:Object(_["a"])(J("小说",n.e("chunk-2d22cfdb").then(n.bind(null,"f61f")),"navel"))},{path:"*",component:function(){return n.e("chunk-fe68e930").then(n.bind(null,"4e33"))}}],W=new O["a"]({mode:"hash",base:"/ysy/",routes:R}),q=W,F=n("4360"),I=(n("60d9"),n("5246"),n("6b41")),K=(n("ac1e"),n("543e")),X=(n("537a"),n("ac28")),Q=(n("a52c"),n("2ed4")),V=(n("2994"),n("2bdd")),Y=(n("da3c"),n("0b33")),Z=(n("bda7"),n("5e46")),ee=(n("66b9"),n("b650")),te=(n("0cc8"),n("3104")),ne=(n("66cf"),n("343b")),ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-list",{staticClass:"list",attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.handleLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[e._t("default")],2)},ie=[],oe={props:{finished:{type:Boolean,default:!1}},data:function(){return{loading:!1}},methods:{handleLoad:function(){this.$emit("load",this)}}},ce=oe,re=Object(p["a"])(ce,ae,ie,!1,null,null,null),le=re.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabs",{attrs:{swipeable:"","title-active-color":"#23f357",animated:"","offset-top":48,sticky:"",color:"#23f357"},on:{click:e.handleClick},model:{value:e.active_,callback:function(t){e.active_=t},expression:"active_"}},[e._t("default")],2)},se=[],de=(n("a9e3"),{props:{active:{type:Number,default:0}},data:function(){return{active_:0}},methods:{handleClick:function(e){this.$emit("click",e)},init:function(){this.active_=this.active}},created:function(){this.init()},watch:{active:function(){this.init()}}}),fe=de,he=Object(p["a"])(fe,ue,se,!1,null,null,null),pe=he.exports,be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("UpLoading",{attrs:{finished:e.finished_},on:{load:e.handleLoad}},[n("MTabs",{on:{click:e.handleTabs}},[e._t("default")],2)],1)},ve=[],me={props:{finished:{type:Boolean,default:!1}},data:function(){return{finished_:!1}},methods:{handleLoad:function(e){this.$emit("load",e)},handleTabs:function(e){this.$emit("click",e)},init:function(){this.finished_=this.finished}},created:function(){this.init()},watch:{finished:function(){this.init()}}},ge=me,ke=Object(p["a"])(ge,be,ve,!1,null,null,null),ye=ke.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-slide-up"}},[e.show?n("div",{staticClass:"fixed_box",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleSelf(t)}}},[n("van-sticky",[n("div",{staticClass:"btn"},[n("van-button",{attrs:{plain:"",type:"primary",block:""},on:{click:e.handleSelf}},[e._v("关闭")])],1)]),e._t("default")],2):e._e()])},Oe=[],xe={props:{show:{type:Boolean,default:!0}},methods:{handleSelf:function(){this.$emit("close")}}},je=xe,we=(n("fa13"),Object(p["a"])(je,_e,Oe,!1,null,"39ce848e",null)),Le=we.exports;a["a"].use(I["a"]).use(K["a"]).use(X["a"]).use(Q["a"]).use(V["a"]).use(Y["a"]).use(Z["a"]).use(ee["a"]).use(te["a"]).use(ne["a"]),a["a"].component("UpLoading",le),a["a"].component("MTabs",pe),a["a"].component("TabsUpload",ye),a["a"].component("FixedBg",Le),a["a"].config.productionTip=!1,new a["a"]({router:q,store:F["a"],render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"60d9":function(e,t,n){n("466d"),function(e,t){var n=t.documentElement,a=e.devicePixelRatio||1,i=750;function o(){if(t.body){var e=12*a>16?16:12*a;t.body.style.fontSize=e+"px"}else t.addEventListener("DOMContentLoaded",o)}function c(){var e=n.clientWidth/10;navigator.userAgent.match(/[^(Android|iPhone|iPad)]/i)&&(e=n.clientWidth>i?i/10:n.clientWidth/10),n.style.fontSize=e+"px"}if(o(),c(),e.addEventListener("resize",c),e.addEventListener("pageshow",(function(e){e.persisted&&c()})),a>=2){var r=t.createElement("body"),l=t.createElement("div");l.style.border=".5px solid transparent",r.appendChild(l),n.appendChild(r),1===l.offsetHeight&&n.classList.add("hairlines"),n.removeChild(r)}}(window,document)},"625f":function(e,t,n){"use strict";var a=n("4cc3"),i=n.n(a);i.a},"9c0c":function(e,t,n){},b003:function(e,t,n){},b272:function(e,t,n){"use strict";var a=n("b003"),i=n.n(a);i.a},ecdb:function(e,t,n){"use strict";var a=n("3d46"),i=n.n(a);i.a},fa13:function(e,t,n){"use strict";var a=n("1aea"),i=n.n(a);i.a}});