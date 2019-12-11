import { POST } from '@/lib/axios'

// 视频列表
export const getMovie = (data, needLoading) => POST('v1/api/apiFetchMovieData', { data }, { needLoading })
// 图片列表
export const getPic = (data, needLoading) => POST('v1/api/apiFetchPhotoData', { data }, { needLoading })
// 单组图片
export const getPicAlone = (data, needLoading) => POST('v1/api/apiGetPhotoData', { data }, { needLoading })
// 小说列表
export const getNavel = (data, needLoading) => POST('v1/api/apiFetchNovelData', { data }, { needLoading })
// 小说详情
export const getNavelAlone = (data, needLoading) => POST('v1/api/apiGetNovelData', { data }, { needLoading })
