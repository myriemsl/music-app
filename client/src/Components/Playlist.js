import PlaylistSong from "./PlaylistSong";

const Playlist = ({ songs, setCurrentSong, audioRef, isPlaying,setSongs }) => {
  return (
    <div className="playlist activeplaylist">
      <div className="playlists">
      <h2>My Playlist</h2>
      <h6>Liked songs</h6>
      <h6>Favourites songs</h6>
      <h6>Add List</h6>
      </div>
    
      <div className="playlistsongs">
        {songs.map((song) => {
          return (
            <PlaylistSong
            setSongs={setSongs}
              isPlaying={isPlaying}
              audioRef={audioRef}
              song={song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              key={song.id}
              id={song.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;