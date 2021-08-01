import React, {useState} from 'react';

import './navbar.scss'
import NetFlixLogo  from '../../images/netflixlogo.png'
import ProfileImage from '../../images/user-pic.png'


import {Search,Notifications,ArrowDropDown} from '@material-ui/icons';

const NavBar = () => {
    const [isScrolled,setIsScrolled]= useState(false)
    const [isOpened, setIsOpened] = useState(false);
window.onscroll= ()=>{
    setIsScrolled(window.pageYOffset ===0 ? false:true);
    return ()=>(window.onscroll =null);
};
const toggle = () =>{
    
    setIsOpened(wasOpened => !wasOpened);
}

    return (
        <div className={isScrolled ?"navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img src={NetFlixLogo} alt="netflixLogo" className="netflixLogo" />
                    <span>HomePage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Polular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                {isOpened && (<input type="text" className="serchbox" placeholder="Search Netflix..." />)}
                    <Search className="icon"  onClick={toggle}/>
                    <span className="kidsMenu">Kids</span>
                    <Notifications className="icon"/>
                    <img src={ProfileImage} alt="ProfileImage" className="profileImg" />
                    <div className="profile">
                    <ArrowDropDown  className="icon"/>
                    <div className="options">
                        <span>Setting</span>
                        <span>logout</span>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default NavBar
