import React from 'react'
import {Modal, Button, Icon} from 'react-materialize'

const Instructions = () => {
  return (
    <Modal header='' trigger={<Button className="btn grey darken-2 z-depth-3" waves='light'>Instructions</Button>}>
      <h5>How to Paste Content into Microsoft Outlook</h5>
      <h6>PC Users</h6>
      <div className="instructions-section">
        <ul>
          <li className="instructions-list">Copy the email contents</li>
          <li className="instructions-list">Open the Outlook email client</li>
          <li className="instructions-list">Click on 'New Email' to launch a new email window</li>
          <li className="instructions-list">Click the 'Paste' option in the toolbar under the 'Message' tab and select 'Paste Special' (your cursor needs to be in the body of the email)</li>
          <li className="instructions-list">Select 'HTML Format'</li>
          <li className="instructions-list">Click 'OK'</li>
          <li className="instructions-list">The template will appear in your email.</li>
        </ul>
      </div>
      <h6>Mac Users</h6>
      <div className="instructions-section">
        <ul>
          <li className="instructions-list">Copy the email contents</li>
          <li className="instructions-list">Cmd+A to select all of the email contents</li>
          <li className="instructions-list">Cmd+C to copy the email contents</li>
          <li className="instructions-list">Open the Outlook email client</li>
          <li className="instructions-list">Click on 'New Email' to launch a new email window</li>
          <li className="instructions-list">On your toolbar under the 'Message' tab, click the dropdown arrow next to the clipboard icon and select 'Keep Source Formatting'</li>
          <li className="instructions-list">The template will appear in your email</li>
        </ul>
      </div>
    </Modal>
  )
}

export default Instructions