import React from 'react'
import Filter from './Filter'

const Persons = ({ personsList }) => {
  return (
    <div>
      <ul>
        {personsList.map(person =>
          <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}


export default Persons