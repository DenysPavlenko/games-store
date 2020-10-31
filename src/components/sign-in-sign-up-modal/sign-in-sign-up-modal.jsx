import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Redux
import { selectUser } from 'redux/user/user.selectors';
// Components
import Modal from 'components/modal/modal';
import SignIn from 'components/sign-in/sign-in';
import SignUp from 'components/sign-up/sign-up';
import Typography from 'components/typography/typography';
// Styles
import './sign-in-sign-up-modal.sass';

const SignInSignUpModal = ({ showModal, closeModal, user }) => {

  const [register, setRegister] = useState(false);

  const switchForm = () => setRegister(!register);

  const handleRegister = () => {
    setRegister(false);
  }

  const { loading } = user;

  return (
    <Modal hidden={!showModal} closeModal={closeModal} onExited={handleRegister} loading={loading} small>
      <div className="sign-in-sign-up-modal">
        {!register ?
          <SignIn user={user}/>
          :
          <SignUp />
        }
        <div className="sign-in-sign-up-modal-switch">
          <Typography component="span" variant="p" className="text-accent sign-in-sign-up-modal-title mb-0" onClick={switchForm}>
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
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps, null)(SignInSignUpModal);
