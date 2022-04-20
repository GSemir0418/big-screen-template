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
      width: `${pxToRem(480)}rem`,
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: 'map',
          mapType: 'CN',
          data: [{ name: '赣州市', value: 1 }],
          label: { show: false, color: 'white' },
          itemStyle: {
            opacity: 0.6,
            areaColor: '#082243',
            shadowBlur: 1,
            shadowColor: '#39B3ED',
            shadowOffsetX: 10,
            shadowOffsetY: -1,
            borderColor: '#39B3ED',
            emphasis: {
              label: { color: 'white' },
              areaColor: '#59162D',
            },
          },
        },
      ],
    })
  })
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="col1">
          <div className="chart1"></div>
          <div className="chart2"></div>
          <div className="chart3"></div>
          <div className="chart4"></div>
        </section>
        <section className="col2">
          <div
            ref={chartRef}
            style={{
              height: '100%',
              transform: `rotate(60deg) rotateY(50deg) translate(${pxToRem(
                -200,
              )}px,${pxToRem(-90)}px)`,
            }}
          />
        </section>
        <section className="col3"></section>
      </main>
    </div>
  )
}
export default Home
