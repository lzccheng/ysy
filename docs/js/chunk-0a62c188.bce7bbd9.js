(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a62c188"],{"745f":function(t,e,n){},b536:function(t,e,n){"use strict";var a=n("745f"),i=n.n(a);i.a},f61f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TabsUpload",{attrs:{finished:t.finished},on:{load:t.handleLoad,click:t.handleTabs}},t._l(t.tabs,(function(e,a){return n("van-tab",{key:a,attrs:{title:e.name}},t._l(e.list,(function(e,a){return n("div",{key:a,staticClass:"item",on:{click:function(n){return t.handleGo(e)}}},[n("p",{staticClass:"navel_title"},[t._v("《"+t._s(e.title)+"》")]),n("p",{staticClass:"time"},[n("span",[t._v(t._s(e.createtime))]),n("span",[n("van-icon",{staticClass:"eye_icon",attrs:{name:"eye-o"}}),t._v(" "+t._s(e.reads)+" ")],1)]),n("div",{staticClass:"navel_introduction",domProps:{innerHTML:t._s(e.introduction)}})])})),0)})),1),n("FixedBg",{attrs:{show:t.bgShow},on:{close:function(e){t.bgShow=!1}}},[n("div",{staticClass:"naveldetail"},[n("p",{staticClass:"detail_title"},[t._v(t._s(t.navel.title))]),n("p",{staticClass:"detail_time"},[t._v(t._s(t.navel.createtime))]),n("div",{staticClass:"detail_introduction",domProps:{innerHTML:t._s(t.navel.introduction)}}),n("div",{staticClass:"detail_content",domProps:{innerHTML:t._s(t.navel.content)}})])])],1)},i=[],s=(n("d3b7"),n("96cf"),n("365c")),r=n("bf07"),c=n("bedf"),o={mixins:[r["a"],c["a"]],data:function(){return{params:{pagesize:10},tabs:[{name:"都市",type:1},{name:"家庭",type:2}],bgShow:!1,navel:{}}},methods:{handleGo:function(t){var e,n,a;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=t.id,i.next=3,regeneratorRuntime.awrap(Object(s["c"])({id:e},!0));case 3:n=i.sent,a=n.data,console.log(a),this.navel=a,this.bgShow=!0;case 8:case"end":return i.stop()}}),null,this)},getData:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tabs[this.currentTab].type,this.params.type=t,e.next=4,regeneratorRuntime.awrap(this.comGetData(s["b"]));case 4:case"end":return e.stop()}}),null,this)},init:function(){this.getData()}},created:function(){this.init()}},l=o,u=(n("b536"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"6bf5f7d2",null);e["default"]=d.exports}}]);