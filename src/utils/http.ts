import axiosInstance from './axios'

/*get 请求*/
export const get = (url: string, params?: object) => {
    return axiosInstance({
        url: url,
        method: 'GET',
        params: params
    })
}


/*post 请求*/
export const post = (url: string, data?: object, headersType?: string) => {
    return axiosInstance({
        url: url,
        method: 'POST',
        data: data,
        headers: {
            'Content-Type': headersType || 'application/json;charset=UTF-8'
        }
    })
}