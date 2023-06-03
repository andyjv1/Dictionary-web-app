import React from 'react'

const NotFound = ({ black }) => {

    return (
        <div className="not-found">
          <span>
              &#128533;
          </span>
          <h1 style={{ color: black ? "#FFFFFF" : "#2D2D2D" }}>No Definitions Found</h1>
          <p>Sorry pal, we couldn't find definitions for the word you
              were looking for. You can try the search again at later time or head to the web instead.</p>
      </div>
  )
}

export default NotFound