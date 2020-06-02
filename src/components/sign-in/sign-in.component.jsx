import React, { Component } from 'react';
import validateInput from 'helpers/validate-input';
// Firebase
import { signInWithGoogle } from 'firebase/firebase.utils';
// Components
import Input from 'components/input/input.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
// Styles
import './sign-in.styles.sass';

class SignIn extends Component {
  state = {
    name: '',
    email: '',
    nameInvalid: false,
    emailInvalid: false,
    formErrors: false
  }

  handleInput = event => {
    const { name, type, value } = event.target;
    const { formErrors } = this.state;
    this.setState({
      [name]: value,
      [`${name}Invalid`]: formErrors && !validateInput(type, value),
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, email } = this.state;
    const validatedInputs = {
      nameInvalid: !validateInput('text', name),
      emailInvalid: !validateInput('email', email),
      formErrors: !validateInput('text', name) || !validateInput('email', email)
    }
    this.setState({
      ...validatedInputs
    });
  };

  render() {
    const { name, email, nameInvalid, emailInvalid } = this.state;
    return (
      <div className="sign-in">
        <div className="sign-in-description">
          <Typography component="h2" className="text-dark">I already have an account</Typography>
          <Typography component="span" variant="p" className="text-dark mb-0">Sign in with your email and password</Typography>
        </div>
        <form className="sign-in-form" onSubmit={this.handleSubmit}>
          <div className="sign-in-inputs">
            <Input isDark type="text" name="name" value={name} onChange={this.handleInput} invalid={nameInvalid} className="sign-in-input" placeholder="Your name" />
            <Input isDark type="email" name="email" value={email} onChange={this.handleInput} invalid={emailInvalid} className="sign-in-input" placeholder="Your email" />
          </div>
          <div className="sign-in-buttons">
            <Button type="submit" className="sign-in-button">Sign in</Button>
            <Button type="button" className="sign-in-button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
