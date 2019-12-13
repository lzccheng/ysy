import Vue from 'vue'

import UpLoading from '_c/UpLoading'
import MTabs from '_c/Tabs'
import TabsUpload from '_c/TabsUpload'
import FixedBg from '_c/FixedBg'
import EyeLook from '_c/EyeLook'
import MImage from '_c/MImage'

import {
   NavBar,
   Loading,
   Tabbar,
   TabbarItem,
   List,
   Tab,
   Tabs,
   Button,
   Sticky,
   Lazyload,
   Icon,
   Image,
   Toast
} from 'vant'
Vue.use(NavBar)
   .use(Loading)
   .use(Tabbar)
   .use(TabbarItem)
   .use(List)
   .use(Tab)
   .use(Tabs)
   .use(Button)
   .use(Sticky)
   .use(Lazyload)
   .use(Icon)
   .use(Image)
   .use(Toast)

Vue.component('UpLoading', UpLoading)
Vue.component('MTabs', MTabs)
Vue.component('TabsUpload', TabsUpload)
Vue.component('FixedBg', FixedBg)
Vue.component('EyeLook', EyeLook)
Vue.component('MImage', MImage)
