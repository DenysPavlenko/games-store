import React, { Component } from 'react';
import validateInput from 'helpers/validate-input';
// Firebase
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
// Components
import Input from 'components/input/input.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
// Styles
import './sign-in.styles.sass';

const initialState = {
  email: '',
  password: '',
  emailInvalid: false,
  passwordInvalid: false,
  formErrors: false,
  isLoading: false,
  authError: false
}

class SignIn extends Component {
  state = {
    ...initialState
  }

  handleInput = event => {
    const { name, type, value } = event.target;
    const { formErrors } = this.state;
    this.setState({
      [name]: value,
      [`${name}Invalid`]: formErrors && !validateInput(type, value),
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const validatedInputs = {
      emailInvalid: !validateInput('email', email),
      passwordInvalid: !validateInput('password', password),
      formErrors: !validateInput('password', password) || !validateInput('email', email)
    }
    this.setState({
      ...validatedInputs
    });

    if (validatedInputs.formErrors) { return; }
    this.setState({ isLoading: true });

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState
      });
    }
    catch (error) {
      this.setState({
        authError: error.message,
        isLoading: false
      });
    }
  };

  render() {
    const { email, password, emailInvalid, passwordInvalid, isLoading, authError } = this.state;
    return (
      <div className="sign-in">
        <div className="sign-in-description">
          <Typography component="h2" className="text-dark">I already have an account</Typography>
          <Typography component="span" variant="p" className="text-dark mb-0">Sign in with your email and password</Typography>
        </div>
        <form className="sign-in-form" onSubmit={this.handleSubmit} novalidate>
          <div className="sign-in-inputs">
            <Input isDark type="email" name="email" value={email} onChange={this.handleInput} invalid={emailInvalid} className="sign-in-input" placeholder="Your email" />
            <Input isDark type="password" name="password" value={password} onChange={this.handleInput} invalid={passwordInvalid} className="sign-in-input" placeholder="Your password" />
          </div>
          {authError &&
            <Typography component="p" className="text-danger">{authError}</Typography>
          }
          <div className="sign-in-buttons">
            <Button type="submit" className="sign-in-button" isLoading={isLoading}>Sign in</Button>
            <Button type="button" className="sign-in-button" onClick={signInWithGoogle} isGoogleSignIn>Google sign in</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
