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
        <p> {props.part},{props.exercises}</p>
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
    const course = 'Python'
    const ppart1 = 'Fundamentals of React'
    const exercises1 = 5
    const ppart2 = 'Java'
    const exercises2 = 17
    const ppart3 = 'Mean stack'
    const exercises3 = 9
    return (
      <div>
        <Header course={course} />
        <Content  part={ppart1} exercises={exercises1} />
        <Content part={ppart2} exercises={exercises2} /> 
        <Content part={ppart3} exercises={exercises3} /> 
        <Total total= {exercises1 + exercises2 + exercises3} />
      </div>
    )
  }
  export default App