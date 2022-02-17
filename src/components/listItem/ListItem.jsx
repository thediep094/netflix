import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import { useState } from "react"
import "./listItem.scss"

const ListItem = ({index,vidUrl,imgUrl}) => {
  const [isHovered,setIsHovered] = useState(false)
  const trailer = {vidUrl}
  return (
    <div className="listItem" 
      style={{left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}>
        <img src={imgUrl} alt="" />
        
        {isHovered &&(
        <>
          <video src={vidUrl} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.
            </div>
            <div className="genre">Action</div>
          </div>
      </>        
        )}

    </div>
  )
}

export default ListItem