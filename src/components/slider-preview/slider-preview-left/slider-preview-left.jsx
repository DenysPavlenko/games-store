import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// Components
import Plate from 'components/plate/plate';

class SliderPreviewLeft extends Component {
  sliderLeft = React.createRef();

  static propTypes = {
    setRef: PropTypes.func
  };

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderLeft', this.sliderLeft.current)
  };

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

export default SliderPreviewLeft;
