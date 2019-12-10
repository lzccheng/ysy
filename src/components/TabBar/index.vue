<template>
    <van-tabbar v-model="active" fixed class="fixed_center">
        <van-tabbar-item :icon="item.icon" :name="item.activeName" v-for="item in barList" :to="item.to" :key="item.icon">{{item.name}}</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data () {
        return {
            active: '',
            barList: [
                {
                    icon: 'wap-home-o',
                    name: '首页',
                    activeName: 'home',
                    to: '/home'
                },
                {
                    icon: 'video-o',
                    name: '电影',
                    activeName: 'movie',
                    to: '/movie'
                },
                {
                    icon: 'photo-o',
                    name: '图片',
                    activeName: 'pic',
                    to: '/pic'
                },
                {
                    icon: 'orders-o',
                    name: '小说',
                    activeName: 'navel',
                    to: '/navel'
                }
            ]
        }
    },
    methods: {
        init () {
            const { name } = this.$route
            const arr = this.barList.map(item => item.activeName)
            this.active = arr.includes(name) ? name : arr[0]
        }
    },
    created () {
        this.init()
    }
}
</script>
