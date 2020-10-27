import React, { Component } from 'react';
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

class Navigation extends Component {
  burgerRef = React.createRef();
  navMenuRef = React.createRef();

  state = {
    showModal: false,
    register: false,
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      register: false
    }))
  }

  navMenuToggle = () => {
    const burger = this.burgerRef.current;
    const navMenu = this.navMenuRef.current;
    burger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  }

  navMenuHide = () => {
    const navMenu = this.navMenuRef.current;
    const burger = this.burgerRef.current;
    if (navMenu.classList.contains('is-active')) {
      burger.classList.remove('is-active');
      navMenu.classList.remove('is-active');
    }
  }

  componentDidUpdate(prevProps) {
    const { user: { currentUser } } = this.props;
    const { showModal } = this.state;
    if (prevProps.user.currentUser !== currentUser && showModal) {
      this.toggleModal();
    }
  }

  render() {
    const { user: { currentUser } } = this.props;
    const { showModal } = this.state;
    return (
      <div className="navigation">
        <Link to="/" className="navigation-logo" >
          <Logo />
        </Link>
        <div ref={this.navMenuRef} className="navigation-menu">
          <ul className="navigation-list">
            {nav.map(({ name, rootName }, idx) => (
              <li key={idx} onClick={this.navMenuHide} className="navigation-list-item">
                <NavLink to={rootName} exact={rootName === '/' && true} className="navigation-list-link">{name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navigation-user">
          <CartIcon />
          {currentUser ?
            <div className="navigation-user-dropdown">
              <UserDropdown userName={currentUser.displayName} />
            </div>
            :
            <Button className="navigation-button" onClick={this.toggleModal}>Sign In</Button>
          }
        </div>
        <Burger ref={this.burgerRef} className="navigation-burger" onClick={this.navMenuToggle} />
        <SignInSignUpModal showModal={showModal} closeModal={() => this.setState({ showModal: false })} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps, null)(Navigation);
