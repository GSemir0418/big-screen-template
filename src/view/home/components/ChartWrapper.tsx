import { ReactElement } from 'react'
import titleIcon from '../../../../assets/img/titleIcon.png'
const ChartWrapper = ({
  chartClassName,
  title,
  children,
}: {
  chartClassName: string
  title: string
  children: ReactElement
}) => {
  return (
    <div className={chartClassName}>
      <div className="chart-title">
        <img className="chart-title-icon" src={titleIcon} />
        {title}
      </div>
      {children}
    </div>
  )
}
export default ChartWrapper
