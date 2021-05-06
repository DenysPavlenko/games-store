import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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

export const UnconnectedNavigation = ({ user, user: { currentUser } }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const toggleModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);
  const navMenuToggle = () => setIsMenuOpened(!isMenuOpened);
  const navMenuHide = () => isMenuOpened && navMenuToggle();

  React.useEffect(() => {
    /* istanbul ignore else */
    if (showModal && currentUser) {
      closeModal();
    }
  }, [currentUser, showModal]);

  const navMenuClasses = classNames({
    'navigation-menu': true,
    'is-active': isMenuOpened,
  });

  return (
    <div className="navigation">
      <Link to="/" className="navigation-logo" >
        <Logo />
      </Link>
      <div className={navMenuClasses}>
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
      <SignInSignUpModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

UnconnectedNavigation.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(UnconnectedNavigation);
