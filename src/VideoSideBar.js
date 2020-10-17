import React ,{useState} from 'react';
import './VideoSideBar.css';
import { FavoriteOutlined,FavoriteBorder, Message,Share } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function VideoSideBar({likes,shares,messages}){
    const [liked,setLiked]=useState(false);

    return(
        <div className="VideoSideBar">
            <div className="VideoSideBar__button">
                {liked? (<FavoriteIcon fontSize="large" onClick={(e)=>setLiked(false)}/>): <FavoriteBorderIcon fontSize="large" onClick={(e)=>setLiked(true)}/>}
            <p>{liked?likes+1:likes}</p>
            </div>
            <div className="VideoSideBar__button">
            <Message fontSize="large"/>
            <p>{messages}</p>
            </div>
            <div className="VideoSideBar__button">
            <Share fontSize="large"/>
            <p>{shares}</p>
            </div>
        
        </div>
    )
}

export default VideoSideBar;