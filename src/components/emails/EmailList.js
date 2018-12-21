import React from 'react'
import EmailSummary from './EmailSummary'

const EmailList = ({emails}) => {
  return (
    <div className="project-list section">
      { emails && emails.map(email => {
        return (
          <EmailSummary email={email} key={email.id} />
        )
      })}
    </div>
  )
}

export default EmailList