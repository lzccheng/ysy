<template>
    <div>
        <transition name="van-slide-down">
            <div class="loading_box" v-if="ajaxLoading">
                <div class="loading">
                    <van-loading size="60px" color="#23f357" />
                    <div class="text">加载中...</div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            ajaxLoading: state => state.ajaxLoading
        })
    }
}
</script>
<style lang="scss" scoped>
.loading_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 999;
    text-align: center;
    .loading {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
    }
    .text {
        color: #fff;
        margin-top: 20px;
    }
}
</style>
