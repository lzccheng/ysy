(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f0c6697"],{"20f4":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var a=function(t,e){return sessionStorage.setItem(t,JSON.stringify(e))},i=function(t){return JSON.parse(sessionStorage.getItem(t))}},"5b98":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TabsUpload",{attrs:{finished:t.finished},on:{load:t.handleLoad,click:t.handleTabs}},t._l(t.tabs,(function(e,a){return n("van-tab",{key:a,attrs:{title:e.name}},t._l(e.list,(function(e,a){return n("div",{key:a,staticClass:"item",on:{click:function(n){return t.handleGo(e)}}},[n("img",{staticClass:"img",attrs:{src:e.cover,alt:""}}),n("p",[t._v(t._s(e.title))])])})),0)})),1)],1)},i=[],s=(n("d3b7"),n("96cf"),n("365c")),r=n("20f4"),c=n("bf07"),u=n("bedf"),o={mixins:[c["a"],u["a"]],data:function(){return{params:{page:1,pagesize:20},tabs:[{name:"国产精品",classifyid:1},{name:"日韩情色",classifyid:2},{name:"欧美性爱",classifyid:3},{name:"动漫理伦",classifyid:4}]}},methods:{handleGo:function(t){Object(r["b"])("movie_detail",t),this.$router.push({path:"movieDetail"})},getData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tabs[this.currentTab].classifyid,this.params.classifyid=t,e.next=4,regeneratorRuntime.awrap(this.comGetData(s["a"]));case 4:case"end":return e.stop()}}),null,this)},init:function(){this.getData()}},created:function(){}},f=o,l=(n("7793"),n("2877")),d=Object(l["a"])(f,a,i,!1,null,"76bf08b1",null);e["default"]=d.exports},7793:function(t,e,n){"use strict";var a=n("e808"),i=n.n(a);i.a},e808:function(t,e,n){}}]);