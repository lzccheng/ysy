<template>
    <div>
        <TabsUpload @load="handleLoad" @change="handleTabs" :finished="finished">
            <van-tab :title="item.name" v-for="(item, i) in tabs" :key="i">
                <div v-for="(_item, _i) in item.list" :key="_i" @click="handleGo(_item)" class="item">
                    <p class="navel_title">《{{_item.title}}》</p>
                    <p class="time">
                        <span>{{_item.createtime}}</span>
                        <EyeLook :look="_item.reads"/>
                    </p>
                    <div class="navel_introduction" v-html="_item.introduction"></div>
                </div>
            </van-tab>
        </TabsUpload>
        <FixedBg :show="bgShow" @close="bgShow = false">
            <div class="naveldetail">
                <p class="detail_title">{{navel.title}}</p>
                <p class="detail_time">{{navel.createtime}}</p>
                <div v-html="navel.introduction" class="detail_introduction"></div>
                <div v-html="navel.content" class="detail_content"></div>
            </div>
        </FixedBg>
    </div>
</template>
<script>
import { getNavel, getNavelAlone } from 'api'
import uploading from '_m/uploading'
import tabs from '_m/tabs'
export default {
    mixins: [uploading, tabs],
    data () {
        return {
            params: {
                pagesize: 10
            },
            tabs: [
                {
                    name: '都市',
                    type: 1
                },
                {
                    name: '家庭',
                    type: 2
                }
            ],
            bgShow: false,
            navel: {}
        }
    },
    methods: {
        async handleGo (item) {
            const { id } = item
            const { data } = await getNavelAlone({ id }, true)
            this.navel = data
            this.bgShow = true
        },
        async getData () {
            const { type } = this.tabs[this.currentTab]
            this.params.type = type
            await this.comGetData(getNavel)
        },
        init () {
            // this.getData()
        }
    },
    created () {
        this.init()
    }
}
</script>
<style lang="scss" scoped>
.item {
    padding: 0 6px;
    .navel_title {
        font-size: 18px;
        margin: 8px 0;
        padding-top: 10px;
        border-top: #777 dashed 1PX;
    }
    .navel_introduction {
        color: #999;
        font-size: 16px;
        line-height: 22px;
        padding-bottom: 10px;
        border-bottom: #777 dashed 1PX;
    }
    .time {
        color: #888;
        font-size: 16px;
        padding: 4px 8px 8px;
    }
}

.naveldetail {
    background-color: #fff;
    .detail_title {
        font-size: 18px;
        text-align: center;
        padding: 15px 6px;
    }
    .detail_time {
        font-size: 16px;
        color: #999;
        text-align: center;
        padding-bottom: 10px;
    }
    .detail_introduction {
        margin: 0 8px 10px;
        padding: 8px;
        border: #888 dashed 1PX;
        border-radius: 5px;
        line-height: 22px;
    }
    .detail_content {
        margin: 0 8px;
        padding-bottom: 51px;
        line-height: 22px;
    }
}
</style>
