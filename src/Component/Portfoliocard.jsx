import React from 'react'

const Portfoliocard = (props) => {
  return (
    <div>
           <div className='Portfolio-card'>
<h2>{props.name}</h2>
<p>{props.description}</p>
<button className='port-btn'>{props.button}</button>
    </div>
    </div>
  )
}

export default Portfoliocard