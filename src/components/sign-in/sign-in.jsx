import React, { Component } from 'react';
import validateInput from 'helpers/validate-input';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Redux
import { signInWithGoogle, signInWithEmail } from 'redux/user/user.actions';
// Components
import Input from 'components/input/input';
import Typography from 'components/typography/typography';
import Button from 'components/button/button';
// Styles
import './sign-in.sass';

const initialState = {
  email: '',
  password: '',
  emailInvalid: false,
  passwordInvalid: false,
  formErrors: false,
};

export class SignInComponent extends Component {
  state = {
    ...initialState,
  };

  static propTypes = {
    signInWithEmail: PropTypes.func.isRequired,
    signInWithGoogle: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
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
    const { signInWithEmail } = this.props;
    const { email, password } = this.state;
    const validatedInputs = {
      emailInvalid: !validateInput('email', email),
      passwordInvalid: !validateInput('password', password),
      formErrors:
        !validateInput('password', password) || !validateInput('email', email),
    };
    this.setState({
      ...validatedInputs,
    });
    /* istanbul ignore else */
    if (validatedInputs.formErrors) {
      return;
    }
    signInWithEmail({ email, password });
  };

  render() {
    const { email, password, emailInvalid, passwordInvalid } = this.state;
    const {
      signInWithGoogle,
      user: { error },
    } = this.props;
    return (
      <div className="sign-in">
        <div className="sign-in-description">
          <Typography component="h2" className="text-dark">
            I already have an account
          </Typography>
          <Typography component="span" variant="p" className="text-dark mb-0">
            Sign in with your email and password
          </Typography>
        </div>
        <form className="sign-in-form" onSubmit={this.handleSubmit} noValidate>
          <div className="sign-in-inputs">
            <Input
              isDark
              type="email"
              name="email"
              value={email}
              onChange={this.handleInput}
              invalid={emailInvalid}
              className="sign-in-input"
              placeholder="Your email"
            />
            <Input
              isDark
              type="password"
              name="password"
              value={password}
              onChange={this.handleInput}
              invalid={passwordInvalid}
              className="sign-in-input"
              placeholder="Your password"
            />
          </div>
          {error && (
            <Typography component="p" className="text-danger">
              {error}
            </Typography>
          )}

          <div className="sign-in-buttons">
            <Button type="submit" className="sign-in-button">
              Sign in
            </Button>
            <Button
              type="button"
              className="sign-in-button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Google sign in
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signInWithGoogle,
  signInWithEmail,
};

export default connect(null, mapDispatchToProps)(SignInComponent);
