import React from 'react'
import personsService from '../services/persons'

const Persons = ({ personsList, setPersonsList, searchTerm, setMessage, setStyle }) => {

  const filterContacts = (contact) => {
    if (contact.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
    return false
  }

  const deletePerson = (id) => {
    const p = personsList.find(n => n.id === id)
    if (window.confirm(`Delete ${p.name}?`)) {
      personsService
        .deletePerson(id)
        .then(setPersonsList(personsList.filter(p => p.id !== id)))
        .catch(error => {
          setMessage(
            `${p.name} has already been removed from server!`
          )
          setStyle('error')
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  return (
    <div>

      <ul>
        {personsList.filter(filterContacts).map(filteredName => (
          <li key={filteredName.name}>{filteredName.name} {filteredName.number} &nbsp;
            <button onClick={() => deletePerson(filteredName.id)}>delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Persons