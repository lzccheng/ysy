<template>
    <div class="pic">
        <TabsUpload @load="handleLoad" @change="handleTabs" :finished="finished">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <MImage :src="_item.cover" />
                    <p class="pic_title van-ellipsis">{{_item.title}}</p>
                    <p class="pic_title">
                        {{_item.createtime}}
                        <EyeLook :look="_item.reads"/>
                    </p>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" @close="bgShow = false">
            <div>
                <div v-for="(item, i) in imgList" :key="item" @click="handleView(i)">
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
        handleView (i) {
            ImagePreview({
                images: this.imgList,
                startPosition: i
            })
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
