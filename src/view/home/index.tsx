import './home.less'
import headerBg from '../../../assets/img/header.png'
import * as echarts from 'echarts'
import { useRef, useEffect } from 'react'
import JiangXi from '../../../assets/jiangxi.json'
import { pxToRem } from '../../utils/px'
import titleIcon from '../../../assets/img/titleIcon.png'
import useEcharts from '../../hooks/useEcharts'
import truck from '../../../assets/img/truck.png'
import lineUp from '../../../assets/img/lineUp.png'
import lineDown from '../../../assets/img/lineDown.png'
import borderUp from '../../../assets/img/borderUp.png'
import borderDown from '../../../assets/img/borderDown.png'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighCharts3d from 'highcharts/highcharts-3d'
HighCharts3d(Highcharts)
const Home = () => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const chart1Ref = useRef<HTMLDivElement | null>(null)
  const chart2Ref = useRef<HTMLDivElement | null>(null)
  const chart3Ref = useRef<HTMLDivElement | null>(null)

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
  const options3d = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 65,
      },
      backgroundColor: 'transparent',
    },
    title: {
      text: undefined,
    },
    // 禁用版权信息
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: 200,
        depth: 60,
        opacity: 0.8,
        slicedOffset: 20,
      },
    },
    series: [
      {
        type: 'pie',
        name: '货物金额',
        dataLabels: { enabled: false },
        data: [
          {
            name: 'test1',
            y: 30,
            h: 30,
            sliced: true,
            color: 'red',
          },
          {
            name: 'others',
            y: 70,
            h: 90,
            color: 'white',
          },
        ],
      },
    ],
  }
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="col1">
          <div className="chart">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Chart1 Title
            </div>
            <div ref={chart1Ref} style={{ height: '100%' }} />
          </div>
          <div className="chart">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Chart2 Title
            </div>
            <div ref={chart2Ref} style={{ height: '100%' }} />
          </div>
          <div className="chart">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Chart3 Title
            </div>
            <div ref={chart3Ref} style={{ height: '100%' }} />
          </div>
          <div className="chart4">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Chart4 Title
            </div>
            <img className="truck" src={truck} alt="" />
            <img className="line-up" src={lineUp} alt="" />
            <img className="line-down" src={lineDown} alt="" />
            <img className="border-up" src={borderUp} alt="" />
            <img className="border-down" src={borderDown} alt="" />
            <div className="data-1">数据1</div>
            <div className="data-2">数据2</div>
          </div>
        </section>
        <section className="col2">
          <div
            ref={chartRef}
            className="map"
            style={{
              transform: `
              translate(${pxToRem(0)}px,${pxToRem(-50)}px)
              `,
            }}
          />
          <div className="table">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Table Title
            </div>
            <div className="table-header">
              <span className="table-header-content">类型</span>
              <span className="table-header-content">计划开始时间</span>
              <span className="table-header-content">计划结束时间</span>
              <span className="table-header-content">发布人</span>
              <span className="table-header-content">接受人</span>
              <span className="table-header-content">状态</span>
            </div>
            <div className="table-body">
              <table>
                <tbody>
                  <tr>
                    <td>生产计划</td>
                    <td>2022-02</td>
                    <td>2022-04</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>生产计划</td>
                    <td>2022-02</td>
                    <td>2022-04</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>生产计划</td>
                    <td>2022-02</td>
                    <td>2022-04</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                  </tr>
                  <tr>
                    <td>生产计划</td>
                    <td>2022-02</td>
                    <td>2022-04</td>
                    <td>123</td>
                    <td>123</td>
                    <td>123</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="footer">
            <span className="footer-1">页面1</span>
            <span className="footer-2">页面2</span>
            <span className="footer-home">首页</span>
            <span className="footer-3">页面3</span>
            <span className="footer-4">页面4</span>
          </div>
        </section>
        <section className="col3">
          <div className="chart">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Chart5 Title
            </div>
            <div className="chart5-warpper">
              <div className="chart5-1">
                <div className="chartIcon" />
                <div className="chart5-1-data-wrapper">
                  <div style={{ fontSize: `${pxToRem(14)}px`, color: 'white' }}>
                    数据指标
                  </div>
                  <div
                    style={{
                      fontFamily: 'Impact',
                      fontSize: `${pxToRem(18)}px`,
                      color: '#4CF5FA',
                    }}
                  >
                    125632
                  </div>
                  <div
                    style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}
                  >
                    环比 +25%
                  </div>
                </div>
              </div>
              <div className="chart5-2">
                <div className="chartIcon" />
                <div className="chart5-1-data-wrapper">
                  <div style={{ fontSize: `${pxToRem(14)}px`, color: 'white' }}>
                    数据指标
                  </div>
                  <div
                    style={{
                      fontFamily: 'Impact',
                      fontSize: `${pxToRem(18)}px`,
                      color: '#4CF5FA',
                    }}
                  >
                    125632
                  </div>
                  <div
                    style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}
                  >
                    环比 +25%
                  </div>
                </div>
              </div>
              <div className="chart5-3">
                <div className="chartIcon" />
                <div className="chart5-1-data-wrapper">
                  <div style={{ fontSize: `${pxToRem(14)}px`, color: 'white' }}>
                    数据指标
                  </div>
                  <div
                    style={{
                      fontFamily: 'Impact',
                      fontSize: `${pxToRem(18)}px`,
                      color: '#4CF5FA',
                    }}
                  >
                    125632
                  </div>
                  <div
                    style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}
                  >
                    环比 +25%
                  </div>
                </div>
              </div>
              <div className="chart5-4">
                <div className="chartIcon" />
                <div className="chart5-1-data-wrapper">
                  <div style={{ fontSize: `${pxToRem(14)}px`, color: 'white' }}>
                    数据指标
                  </div>
                  <div
                    style={{
                      fontFamily: 'Impact',
                      fontSize: `${pxToRem(18)}px`,
                      color: '#4CF5FA',
                    }}
                  >
                    125632
                  </div>
                  <div
                    style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}
                  >
                    环比 +25%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chart">
            <div className="chart-title">
              <img className="chart-title-icon" src={titleIcon} />
              Chart6 Title
            </div>
            {/* <div
              className="chart-pie3d"
              style={{
                background: 'lightblue',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <HighchartsReact highcharts={Highcharts} options={options3d} />
            </div> */}
          </div>
          <div className="chart"></div>
          <div className="chart4"></div>
        </section>
      </main>
    </div>
  )
}
export default Home
