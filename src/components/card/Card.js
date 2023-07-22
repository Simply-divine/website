import React from 'react';
import {
  CardContent,
  CardImage,
  CardWrapper,
} from './CardStyles';

export default class Card extends React.Component {
  render() {
    return (
      <CardWrapper>
        <CardImage>
          <img src='https://picsum.photos/100/200' alt='product' />
        </CardImage>
        <CardContent>
          <p className='title'>Zinc Serum</p>
          <p className='tagline'>Reduces pores and dark circles</p>
          <p className='price'>₹649.00</p>
          <button className='add-to-cart-btn'>Add to cart</button>
        </CardContent>
      </CardWrapper>
    );
  }
}
