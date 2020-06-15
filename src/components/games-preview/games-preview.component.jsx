import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { fetchGamesData } from '../../redux/games/games.actions';
import { selectGames } from '../../redux/games/games.selectors';
// Components
import ErrorIndicator from 'components/error-indicator/error-indicator.component';
import Container from 'components/container/container.component'
import Slider from 'react-slick';
import Plate from 'components/plate/plate.component';
import PlatePlaceholder from 'components/plate/plate-placeholder/plate-placeholder';
import SliderArrow from 'components/slider-arrow/slider-arrow.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
// Styles
import './games-preview.styles.sass';

class GamesPreview extends React.Component {

  static propTypes = {
    games: PropTypes.object.isRequired,
    fetchGamesData: PropTypes.func.isRequired
  }

  slider1 = null;
  slider2 = null;

  state = {
    nav1: null,
    nav2: null
  }

  setSlider1Ref = slider => {
    this.slider1 = slider;
    this.setState({ nav1: slider });
  }

  setSlider2Ref = slider => {
    this.slider2 = slider;
    this.setState({ nav2: slider });
  }

  componentDidMount() {
    this.props.fetchGamesData();
  }

  stopSliders = () => {
    const { nav1, nav2 } = this.state;
    nav1.slickPause();
    nav2.slickPause();
  }

  startSliders = () => {
    const { nav1, nav2 } = this.state;
    nav1.slickPlay();
    nav2.slickPlay();
  }

  nextSlide = () => {
    const { nav1 } = this.state;
    nav1.slickNext();
  }

  prevSlide = () => {
    const { nav1 } = this.state;
    nav1.slickPrev();
  }

  render() {
    const { games, games: { collection } } = this.props;
    const { nav1, nav2 } = this.state;
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

    if (games.error) { return <Container><ErrorIndicator /></Container> }
    if (games.loading) { return <Container><PlatePlaceholder /></Container> }

    return (
      <div className="games-preview" onMouseOver={this.stopSliders} onMouseOut={this.startSliders}>
        <Container>
          <Plate className="games-preview-slider">
            <Plate.Left>
              <Slider {...slickSettings} asNavFor={nav2} ref={this.setSlider1Ref}>
                {collection.map(({ id, image }) => (
                  <Link key={id} to={`/product/${id}`}>
                    <figure className="games-preview-slider-image" style={{ backgroundImage: `url(${image})` }}></figure>
                  </Link>
                ))}
              </Slider>
            </Plate.Left>
            <Plate.Right>
              <div className="games-preview-slider-control">
                <SliderArrow onClick={this.nextSlide} reversed />
                <SliderArrow onClick={this.prevSlide} />
              </div>
              <Slider {...slickSettings} asNavFor={nav1} ref={this.setSlider2Ref}>
                {collection.map(({ id, released, name, rating, platforms }) => (
                  <div key={id} className="games-preview-slider-info">
                    <Typography component="h6" className="text-muted">Release data: {released}</Typography>
                    <Typography component="h2">{name}</Typography>
                    <Typography component="h6" className="text-muted mb-4">
                      Supported platforms: <br /> {platforms.map(({ platform }) => `${platform.name}, `)}
                    </Typography>
                    <Typography component="h6" className="text-muted">Rating: <span className="text-light">{rating}</span></Typography>
                    <Link className="games-preview-slider-info-button" to={`/product/${id}`}>
                      <Button btnArrow>Learn more</Button>
                    </Link>
                  </div>
                ))}
              </Slider>
            </Plate.Right>
          </Plate>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  games: selectGames
});

const mapDispatchToProps = (dispatch) => ({
  fetchGamesData: () => dispatch(fetchGamesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesPreview);
