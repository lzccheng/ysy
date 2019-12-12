<template>
    <div class="pic">
        <TabsUpload @load="handleLoad" @click="handleTabs" :finished="finished">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <MImage :src="_item.cover" />
                    <p class="pic_title van-ellipsis">{{_item.title}}</p>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" @close="bgShow = false">
            <div>
                <div v-for="item in imgList" :key="item" @click="handleView">
                    <MImage :src="item" />
                </div>
            </div>
        </FixedBg>
    </div>
</template>
<script>
import { getPic, getPicAlone } from 'api'
import uploading from '_m/uploading'
import tabs from '_m/tabs'
import { ImagePreview } from 'vant'
import { mapMutations, mapState } from 'vuex'
export default {
    mixins: [uploading, tabs],
    data () {
        return {
            params: {
                pagesize: 20
            },
            tabs: [
                {
                    name: '漫画',
                    classify: 1
                },
                {
                    name: '美女',
                    classify: 2
                }
            ],
            bgShow: false,
            imgList: []
        }
    },
    methods: {
        handleView () {
            ImagePreview(this.imgList)
        },
        async handleGo (item) {
            const { id } = item
            const { data: { content } } = await getPicAlone({ id }, true)
            this.imgList = JSON.parse(content)
            this.bgShow = true
        },
        async getData () {
            const { classify } = this.tabs[this.currentTab]
            this.params.classify = classify
            await this.comGetData(getPic)
        },
        init () {
            if (this.page_status) this.tabs = this.page_status
        },
        ...mapMutations(['SET_PIC_DATA'])
    },
    computed: {
        ...mapState({
            page_status: state => state.pageStatus.pic_page
        })
    },
    created () {
        this.init()
    },
    destroyed () {
        this.SET_PIC_DATA(this.tabs)
    }
}
</script>
<style lang="scss" scoped>
.pic {
    .pic_title {
        margin: 10px 6px;
    }
}
</style>
