/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import validateInput from 'helpers/validate-input';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { signUpWithEmail } from 'redux/user/user.actions';
import { selectUser } from 'redux/user/user.selectors';
// Components
import Input from 'components/input/input';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
// Styles
import './sign-up.sass';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  nameInvalid: false,
  emailInvalid: false,
  passwordInvalid: false,
  confirmPasswordInvalid: false,
  formErrors: false,
};

export class SignUp extends Component {
  state = {
    ...initialState,
  };

  handleInput = (event) => {
    const { name, type, value } = event.target;
    const { formErrors } = this.state;
    this.setState({
      [name]: value,
      [`${name}Invalid`]: formErrors && !validateInput(type, value),
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    const { signUpWithEmail } = this.props;
    const validatedInputs = {
      nameInvalid: !validateInput('text', name),
      emailInvalid: !validateInput('email', email),
      passwordInvalid: !validateInput('password', password),
      confirmPasswordInvalid: !validateInput('password', confirmPassword),
      formErrors:
        !validateInput('text', name) ||
        !validateInput('email', email) ||
        !validateInput('password', password) ||
        password !== confirmPassword,
    };
    this.setState({
      ...validatedInputs,
    });

    if (validatedInputs.formErrors) {
      return;
    }
    signUpWithEmail({ name, email, password });
  };

  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      nameInvalid,
      emailInvalid,
      passwordInvalid,
      confirmPasswordInvalid,
      formErrors,
    } = this.state;
    const {
      user: { loading, error },
    } = this.props;
    const passwordsDontMatch = password !== confirmPassword && formErrors;
    return (
      <div className="sign-up">
        <div className="sign-up-description">
          <Typography component="h2" className="text-dark">
            I don&apos;t have an account
          </Typography>
          <Typography component="span" variant="p" className="text-dark mb-0">
            Sign up with your email and password
          </Typography>
        </div>
        <form className="sign-up-form" onSubmit={this.handleSubmit} noValidate>
          <div className="sign-up-inputs">
            <Input
              isDark
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
              invalid={nameInvalid}
              className="sign-up-input"
              placeholder="Your name"
            />
            <Input
              isDark
              type="email"
              name="email"
              value={email}
              onChange={this.handleInput}
              invalid={emailInvalid}
              className="sign-up-input"
              placeholder="Your email"
            />
            <Input
              isDark
              type="password"
              name="password"
              value={password}
              onChange={this.handleInput}
              invalid={passwordInvalid || passwordsDontMatch}
              className="sign-up-input"
              placeholder="Your password"
            />
            <Input
              isDark
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInput}
              invalid={confirmPasswordInvalid || passwordsDontMatch}
              className="sign-up-input"
              placeholder="Confirm password"
            />
          </div>
          {passwordsDontMatch && (
            <Typography component="p" className="text-danger">
              Passwords don&apos;t match
            </Typography>
          )}
          {error && (
            <Typography component="p" className="text-danger">
              {error}
            </Typography>
          )}
          <Button type="submit" className="sign-up-button" isLoading={loading}>
            Sign up
          </Button>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  signUpWithEmail: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

const mapDispatchToProps = {
  signUpWithEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
