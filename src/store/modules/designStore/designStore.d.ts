import {ThemeEnum} from '@/enums/styleEnums'



/**
 * 设计状态类型 接口
 */
export interface DesignStateType{
    // 深色主题标识 关闭
    darkTheme: false
    // 主题名称
    themeName: ThemeEnum
    // 主题默认颜色
    appTheme: string
    // 主题详情
    appThemeDetail: AppThemeColorType
}


/**
 * 主题颜色类型
 */
export type AppThemeColorType = {
    CMYK: number[]
    RGB: number[]
    hex: string
    name: string
    pinyin: string
}