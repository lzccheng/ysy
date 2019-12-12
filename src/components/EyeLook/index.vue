<template>
    <span>
        <van-icon name="eye-o" class="eye_icon"/> {{look}}
    </span>
</template>
<script>
export default {
    props: {
        look: {
            type: Number
        }
    }
}
</script>
<style lang="scss" scoped>
.eye_icon {
    margin-left: 18px;
    position: relative;
    top: 2px;
}
</style>
