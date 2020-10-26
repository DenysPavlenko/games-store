import React from 'react';
import Slider from 'react-slick';
// Assets
import SliderArrow from 'components/slider-arrow/slider-arrow';
// Styles
import './banner-right.sass';

class BannerRight extends React.Component {
  sliderRight = React.createRef();

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderRight', this.sliderRight.current)
  }

  render() {
    const { children, slickSettings, nextSlide, sliderLeft, prevSlide } = this.props
    return (
      <div className="banner-right">
        <div className="banner-right-slider-control">
          <SliderArrow onClick={nextSlide} reversed />
          <SliderArrow onClick={prevSlide} />
        </div>
        <Slider asNavFor={sliderLeft} {...slickSettings} ref={this.sliderRight}>
          {children}
        </Slider>
      </div>
    );
  }
};

export default BannerRight;
