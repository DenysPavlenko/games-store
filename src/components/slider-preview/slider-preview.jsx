import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import Container from 'grid/container/container';
import Plate from 'components/plate/plate';
import PlatePlaceholder from 'components/placeholders/plate-placeholder/plate-placeholder';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import SliderPreviewLeft from './slider-preview-left/slider-preview-left';
import SliderPreviewRight from './slider-preview-right/slider-preview-right';
// Styles
import './slider-preview.sass';

class SliderPreview extends Component {
  static Left = SliderPreviewLeft;

  static Right = SliderPreviewRight;

  state = {
    sliderRight: null,
    sliderLeft: null,
  };

  stopSliders = () => {
    const { sliderRight, sliderLeft } = this.state;
    sliderRight.slickPause();
    sliderLeft.slickPause();
  };

  startSliders = () => {
    const { sliderRight, sliderLeft } = this.state;
    sliderRight.slickPlay();
    sliderLeft.slickPlay();
  };

  nextSlide = () => {
    const { sliderRight } = this.state;
    sliderRight.slickNext();
  };

  prevSlide = () => {
    const { sliderRight } = this.state;
    sliderRight.slickPrev();
  };

  setRef = (refName, ref) => {
    this.setState({
      [refName]: ref,
    });
  };

  render() {
    const { children, isLoading, hasError, className } = this.props;
    const { sliderLeft, sliderRight } = this.state;
    const slickSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      swipe: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      fade: true,
    };

    const classes = classNames({
      'slider-preview': true,
      [className]: className,
    });

    if (hasError) {
      return (
        <div className={classes}>
          <Container>
            <ErrorIndicator />
          </Container>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className={classes}>
          <Container>
            <PlatePlaceholder />
          </Container>
        </div>
      );
    }

    return (
      <Container>
        <Plate
          className={classes}
          onMouseOver={this.stopSliders}
          onMouseLeave={this.startSliders}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              slickSettings,
              sliderLeft,
              sliderRight,
              setRef: this.setRef,
              nextSlide: this.nextSlide,
              prevSlide: this.prevSlide,
            })
          )}
        </Plate>
      </Container>
    );
  }
}

SliderPreview.defaultProps = {
  className: '',
};

SliderPreview.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default SliderPreview;
