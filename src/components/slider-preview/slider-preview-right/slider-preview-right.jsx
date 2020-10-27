import React from 'react';
import Slider from 'react-slick';
// Components
import Plate from 'components/plate/plate';
// Assets
import SliderArrow from 'components/slider-arrow/slider-arrow';
// Styles
import './slider-preview-right.sass';

class BannerRight extends React.Component {
  sliderRight = React.createRef();

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderRight', this.sliderRight.current)
  }

  render() {
    const { children, slickSettings, nextSlide, sliderLeft, prevSlide } = this.props
    return (
      <Plate.Right className="slider-preview-right">
        <div className="slider-preview-right-slider-control">
          <SliderArrow onClick={nextSlide} reversed />
          <SliderArrow onClick={prevSlide} />
        </div>
        <Slider asNavFor={sliderLeft} {...slickSettings} ref={this.sliderRight}>
          {children}
        </Slider>
      </Plate.Right>
    );
  }
};

export default BannerRight;
