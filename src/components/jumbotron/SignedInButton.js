import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'

const SignedInButton = (props) => {
  return (
    <div className="card-action">
      <NavLink to='/email/p0IOfyh4bXi8WgBglYmS'>View Sample</NavLink>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInButton)