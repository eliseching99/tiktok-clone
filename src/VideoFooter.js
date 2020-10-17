import React from "react";
import "./VideoFooter.css";
import { HomeIcon, ThreeDRotation } from "@material-ui/icons";
import { HomeOutlined, MusicNote } from "@material-ui/icons";
import Ticker from "react-ticker";
function VideoFooter({channel,description,song}) {
  return (

    <div className="videoFooter">

      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__logo"
        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/ae5faa4dea107085aa46ff8d8e347fb9.jpeg?x-expires=1602853200&x-signature=aOb%2B%2BvWMk%2BNSLtwguMIMKWBV9k8%3D"
      ></img>
    </div>
  );
}
export default VideoFooter;
