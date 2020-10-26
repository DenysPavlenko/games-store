import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// Components
import CardImage from './card-image/card-image';
import CardInfo from './card-info/card-info';
// Styles
import './card.sass';

class Card extends React.Component {
  static Image = CardImage;
  static Info = CardInfo;

  static defaultProps = {
    onClick: () => { },
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

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
