import './tvshows.scss'
import Navbar from '../../components/navbar/Navbar'
import TvShowItem from '../../components/tvshowItem/TvShowItem'
const TvShows = () => {
  return (
    <div className="tvShow">
        <Navbar />
        <TvShowItem />
    </div>
  )
}

export default TvShows