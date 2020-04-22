import React, {useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => (
  <div>
    <td>{props.text}</td>
    <td> {props.value}</td>
  </div>
)

const Statistics = (props) => {
  if (props.all > 0){
    return (
      <div>
        <table>
          <tr><Statistic text="Good:" value={props.good} /></tr>
          <tr><Statistic text="Neutral:" value={props.neutral} /></tr>
          <tr><Statistic text="Bad:" value={props.bad} /></tr>
          <tr><Statistic text="All:" value={props.all} /></tr>
          <tr><Statistic text="Average:" value={props.average} /></tr>
          <tr><Statistic text="Positive:" value={props.positive} /></tr>
        </table>
        
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

  let all = good + bad + neutral
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
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive + "%"} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
