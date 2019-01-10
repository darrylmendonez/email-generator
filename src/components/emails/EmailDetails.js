import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import '../../styles/email-template.css';

const EmailDetails = (props) => {
  const { email, auth } = props;
  if (!auth.uid) return <Redirect to='/' />

  if (email) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <table className="main-table">
              <tbody>
                <tr>
                  <td className="top-border"></td>
                </tr>
                <tr>
                  <td className="no-padding">
                    <img src="/img/header-logos.png" alt=""/>
                  </td>
                </tr>
                <tr>
                  <td className="no-padding">
                    <span className="title">{ email.title }</span>
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
                    <em className="descriptions">{ email.description }</em>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="highlights-section">
                      <strong className="highlights-title">HIGHLIGHTS:</strong>
                      <ul>
                        <li>&bull;{ email.highlights }</li>
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
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td className="publication-fields">
                            <table>
                              <tbody>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Title:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ea enim fuga, molestiae distinctio officiis blanditiis perspiciatis minima quaerat. Nisi, architecto. Earum, rem? A sequi vitae placeat nisi temporibus est.
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Authors:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      Paulson, Males, <em>et al.</em>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Journal:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      <em>Med Sci Journal</em>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <a href="http://www.google.com" target="_blank">
                              <img src="/img/btn-gotopub.png" alt=""/>
                            </a>
                            
                          </td>
                          
                          <td>
                            <ul>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                            </ul>
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
                    <table>
                      <tbody>
                        <tr>
                          <td className="publication-fields">
                            <table>
                              <tbody>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Title:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ea enim fuga, molestiae distinctio officiis blanditiis perspiciatis minima quaerat. Nisi, architecto. Earum, rem? A sequi vitae placeat nisi temporibus est.
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Authors:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      Paulson, Males, <em>et al.</em>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Journal:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      <em>Med Sci Journal</em>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <a href="http://www.google.com" target="_blank">
                              <img src="/img/btn-gotopub.png" alt=""/>
                            </a>
                            
                          </td>
                          
                          <td>
                            <ul>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                            </ul>
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
                    <table>
                      <tbody>
                        <tr>
                          <td className="publication-fields">
                            <table>
                              <tbody>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Title:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ea enim fuga, molestiae distinctio officiis blanditiis perspiciatis minima quaerat. Nisi, architecto. Earum, rem? A sequi vitae placeat nisi temporibus est.
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Authors:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      Paulson, Males, <em>et al.</em>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="publication-fields">
                                    <span className="field-title">Journal:</span>
                                  </td>
                                  <td className="publication-fields">
                                    <span className="field-data">
                                      <em>Med Sci Journal</em>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <a href="http://www.google.com" target="_blank">
                              <img src="/img/btn-gotopub.png" alt=""/>
                            </a>
                            
                          </td>
                          
                          <td>
                            <ul>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                              <li className="field-data">&bull; Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem id voluptatem eius eos recusandae, quisquam autem minus quis et quod assumenda reprehenderit magni. Amet in quae minus animi, quaerat qui?</li>
                            </ul>
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
                  <td className="footer-border-top"></td>
                </tr>
                <tr>
                  <td className="footer-border-bottom"></td>
                </tr>
                <tr>
                  <td>
                    <small class="footnote">
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
