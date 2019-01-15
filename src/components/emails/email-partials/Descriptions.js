import React from 'react'

const Descriptions = ({descriptions}) => {
  console.log(descriptions.length)
  return (
    <span>
      { descriptions && descriptions.map(description => {
        return (
          <span key={Math.random()}>
            <em className="descriptions">{ description }</em>
            <br></br>
          </span>
        )
      })}
    </span>
  )
}

export default Descriptions