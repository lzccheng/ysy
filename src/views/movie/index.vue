<template>
    <div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="getData"
        >
            <div v-for="(item, i) in list" :key="i" @click="handleGo(item)">
                <img :src="item.cover" alt="" class="img">
                {{item.title}}
            </div>
        </van-list>
    </div>
</template>
<script>
import { getMovie } from 'api'
export default {
    data () {
        return {
            params: {
                page: 1,
                pagesize: 20
            },
            list: [],
            total: 0,
            loading: false,
            finished: false
        }
    },
    methods: {
        handleGo (item) {
            this.$router.push({
                path: `movieDetail`
            })
        },
        async getData () {
            if (this.finished) return
            const { data: { list, total } } = await getMovie({ ...this.params })
            this.list = list.length ? this.list.concat(list) : list
            this.total = total
            this.params.page++
            this.loading = false
            if (this.list.length === this.total) { this.finished = true }
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
.img {
    width: 80px;
    border-radius: 5px;
}
</style>
