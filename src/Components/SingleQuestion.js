import React, { useState } from 'react';
import "./SingleQuestion.css";

function SingleQuestion({title, info}) {

    const [showInfo, setShowInfo] = useState(false)
    
  return (
    <div className='question'>
      <header>
        <h4> {title} </h4>
        <button onClick={() => setShowInfo(!showInfo) } className="btn" > 
            {showInfo ? '-' : '+'}
        </button>
      </header>
      {showInfo && <p> {info} </p>}
    </div>
  )
}

export default SingleQuestion
