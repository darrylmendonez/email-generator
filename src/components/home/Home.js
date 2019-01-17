import React, { Component } from 'react'
// import EmailList from '../emails/EmailList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import Jumbotron from '../jumbotron/Jumbotron'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    // const { emails } = this.props;
    const { auth } = this.props;
    if (auth.uid) return <Redirect to='/dashboard' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col m12">
            <div className="row">
              <div className="col m12">
                <Jumbotron />
              </div>
            </div>
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