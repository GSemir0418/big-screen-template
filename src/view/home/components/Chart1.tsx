import ChartWrapper from './ChartWrapper'
import * as echarts from 'echarts'
import { useRef } from 'react'
import useEcharts from '../../../hooks/useEcharts'
import { pxToRem } from '../../../utils/px'
const Chart1 = () => {
  const chart1Ref = useRef<HTMLDivElement | null>(null)
  const option1 = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      show: false,
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
    legend: {
      data: [
        { name: '指标1', icon: 'rect' },
        { name: '指标2', icon: 'rect' },
      ],
      right: 0,
      top: `${pxToRem(18)}rem`,
      padding: 0,
      textStyle: {
        color: 'white',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: '指标1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)',
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [120, 282, 111, 234, 220, 340, 310],
      },
      {
        name: '指标2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)',
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)',
            },
          ]),
        },
        emphasis: {
          focus: 'series',
        },
        data: [320, 132, 201, 334, 190, 130, 220],
      },
    ],
  }
  useEcharts(chart1Ref, option1)
  return (
    <ChartWrapper chartClassName="chart" title="Chart1 Title">
      <div ref={chart1Ref} style={{ height: '100%' }} />
    </ChartWrapper>
  )
}
export default Chart1
