(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-736136d0"],{"28a2":function(t,i,e){"use strict";var s=e("c31d"),n=e("2b0e"),o=e("d282");function a(t,i,e){return Math.min(Math.max(t,i),e)}var c=e("1325"),r=e("6605"),h=e("3875"),u=e("44bf"),l=e("543e"),d=e("5fbe"),f=e("4598"),v=Object(o["a"])("swipe"),m=v[0],p=v[1],g=m({mixins:[h["a"],Object(d["a"])((function(t,i){t(window,"resize",this.resize,!0),i?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return t={},t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},resize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(c["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?a(i+t,-1,e):a(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=a(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,o=t.emitChange,a=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,n);if(a){if(h[0]){var v=f<l;h[0].offset=v?u:0}if(h[c-1]){var m=f>0;h[c-1].offset=m?-u:0}}this.active=d,this.offset=f,o&&d!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(f["a"])((function(){var s;s=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:s-e.active,emitChange:!0}),i.immediate?Object(f["a"])((function(){e.swiping=!1})):e.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(f["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&e>1?i("div",{class:p("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,n){return i("i",{class:p("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:p()},[t("div",{ref:"track",style:this.trackStyle,class:p("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.genIndicator()])}}),w=Object(o["a"])("swipe-item"),b=w[0],y=w[1],T=b({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,n=i.computedWidth,o=i.computedHeight,a={width:n+"px",height:e?o+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:y(),style:a,on:Object(s["a"])({},this.$listeners)},[this.slots()])}}),S=Object(o["a"])("image-preview"),x=S[0],C=S[1];function M(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var z,I=x({mixins:[r["a"],h["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:C("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,i={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(i.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),i}},watch:{value:function(){this.setActive(this.startPosition)},startPosition:function(t){this.setActive(t)}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var i=this;Object(c["c"])(t);var e=new Date-this.touchStartTime,s=this.$refs.swipe||{},n=s.offsetX,o=void 0===n?0:n,a=s.offsetY,r=void 0===a?0:a;e<300&&o<10&&r<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){var t=i.active;i.$emit("close",{index:t,url:i.images[t]}),i.asyncClose||i.$emit("input",!1),i.doubleClickTimer=null}),300))},startMove:function(t){var i=t.currentTarget,e=i.getBoundingClientRect(),s=window.innerWidth,n=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(e.width-s)/2),this.maxMoveY=Math.max(0,(e.height-n)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=M(t.touches)},onImageTouchStart:function(t){var i=t.touches,e=this.$refs.swipe||{},s=e.offsetX,n=void 0===s?0:s;1===i.length&&1!==this.scale?this.startMove(t):2!==i.length||n||this.startZoom(t)},onImageTouchMove:function(t){var i=t.touches;if((this.moving||this.zooming)&&Object(c["c"])(t,!0),this.moving){this.touchMove(t);var e=this.deltaX+this.startMoveX,s=this.deltaY+this.startMoveY;this.moveX=a(e,-this.maxMoveX,this.maxMoveX),this.moveY=a(s,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var n=M(i),o=this.startScale*n/this.startDistance;this.scale=a(o,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var i=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),i&&Object(c["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:C("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,i=this.slots("cover");if(i)return t("div",{class:C("cover")},[i])},genImages:function(){var t=this,i=this.$createElement,e={loading:function(){return i(l["a"],{attrs:{type:"spinner"}})}};return i(g,{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:C("swipe"),on:{change:this.setActive},nativeOn:{touchstart:this.onWrapperTouchStart,touchMove:c["c"],touchend:this.onWrapperTouchEnd,touchcancel:this.onWrapperTouchEnd}},[this.images.map((function(s,n){return i(T,[i(u["a"],{attrs:{src:s,fit:"contain",lazyLoad:t.lazyLoad},class:C("image"),scopedSlots:e,style:n===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.value)return t("transition",{attrs:{name:"van-fade"}},[t("div",{class:[C(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),O=e("a142"),k={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1},X=function(){z=new(n["a"].extend(I))({el:document.createElement("div")}),document.body.appendChild(z.$el),z.$on("change",(function(t){z.onChange&&z.onChange(t)}))},Y=function(t,i){if(void 0===i&&(i=0),!O["d"]){z||X();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return Object(s["a"])(z,k,e),z.$once("input",(function(t){z.value=t})),e.onClose&&z.$once("close",e.onClose),z}};Y.install=function(){n["a"].use(I)};i["a"]=Y},4662:function(t,i,e){"use strict";e("68ef"),e("4d75"),e("09fe"),e("8270"),e("786d"),e("504b")},"504b":function(t,i,e){},"6b87":function(t,i,e){"use strict";var s=e("bbd5"),n=e.n(s);n.a},"786d":function(t,i,e){},8270:function(t,i,e){},8683:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pic"},[e("TabsUpload",{attrs:{finished:t.finished},on:{load:t.handleLoad,change:t.handleTabs}},t._l(t.tabs,(function(i,s){return e("van-tab",{key:s,attrs:{title:i.name}},t._l(i.list,(function(i,s){return e("div",{key:s,staticClass:"item",on:{click:function(e){return t.handleGo(i)}}},[e("MImage",{attrs:{src:i.cover}}),e("p",{staticClass:"pic_title van-ellipsis"},[t._v(t._s(i.title))]),e("p",{staticClass:"pic_title"},[t._v(" "+t._s(i.createtime)+" "),e("EyeLook",{attrs:{look:i.reads}})],1)],1)})),0)})),1),e("FixedBg",{attrs:{show:t.bgShow},on:{close:function(i){t.bgShow=!1}}},[e("div",t._l(t.imgList,(function(i,s){return e("div",{key:i,on:{click:function(i){return t.handleView(s)}}},[e("MImage",{attrs:{src:i}})],1)})),0)])],1)},n=[],o=(e("d3b7"),e("96cf"),e("4662"),e("28a2")),a=e("365c"),c=e("bf07"),r=e("bedf"),h={mixins:[c["a"],r["a"]],data:function(){return{params:{pagesize:20},tabs:[{name:"漫画",classify:1},{name:"美女",classify:2}],bgShow:!1,imgList:[]}},methods:{handleView:function(t){Object(o["a"])({images:this.imgList,startPosition:t})},handleGo:function(t){var i,e,s;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.id,n.next=3,regeneratorRuntime.awrap(Object(a["f"])({id:i},!0));case 3:e=n.sent,s=e.data.content,this.imgList=JSON.parse(s),this.bgShow=!0;case 7:case"end":return n.stop()}}),null,this)},getData:function(){var t;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return t=this.tabs[this.currentTab].classify,this.params.classify=t,i.next=4,regeneratorRuntime.awrap(this.comGetData(a["e"]));case 4:case"end":return i.stop()}}),null,this)}}},u=h,l=(e("6b87"),e("2877")),d=Object(l["a"])(u,s,n,!1,null,"4c64bd92",null);i["default"]=d.exports},bbd5:function(t,i,e){}}]);