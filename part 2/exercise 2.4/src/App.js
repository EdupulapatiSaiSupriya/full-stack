import React from 'react'
const Header = ({ supriya }) => {
    return (
        <h2>{supriya.name}</h2>
    )
}

const Part = (supu) => {
    return (
        <p>
            {supu.part.name} {supu.part.exercises}
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
          name: 'Using sups to pass data',
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
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(supriya => <Course supriya={supriya} />)}
    </>
  )
}

export default App