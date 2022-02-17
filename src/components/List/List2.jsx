import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useRef, useState } from 'react'
import ListItem from '../listItem/ListItem'
import './list.scss'
import {trendingNow} from '../../object/trendingNow'
const List2 = ({name}) => {
    const [list,setList] = useState(trendingNow)
    const [slideNumber, setSlideNumber] = useState(0)
    const listRef = useRef()
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === 'left' && slideNumber > 0) {
            listRef.current.style.transform = `translateX(${230+ distance}px)`
            setSlideNumber(slideNumber - 1)
        }
        if (direction === 'right' && slideNumber < 3) {
            listRef.current.style.transform = `translateX(${-230+ distance}px)`
            setSlideNumber(slideNumber + 1)
        }
    }
  return (
    <div className="list">
        <span className="listTitle">Trending Now</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left'
            onClick={()=>handleClick("left")}
            />
            <div className="container" ref={listRef}>
                {list.map((item,index)=>(
                    <ListItem 
                    key={index} 
                    index={index} 
                    vidUrl={item.vidUrl} 
                    imgUrl={item.imgUrl}/>
                ))}
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right'
            onClick={()=>handleClick("right")}
            />
        </div>
    </div>
  )
}

export default List2