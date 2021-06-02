import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const s = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(s.length).fill(0))

  const handlesupriyaClick = () => {
    const duplicate = Math.floor(Math.random() * s.length)
    setSelected(duplicate)
  }

  const handlePinkClick = () => {
    const vote = [...votes]
    vote[selected] += 1
    setVotes(vote)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{s[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handlePinkClick} text="vote" />
      <Button handleClick={handlesupriyaClick} text="next anecdote" />
      
    </>
  )
}

export default App