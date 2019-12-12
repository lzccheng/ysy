<template>
    <div>
        <TabsUpload @load="handleLoad" :finished="finished" @click="handleTabs">
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
        <FixedBg :show="bgShow" @close="bgShow = false">
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
import { mapMutations, mapState } from 'vuex'
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
        },
        init () {
            if (this.page_status) this.tabs = this.page_status
            // this.getData()
        },
        ...mapMutations(['SET_MOVIE_DATA'])
    },
    created () {
        this.init()
    },
    destroyed () {
        this.SET_MOVIE_DATA(this.tabs)
    },
    computed: {
        ...mapState({
            page_status: state => state.pageStatus.movie_page
        })
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
    padding: 20px 0;
}
</style>
