import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createEmail } from '../../store/actions/emailActions'
import { Redirect } from 'react-router-dom'
import PublicationCards from './form-partials/PublicationCards'

class CreateEmail extends Component {
  numberOfPubs = 1;
  publication = {
    pubTitle: '',
    author: '',
    journal: '',
    url: '',
    keyMessages: []
  }
  state = {
    title: '',
    date: '',
    descriptions: [],
    highlights: [],
    publications: [this.publication]
  }
  howManyPubs = (e) => {
    this.numberOfPubs = e.target.value
    console.log('numberOfPubs = ', this.numberOfPubs);
  }
  handleChange = (e) => {
    if ( (e.target.id === 'descriptions') || (e.target.id === 'highlights') ) {
      var descriptionOrHighlightData = e.target.value;
      var descriptionOrHighlightArray = descriptionOrHighlightData.split("\n");
      console.log('descriptionOrHighlightArray = ', descriptionOrHighlightArray);
      this.setState({
        [e.target.id]: descriptionOrHighlightArray
      })
    }
    else if (e.target.id === 'pubTitle') {
      this.publication.pubTitle = e.target.value;
      console.log('this.publication = ', this.publication);
    }
    else if (e.target.id === 'author') {
      this.publication.author = e.target.value;
      console.log('this.publication = ', this.publication);
    }
    else if (e.target.id === 'journal') {
      this.publication.journal = e.target.value;
      console.log('this.publication = ', this.publication);
    }
    else if (e.target.id === 'url') {
      this.publication.url = e.target.value;
      console.log('this.publication = ', this.publication);
    }
    else if (e.target.id === 'keyMessages') {
      var keyMessagesData = e.target.value;
      var keyMessagesArray = keyMessagesData.split("\n");
      console.log('keyMessagesArray = ', keyMessagesArray);
      this.publication.keyMessages = keyMessagesArray
      console.log('this.publication = ', this.publication);
    }
    else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createEmail(this.state)
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Email Template</h5>
            <div className="input-field">
              <label htmlFor="title">Email Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="date">Email Date</label>
              <input type="text" id="date" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="descriptions">Descriptions</label>
              <textarea id="descriptions" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <span className="helper-text" data-error="wrong" data-success="right">Create multiple descriptions by adding a break line after the previous one by hitting enter.</span>
            </div>
            <div className="input-field">
              <label htmlFor="highlights">Highlights</label>
              <textarea id="highlights" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <span className="helper-text" data-error="wrong" data-success="right">Create multiple highlights by adding a break line after the previous one by hitting enter.</span>
            </div>
            <h6 className="grey-text text-darken-3">Publications</h6>
            <label>How many publications are being shared?</label>
            <div className="row">
              <div className="col m1">
              <select className="browser-default" onChange={this.howManyPubs}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              </div>
            </div>
            <PublicationCards numberOfPubs={this.numberOfPubs} handleChange={this.handleChange} />
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEmail: (email) => dispatch(createEmail(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmail)
