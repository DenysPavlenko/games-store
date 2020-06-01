import React from 'react';
// Components
import Slider from 'react-slick';
import ReviewsListItem from 'components/reviews-list-item/reviews-list-item.component'
import SliderArrow from 'components/slider-arrow/slider-arrow.component'
// Styles
import './reviews-list.styles.sass'

class ReviewsList extends React.Component {

  render() {
    const { reviews } = this.props;
    const slickSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: false,
    };

    return (
      <div className="reviews-list">
        <Slider ref={slider => this.slider = slider} {...slickSettings} >
          {reviews.map(({ id, title, name, rating, review }) => (
            <ReviewsListItem title={title} name={name} review={review} rating={rating} key={id} />
          ))}
        </Slider>
        <div className="reviews-list-slider-control" onMouseOver={() => this.slider.slickPause()} onMouseOut={() => this.slider.slickPlay()}>
          <SliderArrow onClick={() => this.slider.slickPrev()} arrowAlt reversed />
          <SliderArrow onClick={() => this.slider.slickNext()} arrowAlt />
        </div>
      </div>
    )
  }
};

export default ReviewsList;
