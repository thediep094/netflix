import './tvShowItem.scss'
import {tvShows} from '../../object/tvShows'
const TvShowItem = () => {
  return (
    <div className="tvShowItem">
        <div className="container">
            <h1>TV Shows</h1>
            <h2>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</h2>
            <div className="tvShowItem__container"> 
                {tvShows.map((tvShows,index) => { 
                    return ( <div className="tvShowItem__item" key={index}>
                        <img src={tvShows.imgUrl} alt="" />
                        <span>{tvShows.name}</span>
                    </div>
                    )})}
            </div>
        </div>
    </div>
  )
}

export default TvShowItem