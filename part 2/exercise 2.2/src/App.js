import React from 'react'

const Header = ({ supriya }) => {
  return (
      <h2>{supriya.name}</h2>
  )
}

const Part = (prop) => {
  return (
      <p>
          {prop.part.name} {prop.part.exercises}
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
const sum1=supriya.parts[0].exercises + supriya.parts[1].exercises + supriya.parts[2].exercises
return (
   <strong>total of {sum1} exercises</strong>
		
	);
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
          name: 'Using props to pass data',
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