import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { selectUser } from 'redux/user/user.selectors';
import { userSignOut } from 'redux/user/user.actions';
// Components
import Button from 'components/button/button';
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

class Navigation extends React.Component {
  state = {
    showModal: false,
    register: false,
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    userSignOut: PropTypes.func.isRequired,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      register: false
    }))
  }

  componentDidUpdate(prevProps) {
    const { user: { currentUser } } = this.props;
    const { showModal } = this.state;
    if (prevProps.user.currentUser !== currentUser && showModal) {
      this.toggleModal();
    }
  }

  render() {
    const { user: { currentUser }, userSignOut } = this.props;
    const { showModal } = this.state;
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
          {currentUser ?
            <div className="navigation-user-dropdown">
              <Button className="navigation-button" onClick={userSignOut}>Sign Out</Button>
              <UserDropdown />
            </div>
            :
            <Button className="navigation-button" onClick={this.toggleModal}>Sign In</Button>
          }
        </div>
        <SignInSignUpModal showModal={showModal} closeModal={() => this.setState({ showModal: false })} />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(userSignOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
