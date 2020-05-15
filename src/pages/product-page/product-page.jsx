import React from 'react';
import { connect } from 'react-redux';
// Redux actions
import { fetchGameDetails } from 'redux/game/game.actions';
import { addItemToCart } from 'redux/cart/cart.actions';
// Components
import ProductPagePlaceholder from './product-page-placeholder/product-page-placeholder';
import ErrorIndicator from 'components/error-indicator/error-indicator.component';
import Container from 'components/container/container.component';
import ProductHeader from 'components/product-header/product-header.component';
import Typography from 'components/typography/typography.component';
import ProgressItem from 'components/progress-item/progress-item.component';
import BuyProduct from 'components/buy-product/buy-product.component';
import SocialIcons from 'components/social-icons/social-icons.component';
import ReviewsList from 'components/reviews-list/reviews-list.component'
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs.component';
// Socials
import { ReactComponent as Twitter } from 'assets/images/icons/twitter.svg';
import { ReactComponent as Discord } from 'assets/images/icons/discord.svg';
import { ReactComponent as Facebook } from 'assets/images/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/icons/instagram.svg';
import { ReactComponent as Youtube } from 'assets/images/icons/youtube.svg';
// Styles
import './product-page.sass'

const reviews = [
  { id: '1', title: 'Game Informer', name: 'by Matt Miller', rating: '8/10', review: 'Electric catfish leaffish boga flabby whalefish whiting Black mackerel whitetip reef shark--Atlantic herring Rainbow trout four-eyed fish, mooneye Pacific salmon. Gray reef shark perch codling bluntnose knifefish loweye catfish whitefish mud cat loach minnow roundhead. Sargassum fish cornetfish tilapia anglerfish; carpsucker poacher frogfish sheepshead.' },
  { id: '2', title: 'IGN', name: 'by James Duggan', rating: '9/10', review: 'Snipe eel cow shark morwong Black mackerel, lungfish loosejaw. Yellowfin grouper tenuis yellow perch pikeblenny hagfish, sarcastic fringehead, kissing gourami hatchetfish featherfin knifefish sharksucker Red salmon daggertooth pike conger. Beaked salmon, smelt porgy zebrafish anglerfish roach.' },
  { id: '3', title: 'Easy Allies', name: 'by Daniel Bloodworth', rating: '6/10', review: 'Round herring, bonefish bent-tooth sandfish algae eater threespine stickleback alligatorfish dogfish shark. Cownose ray white marlin, dorab, fingerfish Blacksmelt--striped burrfish pickerel, loosejaw wahoo morwong.' },
  { id: '4', title: 'Steam', name: 'by John Doe', rating: '7/10', review: 'Kissing gourami hatchetfish featherfin knifefish sharksucker Red salmon daggertooth pike conger. Beaked salmon, smelt porgy zebrafish anglerfish roach, dorab, fingerfish Blacksmelt--striped burrfish pickerel, loosejaw wahoo morwong.' },
  { id: '5', title: 'Easy gaming', name: 'by Sara Johnson', rating: '10/10', review: 'Black mackerel whitetip reef shark--Atlantic herring Rainbow trout four-eyed fish, mooneye Pacific salmon. Gray reef shark perch codling bluntnose knifefish loweye catfish whitefish mud cat loach minnow roundhead. Sargassum fish cornetfish tilapia anglerfish; carpsucker poacher frogfish sheepshead.' },
];

class ProductPage extends React.Component {
  state = {
    reviews,
    socials: [
      { Icon: Twitter, link: 'http://example.com' },
      { Icon: Discord, link: 'http://example.com' },
      { Icon: Facebook, link: 'http://example.com' },
      { Icon: Instagram, link: 'http://example.com' },
      { Icon: Youtube, link: 'http://example.com' },
    ],
    inCart: false
  }

  componentDidMount() {
    const { fetchGameDetails, match: { params }, cart: { cartItems } } = this.props;
    fetchGameDetails(params.gameId);
    const existingItem = cartItems.some(cartItem => cartItem.id === +params.gameId);
    if (existingItem) {
      this.setState({ inCart: existingItem });
    }
  }

  render() {
    const { game: { error, loading, data }, addItemToCart } = this.props;
    const { reviews, socials, inCart } = this.state;

    if (error) return (<div className="product"><ErrorIndicator /></div>)
    if (loading) return (<ProductPagePlaceholder />)

    const { id, image, previews, name, price, description, developers, publishers, platforms, genres, released, rating, ratings } = data;

    return (
      <div className="product">
        <Breadcrumbs routes={[name]} />

        <Container>

          <ProductHeader className="product-header" previews={previews} />

          <BuyProduct inCart={inCart} price={price} name={name} className="product-buy" onCartClick={() => {
            this.setState({ inCart: true });
            addItemToCart({ id, image, name, price });
          }} />

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

const mapStateToProps = state => {
  return {
    game: state.game,
    cart: state.cart,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchGameDetails: (gameId) => dispatch(fetchGameDetails(gameId)),
    addItemToCart: (item) => dispatch(addItemToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
