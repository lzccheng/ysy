import { POST } from '@/lib/axios'

export const getMovie = (data, needLoading) => POST('v1/api/apiFetchMovieData', { data }, { needLoading })
