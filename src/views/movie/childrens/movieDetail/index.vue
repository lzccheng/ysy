<template>
    <div>
        <div class="video_box">
            <video v-if="detail" id="id_video" class="video-js vjs-default-skin">
            </video>
        </div>
        <p class="title">
            <span>{{detail.title}}</span><br />
            <span class="time">{{detail.updatetime}}</span>
        </p>
    </div>
</template>
<script>
import { ssGet } from '_l/cache'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
    data () {
        return {
            detail: null
        }
    },
    methods: {
        init () {
            const detail = ssGet('movie_detail')
            this.detail = detail
            console.log(detail)
            this.$nextTick(() => {
                const options = {
                    controls: true,
                    poster: detail.cover
                }
                this.player = videojs('id_video', options, () => {
                    this.player.src({
                        src: detail.playurl
                    })
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
    height: 300px !important;
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
