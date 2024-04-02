import { useState } from 'react'
import { Button } from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + bad + neutral;

  const increaseGood = () => setGood(good+1);
  const increaseNeutral = () => setNeutral(neutral+1);
  const increaseBad = () => setBad(bad+1);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text = "good" onClick = {increaseGood}></Button>
      <Button text = "neutral" onClick = {increaseNeutral}></Button>
      <Button text = "bad" onClick = {increaseBad}></Button>

      <h1>Statistics</h1>
      {total > 0 ? <Statistics good = {good} bad = {bad} neutral = {neutral}/>: <h2>No Feedback Given</h2>}
     


    </div>
  )
}

export default App