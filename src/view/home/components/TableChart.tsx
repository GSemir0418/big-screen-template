import ChartWrapper from './ChartWrapper'
import { useState, useMemo, useRef, useEffect } from 'react'
const TableChart = () => {
  const [isScrolle, setIsScrolle] = useState<boolean>(true)
  // 滚动速度，值越小，滚动越快
  const speed = 50
  const wrapper = useRef<HTMLTableElement | any>(null)
  const childDom1 = useRef<HTMLTableSectionElement | any>(null)
  const childDom2 = useRef<any>(null)
  const timer = useRef<any>()
  // 开始滚动
  useEffect(() => {
    if (wrapper.current && childDom1.current) {
      // 多拷贝一层，让它无缝滚动
      childDom2.current.innerHTML = childDom1.current.innerHTML
      if (isScrolle) {
        timer.current = setInterval(
          () =>
            /* eslint-disable */
            wrapper.current.scrollTop >= childDom1.current.scrollHeight
              ? (wrapper.current.scrollTop = 0)
              : wrapper.current.scrollTop++,
          /* eslint-disable */
          speed,
        )
      }
    }
    return () => {
      clearInterval(timer.current)
    }
  }, [isScrolle, wrapper, childDom1, childDom2])

  const hoverHandler = (flag: boolean) => setIsScrolle(flag)
  const fakeData = useMemo(() => {
    const result = []
    for (let i = 0; i <= 20; i++) {
      result.push({
        id: i,
        plan: '生产计划',
        time1: `2022-0${i}`,
        time2: '2022-04',
        other1: 123,
        other2: 123,
        other3: 123,
      })
    }
    return result
  }, [])
  return (
    <ChartWrapper chartClassName="table" title="Table Title">
      <>
        <div className="table-header">
          <span className="table-header-content">类型</span>
          <span className="table-header-content">计划开始时间</span>
          <span className="table-header-content">计划结束时间</span>
          <span className="table-header-content">发布人</span>
          <span className="table-header-content">接受人</span>
          <span className="table-header-content">状态</span>
        </div>
        <div className="table-body">
          <table ref={wrapper}>
            <tbody
              className="child"
              ref={childDom1}
              onMouseOver={() => {
                hoverHandler(false)
              }}
              onMouseLeave={() => {
                hoverHandler(true)
              }}
            >
              {fakeData.map(i => {
                return (
                  <tr key={i.id}>
                    <td>{i.plan}</td>
                    <td>{i.time1}</td>
                    <td>{i.time2}</td>
                    <td>{i.other1}</td>
                    <td>{i.other2}</td>
                    <td>{i.other3}</td>
                  </tr>
                )
              })}
            </tbody>
            <tbody className="child" ref={childDom2}></tbody>
          </table>
        </div>
      </>
    </ChartWrapper>
  )
}
export default TableChart
