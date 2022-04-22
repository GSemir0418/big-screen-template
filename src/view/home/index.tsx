import './home.less'
import headerBg from '../../../assets/img/header.png'
import * as echarts from 'echarts'
import { useRef, useEffect } from 'react'
import JiangXi from '../../../assets/jiangxi.json'
import { pxToRem } from '../../utils/px'
const Home = () => {
  const chartRef = useRef(null)
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
        top: pxToRem(150),
        left: pxToRem(250),
        // 视野范围，模拟透视角度
        aspectScale: 1,
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
            borderWidth: 1,
            borderType: 'solid',
            opacity: 0.7,
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
          aspectScale: 1,
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
              opacity: 0.7,
              areaColor: '#082243',
              borderColor: '#39B3ED',
              borderWidth: '1',
              shadowBlur: 1,
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
      // series: [
      //   {
      //     type: 'map',
      //     mapType: 'CN',
      //     data: [{ name: '赣州市', value: 1 }],
      //     label: { show: false, color: 'white' },
      //     itemStyle: {
      //       opacity: 0.5,
      //       areaColor: '#082243',
      //       shadowBlur: 1,
      //       shadowColor: '#39B3ED',
      //       shadowOffsetX: 10,
      //       shadowOffsetY: -1,
      //       borderColor: '#39B3ED',
      //       emphasis: {
      //         label: { color: 'white', fontSize: '1rem' },
      //         areaColor: '#59162D',
      //       },
      //     },
      //   },
      // ],
    })
  })
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="col1">
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart4"></div>
        </section>
        <section className="col2">
          <div
            ref={chartRef}
            style={{
              height: '100%',
              transform: `
              translate(${pxToRem(0)}px,${pxToRem(-180)}px)
              `,
              // transform: `
              // rotate(30deg)
              //   rotate(70deg)
              //   rotateY(50deg)
              //   translate(${pxToRem(-350)}px,${pxToRem(-90)}px)
              // `,
            }}
          />
        </section>
        <section className="col3">
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart"></div>
          <div className="chart4"></div>
        </section>
      </main>
    </div>
  )
}
export default Home
