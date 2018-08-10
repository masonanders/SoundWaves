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
      passwordError: false
    };
    this.action = props.action;
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.action && props.action.demoLogin === true) {
      this.handleDemoLogin(props);
      this.action = props.action;
    }
  }

  handleContinue() {
    this.props.clearErrors();
    if (this.state.enteredUser) {
      if (this.validPasswords()){
        this.setState({passwordError: false });
        this.props.action({
          username: this.state.username,
          password: this.state.password1
        });
      } else {
        this.setState({ passwordError: true });
      }
    } else {
      if (this.state.username !== '') {
        this.setState({ enteredUser: true });
      }
    }
  }

  handleBack() {
    this.setState({enteredUser: false, passwordError: false});
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
        this.resetState();
        this.props.closeModal(this.state.username);
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
    if (this.props.action.name !== 'createUser') {
      return (this.state.password1.length > 5  ? true : false);
    } else {
      const match = this.state.password1 === this.state.password2;
      return ((match && this.state.password1.length > 5) ? true : false);
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
    if (this.props.action.name === 'beginSession') {
      return <p>Password is invalid</p>;
    } else {
      return <p>Passwords do not match or are invalid</p>;
    }
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

            { this.state.enteredUser ?
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
                {this.props.action.name === 'createUser' ?
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

            <button
              onClick={() => this.handleContinue()}
            >Continue</button>

            { this.state.passwordError ?
              this.passwordErrorMessage()
            :
              <p></p>
            }

            <Errors
              sessionErrors={this.props.errors.session}
              userErrors={this.props.errors.users}
            />

          </div>

        </div>

      </section>
    );
  }
}

export default SessionModal;
