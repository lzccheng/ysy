<template>
    <div class="header">
        <van-nav-bar
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
        }
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
