import React from 'react'

const Statistics = ({good, bad, neutral}) => {

    let total = good + bad + neutral;

  return (
    <div>
    <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {(total)/3}</p>
      <p>positive percentage: {(good/total)*100}%</p>
    </div>
  )
}

export default Statistics