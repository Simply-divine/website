import React from 'react';
import { CardContent, Image, ImageCardWrapper } from './ImageCardStyles';

export default class ImageCard extends React.Component {
  render() {
    return (
      <ImageCardWrapper index={this.props.index}>
        <Image>
          <img src='https://picsum.photos/100/100' alt='product' />
        </Image>
        <CardContent>
          <p className='tagline'>DULL SKIN</p>
          <h1 className='title'>DAILY ROUTINE</h1>
          <p>
            Transform your skincare routine with our Daily Routine for
            Acne-Prone Skin products. This carefully curated collection features
            products that are specifically designed to help manage acne-prone
            skin.
          </p>
          <button className='explore-btn'>Explore</button>
        </CardContent>
      </ImageCardWrapper>
    );
  }
}
