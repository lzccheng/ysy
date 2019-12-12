<template>
    <div>
        <TabsUpload @load="handleLoad" @click="handleTabs" :finished="finished">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <MImage :src="_item.cover" />
                    <p class="text">{{_item.createtime}}<EyeLook :look="_item.reads"/></p>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" @close="bgShow = false">
            <div class="movie_detail" v-if="currentTab === 0">
                <movieDetail :data="currentMovie"/>
            </div>
            <div v-if="currentTab === 1" class="imglist">
                <div v-for="i in imgList" :key="i">
                    <MImage :src="i" @click="handleView" />
                </div>
            </div>
        </FixedBg>
    </div>
</template>
<script>
import uploading from '_m/uploading'
import tabs from '_m/tabs'
import movieDetail from '_c/MovieDetail'
import { getGood, getPicAlone } from 'api'
import { mapMutations, mapState } from 'vuex'
import { ImagePreview } from 'vant'

export default {
    mixins: [uploading, tabs],
    components: {
        movieDetail
    },
    data () {
        return {
            imgW: '30px',
            params: {
                pagesize: 20
            },
            tabs: [
                {
                    name: '视频',
                    type: 2
                },
                {
                    name: '图片',
                    type: 1
                }
            ],
            bgShow: false,
            currentMovie: {},
            imgList: []
        }
    },
    methods: {
        handleView () {
            ImagePreview(this.imgList)
        },
        async handleGo (item) {
            const i = this.currentTab
            if (i === 0) {
                this.currentMovie = item
            }
            if (i === 1) {
                const { id } = item
                const { data: { content } } = await getPicAlone({ id }, true)
                this.imgList = JSON.parse(content)
            }
            this.bgShow = true
        },
        async getData () {
            const { type } = this.tabs[this.currentTab]
            this.params.type = type
            await this.comGetData(getGood)
        },
        init () {
            if (this.page_status) this.tabs = this.page_status
        },
        ...mapMutations(['SET_GOOD_DATA'])
    },
    created () {
        this.init()
    },
    computed: {
        ...mapState({
            page_status: state => state.pageStatus.good_page
        })
    },
    destroyed () {
        this.SET_GOOD_DATA(this.tabs)
    }
}
</script>
<style lang="scss" scoped>
.item {
    .text {
        line-height: 30px;
        margin: 0 8px;
    }
}
.movie_detail {
    background-color: #fff;
    padding: 20px 0;
}
.imglist {
    background-color: #fff;
}
</style>
