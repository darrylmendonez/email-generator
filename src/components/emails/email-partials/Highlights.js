import React from 'react'

const Highlights = ({highlights}) => {
  console.log(highlights.length)
  return (
    <span>
      { highlights && highlights.map(description => {
        return (
          <li>
            <em className="highlights">{ description }</em>
            <br></br>
          </li>
        )
      })}
    </span>
  )
}

export default Highlights