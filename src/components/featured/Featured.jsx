import { Add, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";

export default function Feature({type}) {
  return (
    <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select> 
          </div>
        )}

        <img src="https://images6.alphacoders.com/913/913378.jpg" alt="" />
        <div className="info">
          <img src="https://www.pngplay.com/wp-content/uploads/13/Money-Heist-Logo-PNG-Clipart-Background.png" alt="" />
          <span className="desc">
          An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.
          </span>

          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="add">
              <Add />
              <span>My List</span>

            </button>
          </div>
        </div>
    
    </div>
  )
}
