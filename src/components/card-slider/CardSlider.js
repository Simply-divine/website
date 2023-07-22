import React from 'react';
import { CardSliderWrapper } from './CardSliderStyles';

export default class CardSlider extends React.Component {
  render() {
    return <CardSliderWrapper>{this.props.children}</CardSliderWrapper>;
  }
}
