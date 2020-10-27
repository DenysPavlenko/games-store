import React, { Component } from 'react';
import Slider from 'react-slick';
// Components
import Plate from 'components/plate/plate';

class BannerLeft extends Component {
  sliderLeft = React.createRef();

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderLeft', this.sliderLeft.current)
  }

  render() {
    const { children, slickSettings, sliderRight } = this.props;
    return (
      <Plate.Left>
        <Slider {...slickSettings} asNavFor={sliderRight} ref={this.sliderLeft}>
          {children}
        </Slider>
      </Plate.Left>
    )
  }
};

export default BannerLeft;
