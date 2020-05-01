import React, { useState } from 'react'

const Filter = ({personsList}) => {
    const [newSearch, setNewSearch] = useState('')

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value)
    }

    const filterContacts = (contact) => {
        if(contact.name.toLowerCase().includes(newSearch.toLowerCase())){
            return true
        }
        return false
    }

    console.log(personsList);
    
    return (
        <div>
            Filter shown with <input value={newSearch} onChange={handleSearchChange} />

            {/* <ul>
                {personsList.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())).map(filteredName => (
                    <li key={filteredName.name}>{filteredName.name} {filteredName.number}</li>
                ))}
            </ul> */}

            <ul>
                {personsList.filter(filterContacts).map(filteredName => (
                    <li key={filteredName.name}>{filteredName.name} {filteredName.number}</li>
                ))}
            </ul>
        </div>
    )
}


export default Filter