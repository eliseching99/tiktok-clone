import React, {useRef,useState} from "react"
import "./Video.css"
import VideoFooter from './VideoFooter'
import ReactPlayer from "react-player";
import VideoSideBar from "./VideoSideBar"
function Video({url,channel, description, song, likes, message, shares}){
    const[play,setPlaying]=useState(false);
    const videoRef=useRef(null);
    const onVideoPress=()=>{
        if (play){
            videoRef.current.pause();
            setPlaying(false);

        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
        }
    
    return (
        <div className="video">
            {/* <img classname="video__logo" src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-441371124b15403175a080da9df31116.png"></img> */}
            <video 
            className="video__player" 
            
            loop
            autoPlay muted 
            controls
            onclick={onVideoPress}
            ref={videoRef}
            src={url}>
          
            </video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSideBar likes={likes} messages={message} shares={shares}/>
        </div>

    )
}
export default Video;
