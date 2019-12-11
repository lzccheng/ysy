<template>
    <div class="pic">
        <TabsUpload @load="handleLoad" @click="handleTabs" :finished="finished">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <img v-lazy="_item.cover" :width="imgW"/>
                    <p class="pic_title van-ellipsis">{{_item.title}}</p>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" @close="bgShow = false">
            <div>
                <div v-for="item in imgList" :key="item" @click="handleView">
                    <img v-lazy="item" :width="imgW" alt="">
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
export default {
    mixins: [uploading, tabs],
    data () {
        return {
            imgW: '100%',
            params: {
                pagesize: 20
            },
            tabs: [
                {
                    name: '色情漫画',
                    classify: 1
                },
                {
                    name: '美女写真',
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
        }
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
