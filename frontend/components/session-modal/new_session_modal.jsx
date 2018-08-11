import React from 'react';

import Errors from '../errors/errors';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.state.username_text,
      enteredUser: false,
      password1: '',
      password2: '',
      action: props.action
    };
    this.functions = props.functions;
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.action && props.action.demoLogin === true) {
      this.handleDemoLogin(props);
    }
    this.setState({action: props.action});
  }

  handleContinue() {
    this.functions.clearErrors();
    if (this.state.enteredUser) {
      if (this.validPasswords()){
        this.state.action({
          username: this.state.username,
          password: this.state.password1
        });
      } else {
        this.passwordErrorMessage();
      }
    } else {
      if (this.state.username === '') {
        this.functions.createCustomError('Username cannot be blank');
      } else {
        this.functions.findExistingUser({username: this.state.username})
          .then(res => {
            if (this.state.action.name === 'beginSession') {
              if (this.props.session.existingUser) {
                this.setState({ enteredUser: true });
              } else {
                this.setState({
                  action: this.functions.createUser,
                  enteredUser: true
                });
              }
            } else {
              if (this.props.session.existingUser) {
                this.functions.createCustomError('Username has been taken');
              } else {
                this.setState({ enteredUser: true });
              }
            }
          });
      }
    }
  }

  handleBack() {
    this.functions.clearErrors();
    this.setState({enteredUser: false});
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleDemoLogin(props) {
    props.action.demoLogin = false;
    this.setState({username: ''});
    setTimeout(() => this.delayedType('demo_user', 'username'), 100);
  }

  handleCloseModal() {
    return (e) => {
      if (
        e.target.className === 'new-session-form-container' ||
        e.target.className === 'close-modal-button'
      ) {
        this.functions.clearErrors();
        this.resetState();
        this.functions.closeModal(this.state.username);
      }
    };
  }

  resetState() {
    this.setState({
      enteredUser: false,
      passwordError: false,
      password1: '',
      password2: ''
    });
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.handleContinue();
    }
  }

  validPasswords() {
    if (this.state.action.name !== 'createUser') {
      return (this.state.password1.length > 5  ? true : false);
    } else {
      const match = this.state.password1 === this.state.password2;
      if (match) {
        return true;
      } else {
        this.functions.createCustomError('Passwords do not match');
        return false;
      }
    }
  }

  delayedType(string, field) {
    const delayLetter = (arr) => {
      this.setState({ [field]: this.state[field] + arr.shift() });
      if (arr.length > 0) {
        setTimeout(() => delayLetter(arr), 60);
      } else {
        setTimeout(() => {
          this.handleContinue();
            if (this.state.password1 === '') {
              this.delayedType('iliketodemo', 'password1');
            }
          }
        , 200);
      }
    };
    setTimeout(() => delayLetter(string.split('')), 300);
  }

  passwordErrorMessage() {
    if (this.state.action.name === 'beginSession') {
      this.functions.createCustomError('Password is invalid');
    }
  }

  continueButtonValue() {
    if (this.state.action && this.state.enteredUser) {
      switch (this.state.action.name) {
        case 'beginSession':
          return 'Sign in';
        case 'createUser':
          return 'Create Account';
        default:

      }
    }
    return 'Continue';
  }

  renderModal() {
    return this.props.modalOn ? 'new-session-modal' : 'new-session-modal off';
  }

  render() {
    return (

      <section onClick={this.handleCloseModal()} className={this.renderModal()}>

        <div className='close-modal'>
          <button className="close-modal-button" />
        </div>

        <div className="new-session-form-container">

          <div className="new-session-form">

            {this.state.enteredUser ?
              <button
                className='back-arrow'
                onClick={() => this.handleBack() }
              />
            : null
            }

            {
              this.state.enteredUser ?
                <div className='header' >
                  <h1>{`Hello, ${this.state.username}`}</h1>
                  <h3>Enter your password</h3>

                  <input
                    onKeyPress={this.handleEnter}
                    onChange={this.handleChange('password1')}
                    type='password'
                    placeholder="Enter Password"
                    value={this.state.password1}
                  />

                  {
                    this.state.action.name === 'createUser' ?
                      <div>
                        <input
                          onKeyPress={this.handleEnter}
                          onChange={this.handleChange('password2')}
                          type='password'
                          placeholder="Confirm Password"
                          value={this.state.password2}
                        />
                      </div>
                    :
                      <div></div>
                  }
                </div>
              :
                <div className='header' >
                  <h1>Welcome!</h1>
                  <h3>Enter your username to get started</h3>
                  <input
                    onKeyPress={this.handleEnter}
                    onChange={this.handleChange('username')}
                    type='text'
                    placeholder='Username'
                    value={this.state.username}
                  />
                </div>
            }

            <button onClick={() => this.handleContinue()}
              >{this.continueButtonValue()}</button>

            <Errors
              sessionErrors={this.props.errors.session}
              userErrors={this.props.errors.users}
              customErrors={this.props.errors.custom}
            />

          </div>
        </div>
      </section>
    );
  }
}

export default SessionModal;
