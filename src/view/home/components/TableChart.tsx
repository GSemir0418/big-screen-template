import ChartWrapper from './ChartWrapper'
const TableChart = () => {
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
      </>
    </ChartWrapper>
  )
}
export default TableChart
