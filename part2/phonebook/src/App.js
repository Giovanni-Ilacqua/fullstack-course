import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personsService from './services/persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [messageStyle, setStyle] = useState('success')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notificationMessage={message} notificationStyle={messageStyle} />

      <Filter newSearch={newSearch} searchHandler={handleSearchChange} />

      <h2>Add New Contacts</h2>
      <PersonForm 
        personsList={persons} 
        setPersonsList={setPersons} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
        nameHandler={handleNameChange} 
        numberHandler={handleNumberChange} 
        setMessage={setMessage} 
        setStyle={setStyle} 
      />

      <h2>Numbers</h2>
      <Persons 
        personsList={persons} 
        setPersonsList={setPersons} 
        searchTerm={newSearch} 
        setMessage={setMessage} 
        setStyle={setStyle} 
      />

    </div>
  )
}

export default App