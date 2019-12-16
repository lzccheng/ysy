import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
const { commit } = store

const instance = axios.create({
    baseURL: process.env.NODE_ENV === `"development"` ? `http://localhost:7001/h5api/` : `http://103.140.228.151/h5api/`,
    timeout: 5000
})

instance.interceptors.response.use(res => {
    const { status, data } = res
    if (status === 200) {
        return data
    }
    Toast(data.message)
    return Promise.reject(data)
}, err => {
    Toast(err.message)
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
            if (opt.params) {
                opt.params._url = url
            } else {
                opt.params = {
                    _url: url
                }
            }
        }
        return instance({ ..._opt, ...opt }).finally(() => commit('SET_AJAXLOADING', false))
    }
}

export const GET = request('get')
export const POST = request('post')
export const PUT = request('put')
export const DELETE = request('delete')
