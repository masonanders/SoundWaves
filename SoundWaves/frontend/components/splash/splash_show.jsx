import React from 'react';

const Splash = (props) => {
  const imagePath = '../../assets/images/logo/wave';
  return (
    <div className='content'>
      <section className='splash-content'>
        <section className='splash-front-image' >
          <div className='splash-logo'>
          </div>
          <button id='sign-in'>Sign in</button>
          <button id='create-account'>Create account</button>
        </section>
      </section>
    </div>
  );
};

export default Splash;
