import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
// Components
import Button from 'components/button/button.component'
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

const Navigation = ({ history, match }) => {
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
      <Button className="navigation-button">Sign In</Button>
    </div>
  );
};

export default withRouter(Navigation);