import React, { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import Video from "./video";
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot(
      (snapshot => (
        setVideos(snapshot.docs.map(doc => doc.data()))
    )))
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, message, shares }) => (
            <Video
              url={url}
              channel={channel}
              message={message}
              likes={likes}
              shares={shares}
              description={description}
              song={song}
            />
          )
        )}

        {/* <Video channel="bts_twt"url="https://v77.tiktokcdn.com/c0203aaab9c2ea783f3238bb2caeb0ea/5f8896ff/video/tos/alisg/tos-alisg-pve-0037c001/6a25ea5aa1db4cfc84732a0b069b1b87/?a=1180&br=2372&bt=1186&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20201015123728010115004044031634BE&lr=&mime_type=video_mp4&qs=0&rc=MzN5M2g7ZnI8dzMzMzgzM0ApPGY7NDhnaDw2Nzk0NDZmOGdnMDI1X3FoNXBfLS0tLzRzczUwNDVeYC9iYS0tYTYxLmE6Yw%3D%3D&vl=&vr=" description="suga x hobi ayy" song="BTS-Dynamite" likes={123}shares={433} message={321}/>
       <Video channel="jiminie_lover" url="https://v77.tiktokcdn.com/0e9d54f6254e18732bfde1723f0494ba/5f88c64c/video/n/v0102/96c75d7d3a3140f196b5ec6fa4e737be/?a=1180&br=3434&bt=1717&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202010151559140101151511080729DE39&lr=&mime_type=video_mp4&qs=4&rc=M2RlZXgzdjN3cDMzOjgzM0ApO2Q3aDk0NjtpNzQ2Zzs3OGctcmMuYmgyZTNfLS0xLzRzczRjNDExYDBhMTMyMGEwYV86Yw%3D%3D&vl=&vr=" description="Chicken NOODLE SOUP WUT" song="Jhope - Chicken Noodle Soup" likes={423}shares={566} message={455}/>
       <Video channel="hobi_0218" url="https://v77.tiktokcdn.com/88936f1db49650726e747ae96fa0fb49/5f88ca9b/video/tos/useast2a/tos-useast2a-ve-0068c001/bfeef56fb8684732b87fe1a2c39958ad/?a=1180&br=1376&bt=688&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=20201015161747010115153158132B634C&lr=&mime_type=video_mp4&qs=4&rc=M25nZmU3eTxmdjMzZjczM0ApNmY0ZDVoaWVlNzg1Zmk2ZmcvM2UyMTVlcWJfLS00MTZzczQyXi0vYy1gMy4zLjReXjY6Yw%3D%3D&vl=&vr=" description="Jimin Shirtless thats it" song="BTS-134340"likes={342}shares={876} message={888}/>
       <Video channel="bts_woof" url="https://v77.tiktokcdn.com/42168a6af7f9ffbdee261d9619fb6a7e/5f88cadf/video/tos/useast2a/tos-useast2a-pve-0068/9af0f2849ba44350b75e7b4e7ce928cd/?a=1180&br=1126&bt=563&cr=0&cs=0&cv=1&dr=0&ds=6&er=&l=202010151619010101150452210B2B3749&lr=&mime_type=video_mp4&qs=4&rc=Mzg4dW1mZzw1djMzNDczM0ApZDs8ZGhoNjw8N2UzOGc3Z2dvM2AwcGFwZmVfLS1iMTZzczYwYjQvYWBhXzYzNGE1MGI6Yw%3D%3D&vl=&vr=" description="cute vid of us" song="Jhope - Daydream" likes={876} shares={422} message={999}/> */}
      </div>
    </div>
  );
}

export default App;
