import truck from '../../../../assets/img/truck.png'
import lineUp from '../../../../assets/img/lineUp.png'
import lineDown from '../../../../assets/img/lineDown.png'
import borderUp from '../../../../assets/img/borderUp.png'
import borderDown from '../../../../assets/img/borderDown.png'
import ChartWrapper from './ChartWrapper'
const Chart4 = () => {
  return (
    <ChartWrapper chartClassName="chart4" title="Chart4 Title">
      <>
        <img className="truck" src={truck} alt="" />
        <img className="line-up" src={lineUp} alt="" />
        <img className="line-down" src={lineDown} alt="" />
        <img className="border-up" src={borderUp} alt="" />
        <img className="border-down" src={borderDown} alt="" />
        <div className="data-1">数据1</div>
        <div className="data-2">数据2</div>
      </>
    </ChartWrapper>
  )
}
export default Chart4
