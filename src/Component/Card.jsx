import React from 'react'

const Card = (props) => {
  return (
    <div className='Service-card'>
 <p className='service-image'>{props.image}</p>
<h1>{props.name}</h1>
<p>{props.description}</p>
    </div>
  )
}

export default Card;