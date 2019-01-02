import React from 'react'
import EmailSummary from './EmailSummary'
import { Link } from 'react-router-dom'

const EmailList = ({emails}) => {
  return (
    <div className="project-list section">
      { emails && emails.map(email => {
        return (
          <Link to={'/email/' + email.id} key={email.id}>
            <EmailSummary email={email} />
          </Link>
        )
      })}
    </div>
  )
}

export default EmailList