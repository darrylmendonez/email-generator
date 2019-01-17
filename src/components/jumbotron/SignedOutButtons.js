import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'

const SignedOutButtons = (props) => {
  return (
    <div className="card-action">
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedOutButtons)