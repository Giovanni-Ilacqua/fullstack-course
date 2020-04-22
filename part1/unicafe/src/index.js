import React, {useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css'


const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => (
  <tr>
    <td>{props.text}</td>
    <td> {props.value}</td>
  </tr>
)

const Statistics = (props) => {
  if (props.all > 0){
    return (
      <table>
        <tbody>
          <Statistic text="Good:" value={props.good} />
          <Statistic text="Neutral:" value={props.neutral} />
          <Statistic text="Bad:" value={props.bad} />
          <Statistic text="All:" value={props.all} />
          <Statistic text="Average:" value={props.average} />
          <Statistic text="Positive:" value={props.positive} />
        </tbody>        
      </table> 
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
