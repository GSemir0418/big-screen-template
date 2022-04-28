import ChartWrapper from './ChartWrapper'
import * as echarts from 'echarts'
import { useRef } from 'react'
import useEcharts from '../../../hooks/useEcharts'
const Chart2 = () => {
  const chart2Ref = useRef<HTMLDivElement | null>(null)
  const option2 = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '20%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false },
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: '#071e3f' },
            { offset: 0, color: '#1ECED7' },
          ]),
        },
      },
    ],
  }
  useEcharts(chart2Ref, option2)
  return (
    <ChartWrapper chartClassName="chart" title="Chart2 Title">
      <div ref={chart2Ref} style={{ height: '100%' }} />
    </ChartWrapper>
  )
}
export default Chart2
