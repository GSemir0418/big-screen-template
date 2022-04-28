import * as echarts from 'echarts'
import { useRef, useEffect } from 'react'
import JiangXi from '../../../../assets/jiangxi.json'
import { pxToRem } from '../../../utils/px'
const MapChart = () => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const myChart = echarts.init(chartRef.current as unknown as HTMLDivElement)
    echarts.registerMap('CN', JiangXi as any)
    myChart.setOption({
      width: `${pxToRem(580)}rem`,
      xAxis: { show: false },
      yAxis: { show: false },
      tooltip: {
        backgroundColor: '#092847',
        borderColor: '#23fefb',
        borderWidth: pxToRem(2),
        textStyle: {
          color: '#fff',
        },
        formatter: (params: any) => {
          return `${params.name} : ${params.value}`
        },
      },
      // 地图层，作为阴影
      geo: {
        map: 'CN',
        tooltip: {
          show: false,
        },
        // 不开启缩放和平移
        roam: false,
        // 视角缩放比例稍大些
        zoom: 1.02,
        top: pxToRem(30),
        left: pxToRem(240),
        // 视野范围，模拟透视角度
        aspectScale: 1.2,
        label: {
          normal: {
            show: false,
          },
        },
        itemStyle: {
          normal: {
            // areaColor: '#CDDCEF',
            areaColor: '#082243',
            borderColor: '#247094',
            borderWidth: 2,
            borderType: 'solid',
            opacity: 0.6,
            shadowBlur: 1,
            shadowColor: '#082243',
            shadowOffsetX: 5,
            shadowOffsetY: 5,
          },
          emphasis: {
            areaColor: '#082243',
          },
        },
      },
      // 作为最上面的交互层
      series: [
        {
          type: 'map',
          geoIndex: 1,
          aspectScale: 1.2,
          map: 'CN',
          roam: false,
          nameProperty: 'name',
          selectMode: 'single',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: true,
              fontSize: '14',
              color: 'white',
            },
          },
          itemStyle: {
            normal: {
              opacity: 0.6,
              areaColor: '#082243',
              borderColor: '#39B3ED',
              borderWidth: 2,
              shadowBlur: 2,
              shadowColor: 'black',
              shadowOffsetX: 5,
              shadowOffsetY: 5,
            },
            emphasis: {
              areaColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    // 0% 处的颜色
                    offset: 0,
                    color: '#39B3ED',
                  },
                  {
                    // 100% 处的颜色
                    offset: 1,
                    color: '#39B3ED',
                  },
                ],
                // 缺省为 false
                globalCoord: false,
              },
            },
          },
        },
      ],
    })
  })
  return (
    <div
      ref={chartRef}
      className="map"
      style={{
        transform: `
              translate(${pxToRem(0)}px,${pxToRem(-50)}px)
              `,
      }}
    />
  )
}
export default MapChart
