import React from 'react'
import './Review.css'
import AddReview from '../AddReview/AddReview.jsx'
function Review() {
  return (
    <div>
      <AddReview/>
       <div>
      <ul className="reminder-list">
        <li className="reminder-item" data-wait-time="0">
          <span className="reminder-item__wait-time">Folan</span>
          Harvest Garlic Scapes
          <div className="reminder-item__controls">
            <button type="button" className="reminder-item__snooze">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Review
