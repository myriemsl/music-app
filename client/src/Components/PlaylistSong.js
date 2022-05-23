import React from "react";

const PlaylistSong = ({ song,songs, setCurrentSong, audioRef, isPlaying, id,setSongs }) => {
  const songSelectHandler = async() => {
      await  setCurrentSong(song);

    const newSongs=songs.map((song)=>{
            if(song.id===id){
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
    if (isPlaying) {
      audioRef.current.play();
      
    }
  };

  return (
    <div className={`playlistsong ${song.active?"selected":""}`} onClick={songSelectHandler}>
         <img src={song.cover} alt={song.name}></img>
          <span>{song.name}</span>
          <span>{song.artist}</span>
          <span>Album</span>
    </div>
  );
};

export default PlaylistSong;