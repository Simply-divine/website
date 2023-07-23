import React from 'react';
import './ImageCard.css';

export default class ImageCard extends React.Component {
  render() {
    return (
      <div
        className={`image-card-wrapper ${
          this.props.index % 2 !== 0 ? 'row-reverse' : ''
        }`}
      >
        <div className='image-card-image-wrapper'>
          <img src='https://picsum.photos/100/100' alt='product' />
        </div>
        <div className='image-card-content'>
          <p className='tagline'>DULL SKIN</p>
          <h1 className='title'>DAILY ROUTINE</h1>
          <p>
            Transform your skincare routine with our Daily Routine for
            Acne-Prone Skin products. This carefully curated collection features
            products that are specifically designed to help manage acne-prone
            skin.
          </p>
          <button className='explore-btn'>Explore</button>
        </div>
      </div>
    );
  }
}
