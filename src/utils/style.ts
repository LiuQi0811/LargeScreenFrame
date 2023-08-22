/**
 * 样式相关
 */
import Color from 'color'


/**
 * 颜色变亮
 * hsl(100, 50%, 10%) -> hsl(100, 50%, 50%)
 * @param color 颜色
 * @param concentration 浓度
 */
export function lighten(color:string,concentration: number){
    return Color(color).lighten(concentration).toString()
}

/**
 * * hsla 转换
 * @param color 颜色
 * @param alpha 默认1
 */
export function alpha(color: string, alpha = 1) {
    return Color(color).alpha(alpha).toString()
  }