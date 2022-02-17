import './moviesItem.scss'
import {movies} from '../../object/movies'
const MoviesItem = () => {
  return (
    <div className="moviesItem">
        <div className="container">
            <h1>TV Shows</h1>
            <h2>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</h2>
            <div className="moviesItem__container"> 
                {movies.map((movies,index) => { 
                    return ( <div className="moviesItem__item" key={index}>
                        <img src={movies.imgUrl} alt="" />
                        <span>{movies.name}</span>
                    </div>
                    )})}
            </div>
        </div>
    </div>
  )
}

export default MoviesItem