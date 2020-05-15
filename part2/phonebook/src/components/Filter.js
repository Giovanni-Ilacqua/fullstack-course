import React, { useState } from 'react'

const Filter = ({ newSearch, setNewSearch}) => {
    
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
    }
 
    return (
        <div>
            Filter shown with <input value={newSearch} onChange={handleSearchChange} />

        </div>
    )
}


export default Filter