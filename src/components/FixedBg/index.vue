<template>
    <transition name="van-slide-up">
        <div class="fixed_box" v-show="show" @click.self="handleSelf">
            <van-sticky>
                <div class="btn">
                    <van-button plain type="primary" @click="handleSelf" block>关闭</van-button>
                </div>
            </van-sticky>
            <slot />
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        handleSelf () {
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss" scoped>
.fixed_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
    overflow-y: auto;
    .btn {
        width: 80%;
        margin: 10px auto;
    }
}
</style>
