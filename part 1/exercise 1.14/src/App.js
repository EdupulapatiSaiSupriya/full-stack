import React, { useState } from 'react'

const Button = ({ buttClick, text }) => {
  return (
    <button onClick={buttClick}>
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

  const mostVotes = () => {
    let max = 0
    let indexMax = 0
    votes.forEach((item, index) => {
      if (item > max) {
        max = item
        indexMax = index
      }
    })
    return indexMax
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{s[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button buttClick={handlePinkClick} text="vote" />
      <Button buttClick={handlesupriyaClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {votes[mostVotes()] === 0 ?
        <>
          <p>There is votes</p>
        </>
        :
        <>
          <p>{s[mostVotes()]}</p>
          <p>has {votes[mostVotes()]} votes</p>
        </>
      }
    </>
  )
}
export default App