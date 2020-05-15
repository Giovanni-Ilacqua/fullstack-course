import React, { useState } from 'react'

const Filter = ({ newSearch, searchHandler }) => {
 
    return (
        <div>
            Filter shown with <input value={newSearch} onChange={searchHandler} />
        </div>
    )
}


export default Filter