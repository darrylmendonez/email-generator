import React from 'react'

const EmailDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Email Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium nihil necessitatibus rerum quidem expedita dolores fuga rem iure dicta vero eius magni officiis doloremque totam ipsum, voluptas, commodi itaque.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by John Smith</div>
          <div>19th of December, 6pm</div>
        </div>
      </div>
    </div>
  )
}

export default EmailDetails
