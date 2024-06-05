import React from 'react'
import Header from './Header';
import Content from './Content';
import Total from './Total';



const Course = (courses) => {
  return (
    <div>
    {courses.courses.map(course => (
      <div key = {course.id}>
        <div><Header name = {course.name}/></div>
        <ul>
          {course.parts.map(part => (
          <div key={part.id}>
            <li>
              {part.name}
            </li>
          </div>
          ))}
        </ul>
        <p>Total of {course.parts.reduce((sum, {exercises}) => sum + exercises, 0)} exercises </p>
      </div>
    ))}



    </div>
  )
}

export default Course