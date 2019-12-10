import axios from 'axios'
import store from '@/store'
const { commit } = store

const instance = axios.create({
    baseURL: `https://saohu19.com/`,
    timeout: 3000
})

instance.interceptors.response.use(res => {
    const { status, data } = res
    if (status === 200) {
        return data
    }
}, err => {
    return err
})

const request = method => {
    const comOpt = {}
    const _opt = {
        ...comOpt,
        method
    }
    return (url, opt, conf) => {
        if (conf) {
            const { needLoading } = conf
            if (needLoading) {
                commit('SET_AJAXLOADING', true)
            }
        }
        return instance({ ..._opt, ...opt, url }).finally(() => commit('SET_AJAXLOADING', false))
    }
}

export const GET = request('get')
export const POST = request('post')
export const PUT = request('put')
export const DELETE = request('delete')
