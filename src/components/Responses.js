import React from 'react'

const Responses = ( {responses} ) => {

  return (
    <div>
      {responses.length > 0 &&
        <div>
          Your Responses:
        </div>
      }
      {responses.map((tweet, index) =>
        <div key={index} >
          <li><br/><strong>Content:</strong> {tweet.content}<br/><strong>Date: </strong>{tweet.date}</li>
        </div>
      )}
    </div>
  )
}

export default Responses
