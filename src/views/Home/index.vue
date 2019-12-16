<template>
    <div>home</div>
</template>
<script>
export default {
    methods: {
        async getData () {
            // console.log(data)
        },
        init () {
            this.getData()
        }
    },
    created () {
        this.init()
    }
}
</script>
