import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomNumber = () => {
    const max = (anecdotes.length -1)
    //console.log(max)
    const min = 0
    let result = Math.round(Math.random() * (max - min) + min)
    return result
  }

  const clickFunction = () => {
    let newNumber = getRandomNumber();
    console.log(`new number is ${newNumber}`)
    setSelected(newNumber)
  }

  const countVote = () => {
    console.log(`current votes are ${votes}`)
    setVotes(votes.concat(selected))
    console.log(votes)
  }


  
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([]);

  return (
    <div>
      {anecdotes[selected]}
      <p>{votes}</p>

      <div>
        <button onClick = {clickFunction}>Get Anecdote</button>
      </div>
      
      <div>
        <button onClick = {() => countVote(selected)}>Vote</button>
      </div>

    </div>
  )
}

export default App
