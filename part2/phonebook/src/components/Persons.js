import React from 'react'
import personsService from '../services/persons'

const Persons = ({ personsList, setPersonsList}) => {
  
  const deletePerson = (id) => {
    const p = personsList.find(n => n.id === id)  
    if (window.confirm(`Delete ${p.name}?`)) {
      personsService
      .deletePerson(id)
        .then(setPersonsList(personsList.filter(p => p.id !== id)))
      // personsService
      // .deletePerson(id)
      //   .then(() => {
      //     setPersonsList(personsList.filter(p => p.id !== id))
      //   })
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