<template>
    <van-image :src="src" lazy-load width="100%" @click="handleClick">
        <template v-slot:loading>
            <van-loading size="50" color="#23f357" />
        </template>
    </van-image>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClick () {
            this.$emit('click')
        }
    }
}
</script>
