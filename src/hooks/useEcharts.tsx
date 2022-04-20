import { useEffect } from 'react'
import * as echarts from 'echarts'

const useEcharts = (ref: { current: HTMLElement }, option: any) => {
  useEffect(() => {
    echarts.init(ref.current).setOption(option)
  }, [option, ref])
}
export default useEcharts
