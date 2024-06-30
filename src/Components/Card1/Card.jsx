import Spline from '@splinetool/react-spline';
import React from 'react';
import './Card.css';

const Card = (props) => {

  return (
    <div className="card1-comp">
      <div className='card1-cont' >
        <Spline scene={props.imgLink}  />
      </div>
      <p>{props.title}</p>
      <button>CHECK OUT</button>
    </div>
  );
}

export default Card;
