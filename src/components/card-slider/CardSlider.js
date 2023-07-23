import React from 'react';
import './CardSlider.css';

export default class CardSlider extends React.Component {
  render() {
    return <div className='card-slider-wrapper'>{this.props.children}</div>;
  }
}
