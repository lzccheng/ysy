<template>
    <div>
        <Header :title="title" :noback="noback" />
        <div class="content_box" :class="{ marBottom: tabs }" :style="{ marginTop: navH + 'px' }">
            <router-view />
        </div>
        <TabBar v-show="tabs"/>
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
            console.log('navH', this.navH, this.$store.state)
            return this.$route.meta.title
        },
        noback () {
            return !!this.$route.meta.noback
        },
        tabs () {
            return !!this.$route.meta.tabs
        },
        ...mapState({
            navH: state => {
                console.log('state', state, state.header_heigh)
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
