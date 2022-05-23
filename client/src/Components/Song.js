import React, { useState } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const Song=({currentSong,isPlaying})=>{

  const [fav, setFav] = useState(true);


    return(
        <div className="song">
          <img src={currentSong.cover} alt={currentSong.name} className={`${isPlaying?"rotate-song-img":""}`} ></img>
          <div>
            <h6>{currentSong.name}</h6>
            <h6>{currentSong.artist}</h6>
          </div>
          {fav ? <MdOutlineFavoriteBorder onClick={() => setFav(false)}/> : <MdOutlineFavorite onClick={() => setFav(true)}/>}
        </div>

 );
}

export default Song;