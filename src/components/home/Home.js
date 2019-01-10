import React, { Component } from 'react'
// import EmailList from '../emails/EmailList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

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
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Email Generator</span>
                  <p>Create HTML emails based on an approved template with yout own customizable content.<br></br>
                  <br></br>
                  Simply fill out a form to input your content and an email will be auto-generated for you to copy, paste, and send to your clients.</p>
                </div>
                <div className="card-action">
                  <NavLink to='/register'>Register</NavLink>
                  <NavLink to='/login'>Log In</NavLink>
                </div>
              </div>
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