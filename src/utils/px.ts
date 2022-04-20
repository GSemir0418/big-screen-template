/**
 * 处理ts/tsx中需要转换像素值的方法
 * @param p 设计图上的像素值
 * @returns 处理后的rem值
 */
export const pxToRem = (px: number) => (px / 1920) * (window as any).pageWidth
