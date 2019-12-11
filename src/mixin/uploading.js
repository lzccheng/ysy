export default {
    methods: {
        handleLoad (that) {
            this.getData().finally(() => {
                that.loading = false
            })
        }
    }
}
