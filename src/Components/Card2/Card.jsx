import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card2'>
        <div className="card2-cont">
           <div className="img-top">
          <div className="img-mid">
          <div className="img" style={{backgroundImage: `url(${props.img})`}}>

</div>
          </div>
           </div>
            <div className="content">
                <h1>{props.name}</h1>
                <span>{props.desig}</span>
                <p>{props.desc}</p>
            </div>
            
        </div>
        <button>View more</button>
        <div className="border-bottom">
            <div></div>
        </div>
    </div>
  )
}

export default Card