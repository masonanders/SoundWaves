import React from 'react';

import Banner from './splash_banner';
import Search from './splash_search';
import SessionModal from '../session-modal/new_session_modal';

const Splash = (props) => {
  const modalOn = props.state.ui.sessionModal.modalOn;
  return (
    <div>
      { modalOn ?
        <SessionModal
          state={props.state.ui.sessionModal}
          beginSession={props.beginSession}
          createUser={props.createUser}
          closeModal={props.closeModal}
        />
      :
        <div></div>
      }
      <div className='content' >
        <section className='splash-content' >
          <Banner state={props.state}
            beginSession={props.beginSession}
            openModal={props.openModal}
          />
          <Search />
        </section>
      </div>
    </div>
  );
};

export default Splash;
