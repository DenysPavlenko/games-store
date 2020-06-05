import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/user/user.selectors';
import { userSignOut } from 'redux/user/user.actions';
// Components
import Button from 'components/button/button.component';
import CartIcon from 'components/cart-icon/cart-icon.component';
import Modal from 'components/modal/modal.component';
import SignIn from 'components/sign-in/sign-in.component';
import SignUp from 'components/sign-up/sign-up.component';
import Typography from 'components/typography/typography.component';
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

class Navigation extends React.Component {
  state = {
    showModal: false,
    register: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      register: false
    }))
  }

  switchForm = () => {
    this.setState(({ register }) => ({ register: !register }))
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
    const { showModal, register } = this.state;
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
            <Button className="navigation-button" onClick={userSignOut}>Sign Out</Button>
            :
            <Button className="navigation-button" onClick={this.toggleModal}>Sign In</Button>
          }
        </div>
        <Modal hidden={!showModal} closeModal={() => this.setState({ showModal: false })} small>
          <div className="navigation-modal-wrap">
            {!register ?
              <SignIn />
              :
              <SignUp />
            }
            <div className="navigation-modal-switch">
              <Typography component="span" variant="p" className="text-accent navigation-modal-switch-title mb-0" onClick={this.switchForm}>
                {!register ?
                  'Create a new account'
                  :
                  'Use an existing account'
                }
              </Typography>
            </div>
          </div>
        </Modal>
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
