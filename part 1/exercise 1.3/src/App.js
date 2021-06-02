const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p> {props.supriya},{props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const supriya1 = 'Fundamentals of React'
  const exercises1 = 25
  const supriya2 = 'Using props to pass data'
  const exercises2 = 15
  const supriya3 = 'State of a component'
  const exercises3 = 23
  return (
    <div>
      <Header course={course} />
      <Content  supriya={supriya1} exercises={exercises1} />
      <Content supriya={supriya2} exercises={exercises2} /> 
      <Content supriya={supriya3} exercises={exercises3} /> 
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App