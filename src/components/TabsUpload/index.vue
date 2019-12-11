<template>
    <UpLoading @load="handleLoad" :finished="finished_">
        <MTabs @click="handleTabs">
            <slot />
        </MTabs>
    </UpLoading>
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
            finished_: false
        }
    },
    methods: {
        handleLoad (that) {
            this.$emit('load', that)
        },
        handleTabs (i) {
            this.$emit('click', i)
        },
        init () {
            this.finished_ = this.finished
        }
    },
    created () {
        this.init()
    },
    watch: {
        finished () {
            this.init()
        }
    }
}
</script>
