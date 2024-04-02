import React from 'react'

export const StatisticsLine = ({text,value}) => 
{
  return (
    <div>
        <p>{text}: {value}</p>
    </div>
  )
}
