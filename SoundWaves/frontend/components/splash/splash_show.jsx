import React from 'react';

import Banner from './splash_banner';
import Search from './splash_search';

const Splash = (props) => {
  const imagePath = '../../assets/images/logo/wave';
  return (
    <div className='content' >
      <section className='splash-content' >
        <Banner state={props.state}
          beginSession={props.beginSession}
          openModal={props.openModal}
        />
        <Search />
      </section>
    </div>
  );
};

export default Splash;
