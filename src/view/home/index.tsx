import './home.less'
import headerBg from '../../../assets/img/header.png'
import Chart1 from './components/Chart1'
import Chart2 from './components/Chart2'
import Chart3 from './components/Chart3'
import Chart4 from './components/Chart4'
import MapChart from './components/MapChart'
import TableChart from './components/TableChart'
import Footer from './components/Footer'
import Chart5 from './components/Chart5'
import Chart6 from './components/Chart6'
import Chart7 from './components/Chart7'
import Chart8 from './components/Chart8'

const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }} />
      <main>
        <section className="col1">
          <Chart1 />
          <Chart2 />
          <Chart3 />
          <Chart4 />
        </section>
        <section className="col2">
          <MapChart />
          <TableChart />
          <Footer />
        </section>
        <section className="col3">
          <Chart5 />
          <Chart6 />
          <Chart7 />
          <Chart8 />
        </section>
      </main>
    </div>
  )
}
export default Home
