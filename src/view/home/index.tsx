import './home.less'
import headerBg from '../../../assets/img/header.png'
const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }}>标题</header>
      <main>
        <section className="col1"></section>
        <section className="col2"></section>
        <section className="col3"></section>
      </main>
    </div>
  )
}
export default Home
