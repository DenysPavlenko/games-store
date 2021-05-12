import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Components
import Modal from 'components/modal/modal';
import SignIn from 'components/sign-in/sign-in';
import SignUp from 'components/sign-up/sign-up';
import Typography from 'components/typography/typography';
// Styles
import './sign-in-sign-up-modal.sass';

export const SignInSignUpModal = ({ showModal, closeModal, user }) => {
  const [register, setRegister] = React.useState(false);

  const toggleForm = () => setRegister(register => !register);
  const resetForm = () => setRegister(false)

  const { loading } = user;

  return (
    <Modal hidden={!showModal} closeModal={closeModal} onExited={resetForm} loading={loading} small>
      <div className="sign-in-sign-up-modal">
        {register ?
          <SignUp />
          :
          <SignIn user={user} />
        }
        <div className="sign-in-sign-up-modal-toggle">
          <Typography component="span" variant="p" className="text-accent sign-in-sign-up-modal-title mb-0" onClick={toggleForm}>
            {!register ?
              'Create a new account'
              :
              'Use an existing account'
            }
          </Typography>
        </div>
      </div>
    </Modal>
  );
};

SignInSignUpModal.defaultProps = {
  showModal: false,
};

SignInSignUpModal.propTypes = {
  showModal: PropTypes.bool,
  closeModal: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps, null)(SignInSignUpModal);
