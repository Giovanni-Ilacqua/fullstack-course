import React, {useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  
  if (props.all > 0){
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>All: {props.all}</p>
        <p>Average: {props.average}</p>
        <p>Positive: {props.positive} %</p>
      </div> 
    )
  }

  return(
    <div>
      <p>No feedback given</p>
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = good + bad
  let average = (good - bad)/all
  let positive = (good * 100)/all

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
