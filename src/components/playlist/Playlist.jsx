import React from 'react'
import './Playlist.css'
import Tracklist from '../tracklist/Tracklist.jsx'

function Playlist({playListTracks, onRemove, playListName,updateName,onSave}) {

  function handleChange(event){
    updateName(event.target.value)
  }

  return (
    <div className="Playlist">
      <input onChange = {handleChange} value={playListName}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist 
      searchResults = {playListTracks} 
      onRemoval = {true}
      onRemove = {onRemove}
      />
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
