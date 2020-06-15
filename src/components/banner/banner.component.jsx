import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
// Components
import Container from 'components/container/container.component';
import BannerLeft from './banner-left/banner-left.component';
import BannerRight from './banner-right/banner-right.component';
import BannerPlaceholder from './banner-placeholder/banner-placeholder';
import ErrorIndicator from 'components/error-indicator/error-indicator.component';
// Styles
import './banner.styles.sass';

class Banner extends React.Component {

  static Left = BannerLeft;
  static Right = BannerRight;

  state = {
    sliderRight: null,
    sliderLeft: null
  }

  stopSliders = () => {
    const { sliderRight, sliderLeft } = this.state;
    sliderRight.slickPause();
    sliderLeft.slickPause();
  }

  startSliders = () => {
    const { sliderRight, sliderLeft } = this.state;
    sliderRight.slickPlay();
    sliderLeft.slickPlay();
  }

  nextSlide = () => {
    const { sliderRight } = this.state;
    sliderRight.slickNext();
  }

  prevSlide = () => {
    const { sliderRight } = this.state;
    sliderRight.slickPrev();
  }

  setRef = (refName, ref) => {
    this.setState({
      [refName]: ref
    });
  }

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
      'banner': true,
      [className]: className
    });

    if (hasError) { return <div className={classes}><Container><ErrorIndicator /></Container></div> }
    if (isLoading) { return <div className={classes}><Container><BannerPlaceholder /></Container></div> }

    return (
      <div className={classes}>
        <Container>
          <div className="banner-wrapper" onMouseOver={this.stopSliders} onMouseOut={this.startSliders}>
            {React.Children.map(children, child => (
              React.cloneElement(child, {
                slickSettings,
                sliderLeft,
                sliderRight,
                setRef: this.setRef,
                nextSlide: this.nextSlide,
                prevSlide: this.prevSlide,
              })
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Banner;
