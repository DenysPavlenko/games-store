import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// Redux
import { fetchGameDetails } from 'redux/game/game.actions';
import { addItemToCart } from 'redux/cart/cart.actions';
import { selectGame } from 'redux/game/game.selectors';
import { selectCartItems } from 'redux/cart/cart.selectors';
// Components
import ProductPagePlaceholder from './product-page-placeholder/product-page-placeholder';
import ErrorIndicator from 'components/error-indicator/error-indicator';
import Container from 'layout/container/container';
import ProductHeader from 'components/product-header/product-header';
import Typography from 'components/typography/typography';
import ProgressItem from 'components/progress-item/progress-item';
import BuyProduct from 'components/buy-product/buy-product';
import SocialIcons from 'components/social-icons/social-icons';
import ReviewsList from 'components/reviews-list/reviews-list'
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
// Socials
import { ReactComponent as Twitter } from 'assets/images/icons/twitter.svg';
import { ReactComponent as Discord } from 'assets/images/icons/discord.svg';
import { ReactComponent as Facebook } from 'assets/images/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/icons/instagram.svg';
import { ReactComponent as Youtube } from 'assets/images/icons/youtube.svg';
// Styles
import './product-page.sass';

const reviews = [
  { id: '1', title: 'Game Informer', name: 'by Matt Miller', rating: '8/10', review: 'Electric catfish leaffish boga flabby whalefish whiting Black mackerel whitetip reef shark--Atlantic herring Rainbow trout four-eyed fish, mooneye Pacific salmon. Gray reef shark perch codling bluntnose knifefish loweye catfish whitefish mud cat loach minnow roundhead. Sargassum fish cornetfish tilapia anglerfish; carpsucker poacher frogfish sheepshead.' },
  { id: '2', title: 'IGN', name: 'by James Duggan', rating: '9/10', review: 'Snipe eel cow shark morwong Black mackerel, lungfish loosejaw. Yellowfin grouper tenuis yellow perch pikeblenny hagfish, sarcastic fringehead, kissing gourami hatchetfish featherfin knifefish sharksucker Red salmon daggertooth pike conger. Beaked salmon, smelt porgy zebrafish anglerfish roach.' },
  { id: '3', title: 'Easy Allies', name: 'by Daniel Bloodworth', rating: '6/10', review: 'Round herring, bonefish bent-tooth sandfish algae eater threespine stickleback alligatorfish dogfish shark. Cownose ray white marlin, dorab, fingerfish Blacksmelt--striped burrfish pickerel, loosejaw wahoo morwong.' },
  { id: '4', title: 'Steam', name: 'by John Doe', rating: '7/10', review: 'Kissing gourami hatchetfish featherfin knifefish sharksucker Red salmon daggertooth pike conger. Beaked salmon, smelt porgy zebrafish anglerfish roach, dorab, fingerfish Blacksmelt--striped burrfish pickerel, loosejaw wahoo morwong.' },
  { id: '5', title: 'Easy gaming', name: 'by Sara Johnson', rating: '10/10', review: 'Black mackerel whitetip reef shark--Atlantic herring Rainbow trout four-eyed fish, mooneye Pacific salmon. Gray reef shark perch codling bluntnose knifefish loweye catfish whitefish mud cat loach minnow roundhead. Sargassum fish cornetfish tilapia anglerfish; carpsucker poacher frogfish sheepshead.' },
];
const socials = [
  { Icon: Twitter, link: 'http://example.com' },
  { Icon: Discord, link: 'http://example.com' },
  { Icon: Facebook, link: 'http://example.com' },
  { Icon: Instagram, link: 'http://example.com' },
  { Icon: Youtube, link: 'http://example.com' },
]

class ProductPage extends Component {
  state = {
    reviews,
    socials,
    inCart: false
  }

  static defaultProps = {
    addItemToCart: () => { }
  }

  static propTypes = {
    game: PropTypes.object.isRequired,
    cartItems: PropTypes.array.isRequired,
    fetchGameDetails: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func,
  }

  componentDidMount() {
    const { fetchGameDetails, match: { params }, cartItems } = this.props;
    fetchGameDetails(params.gameId);
    this.productInCart(cartItems, +params.gameId);
  }

  componentDidUpdate(prevProps) {
    const { cartItems, match: { params } } = this.props;
    if (prevProps.cartItems !== cartItems) {
      this.productInCart(cartItems, +params.gameId);
    }
  }

  productInCart = (cartItems, gameId) => {
    const existingItem = cartItems.some(cartItem => cartItem.id === gameId);
    this.setState({ inCart: existingItem });
  }

  render() {
    const { game: { loading, data, error, errorDetails }, addItemToCart, history } = this.props;
    const { reviews, socials, inCart } = this.state;

    if (errorDetails && errorDetails.message === '404') { return <Redirect to="/404" /> }
    if (error) return (<div className="product"><ErrorIndicator /></div>)
    if (loading) return (<ProductPagePlaceholder />)
    const { id, image, previews, name, price, description, developers, publishers, platforms, genres, released, rating, ratings } = data;

    return (
      <div className="product">
        <Breadcrumbs routes={[name]} />

        <Container>

          <ProductHeader className="product-header" previews={previews} />

          <BuyProduct inCart={inCart} price={price} name={name} className="product-buy" onCartClick={() => addItemToCart({ id, image, name, price })} onButtonClick={() => { history.push('/checkout'); addItemToCart({ id, image, name, price }); }} />

          <div className="product-description">
            <div className="product-description-title">
              <Typography component="h4">About Game</Typography>
            </div>
            <div className="product-description-content">
              <div className="product-table">
                <ProductTableItem title="Genre" property={genres} />
                <ProductTableItem title="Developer" property={developers} />
                <ProductTableItem title="Publisher" property={publishers} />
                <ProductTableItem title="Platform" property={platforms} />
                <ProductTableItem title="Release Date" property={released} />
                <ProductTableItem title="Rating" property={rating} />
              </div>
              <Typography component="h2">{name}</Typography>
              <Typography component="p" className="mb-0 text-muted">{description}</Typography>
            </div>
          </div>

          <div className="product-description">
            <div className="product-description-title">
              <Typography component="h4">Ratings</Typography>
            </div>
            <div className="product-description-content">
              <div className="product-ratings">
                {ratings.map(({ id, title, percent }) => (
                  <div className="product-rating" key={id}>
                    <ProgressItem percents={percent} title={title.replace(/^\w/, l => l.toUpperCase())} />
                  </div>
                ))}
              </div>
              <div className="product-reviews">
                <ReviewsList reviews={reviews} />
              </div>
            </div>
          </div>

          <div className="product-description">
            <div className="product-description-title">
              <Typography component="h4">Follow us</Typography>
            </div>
            <div className="product-description-content">
              <div className="product-socials">
                <SocialIcons socials={socials} />
              </div>
            </div>
          </div>

        </Container>
      </div>
    );
  }
};

const ProductTableItem = ({ title, property }) => (
  <div className="product-table-item">
    <Typography component="h5" className="text-muted">
      {property.length > 1 ? `${title}s` : title}
    </Typography>
    <Typography component="h6" className="mb-0">{typeof property === 'object' ? property.join(', ') : property}</Typography>
  </div>
)

const mapStateToProps = createStructuredSelector({
  game: selectGame,
  cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
  fetchGameDetails: (gameId) => dispatch(fetchGameDetails(gameId)),
  addItemToCart: (item) => dispatch(addItemToCart(item))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));
