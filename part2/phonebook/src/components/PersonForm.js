import React, { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({ personsList, setPersonsList, setMessage, setStyle }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const displayNotification = (msg, name) => {
    setMessage(
      `${msg} ${name} succesfully!`
    )
    setStyle('success')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const addContact = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (personsList.some(person => person.name === personObject.name)) {
      let id = personsList.filter( obj => obj.name === personObject.name)[0].id
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personsService
          .update(id, personObject)
            .then(returnedPerson => {
              setPersonsList(personsList.map(p => p.id !== id ? p : returnedPerson ))
            })
        displayNotification('Changed', personObject.name)
      }

    } else if (personsList.some(person => person.number === personObject.number)) {
      let id = personsList.filter( obj => obj.number === personObject.number)[0].id
      if(window.confirm(`${newNumber} is already added to phonebook, replace the old name with a new one?`)){
        personsService
          .update(id, personObject)
            .then(returnedPerson => {
              setPersonsList(personsList.map(p => p.id !== id ? p : returnedPerson ))
            })
        displayNotification('Changed', personObject.name)
      }
    
    } else {
      personsService
        .create(personObject)
          .then(returnedPerson => {
          setPersonsList(personsList.concat(returnedPerson))
        })
      displayNotification('Added', personObject.name)
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