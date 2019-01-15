import React from 'react'

const Highlights = ({highlights}) => {
  console.log(highlights.length)
  return (
    <span>
      { highlights && highlights && highlights.map(highlight => {
        return (
          <li key={Math.random()}>
            <em className="highlights">{ highlight }</em>
            <br></br>
          </li>
        )
      })}
    </span>
  )
}

export default Highlights