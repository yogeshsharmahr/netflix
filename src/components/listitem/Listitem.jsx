
import { Add, ThumbDownAltOutlined, ThumbUpAltOutlined,PlayArrow } from '@material-ui/icons';
import { useState } from 'react';
import {Link} from 'react-router-dom'


import './listitem.scss';


const Listitem = ({data}) => {

    const {image ,video,index,type,likecount,timestamp,releasedYear,description}=data;
   const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="listitem"
        style={{left:isHovered && index * 255 -50 + index *2.5}}
         onMouseEnter={()=>setIsHovered(true)} 
         onMouseLeave={()=>setIsHovered(false)}>
           <img src={image} alt="" />
         
           {isHovered && (
               <>
          <video src={video} autoPlay={true} loop />
      
            <div className="iteminfo">
                <div className="actionIcons">
                    <Link to="/full-length">
                    <PlayArrow className="topIcons"/>
                    </Link>
                   
                    <Add className="topIcons"/>
                   <ThumbUpAltOutlined className="topIcons"/>
                    <ThumbDownAltOutlined className="topIcons"/>
                </div>
                <div className="itemInfoTop">
                    <span>{timestamp}</span>
                    <span className="limit">{likecount}</span>
                    <span>{releasedYear}</span>
                </div>
                <div className="desc">
                {description}
                </div>
                <div className="genre">{type}</div>
            </div>
           
            </>
           )}

        </div>
    )
}

export default Listitem
