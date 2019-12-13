<template>
    <div>
        <Header :title="title" :noback="noback" />
        <div class="content_box" :class="{ marBottom: tabs }" :style="{ marginTop: navH + 'px' }">
            <keep-alive :max="20">
                <router-view v-if="keepAlive" />
            </keep-alive>
            <router-view v-if="!keepAlive" />
        </div>
        <TabBar v-if="tabs"/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import { mapState } from 'vuex'
export default {
    components: {
        Header,
        TabBar
    },
    data () {
        return {
        }
    },
    computed: {
        title () {
            return this.$route.meta.title
        },
        noback () {
            return !!this.$route.meta.noback
        },
        tabs () {
            return !!this.$route.meta.tabs
        },
        keepAlive () {
            return this.$route.meta.keepAlive
        },
        ...mapState({
            navH: state => {
                return state.header_heigh
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.content_box {
  width: 375px;
  margin: 50px auto 0;
}
.marBottom {
    margin-bottom: 60px;
}
</style>
