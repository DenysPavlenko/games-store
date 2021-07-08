/* eslint-disable jsx-a11y/media-has-caption */
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import SliderArrow from 'components/slider-arrow/slider-arrow';
import Figure from 'components/figure/figure';
import Slider from 'react-slick';
// Styles
import './product-header.sass';

const ProductHeader = ({ previews, className }) => {
  let sliderRef = React.useRef(null);
  let videoRef = {};

  const handleVideo = (currentIndex) => {
    const video = videoRef.current;
    /* istanbul ignore else */
    if (video) {
      const { idx } = videoRef;
      if (currentIndex === idx) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const classes = classNames({
    'product-header': true,
    [className]: className,
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
    },
  };

  const setVideoRef = (ref, i) => {
    if (videoRef.idx !== i) {
      videoRef = { idx: i, current: ref };
    }
  };

  return (
    <div className={classes}>
      {previews.length > 1 ? (
        <>
          <div className="product-header-slider-control">
            <SliderArrow
              onClick={() => sliderRef.slickPrev()}
              arrowAlt
              reversed
            />
            <SliderArrow onClick={() => sliderRef.slickNext()} arrowAlt />
          </div>
          <Slider
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...slickSettings}
            ref={(slider) => {
              sliderRef = slider;
            }}
          >
            {previews.map((preview, idx) => (
              <ContentToShow
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                preview={preview}
                ref={(ref) => setVideoRef(ref, idx)}
              />
            ))}
          </Slider>
        </>
      ) : (
        <ContentToShow preview={previews[0]} />
      )}
    </div>
  );
};

ProductHeader.defaultProps = {
  className: '',
};

ProductHeader.propTypes = {
  previews: PropTypes.array.isRequired,
  className: PropTypes.string,
};

// eslint-disable-next-line react/prop-types
const ContentToShow = forwardRef(({ preview }, ref) => {
  return (
    <>
      {/\.(mp4|ogg)$/i.test(preview) ? (
        <div className="product-header-video">
          <video ref={ref} controls>
            <source src={preview} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="product-header-image">
          <Figure className="product-header-image" image={preview} />
        </div>
      )}
    </>
  );
});

export default ProductHeader;
