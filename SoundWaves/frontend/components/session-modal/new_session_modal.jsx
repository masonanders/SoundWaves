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
    console.log(props);
  }

  handleContinue() {
    if (this.state.enteredUser) {
      if (this.validPasswords()){
        this.setState({passwordError: true });
        this.props.action({
          username: this.state.username,
          password: this.state.password1
        });
      } else {
        this.setState({ passwordError: true });
      }
    } else {
      this.setState({ enteredUser: true });
    }
  }

  handlePassChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleUserChange() {
    return (e) => {
      this.setState({username: e.target.value});
    };
  }

  validPasswords() {
    if (this.props.action.name === 'beginSession') {
      return (this.state.password1.length > 5  ? true : false);
    } else {
      const match = this.state.password1 === this.state.password2;
      return ((match && this.state.password1.length > 5) ? true : false);
    }
  }

  passwordErrorMessage() {
    if (this.props.action.name === 'beginSession') {
      return <p>Password is invalid</p>;
    } else {
      return <p>Passwords do not match or are invalid</p>;
    }
  }

  render() {
    return (
      <section className="new-session-modal">

        <div className='close-modal'>
          <button onClick={() => this.props.closeModal('')}></button>
        </div>

        <div className="new-session-form-container">

          <div className="new-session-form">

            { this.state.enteredUser ?
              <div className='header' >

                <h3>Now enter your password</h3>

                <input
                  onChange={this.handlePassChange('password1')}
                  type='password'
                  placeholder="Enter Password"
                  value={this.state.password1}
                />
                {this.props.action.name === 'createUser' ?
                  <div>
                    <input
                      onChange={this.handlePassChange('password2')}
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
                  onChange={this.handleUserChange()}
                  type='text'
                  placeholder='Username'
                  value={this.state.username}
                />

              </div>
            }

            <button onClick={() => this.handleContinue()}>Continue</button>

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
