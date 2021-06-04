import React from 'react'

const Karri = ({ onChange, value }) => {
    return (
        <div>
            Karri shown with <input onChange={onChange} value={value}></input>
        </div>
    )
}

export default Karri