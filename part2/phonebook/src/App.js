import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add New Contacts</h2>
      <PersonForm personsList={persons} setPersonsList={setPersons}/>

      <h2>Numbers</h2>
      <Persons personsList={persons}/>

    </div>
  )
}

export default App