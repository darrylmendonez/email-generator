import React from 'react'
import { connect } from 'react-redux'
import SignedOutText from './SignedOutText'
import SignedOutButtons from './SignedOutButtons'
import SignedInButton from './SignedInButton'

const Jumbotron = (props) => {
  console.log(props);
  const { auth } = props
  const loggedOutInfo = auth.uid ? null : <SignedOutText />;
  const loggedOutButtons = auth.uid ? <SignedInButton /> : <SignedOutButtons />;
  console.log('loggedOutInfo = ', loggedOutInfo);
  return (
    <div className="card grey darken-2 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title">Email Generator</span>
        <hr/>
        <p>Simply fill out a form to input your content and an email will be auto-generated for you to copy, paste, and send to your clients.</p><br/>
        { loggedOutInfo }
      </div>
      { loggedOutButtons }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Jumbotron)