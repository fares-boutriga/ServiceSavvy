import React from 'react'
import './AddReview.css'
function AddReview() {
  return (
    <div>
        <div>
      <ul className="reminder-list">
        <li className="reminder-item" data-wait-time="0">
         <input type="text" />
         
          <div className="reminder-item__controls">
            <button type="button" className="reminder-item__snooze">
              Add Review
            </button>
          </div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default AddReview
