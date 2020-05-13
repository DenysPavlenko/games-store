import React from 'react';
import { withRouter } from 'react-router-dom';
// Components
import CardImage from './card-image/card-image.component'
import CardInfo from './card-info/card-info.component'
// Styles
import './card.styles.sass'

class Card extends React.Component {
  static Image = CardImage;
  static Info = CardInfo;

  render() {
    const { children, onClick } = this.props;
    return (
      <div className="card" onClick={onClick}>
        {React.Children.map(children, child => (
          React.cloneElement(child, {})
        ))}
      </div>
    )
  }
}

export default withRouter(Card);