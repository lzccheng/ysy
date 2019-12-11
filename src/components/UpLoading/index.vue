<template>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="handleLoad"
            class="list"
        >
        <slot />
    </van-list>
</template>
<script>
export default {
    props: {
        finished: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            loading: false
        }
    },
    methods: {
        handleLoad () {
            this.$emit('load', this)
        }
    }
}
</script>
