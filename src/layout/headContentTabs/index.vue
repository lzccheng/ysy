<template>
    <div>
        <Header :title="title" :noback="noback" />
        <div class="content_box" :class="{marBottom: tabs}">
            <router-view />
        </div>
        <TabBar v-show="tabs"/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
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
        }
    }
}
</script>
<style lang="scss" scoped>
.content_box {
  width: 375px;
  margin: 50px auto 0;
}
.marBottom {
    margin: 50px auto 60px;
}
</style>
