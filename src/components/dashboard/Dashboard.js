import React, { Component } from 'react'
import Notifications from './Notifications'
import EmailList from '../emails/EmailList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { emails } = this.props;
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
  return {
    emails: state.email.emails
  }
}

export default connect(mapStateToProps)(Dashboard)