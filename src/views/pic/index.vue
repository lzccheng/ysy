<template>
    <div>
        <TabsUpload @load="handleLoad" @click="handleTabs" :finished="finished">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <img :src="_item.cover" :width="imgW"/>
                    <p>{{_item.title}}</p>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" @close="bgShow = false">
            <div>
                <div v-for="item in imgList" :key="item">
                    <img :src="item" :width="imgW" alt="">
                </div>
            </div>
        </FixedBg>
    </div>
</template>
<script>
import { getPic, getPicAlone } from 'api'
import uploading from '_m/uploading'
import tabs from '_m/tabs'
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
