import React from 'react'

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