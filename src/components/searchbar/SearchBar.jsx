import React from 'react'
import "./SearchBar.css"
function SearchBar({onSearch,updateSearchTerm}) {

  function handleSearch(event){
    onSearch();
  }

  function handleSearchChange(event){
    updateSearchTerm(event.target.value)
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist!" onChange={handleSearchChange} />
      <button className="SearchButton" onClick={handleSearch}>SEARCH SPOTIFY</button>
    </div>
  )
}

export default SearchBar