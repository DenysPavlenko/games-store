/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// Components
import Plate from 'components/plate/plate';
// Assets
import SliderArrow from 'components/slider-arrow/slider-arrow';
// Styles
import './slider-preview-right.sass';

class SliderPreviewRight extends Component {
  sliderRight = React.createRef();

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderRight', this.sliderRight.current);
  }

  render() {
    const { children, slickSettings, nextSlide, sliderLeft, prevSlide } =
      this.props;
    return (
      <Plate.Right className="slider-preview-right">
        <div className="slider-preview-right-slider-control">
          <SliderArrow onClick={prevSlide} reversed />
          <SliderArrow onClick={nextSlide} />
        </div>
        <Slider asNavFor={sliderLeft} {...slickSettings} ref={this.sliderRight}>
          {children}
        </Slider>
      </Plate.Right>
    );
  }
}

SliderPreviewRight.defaultProps = {
  setRef: () => {},
  slickSettings: {},
  sliderLeft: {},
  nextSlide: () => {},
  prevSlide: () => {},
};

SliderPreviewRight.propTypes = {
  setRef: PropTypes.func,
  children: PropTypes.node.isRequired,
  slickSettings: PropTypes.object,
  sliderLeft: PropTypes.object,
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};

export default SliderPreviewRight;
