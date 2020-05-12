import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

// import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() =>{
    personsService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <Filter personsList={persons} /> */}

      <h2>Add New Contacts</h2>
      <PersonForm personsList={persons} setPersonsList={setPersons}/>

      <h2>Numbers</h2>
      <Persons personsList={persons} setPersonsList={setPersons}/>

    </div>
  )
}

export default App