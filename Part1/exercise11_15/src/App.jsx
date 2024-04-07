import Header from './Components/Header'
import Total from './Components/Total'
import Content from './Components/Content'


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course= {course.name}/>
      {course.parts.map((part, index) => <Content key = {index} part = {part.name} exercise = {part.exercises}/>) }
    </div>
  )
}

export default App
