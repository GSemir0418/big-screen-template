import { useEffect } from 'react'
import * as echarts from 'echarts'

const useEcharts = (ref: { current: HTMLElement | null }, option: any) => {
  useEffect(() => {
    if (ref.current) echarts.init(ref.current).setOption(option)
  }, [option, ref])
}
export default useEcharts
