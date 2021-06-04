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
    const sum = supriya.parts.reduce((total, part) => total + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Supu = ({ supriya }) => {
    return (
        <>
            <Header supriya={supriya} />
            <Content supriya={supriya} />
            <Total supriya={supriya} />
        </>
    )
}

export default Supu