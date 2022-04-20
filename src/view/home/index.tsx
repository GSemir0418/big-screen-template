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
      width: `${pxToRem(300)}rem`,
      xAxis: { show: false },
      yAxis: { show: false },
      series: [
        {
          type: 'map',
          mapType: 'CN',
          // data: [{ name: '江西省', value: 1 }],
          label: { show: false, color: 'white' },
          itemStyle: {
            areaColor: '#082243',
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
        <section className="col1"></section>
        <section className="col2">
          <div ref={chartRef} style={{ height: '50%' }} />
        </section>
        <section className="col3"></section>
      </main>
    </div>
  )
}
export default Home
