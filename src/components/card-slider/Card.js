import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className='card-wrapper'>
        <div className='card-image'>
          <img src='https://picsum.photos/100/200' alt='product' />
        </div>
        <div className='card-content'>
          <p className='title'>Zinc Serum</p>
          <p className='tagline'>Reduces pores and dark circles</p>
          <p className='price'>₹649.00</p>
          <button className='add-to-cart-btn'>Add to cart</button>
        </div>
      </div>
    );
  }
}
