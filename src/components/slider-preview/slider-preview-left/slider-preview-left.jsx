/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
// Components
import Plate from 'components/plate/plate';

class SliderPreviewLeft extends Component {
  sliderLeft = React.createRef();

  componentDidMount() {
    const { setRef } = this.props;
    setRef('sliderLeft', this.sliderLeft.current);
  }

  render() {
    const { children, slickSettings, sliderRight } = this.props;
    return (
      <Plate.Left>
        <Slider {...slickSettings} asNavFor={sliderRight} ref={this.sliderLeft}>
          {children}
        </Slider>
      </Plate.Left>
    );
  }
}

SliderPreviewLeft.defaultProps = {
  slickSettings: {},
  sliderRight: {},
  setRef: () => {},
};

SliderPreviewLeft.propTypes = {
  setRef: PropTypes.func,
  children: PropTypes.node.isRequired,
  slickSettings: PropTypes.object,
  sliderRight: PropTypes.object,
};

export default SliderPreviewLeft;
