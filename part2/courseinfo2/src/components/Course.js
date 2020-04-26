import React from 'react'


const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
    //const sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
    const sum = (acc, currentVal) => acc + currentVal.exercises
    const total = parts.reduce(sum, 0) 
    return(
      <p>Number of exercises {total}</p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    console.log(parts);
    
    return (
      <div>
        {
          parts.map(part =>
            <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
     
    )
  }


export default Course