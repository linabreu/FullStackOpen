import React from 'react'

export const StatisticsLine = ({text,value}) => 
{
  return (
        <>
            <td>{text}:</td>
            <td>{value}</td>
        </>
  )
}
