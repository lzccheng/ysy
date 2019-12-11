export default {
    data () {
        return {
            finished: false
        }
    },
    methods: {
        handleLoad (that) {
            this.getData().finally(() => {
                that.loading = false
            })
        }
    }
}
