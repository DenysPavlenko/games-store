import React, { useRef, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import SliderArrow from 'components/slider-arrow/slider-arrow';
import Figure from 'components/figure/figure';
import Slider from 'react-slick';
// Styles
import './product-header.sass';

const ProductHeader = ({ previews, className }) => {
  let sliderRef = useRef(null);
  let videoRef = {};

  const handleVideo = (currentIndex) => {
    const video = videoRef.current;
    const idx = videoRef.idx;
    currentIndex === idx ? video.play() : video.pause();
  }

  const classes = classNames({
    'product-header': true,
    [className]: className
  });

  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    afterChange: (currentIndex) => {
      handleVideo(currentIndex);
    }
  };

  const setVideoRef = (ref, i) => {
    if (videoRef.idx !== i) {
      videoRef = { idx: i, current: ref };
    }
  }

  return (
    <div className={classes}>
      <div className="product-header-slider-control">
        <SliderArrow onClick={() => sliderRef.slickPrev()} arrowAlt reversed />
        <SliderArrow onClick={() => sliderRef.slickNext()} arrowAlt />
      </div>
      <Slider {...slickSettings} ref={slider => sliderRef = slider} >
        {previews.map((preview, idx) => (
          (/\.(mp4|ogg)$/i).test(preview) ?
            (
              <ProductHeaderVideo key={idx} preview={preview} ref={(ref) => { setVideoRef(ref, idx) }} />
            )
            :
            <ProductHeaderImage key={idx} preview={preview} />
        ))}
      </Slider>
    </div>
  );
};


ProductHeader.defaultProps = {
  className: ''
}

ProductHeader.propTypes = {
  previews: PropTypes.array.isRequired,
  className: PropTypes.string
}

const ProductHeaderVideo = forwardRef(({ preview }, ref) => (
  <div className="product-header-video">
    <video ref={ref} controls>
      <source src={preview} type="video/mp4" />
    </video>
  </div>
));

const ProductHeaderImage = ({ preview }) => (
  <div className="product-header-image">
    <Figure className="product-header-image" image={preview} />
  </div>
);

export default ProductHeader;
