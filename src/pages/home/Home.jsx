import List from '../../components/List/List'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import './home.scss'
import List1 from '../../components/List/List1'
import List2 from '../../components/List/List2'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List name="newRealease"/>
      <List1 name="continueWatch"/> 
      <List2 name="trendingNow"/> 
    </div>

  )
}

export default Home