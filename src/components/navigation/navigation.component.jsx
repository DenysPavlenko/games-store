import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// Components
import Button from 'components/button/button.component';
import CartIcon from 'components/cart-icon/cart-icon.component';
// Styles
import "./navigation.styles.sass";
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const nav = [
  { name: 'Home', rootName: '/' },
  { name: 'Genres', rootName: '/categories/genres' },
  { name: 'Developers', rootName: '/categories/developers' },
  { name: 'Platforms', rootName: '/categories/platforms' },
]

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-menu">
        <Link to="/">
          <Logo className="navigation-logo" />
        </Link>
        <ul className="navigation-list">
          {nav.map(({ name, rootName }, idx) => (
            <li key={idx} className="navigation-list-item">
              <NavLink to={rootName} exact={rootName === '/' && true} className="navigation-list-link">{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation-user">
        <CartIcon />
        <Button className="navigation-button">Sign In</Button>
      </div>
    </div>
  );
};

export default Navigation;
