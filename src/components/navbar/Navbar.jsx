import React, { useState } from 'react'
import './navbar.scss'
import { ArrowDropDown, Notifications, Search} from '@material-ui/icons'
import { Link } from 'react-router-dom'
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isClickSearch, setIsClickSearch] = useState(false)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    const handleClickSeacrh = () => {
        setIsClickSearch(!isClickSearch)
    }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
                
                    <Link to="/" className='btn-page'><span>Homepage</span></Link>
                    <Link to="/tvshows" className='btn-page'><span>TV Shows</span></Link>
                    <Link to="/movies" className='btn-page'><span>Movies</span></Link>
                    <Link to="/history" className='btn-page'><span>History</span></Link>
                    <Link to="/mylist" className='btn-page'><span>My List</span></Link>
            </div>

            <div className="right">
                {isClickSearch ? <input type="text" placeholder='Search...' /> : null}
                <Search className='icon'onClick={handleClickSeacrh}/>
                <span>KIDS</span>
                <Notifications className='icon'/>
                <img src="https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/252394961_3042432632709473_8467044451955433907_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=L98bjj0BSLQAX8wUzEI&_nc_ht=scontent.fhph1-3.fna&oh=00_AT9umlfbyiDBnVP-cnV-RCscy64NztBxeQLyAgNTnf2I8w&oe=62108F3D" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span><Link to="/login" className='btn'>Log out</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar