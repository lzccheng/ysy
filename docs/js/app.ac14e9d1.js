(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-008256b4":"ba8296cc","chunk-2d0abe08":"c33402b9","chunk-e29b267a":"140308fb","chunk-02e868c8":"a00294af","chunk-11dbe66c":"b1834629","chunk-7efbd11a":"6bd5063b","chunk-340d7742":"507593ee","chunk-35dfe67e":"1594b046"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-008256b4":1,"chunk-02e868c8":1,"chunk-11dbe66c":1,"chunk-7efbd11a":1,"chunk-340d7742":1,"chunk-35dfe67e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-008256b4":"1c7d23d5","chunk-2d0abe08":"31d6cfe0","chunk-e29b267a":"31d6cfe0","chunk-02e868c8":"4770074d","chunk-11dbe66c":"408df64e","chunk-7efbd11a":"1096d0e8","chunk-340d7742":"80b83e4a","chunk-35dfe67e":"08120767"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/ysy/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1056:function(e,t,n){"use strict";n.r(t);var r={},a={},o={},i={};t["default"]={state:r,mutations:a,actions:o,getter:i}},4360:function(e,t,n){"use strict";n("d3b7"),n("5319"),n("ddb0");var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]);var o=n("d307"),i=o.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=o(t);return e[n]=r.default,e}),{});t["a"]=new a["a"].Store({modules:i,state:{ajaxLoading:!1},mutations:{SET_AJAXLOADING:function(e,t){e.ajaxLoading=t},SET_HEADER_HEIGHT:function(e,t){e.header_heigh=t}},actions:{}})},"44c7":function(e,t,n){"use strict";var r=n("66d0"),a=n.n(r);a.a},"4cc3":function(e,t,n){},"568f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("keep-alive",[n("router-view")],1),n("GlobleLoading")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"van-slide-down"}},[e.ajaxLoading?n("div",{staticClass:"loading_box"},[n("div",{staticClass:"loading"},[n("van-loading",{attrs:{size:"60px",color:"#23f357"}}),n("div",{staticClass:"text"},[e._v("加载中...")])],1)]):e._e()])],1)},c=[],u=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),l=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={computed:d({},Object(l["c"])({ajaxLoading:function(e){return e.ajaxLoading}}))},p=f,h=(n("625f"),n("2877")),b=Object(h["a"])(p,i,c,!1,null,"50a393d0",null),v=b.exports,m={components:{GlobleLoading:v}},y=m,O=(n("5c0b"),Object(h["a"])(y,a,o,!1,null,null,null)),g=O.exports,k=(n("99af"),n("d3b7"),n("2909")),j=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{title:e.title,noback:e.noback}}),n("div",{staticClass:"content_box",class:{marBottom:e.tabs},style:{marginTop:e.navH+"px"}},[n("keep-alive",{attrs:{max:20}},[e.keepAlive?n("router-view"):e._e()],1),e.keepAlive?e._e():n("router-view")],1),e.tabs?n("TabBar"):e._e()],1)},w=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("van-nav-bar",{staticClass:"fixed_center",attrs:{id:"nav_header",title:e.title,"left-text":"","right-text":e.right,"left-arrow":!e.noback,fixed:"",border:!1},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}})],1)},E=[];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={props:{title:{type:String,default:""},noback:{type:Boolean,default:!1},right:{type:String,default:""}},methods:S({onClickLeft:function(){this.$router.back()},onClickRight:function(){},init:function(){var e=this;this.$nextTick((function(){if(!e.header_h){var t=document.querySelector("#nav_header");if(t){var n=t.clientHeight;n&&e.SET_HEADER_HEIGHT(n)}}}))}},Object(l["b"])(["SET_HEADER_HEIGHT"])),computed:S({},Object(l["c"])({header_h:function(e){return e.header_heigh}})),created:function(){this.init()}},L=C,T=(n("7c75"),Object(h["a"])(L,x,E,!1,null,"14fb5705",null)),$=T.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{staticClass:"fixed_center",attrs:{fixed:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.barList,(function(t,r){return n("van-tabbar-item",{key:r,attrs:{icon:t.icon,name:t.activeName,to:t.to}},[e._v(e._s(t.name))])})),1)},A=[],H=(n("caad"),n("d81d"),n("b0c0"),n("2532"),{data:function(){return{active:"",barList:[{icon:"wap-home-o",name:"首页",activeName:"home",to:"/home"},{icon:"video-o",name:"电影",activeName:"movie",to:"/movie"},{icon:"photo-o",name:"图片",activeName:"pic",to:"/pic"},{icon:"orders-o",name:"小说",activeName:"navel",to:"/navel"},{icon:"orders-o",name:"精品",activeName:"good",to:"/good"}]}},methods:{init:function(){var e=this.$route.name,t=this.barList.map((function(e){return e.activeName}));this.active=t.includes(e)?e:t[0]}},created:function(){this.init()}}),N=H,B=Object(h["a"])(N,D,A,!1,null,null,null),M=B.exports;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I={components:{Header:$,TabBar:M},data:function(){return{}},computed:G({title:function(){return this.$route.meta.title},noback:function(){return!!this.$route.meta.noback},tabs:function(){return!!this.$route.meta.tabs},keepAlive:function(){return this.$route.meta.keepAlive}},Object(l["c"])({navH:function(e){return e.header_heigh}}))},R=I,U=(n("5f13"),Object(h["a"])(R,_,w,!1,null,"22536ae6",null)),q=U.exports,F=[];r["a"].use(j["a"]);var J=function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return[{path:"",redirect:"index"},{path:"index",component:function(){return t},name:n,meta:{title:e,noback:!0,tabs:!0,keepAlive:r}}]},W=[{path:"",redirect:"/home"},{path:"/home",component:q,children:Object(k["a"])(J("首页",n.e("chunk-2d0abe08").then(n.bind(null,"16c0")),"home"))},{path:"/movie",component:q,children:[].concat(Object(k["a"])(J("电影",Promise.all([n.e("chunk-e29b267a"),n.e("chunk-7efbd11a"),n.e("chunk-340d7742")]).then(n.bind(null,"5b98")),"movie")),Object(k["a"])(F))},{path:"/pic",component:q,children:Object(k["a"])(J("图片",Promise.all([n.e("chunk-e29b267a"),n.e("chunk-02e868c8")]).then(n.bind(null,"8683")),"pic"))},{path:"/navel",component:q,children:Object(k["a"])(J("小说",Promise.all([n.e("chunk-e29b267a"),n.e("chunk-11dbe66c")]).then(n.bind(null,"f61f")),"navel"))},{path:"/good",component:q,children:Object(k["a"])(J("精品",Promise.all([n.e("chunk-e29b267a"),n.e("chunk-7efbd11a"),n.e("chunk-35dfe67e")]).then(n.bind(null,"0abf")),"good"))},{path:"*",component:function(){return n.e("chunk-008256b4").then(n.bind(null,"4e33"))}}],K=new j["a"]({mode:"hash",base:"/ysy/",routes:W}),X=K,Q=n("4360"),V=(n("60d9"),n("5246"),n("6b41")),Y=(n("ac1e"),n("543e")),Z=(n("537a"),n("ac28")),ee=(n("a52c"),n("2ed4")),te=(n("2994"),n("2bdd")),ne=(n("da3c"),n("0b33")),re=(n("bda7"),n("5e46")),ae=(n("66b9"),n("b650")),oe=(n("0cc8"),n("3104")),ie=(n("66cf"),n("343b")),ce=(n("c3a6"),n("ad06")),ue=(n("4056"),n("44bf")),le=(n("e7e5"),n("d399")),se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-list",{staticClass:"list",attrs:{finished:e.finished,"finished-text":"没有更多了"},on:{load:e.handleLoad},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[e._t("default")],2)},de=[],fe={props:{finished:{type:Boolean,default:!1}},data:function(){return{loading:!1}},methods:{handleLoad:function(){this.$emit("load",this)}}},pe=fe,he=Object(h["a"])(pe,se,de,!1,null,null,null),be=he.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabs",{attrs:{swipeable:"","title-active-color":"#23f357",animated:"","offset-top":e.top,sticky:"",color:"#23f357"},on:{click:e.handleClick},model:{value:e.active_,callback:function(t){e.active_=t},expression:"active_"}},[e._t("default")],2)},me=[],ye=(n("a9e3"),{props:{top:{type:Number,default:48},active:{type:Number,default:0}},data:function(){return{active_:0}},methods:{handleClick:function(e){this.$emit("click",e)},init:function(){this.active_=this.active}},created:function(){this.init()},watch:{active:function(){this.init()}}}),Oe=ye,ge=Object(h["a"])(Oe,ve,me,!1,null,null,null),ke=ge.exports,je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("UpLoading",{attrs:{finished:e.finished_},on:{load:e.handleLoad}},[n("MTabs",{attrs:{top:e.navH},on:{click:e.handleTabs}},[e._t("default")],2)],1)},_e=[];function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee={props:{finished:{type:Boolean,default:!1}},data:function(){return{finished_:!1}},methods:{handleLoad:function(e){this.$emit("load",e)},handleTabs:function(e){this.$emit("click",e)},init:function(){this.finished_=this.finished}},computed:xe({},Object(l["c"])({navH:function(e){return e.header_heigh}})),created:function(){this.init()},watch:{finished:function(){this.init()}}},Pe=Ee,Se=Object(h["a"])(Pe,je,_e,!1,null,null,null),Ce=Se.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-slide-up"}},[e.show?n("div",{staticClass:"fixed_box",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleSelf(t)}}},["top"===e.closeType?n("van-sticky",[n("div",{staticClass:"btn"},[n("van-button",{attrs:{plain:"",type:"primary",block:""},on:{click:e.handleSelf}},[e._v("关闭")])],1)]):e._e(),e._t("default"),"bottom"===e.closeType?n("div",{staticClass:"btn"},[n("van-button",{attrs:{plain:"",type:"primary",block:""},on:{click:e.handleSelf}},[e._v("关闭")])],1):e._e()],2):e._e()])},Te=[],$e={props:{closeType:{type:String,default:"top"},show:{type:Boolean,default:!0}},methods:{handleSelf:function(){this.$emit("close")}}},De=$e,Ae=(n("ade7"),Object(h["a"])(De,Le,Te,!1,null,"c90998a6",null)),He=Ae.exports,Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("van-icon",{staticClass:"eye_icon",attrs:{name:"eye-o"}}),e._v(" "+e._s(e.look)+" ")],1)},Be=[],Me={props:{look:{type:Number}}},ze=Me,Ge=(n("44c7"),Object(h["a"])(ze,Ne,Be,!1,null,"63355ad9",null)),Ie=Ge.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-image",{attrs:{src:e.src,"lazy-load":"",width:"100%"},on:{click:e.handleClick},scopedSlots:e._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{size:"50",color:"#23f357"}})]},proxy:!0}])})},Ue=[],qe={props:{src:{type:String,required:!0}},methods:{handleClick:function(){this.$emit("click")}}},Fe=qe,Je=Object(h["a"])(Fe,Re,Ue,!1,null,null,null),We=Je.exports;r["a"].use(V["a"]).use(Y["a"]).use(Z["a"]).use(ee["a"]).use(te["a"]).use(ne["a"]).use(re["a"]).use(ae["a"]).use(oe["a"]).use(ie["a"]).use(ce["a"]).use(ue["a"]).use(le["a"]),r["a"].component("UpLoading",be),r["a"].component("MTabs",ke),r["a"].component("TabsUpload",Ce),r["a"].component("FixedBg",He),r["a"].component("EyeLook",Ie),r["a"].component("MImage",We),r["a"].config.productionTip=!1,new r["a"]({router:X,store:Q["a"],render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f13":function(e,t,n){"use strict";var r=n("568f"),a=n.n(r);a.a},"60d9":function(e,t,n){n("466d"),function(e,t){var n=t.documentElement,r=e.devicePixelRatio||1,a=750;function o(){if(t.body){var e=12*r>16?16:12*r;t.body.style.fontSize=e+"px"}else t.addEventListener("DOMContentLoaded",o)}function i(){var e=n.clientWidth/10;navigator.userAgent.match(/[^(Android|iPhone|iPad)]/i)&&(e=n.clientWidth>a?a/10:n.clientWidth/10),n.style.fontSize=e+"px"}if(o(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",(function(e){e.persisted&&i()})),r>=2){var c=t.createElement("body"),u=t.createElement("div");u.style.border=".5px solid transparent",c.appendChild(u),n.appendChild(c),1===u.offsetHeight&&n.classList.add("hairlines"),n.removeChild(c)}}(window,document)},"625f":function(e,t,n){"use strict";var r=n("4cc3"),a=n.n(r);a.a},"66d0":function(e,t,n){},"7c75":function(e,t,n){"use strict";var r=n("ff82"),a=n.n(r);a.a},"9c0c":function(e,t,n){},ade7:function(e,t,n){"use strict";var r=n("d82f"),a=n.n(r);a.a},d307:function(e,t,n){var r={"./pageStatus.js":"1056"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d307"},d82f:function(e,t,n){},ff82:function(e,t,n){}});