import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// Components
import SliderArrow from 'components/slider-arrow/slider-arrow';
import Figure from 'components/figure/figure';
import Slider from 'react-slick';
// Styles
import './product-header.sass';

class ProductHeader extends React.Component {

  state = {
    videoIndex: 0
  }

  static defaultProps = {
    className: ''
  }

  static propTypes = {
    previews: PropTypes.array.isRequired,
    className: PropTypes.string
  }

  componentDidMount() {
    const { previews } = this.props;
    const { videoIndex } = this.state;
    const currentVideoIndex = previews.findIndex(preview => (/\.(mp4|ogg)$/i).test(preview));
    this.handleVideo(videoIndex === currentVideoIndex);
    this.setState({ videoIndex: currentVideoIndex });
  }

  handleVideo = isActive => {
    const video = document.querySelector('.product-header-video video');
    if (video) {
      isActive ? video.play() : video.pause();
    }
  }

  render() {
    const { videoIndex } = this.state;
    const { previews, className } = this.props;
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
        this.handleVideo(videoIndex === currentIndex);
      }
    };
    return (
      <div className={classes}>
        <div className="product-header-slider-control">
          <SliderArrow onClick={() => this.slider.slickPrev()} arrowAlt reversed />
          <SliderArrow onClick={() => this.slider.slickNext()} arrowAlt />
        </div>
        <Slider {...slickSettings} ref={slider => this.slider = slider} >
          {previews.map((preview, idx) => (
            (/\.(mp4|ogg)$/i).test(preview) ?
              (
                <ProductHeaderVideo key={idx} preview={preview} />
              )
              :
              <ProductHeaderImage key={idx} preview={preview} />
          ))}
        </Slider>
      </div>
    );
  }
};

const ProductHeaderVideo = ({ preview }) => (
  <div className="product-header-video">
    <video controls>
      <source src={preview} type="video/mp4" />
    </video>
  </div>
);

const ProductHeaderImage = ({ preview }) => (
  <div className="product-header-image">
    <Figure className="product-header-image" image={preview} />
  </div>
);

export default ProductHeader;
