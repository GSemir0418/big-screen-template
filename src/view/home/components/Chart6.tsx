import { useRef } from 'react'
import useEcharts from '../../../hooks/useEcharts'
import ChartWrapper from './ChartWrapper'
const Chart6 = () => {
  const chart61Ref = useRef<HTMLDivElement | null>(null)
  const chart62Ref = useRef<HTMLDivElement | null>(null)
  const options61 = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        label: { show: false },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          label: { show: false },
          labelLine: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  const options62 = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        label: { show: false },
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          label: { show: false },
          labelLine: {
            show: false,
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  useEcharts(chart61Ref, options61)
  useEcharts(chart62Ref, options62)
  return (
    <ChartWrapper chartClassName="chart" title="Chart6 Title">
      <div className="chart6-wrapper">
        <div className="chart6-1">
          <div ref={chart61Ref} style={{ height: '100%' }} />
        </div>
        <div className="chart6-2">
          <div ref={chart62Ref} style={{ height: '100%' }} />
        </div>
      </div>
    </ChartWrapper>
  )
}
export default Chart6
