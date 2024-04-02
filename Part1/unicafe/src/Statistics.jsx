import React from 'react'
import { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {


    let total = good + bad + neutral;
    console.log(total);

  
  return (
    <div>
        <div>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>all: {total}</p>
            <p>average: {(total)/3}</p>
            <p>positive percentage: {(good/total)*100}%</p>
        </div>
    </div>
  )
}

export default Statistics