import React from 'react'
import personsService from '../services/persons'

const Persons = ({ personsList, setPersonsList, setMessage, setStyle}) => {
  
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
        {personsList.map(person =>
          <li key={person.name}>{person.name} {person.number} &nbsp;
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </li>)}
      </ul>
    </div>
  )
}

export default Persons