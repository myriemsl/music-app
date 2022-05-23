import React, { useState, useRef } from 'react';
import data from '../Components/data';
import Navbar from '../Components/Navbar';
import Playlist from '../Components/Playlist';
import Song from '../Components/Song';
import Player from '../Components/Player';
import '../Style/mpStyle.css';


const Dashboard = () => {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  
 
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
 

  const audioRef = useRef(null);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  const songEndHandler=async(e)=>{
    let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
    let nextIndex=songs.findIndex((song)=>song.id===currentSong.id)+1;
    
     await setCurrentSong(songs[(currentIndex+1)%songs.length]);
     const newSongs=await songs.map((song,index)=>{
      if(index===nextIndex){
          return{
              ...song, 
              active:true,
          };
      }else{
              return{
                  ...song,
                  active:false,
              };
          }
      
  }); 
 await setSongs(newSongs);
     if(isPlaying){
       audioRef.current.play();
     }
     
  };

  return (
    <div  className="musicplayer playlistactive">
         <Navbar  />
          <Playlist
        setSongs={setSongs}
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <div className='playing'>
         <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
      setSongs={setSongs}
      songs={songs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        timeUpdateHandler={timeUpdateHandler}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
      />
        </div>
   
      
       <audio
      onEnded={songEndHandler}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
     </div>
  )
}

export default Dashboard;