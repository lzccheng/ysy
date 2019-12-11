import Vue from 'vue'

import UpLoading from '_c/UpLoading'
import MTabs from '_c/Tabs'
import TabsUpload from '_c/TabsUpload'
import FixedBg from '_c/FixedBg'

import { NavBar, Loading, Tabbar, TabbarItem, List, Tab, Tabs, Button, Sticky, Lazyload } from 'vant'
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

Vue.component('UpLoading', UpLoading)
Vue.component('MTabs', MTabs)
Vue.component('TabsUpload', TabsUpload)
Vue.component('FixedBg', FixedBg)
