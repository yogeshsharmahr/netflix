import './list.scss';
import {ArrowBackIos,ArrowForwardIos} from '@material-ui/icons';
import Listitem from '../listitem/Listitem';
import { useRef ,useState} from 'react';



const List = ({title,data}) => {


    const [slideNumber ,setSlideNumber] =useState(0);
    const [isMoved ,setIsMoved] =useState(false);
    const listRef = useRef()
   
    const handleClick =(direction) =>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -50;
        if(direction ==='left' && slideNumber >0 ){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform=`translateX(${230 + distance}px)`
        }
        if(direction ==='right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform=`translateX(${-230 + distance}px)`
        }
       

    }
    return (
        <div className="list">
            <span className="listTitle">
               {title}
            </span>
            <div className="wrapper">
                <ArrowBackIos className="sliderArrow left" onClick={()=>handleClick('left')} style={{display:!isMoved && "none"}}/>
                <div className="container" ref={listRef}>

                    {
                        data.map((item,i)=>

                        <Listitem index={0} data={item} key={i}/>
                        )
                    }
              

                </div>
                <ArrowForwardIos className="sliderArrow right"onClick={()=>handleClick('right')}/>

            </div>
            
        </div>
    )
}

export default List
