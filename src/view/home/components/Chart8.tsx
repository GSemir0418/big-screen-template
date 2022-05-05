import ChartWrapper from './ChartWrapper'
import { useCountUp } from 'react-countup'
const Chart8 = () => {
  useCountUp({ ref: 'counter1', end: 1234567, duration: 4 })
  useCountUp({ ref: 'counter2', end: 1234, duration: 3 })
  return (
    <ChartWrapper chartClassName="chart4" title="Chart7 Title">
      <>
        <div id="counter1" />
        <div id="counter2" />
      </>
    </ChartWrapper>
  )
}
export default Chart8
