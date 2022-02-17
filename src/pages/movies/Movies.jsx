import './movies.scss'
import Navbar from '../../components/navbar/Navbar'
import MoviesItem from '../../components/moviesItem/MoviesItem'
const Movies = () => {
  return (
    <div className="tvShow">
        <Navbar />
        <MoviesItem />
    </div>
  )
}

export default Movies