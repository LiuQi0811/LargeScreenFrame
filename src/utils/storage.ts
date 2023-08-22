import {JSONParse} from './utils'


/**
 * 从localStore获取本地会话数据
 * @param param 
 */
export const getLocalStorage = (param: string) =>{
    // 获取localStore数据
    const result = window.localStorage.getItem(param)
    try{
        return result ? JSONParse(result) : result
    }catch(e){
        return result
    }
}