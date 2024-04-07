import React from 'react'
import Header from './Header';
import Content from './Content';
import Total from './Total';



const Course = ({course}) => {
  return (
    <div>
      <Header name = {course.name}/>
      
      {course.parts.map(part =>
        <Content key = {part.id} name = {part.name} exercises = {part.exercises}/> )
      }



    </div>
  )
}

export default Course