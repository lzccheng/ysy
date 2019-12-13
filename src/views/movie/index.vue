<template>
    <div>
        <TabsUpload @load="handleLoad" :finished="finished" @change="handleTabs">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <MImage :src="_item.cover" />
                    <p class="title van-ellipsis">
                        {{_item.title}}
                    </p>
                    <p class="title">
                        {{_item.createtime}}
                        <EyeLook :look="_item.reads"/>
                    </p>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" :closeType="`bottom`" @close="bgShow = false">
            <div class="movie_detail">
                <movieDetail :data="currentMovie"/>
            </div>
        </FixedBg>
    </div>
</template>
<script>
import { getMovie } from 'api'
import uploading from '_m/uploading'
import tabs from '_m/tabs'
import movieDetail from '_c/MovieDetail'
export default {
    mixins: [uploading, tabs],
    components: {
        movieDetail
    },
    data () {
        return {
            params: {
                page: 1,
                pagesize: 20
            },
            tabs: [
                {
                    name: '国产',
                    classifyid: 1
                },
                {
                    name: '日韩',
                    classifyid: 2
                },
                {
                    name: '欧美',
                    classifyid: 3
                },
                {
                    name: '动漫',
                    classifyid: 4
                }
            ],
            bgShow: false,
            currentMovie: {}
        }
    },
    methods: {
        handleGo (item) {
            this.currentMovie = item
            this.bgShow = true
        },
        async getData () {
            const { classifyid } = this.tabs[this.currentTab]
            this.params.classifyid = classifyid
            await this.comGetData(getMovie)
        }
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
.movie_detail {
    background-color: #fff;
}
</style>
