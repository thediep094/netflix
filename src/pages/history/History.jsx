import HistoryItem from '../../components/historyItem/HistoryItem'
import Navbar from '../../components/navbar/Navbar'
import './history.scss'
const History = () => {
  return (
    <div className="history">
        <Navbar />
        <HistoryItem />
    </div>
  )
}

export default History