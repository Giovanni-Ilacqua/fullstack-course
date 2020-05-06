import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() =>{
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons');
  

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <Filter personsList={persons} /> */}

      <h2>Add New Contacts</h2>
      <PersonForm personsList={persons} setPersonsList={setPersons}/>

      <h2>Numbers</h2>
      <Persons personsList={persons}/>

    </div>
  )
}

export default App