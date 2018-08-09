import React from 'react';

export default () => (
  <section id='splash-front-banner' >

    <div className='splash-logo'>
    </div>

    <button id='sign-in' className='session-button'>Sign in</button>
    <button id='create-account' className='session-button'>Create account</button>

    <div className='splash-header'>
      <h1>Discover new music with SoundWaves</h1>
    </div>

    <div className='splash-subtext'>
      <h3>Upload and share music with artists who have a living room, a microphone, and a dream.</h3>
    </div>

    <div className='upload-today'>
      <button id='start-today'>Start uploading now</button>
    </div>
  </section>
);
