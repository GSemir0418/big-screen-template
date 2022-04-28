import ChartWrapper from './ChartWrapper'
import { pxToRem } from '../../../utils/px'
const Chart5 = () => {
  return (
    <ChartWrapper chartClassName="chart" title="Chart5 Title">
      <>
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
              <div style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}>
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
              <div style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}>
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
              <div style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}>
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
              <div style={{ fontSize: `${pxToRem(12)}px`, color: '#FF7173' }}>
                环比 +25%
              </div>
            </div>
          </div>
        </div>
      </>
    </ChartWrapper>
  )
}
export default Chart5
