import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighCharts3d from 'highcharts/highcharts-3d'
HighCharts3d(Highcharts)

const useHighCharts3d = (options: any) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />
}
export default useHighCharts3d
