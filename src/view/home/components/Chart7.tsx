import { useRef } from 'react'
import useEcharts from '../../../hooks/useEcharts'
import ChartWrapper from './ChartWrapper'
const Chart7 = () => {
  const chart7Ref = useRef<HTMLDivElement | null>(null)
  const options7 = {
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    yAxis: {
      type: 'value',
      splitLine: { show: false },
    },
    series: [
      {
        data: [120, 200, 150, 80, 70],
        type: 'pictorialBar',
        symbol: 'triangle',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
        itemStyle: {
          color: (params: { dataIndex: string | number }) => {
            const colorList = [
              'rgba(13,177,205,0.8)',
              'rgba(29,103,182,0.6)',
              'rgba(13,177,205,0.8)',
              'rgba(29,103,182,0.6)',
              'rgba(13,177,205,0.8)',
            ]
            return colorList[params.dataIndex]
          },
        },
      },
    ],
  }
  useEcharts(chart7Ref, options7)
  return (
    <ChartWrapper chartClassName="chart" title="Chart7 Title">
      <div ref={chart7Ref} style={{ height: '100%' }} />
    </ChartWrapper>
  )
}
export default Chart7
