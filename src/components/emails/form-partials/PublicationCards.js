import React from 'react'

const PublicationCard = (createEmailInfo) => {
  console.log(createEmailInfo.numberOfPubs)
  console.log(createEmailInfo.handleChange)
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="input-field">
              <label htmlFor="pubTitle">Publication Title</label>
              <input type="text" id="pubTitle" onChange={createEmailInfo.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="author">Author</label>
              <input type="text" id="author" onChange={createEmailInfo.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="journal">Journal</label>
              <input type="text" id="journal" onChange={createEmailInfo.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="url">URL</label>
              <input type="text" id="url" onChange={createEmailInfo.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="keyMessages">Key Messages</label>
              <textarea id="keyMessages" className="materialize-textarea" onChange={createEmailInfo.handleChange}></textarea>
              <span className="helper-text" data-error="wrong" data-success="right">Create multiple Key Messages by adding a break line after the previous one by hitting enter.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicationCard