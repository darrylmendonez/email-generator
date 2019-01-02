import React from 'react'
import EmailSummary from './EmailSummary'
import { Link } from 'react-router-dom'

const EmailList = ({emails}) => {
  return (
    <div className="project-list section">
      { emails && emails.map(email => {
        return (
          <Link to={'/email/' + email.id}>
            <EmailSummary email={email} key={email.id} />
          </Link>
        )
      })}
    </div>
  )
}

export default EmailList