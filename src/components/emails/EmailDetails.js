import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const EmailDetails = (props) => {
  const { email, auth } = props;
  if (!auth.uid) return <Redirect to='/login' />

  if (email) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ email.title }</span>
            <p>{ email.description }</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by { email.authorFirstName } { email.authorLastName }</div>
            <div>{ moment( email.createdAt.toDate() ).calendar() }</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const emails = state.firestore.data.emails;
  const email = emails ? emails[id] : null;
  return {
    email: email,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'emails' }
  ])
)(EmailDetails)
