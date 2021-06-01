import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({ Easy, Moderate, Difficult, All, Average, Positive }) => {
 
  return (
    <table>
      <tbody>
        <tr><Statistic feedback="Easy" value={Easy} /></tr>
        <tr><Statistic feedback="Moderate" value={Moderate} /></tr>
        <tr><Statistic feedback="Difficult" value={Difficult} /></tr>
        <tr><Statistic feedback="All" value={All} /></tr>
        <tr><Statistic feedback="Average" value= {Average} /></tr>
        <tr><Statistic feedback="Positive" value={Positive + '%'} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({ feedback, value }) => {
  return (
    <td>{feedback} {value}</td>
  )
}

const App = () => {
  const [Easy, setEasy] = useState(0)
  const [Moderate, setModerate] = useState(0)
  const [Difficult, setDifficult] = useState(0)

  const handleEasyClick = () =>
    setEasy(Easy + 1)

  const handleModerateClick = () =>
    setModerate(Moderate + 1)

  const handleDifficultClick = () =>
    setDifficult(Difficult + 1)

    const All = Easy + Moderate + Difficult
    
    const Average = ((Easy - Difficult) / All)

    const Positive = (Easy / All) * 100


  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleEasyClick} text="Easy" />
      <Button handleClick={handleModerateClick} text="Moderate" />
      <Button handleClick={handleDifficultClick} text="Difficult" />
      <h1>statistics</h1>
      <Statistics Easy={Easy} Moderate={Moderate} Difficult={Difficult} All={All} Average={Average} Positive={Positive} />
    </>
  )
}

export default App