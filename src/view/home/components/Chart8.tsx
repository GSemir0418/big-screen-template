import ChartWrapper from './ChartWrapper'
import CountUp, { useCountUp } from 'react-countup'
import React, { useState, useEffect, useRef } from 'react'
const Chart8 = () => {
  const currentNum = useRef(0)
  const newNum = useRef(0)
  // eslint-disable-next-line prefer-destructuring
  const setNum = useState(newNum.current)[1]
  useEffect(() => {
    const t = setInterval(() => {
      currentNum.current = newNum.current
      newNum.current += 111
      setNum(newNum.current)
    }, 2000)
    return () => {
      clearInterval(t)
      currentNum.current = 0
      newNum.current = 0
    }
  }, [])
  useCountUp({ ref: 'counter2', end: 1234, duration: 3 })
  return (
    <ChartWrapper chartClassName="chart4" title="Chart8 Title">
      <>
        <CountUp start={currentNum.current} end={newNum.current} duration={1}>
          {({ countUpRef }) => (
            <div
              id="counter1"
              ref={countUpRef as React.RefObject<HTMLDivElement>}
            />
          )}
        </CountUp>
        <div id="counter2" />
      </>
    </ChartWrapper>
  )
}
export default Chart8
