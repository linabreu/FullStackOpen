import React from 'react'
import { useState } from 'react'
import { StatisticsLine } from './StatisticsLine';

const Statistics = ({good, bad, neutral}) => {


    let total = good + bad + neutral;
    console.log(total);

  
  return (
    <div>
        <div>
            <StatisticsLine text = "good" value = {good}/>
            <StatisticsLine text = "neutral" value = {neutral}/>
            <StatisticsLine text = "bad" value = {bad}/>
            <StatisticsLine text = "total" value = {total}/>
            <StatisticsLine text = "average" value = {(total)/3}/>
            <StatisticsLine text = "posiive percentage" value = {(good/total)*100}/>
        </div>
    </div>
  )
}

export default Statistics