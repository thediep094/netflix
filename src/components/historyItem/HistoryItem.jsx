import './historyItem.scss'
import {history} from '../../object/history'
const HistoryItem = () => {
  return (
    <div className="historyItem">
        <div className="container"> 
            <h1>History Of You</h1>
            <h2>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</h2>
            <div className="historyItem__container">
                {history.map((history,index) => {
                    return (
                        <div className="historyItem__item" key={index}>
                            <img src={history.imgUrl} alt="" />
                            <div className="historyItem__item-info">
                                <span>{history.name}</span>
                                <span>{history.time}</span>
                            </div>
                            
                        </div>
                        )})}
                </div>
        </div>
    </div>
  )
}

export default HistoryItem