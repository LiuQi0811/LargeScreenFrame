
/**
 * JSON反序列化，支持函数和 undefined
 * @param data 
 */
export const JSONParse =(data: string)=>{
    console.log(`获取的📊数据 ${data}`)
    return JSON.parse(data)
}