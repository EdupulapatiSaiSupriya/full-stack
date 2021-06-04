import React from 'react'

const Header = ({ supriya }) => {
  return (
      <h2>{supriya.name}</h2>
  )
}

const Part = (fix) => {
  return (
      <p>
          {fix.part.name} {fix.part.exercises}
      </p>
  )
}

const Content = ({ supriya }) => {
  return (
      <div>
          {supriya.parts.map((part) => <Part part={part} />)}
      </div>
  )
}

const Total = ({ supriya }) => {
  const sum1 = supriya.parts.reduce((total, part) => total + part.exercises, 0)
  return (
      <strong>Number of exercises {sum1}</strong>
  )
}

const Course = ({ supriya }) => {
  return (
      <>
          <Header supriya={supriya} />
          <Content supriya={supriya} />
          <Total supriya={supriya} />
      </>
  )
}
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using fixps to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    
  ]

  return (
    <>
      
      {courses.map(supriya => <Course supriya={supriya} />)}
    </>
  )
}

export default App