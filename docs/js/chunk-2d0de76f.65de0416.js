(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de76f"],{8683:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TabsUpload",{attrs:{finished:t.finished},on:{load:t.handleLoad,click:t.handleTabs}},t._l(t.tabs,(function(e,a){return n("van-tab",{key:a,attrs:{title:e.name}},t._l(e.list,(function(e,a){return n("div",{key:a,staticClass:"item",on:{click:function(n){return t.handleGo(e)}}},[n("img",{attrs:{src:e.cover,width:t.imgW}}),n("p",[t._v(t._s(e.title))])])})),0)})),1),n("FixedBg",{attrs:{show:t.bgShow},on:{close:function(e){t.bgShow=!1}}},[n("div",t._l(t.imgList,(function(e){return n("div",{key:e},[n("img",{attrs:{src:e,width:t.imgW,alt:""}})])})),0)])],1)},i=[],s=(n("d3b7"),n("96cf"),n("365c")),r=n("bf07"),c=n("bedf"),o={mixins:[r["a"],c["a"]],data:function(){return{imgW:"100%",params:{pagesize:20},tabs:[{name:"色情漫画",classify:1},{name:"美女写真",classify:2}],bgShow:!1,imgList:[]}},methods:{handleGo:function(t){var e,n,a;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=t.id,i.next=3,regeneratorRuntime.awrap(Object(s["c"])({id:e},!0));case 3:n=i.sent,a=n.data.content,this.imgList=JSON.parse(a),this.bgShow=!0;case 7:case"end":return i.stop()}}),null,this)},getData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tabs[this.currentTab].classify,this.params.classify=t,e.next=4,regeneratorRuntime.awrap(this.comGetData(s["b"]));case 4:case"end":return e.stop()}}),null,this)}}},u=o,l=n("2877"),d=Object(l["a"])(u,a,i,!1,null,null,null);e["default"]=d.exports}}]);