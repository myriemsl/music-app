import React from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";

const Player = ({ setSongs, songInfo,setSongInfo,currentSong, isPlaying, setIsPlaying,audioRef,songs,setCurrentSong }) => {
const activeSongHandler=(nextOrPrev)=>{
  const newSongs=songs.map((song)=>{
    if(song.id===nextOrPrev.id){
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


setSongs(newSongs);


};
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };



  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

    const skipTrackHandler= async (direction)=>{
      let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
      if(direction==="forward"){
       await setCurrentSong(songs[(currentIndex+1)%songs.length]);
       activeSongHandler(songs[(currentIndex+1)%songs.length]);
      }else if(direction==="back"){
        if(currentIndex<=0){

          await  setCurrentSong(songs[(songs.length-1)]);
          activeSongHandler(songs[(songs.length-1)]);

        }else{

          await  setCurrentSong(songs[(currentIndex-1)%songs.length]);
          activeSongHandler(songs[(currentIndex-1)%songs.length]);
          
        }

      }
      if (isPlaying) {
     audioRef.current.play();
      }
    };
 
  return (
    <div className="player">
      
      <div className="time">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          value={songInfo.currentTime}
          min={0}
          max={songInfo.duration || 0}
          onChange={dragHandler}
        />
        <p>{songInfo.duration? getTime(songInfo.duration):"0:00"}</p>
      </div>
      <div className="playsong">
        <MdOutlineSkipPrevious 
        onClick={()=>skipTrackHandler("back")} 
        className="skip-back"
        size="2x"/>
        <span
          onClick={playSongHandler}
          className="play"
          size="2x">{isPlaying ? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}</span>
        <MdOutlineSkipNext
          onClick={()=>skipTrackHandler("forward")}
          className="skip-forward"
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;