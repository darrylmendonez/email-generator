import React from 'react'
import moment from 'moment'

const EmailSummary = ({email}) => {
  return (
    <div className="card z-depth-0 projet-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ email.title }</span>
        <p>Posted by { email.authorFirstName } { email.authorLastName }</p>
        <p className="grey-text">{ moment( email.createdAt.toDate() ).calendar() }</p>
      </div>
    </div>
  )
}

export default EmailSummary