import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Components
import Button from 'components/button/button';
import Burger from 'components/burger/burger';
import UserDropdown from 'components/user-dropdown/user-dropdown';
import SignInSignUpModal from 'components/sign-in-sign-up-modal/sign-in-sign-up-modal';
import CartIcon from 'components/cart-icon/cart-icon';
// Styles
import "./navigation.sass";
// Assets
import { ReactComponent as Logo } from 'assets/images/logo.svg';

const nav = [
  { name: 'Home', rootName: '/' },
  { name: 'Genres', rootName: '/categories/genres' },
  { name: 'Developers', rootName: '/categories/developers' },
  { name: 'Platforms', rootName: '/categories/platforms' },
];

const Navigation = ({ user: { currentUser } }) => {

  const [showModal, setShowModal] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const navMenuToggle = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  const navMenuHide = () => {
    if (isMenuOpened) {
      setIsMenuOpened(false);
    }
  }

  useEffect(() => {
    if (showModal && currentUser) {
      setShowModal(false);
    }
  }, [currentUser, showModal]);

  return (
    <div className="navigation">
      <Link to="/" className="navigation-logo" >
        <Logo />
      </Link>
      <div className={`navigation-menu ${isMenuOpened ? 'is-active' : ''}`}>
        <ul className="navigation-list">
          {nav.map(({ name, rootName }, idx) => (
            <li key={idx} onClick={navMenuHide} className="navigation-list-item">
              <NavLink to={rootName} exact={rootName === '/' && true} className="navigation-list-link">{name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navigation-user">
        <CartIcon />
        {currentUser ?
          <div className="navigation-user-dropdown">
            <UserDropdown avatar={currentUser.avatar} userName={currentUser.displayName} />
          </div>
          :
          <Button className="navigation-button" onClick={toggleModal}>Sign In</Button>
        }
      </div>
      <Burger className="navigation-burger" onClick={navMenuToggle} />
      <SignInSignUpModal showModal={showModal} closeModal={() => setShowModal(false)} />
    </div>
  );
};

Navigation.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps, null)(Navigation);
