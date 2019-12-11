<template>
    <div>
        <TabsUpload @load="handleLoad" :finished="finished" @click="handleTabs">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <img alt="" class="img" v-lazy="_item.cover">
                    <p class="title">{{_item.title}}</p>
                </div>
            </van-tab>
        </TabsUpload>
    </div>
</template>
<script>
import { getMovie } from 'api'
import { ssSet } from '_l/cache'
import uploading from '_m/uploading'
import tabs from '_m/tabs'
export default {
    mixins: [uploading, tabs],
    data () {
        return {
            params: {
                page: 1,
                pagesize: 20
            },
            tabs: [
                {
                    name: '国产精品',
                    classifyid: 1
                },
                {
                    name: '日韩情色',
                    classifyid: 2
                },
                {
                    name: '欧美性爱',
                    classifyid: 3
                },
                {
                    name: '动漫理伦',
                    classifyid: 4
                }
            ]
        }
    },
    methods: {
        handleGo (item) {
            ssSet('movie_detail', item)
            this.$router.push({
                path: `movieDetail`
            })
        },
        async getData () {
            const { classifyid } = this.tabs[this.currentTab]
            this.params.classifyid = classifyid
            await this.comGetData(getMovie)
        },
        init () {
            this.getData()
        }
    },
    created () {
        // this.init()
    }
}
</script>
<style lang="scss" scoped>
.list {
    .title {
        margin: 10px 6px;
        line-height: 22px;
    }
}
.img {
    width: 30px;
    border-radius: 5px;
}
</style>
