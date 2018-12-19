import React, { Component } from 'react'

class CreateEmail extends Component {
  state = {
    title: '',
    date: '',
    descriptions: [],
    highlights: []
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Email Template</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="date">Date</label>
              <input type="text" id="date" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
              <label htmlFor="highlights">Highlights</label>
              <textarea id="highlights" className="materialize-textarea" onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateEmail
