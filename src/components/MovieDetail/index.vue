<template>
    <div>
        <div class="video_box">
            <video v-if="detail" id="id_video" class="video-js vjs-default-skin">
            </video>
        </div>
        <!-- <p class="title">
            <span>{{detail.title}}</span><br />
            <span class="time">{{detail.updatetime}}<EyeLook :look="detail.reads"/></span>
        </p> -->
    </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            detail: null
        }
    },
    methods: {
        init () {
            const detail = this.data
            this.detail = detail
            this.$nextTick(() => {
                const options = {
                    controls: true,
                    poster: detail.cover
                }
                this.player = videojs('id_video', options, () => {
                    this.player.src({
                        src: detail.playurl
                    })
                    // this.player.on('play', () => {
                    //     const isFullscreen = this.player.isFullscreen()
                    //     if (!isFullscreen) {
                    //         this.player.requestFullscreen()
                    //     }
                    // })
                    // this.player.on('ended', () => {
                    //     this.player.exitFullScreen()
                    // })
                })
            })
        }
    },
    destroyed () {
        this.player.dispose()
    },
    created () {
        this.init()
    }
}
</script>
<style lang="scss" scoped>
.video-js {
    width: 100% !important;
    height: 660px !important;
}
.title {
    margin: 10px 6px;
    .time {
        display: inline-block;
        margin-top: 6px;
        color: #999;
        font-size: 14px;
    }
}
</style>
