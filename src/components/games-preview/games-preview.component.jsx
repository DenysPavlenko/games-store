import React from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { fetchGamesData } from '../../redux/games/games.actions';
import { gamesSelectorsData } from '../../redux/games/games.selectors';
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
import './games-preview.styles.sass'

class GamesPreview extends React.Component {
  componentDidMount() {
    this.props.fetchGamesData()
  }
  render() {
    const { games } = this.props;
    const { collection } = games;
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
      <div className="games-preview">
        <Container>
          <div className="games-preview-slider-wrapper">
            <div className="games-preview-slider-control" onMouseOver={() => this.slider.slickPause()} onMouseOut={() => this.slider.slickPlay()}>
              <SliderArrow onClick={() => this.slider.slickPrev()} reversed />
              <SliderArrow onClick={() => this.slider.slickNext()} />
            </div>
            <Slider {...slickSettings} ref={slider => this.slider = slider} >
              {collection.map(({ id, image, released, name, rating, platforms }) => (
                <Plate key={id} className="games-preview-slider">
                  <Plate.Left>
                    <Link to={`/product/${id}`}>
                      <figure className="games-preview-slider-image" style={{ backgroundImage: `url(${image})` }}></figure>
                    </Link>
                  </Plate.Left>
                  <Plate.Right className="games-preview-slider-info">
                    <Typography component="h6" className="text-muted">Release data: {released}</Typography>
                    <Typography component="h2">{name}</Typography>
                    <Typography component="h6" className="text-muted mb-4">
                      Supported platforms: <br /> {platforms.map(({ platform }) => `${platform.name}, `)}
                    </Typography>
                    <Typography component="h6" className="text-muted">Rating: <span className="text-light">{rating}</span></Typography>
                    <Link className="games-preview-slider-info-button" to={`/product/${id}`}>
                      <Button btnArrow>Learn more</Button>
                    </Link>
                  </Plate.Right>
                </Plate>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  games: gamesSelectorsData
});

const mapDispatchToProps = (dispatch) => ({
    fetchGamesData: () => dispatch(fetchGamesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesPreview);