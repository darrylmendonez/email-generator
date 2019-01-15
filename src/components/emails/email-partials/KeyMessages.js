import React from 'react'

const KeyMessages = ({keyMessages}) => {
  // console.log(keyMessages.length)
  return (
    <ul>
      { keyMessages && keyMessages.map(keyMessage => {
        return (
          <li className="field-data" key={Math.random()}> { keyMessage }</li>
        )
      })}
    </ul>
  )
}

export default KeyMessages