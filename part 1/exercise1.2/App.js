const course = 'Java'
const ppart1 = 'Python'
const exercises1 = 21
const ppart2 = 'Data structures'
const exercises2 = 13
const ppart3 = 'Fullstack'
const exercises3 = 4
const Header = (props) => {
  return (
    <div>
      <p> {props.course}</p>
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
  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
const Content = () => {
  return(
    <div>
      <Part part={ppart1} exercises={exercises1}/>
      <Part part={ppart2} exercises={exercises2}/>
      <Part part={ppart3} exercises={exercises3}/>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App