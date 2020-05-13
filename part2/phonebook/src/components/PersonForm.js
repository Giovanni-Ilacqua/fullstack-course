import React, { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({ personsList, setPersonsList }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (personsList.some(person => person.name === personObject.name) ||
      personsList.some(person => person.number === personObject.number)
    ) {
      let id = personsList.filter( obj => obj.name === personObject.name)[0].id
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personsService
          .update(id, personObject)
            .then(returnedPerson => {
              setPersonsList(personsList.map(p => p.id !== id ? p : returnedPerson ))
            })
      }

    } else {
      personsService
        .create(personObject)
          .then(returnedPerson => {
          setPersonsList(personsList.concat(returnedPerson))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <form onSubmit={addContact}>
      <div>
        name: <input value={newName} onChange={handleNameChange} type="text" required />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} type="tel" required />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}


export default PersonForm