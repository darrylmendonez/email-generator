import React from 'react'

const EmailSummary = ({email}) => {
  return (
    <div className="card z-depth-0 projet-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{email.title}</span>
        <p>Posted by John Smith</p>
        <p className="grey-text">19th of December, 5pm</p>
      </div>
    </div>
  )
}

export default EmailSummary