import React, { Component } from 'react';
import validateInput from 'helpers/validate-input';
// Firebase
import { auth, createUserProfileDocument } from 'services/firebase/firebase.utils';
// Components
import Input from 'components/input/input.component';
import Typography from 'components/typography/typography.component';
import Button from 'components/button/button.component';
// Styles
import './sign-up.styles.sass';

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
  isLoading: false,
  authError: false
}

class SignUp extends Component {
  state = {
    ...initialState
  }

  handleInput = event => {
    const { name, type, value } = event.target;
    const { formErrors } = this.state;
    this.setState({
      [name]: value,
      [`${name}Invalid`]: formErrors && !validateInput(type, value),
    })
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = this.state;
    const validatedInputs = {
      nameInvalid: !validateInput('text', name),
      emailInvalid: !validateInput('email', email),
      passwordInvalid: !validateInput('password', password),
      confirmPasswordInvalid: !validateInput('password', confirmPassword),
      formErrors: !validateInput('text', name) || !validateInput('email', email) || !validateInput('password', password) || (password !== confirmPassword)
    }
    this.setState({
      ...validatedInputs
    });

    if (validatedInputs.formErrors) { return; }
    this.setState({ isLoading: true });

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName: name });
    }
    catch (error) {
      this.setState({
        authError: error.message,
        isLoading: false
      });
    }
  };

  render() {
    const { name, email, password, confirmPassword, nameInvalid, emailInvalid, passwordInvalid, confirmPasswordInvalid, formErrors, isLoading, authError } = this.state;
    const passwordsDontMatch = (password !== confirmPassword && formErrors);
    return (
      <div className="sign-up">
        <div className="sign-up-description">
          <Typography component="h2" className="text-dark">I don't have an account</Typography>
          <Typography component="span" variant="p" className="text-dark mb-0">Sign up with your email and password</Typography>
        </div>
        <form className="sign-up-form" onSubmit={this.handleSubmit} noValidate>
          <div className="sign-up-inputs">
            <Input isDark type="text" name="name" value={name} onChange={this.handleInput} invalid={nameInvalid} className="sign-up-input" placeholder="Your name" />
            <Input isDark type="email" name="email" value={email} onChange={this.handleInput} invalid={emailInvalid} className="sign-up-input" placeholder="Your email" />
            <Input isDark type="password" name="password" value={password} onChange={this.handleInput} invalid={passwordInvalid || passwordsDontMatch} className="sign-up-input" placeholder="Your password" />
            <Input isDark type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleInput} invalid={confirmPasswordInvalid || passwordsDontMatch} className="sign-up-input" placeholder="Confirm password" />
          </div>
          {passwordsDontMatch &&
            <Typography component="p" className="text-danger">Passwords don't match</Typography>
          }
          {authError &&
            <Typography component="p" className="text-danger">{authError}</Typography>
          }
          <Button type="submit" className="sign-up-button" isLoading={isLoading}>Sign up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
