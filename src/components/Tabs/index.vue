<template>
    <van-tabs v-model="active_" @click="handleClick" swipeable title-active-color="#23f357" animated :offset-top="48" sticky color="#23f357">
        <slot />
    </van-tabs>
</template>
<script>
export default {
    props: {
        active: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            active_: 0
        }
    },
    methods: {
        handleClick (i) {
            this.$emit('click', i)
        },
        init () {
            this.active_ = this.active
        }
    },
    created () {
        this.init()
    },
    watch: {
        active () {
            this.init()
        }
    }
}
</script>
