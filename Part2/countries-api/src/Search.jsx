import React from 'react'

function Search({searchTerm, setSearchTerm}) 
{
  console.log(searchTerm)
  return (
    <div>
    <form>
        <p>Type a country name to return results</p>
        <input placeholder = {searchTerm} onChange = {(e)=> {setSearchTerm(e.target.value)}}></input>
    </form>
    </div>
  )
}

export default Search