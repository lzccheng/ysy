export default {
    data () {
        return {
            currentTab: 0
        }
    },
    methods: {
        handleTabs (i) {
            if (this.currentTab === i) return
            this.finished = false
            const { list } = this.tabs[i]
            this.currentTab = i
            !list && this.getData()
        },
        async comGetData (request) {
            const i = this.currentTab
            const currentTab = this.tabs[i]
            const { page, list, finished } = currentTab
            if (finished) {
                this.finished = finished
                return
            }
            this.params.page = page || 1
            const { data: { list: DList, total } } = await request(this.params)
            currentTab.list = Object.freeze(list && list.length ? list.concat(DList) : DList || [])
            this.params.page++
            currentTab.page = this.params.page
            if (currentTab.list.length === total) { currentTab.finished = true }
            this.tabs.splice(i, 1, currentTab)
        }
    }
}
