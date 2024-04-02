import React from 'react'
import { useState } from 'react'
import { StatisticsLine } from './StatisticsLine';

const Statistics = ({good, bad, neutral}) => {


    let total = good + bad + neutral;
    console.log(total);

  
  return (
        
    <>
        <tr><StatisticsLine text = "good" value = {good}/></tr>
        <tr><StatisticsLine text = "neutral" value = {neutral}/></tr>
        <tr><StatisticsLine text = "bad" value = {bad}/></tr>
        <tr><StatisticsLine text = "total" value = {total}/></tr>
        <tr><StatisticsLine text = "average" value = {(total)/3}/></tr>
        <tr><StatisticsLine text = "posiive percentage" value = {(good/total)*100}/></tr>
    </>
  )
}

export default Statistics