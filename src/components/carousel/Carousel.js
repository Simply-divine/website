import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carouselStyles.css';

const CarouselCard = () => {
  return (
    <div class='item carousel-card'>
      <img src='https://picsum.photos/100/100' alt='product' />
      <div className='card-content'>
        <p className='title'>Zinc Serum</p>
        <p className='tagline'>Reduces pores and dark circles</p>
        <p className='price'>₹649.00</p>
        <button className='add-to-cart-btn'>Add to cart</button>
      </div>
    </div>
  );
};

class Carousel extends React.Component {
  render() {
    return (
      <div className='carousel-wrap'>
        <OwlCarousel
          className='owl-theme'
          margin={10}
          nav
          navText={[
            "<div class='nav-btn prev-slide'></div>",
            "<div class='nav-btn next-slide'></div>",
          ]}
          responsive={{
            0: {
              items: 1, // Number of items to display for different screen sizes
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          }}
        >
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
        </OwlCarousel>
      </div>
    );
  }
}

export default Carousel;
