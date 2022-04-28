import ChartWrapper from './ChartWrapper'
import * as echarts from 'echarts'
import { useRef } from 'react'
import useEcharts from '../../../hooks/useEcharts'
import { pxToRem } from '../../../utils/px'
const Chart3 = () => {
  const chart3Ref = useRef<HTMLDivElement | null>(null)
  const option3 = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    legend: {
      data: ['系列一', '系列二'],
      right: 0,
      top: `${pxToRem(18)}rem`,
      padding: 0,
      textStyle: {
        color: 'white',
      },
    },
    xAxis: [
      {
        type: 'category',
        data: ['工厂1', '工厂2', '工厂3', '工厂4'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            width: 1,
            dashOffset: 200,
            opacity: 0.1,
          },
        },
      },
    ],
    series: [
      {
        name: '系列一',
        type: 'bar',
        barWidth: '10%',
        barGap: '100%',
        tooltip: {
          valueFormatter: (value: string) => {
            return `${value}ml`
          },
        },
        data: [2.0, 4.9, 7.0, 23.2],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 1, color: '#071e3f' },
            { offset: 0, color: '#42A8FE' },
          ]),
        },
      },
      {
        name: '系列二',
        type: 'bar',
        barWidth: '10%',
        tooltip: {
          valueFormatter: (value: string) => {
            return `${value}ml`
          },
        },
        data: [2.6, 5.9, 9.0, 26.4],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#F08885' },
            { offset: 1, color: '#071e3f' },
          ]),
        },
      },
    ],
  }
  useEcharts(chart3Ref, option3)
  return (
    <ChartWrapper chartClassName="chart" title="Chart3 Title">
      <div ref={chart3Ref} style={{ height: '100%' }} />
    </ChartWrapper>
  )
}
export default Chart3
