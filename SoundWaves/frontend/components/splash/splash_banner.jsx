import React from 'react';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props };
    console.log(props);
  }

  loginDemo() {
    this.props.beginSession({ username: 'demo_user', password: 'iliketodemo' });
  }

  render() {
    return (
      <section id='splash-front-banner' >

        <div className='splash-logo'>
        </div>

        <div className='session-buttons'>
          <button onClick={() => this.props.openModal('login')}
            id='sign-in'>Sign in
          </button>
          <button onClick={() => this.props.openModal('signup')}
            id='create-account'>Create account
          </button>
        </div>

        <div className='splash-header'>
          <h1>Discover new music with SoundWaves</h1>
        </div>

        <div className='splash-subtext'>
          <h3>Upload and share music
            with artists who have a living room,
            a microphone, and a dream.
          </h3>
        </div>

        <div className='demo-login'>
          <button onClick={() => this.loginDemo()}
            className='big-button'>Try a demo log in</button>
        </div>
      </section>
    );
  }
}

export default Banner;
