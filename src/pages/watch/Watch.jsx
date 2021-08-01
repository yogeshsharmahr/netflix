import "./watch.scss"
import {ArrowBack} from '@material-ui/icons';
import video from '../../videos/1541905617.mp4'
import { useHistory } from "react-router-dom";



const Watch = () => {
    let history = useHistory();
    return (
        <div className="watch">
            <div className="back"  onClick={history.goBack} >
            <ArrowBack />
            Back
            </div>

            <video src="" className="video" autoPlay pregress controls src={video}/>
        </div>
    )
}

export default Watch
