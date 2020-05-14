import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personsService from './services/persons'

// import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState(null)
  const [messageStyle, setStyle] = useState('success')

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
      <Notification notificationMessage={message} notificationStyle={messageStyle}/>
      
      {/* <Filter personsList={persons} /> */}

      <h2>Add New Contacts</h2>
      <PersonForm personsList={persons} setPersonsList={setPersons} setMessage={setMessage} setStyle={setStyle}/>

      <h2>Numbers</h2>
      <Persons personsList={persons} setPersonsList={setPersons} setMessage={setMessage} setStyle={setStyle}/>

    </div>
  )
}

export default App