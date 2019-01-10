import React, { Component } from 'react'
import Notifications from './Notifications'
import EmailList from '../emails/EmailList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { emails, auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <EmailList emails={emails} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    emails: state.firestore.ordered.emails,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'emails', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)