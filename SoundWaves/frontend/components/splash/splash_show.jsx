import React from 'react';

import Banner from './splash_banner';
import Search from './splash_search';

const Splash = (props) => {
  const imagePath = '../../assets/images/logo/wave';
  return (
    <div className='content'>
      <section className='splash-content'>
        <Banner />
        <Search />
      </section>
    </div>
  );
};

export default Splash;
