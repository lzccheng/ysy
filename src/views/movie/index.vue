<template>
    <div>
        <UpLoading @load="handleLoad" :finished="finished">
            <Tabs @click="handleTabs">
                <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                        <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                            <img :src="_item.cover" alt="" class="img">
                            <p>{{_item.title}}</p>
                        </div>
                </van-tab>
            </Tabs>
        </UpLoading>
        <!-- <UpLoading @load="handleLoad" :finished="finished">
            <div v-for="(item, i) in list" :key="i" @click="handleGo(item)" class="item">
                <img :src="item.cover" alt="" class="img">
                <p>{{item.title}}</p>
            </div>
        </UpLoading> -->
    </div>
</template>
<script>
import { getMovie } from 'api'
import { ssSet } from '_l/cache'
import uploading from '_m/uploading'
import UpLoading from '_C/UpLoading'
import Tabs from '_C/Tabs'
export default {
    mixins: [uploading],
    components: {
        UpLoading,
        Tabs
    },
    data () {
        return {
            params: {
                page: 1,
                pagesize: 20
            },
            list: [],
            finished: false,
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
            ],
            currentTab: 0
        }
    },
    methods: {
        handleTabs (i) {
            console.log(i)
            if (this.currentTab === i) return
            this.finished = false
            const { list } = this.tabs[i]
            this.currentTab = i
            !list && this.getData()
        },
        handleGo (item) {
            ssSet('movie_detail', item)
            this.$router.push({
                path: `movieDetail`
            })
        },
        async getData () {
            const i = this.currentTab
            const currentTab = this.tabs[i]
            const { classifyid, page, list, finished } = currentTab
            if (finished) {
                this.finished = finished
                return
            }
            this.params.classifyid = classifyid
            this.params.page = page || 1
            const { data: { list: DList, total } } = await getMovie({ ...this.params })
            currentTab.list = list && list.length ? list.concat(DList) : DList || []
            this.params.page++
            currentTab.page = this.params.page
            if (currentTab.list.length === total) { currentTab.finished = true }
            this.tabs.splice(i, 1, currentTab)
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
    padding: 0 10px;
    .item {
        margin: 10px 0;
    }
}
.img {
    width: 30px;
    border-radius: 5px;
}
</style>
