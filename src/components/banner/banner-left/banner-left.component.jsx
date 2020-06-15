import React from 'react';
import Slider from 'react-slick';
// Styles
import './banner-left.styles.sass';

class BannerLeft extends React.Component {
  sliderLeft = React.createRef();

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderLeft', this.sliderLeft.current)
  }

  render() {
    const { children, slickSettings, sliderRight } = this.props;
    return (
      <div className="banner-left">
        <Slider {...slickSettings} asNavFor={sliderRight} ref={this.sliderLeft}>
          {children}
        </Slider>
      </div>
    )
  }
};

export default BannerLeft;
