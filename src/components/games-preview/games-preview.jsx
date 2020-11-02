import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';
import { fetchGamesData } from '../../redux/games/games.actions';
import { selectGames } from '../../redux/games/games.selectors';
// Components
import SliderPreview from 'components/slider-preview/slider-preview';
import Figure from 'components/figure/figure';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
// Styles
import './games-preview.sass';

const GamesPreview = ({ games: { loading, error, collection }, fetchGamesData }) => {

  useEffect(() => {
    fetchGamesData();
  }, [fetchGamesData]);

  return (
    <div className="games-preview">
      <SliderPreview className="games-preview-slider" isLoading={loading} hasError={error}>
        <SliderPreview.Left>
          {collection.map(({ id, image }) => (
            <Link key={id} to={`/product/${id}`}>
              <Figure image={image}></Figure>
            </Link>
          ))}
        </SliderPreview.Left>
        <SliderPreview.Right>
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
        </SliderPreview.Right>
      </SliderPreview>
    </div>
  );
}

GamesPreview.propTypes = {
  games: PropTypes.object.isRequired,
  fetchGamesData: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  games: selectGames
});

const mapDispatchToProps = (dispatch) => ({
  fetchGamesData: () => dispatch(fetchGamesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesPreview);
