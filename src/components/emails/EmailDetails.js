import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import Descriptions from './email-partials/Descriptions'
import Highlights from './email-partials/Highlights'
import Publications from './email-partials/Publications'
import '../../styles/email-template.css';

const EmailDetails = (props) => {
  const { email, auth } = props;
  console.log(props);
  if (!auth.uid) return <Redirect to='/' />

  if (email) {
    return (
      <div className="section container">
        <div className="card z-depth-0">
          <div className="card-content">
            <table className="main-table">
              <tbody>
                <tr>
                  <td className="top-border"></td>
                </tr>
                <tr>
                  <td className="no-padding">
                    <table>
                      <tbody>
                        <tr>
                          <td className="no-padding td-title">
                            <span className="title">{ email.title }</span>
                          </td>
                          <td>
                            <img src="/img/header-logos.png" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="border-seperator"></td>
                </tr>
                <tr>
                  <td>
                    <span className="date">{ email.date }</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <Descriptions descriptions={email.descriptions} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="highlights-section">
                      <strong className="highlights-title">HIGHLIGHTS:</strong>
                      <ul>
                        <Highlights highlights={email.highlights} />
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td className="publication-header column-1">&nbsp;Publication</td>
                          <td className="publication-header">&nbsp;Key Message</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <Publications publications={email.publications} />
                <tr>
                  <td className="footer-border-top"></td>
                </tr>
                <tr>
                  <td className="footer-border-bottom"></td>
                </tr>
                <tr>
                  <td>
                    <small className="footnote">
                      *The following journals were included: Ann Oncol, Blood, Cancer Discov, Clin Cancer Res, J Clin Oncol, JAMA, JAMA Oncol, Lancet, Lancet Oncol, Nat Med, New Engl J Med, Sci Transl Med
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
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
