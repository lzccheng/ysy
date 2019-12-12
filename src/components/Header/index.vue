<template>
    <div class="header">
        <van-nav-bar
            id="nav_header"
            class="fixed_center"
            :title="title"
            left-text=""
            :right-text="right"
            :left-arrow="!noback"
            fixed
            :border="false"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        noback: {
            type: Boolean,
            default: false
        },
        right: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClickLeft () {
            this.$router.back()
        },
        onClickRight () {
        },
        init () {
            this.$nextTick(() => {
                if (this.header_h) return
                const dom = document.querySelector('#nav_header')
                if (dom) {
                    const top = dom.clientHeight
                    if (top) this.SET_HEADER_HEIGHT(top)
                }
            })
        },
        ...mapMutations(['SET_HEADER_HEIGHT'])
    },
    computed: {
        ...mapState({
            header_h: state => state.header_heigh
        })
    },
    created () {
        this.init()
    }
}
</script>
<style lang="scss" scoped>
$color: #fff;
.header {
    /deep/ .van-nav-bar {
        background: linear-gradient(to left, #23f357, #f0cc57);
    }
    /deep/ .van-nav-bar__title {
        color: $color;
    }
    /deep/ .van-nav-bar .van-icon {
        color: $color;
    }
}
</style>
