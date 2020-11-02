import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Components
import Slider from 'react-slick';
import ReviewsListItem from 'components/reviews-list-item/reviews-list-item';
import SliderArrow from 'components/slider-arrow/slider-arrow';
// Styles
import './reviews-list.sass';

const ReviewsList = ({ reviews }) => {
  let sliderRef = useRef(null);
  const slickSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="reviews-list">
      <Slider ref={slider => sliderRef = slider} {...slickSettings} >
        {reviews.map(({ id, title, name, rating, review }) => (
          <ReviewsListItem title={title} name={name} review={review} rating={rating} key={id} />
        ))}
      </Slider>
      <div className="reviews-list-slider-control" onMouseOver={() => sliderRef.slickPause()} onMouseOut={() => sliderRef.slickPlay()}>
        <SliderArrow onClick={() => sliderRef.slickPrev()} arrowAlt reversed />
        <SliderArrow onClick={() => sliderRef.slickNext()} arrowAlt />
      </div>
    </div>
  )
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default ReviewsList;
