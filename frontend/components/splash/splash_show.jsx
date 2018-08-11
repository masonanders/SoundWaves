import React from 'react';

import Banner from './splash_banner';
import Search from './splash_search';
import SessionModal from '../session-modal/new_session_modal';

const Splash = (props) => {
  const modalOn = props.state.ui.sessionModal.modalOn;
  return (
    <div>
      <SessionModal
        session={props.state.session}
        errors={ props.state.errors }
        state={ props.state.ui.sessionModal }
        action={ props.state.ui.sessionModal.action }
        functions={{
          createUser: props.createUser,
          beginSession: props.beginSession,
          createCustomError: props.createCustomError,
          clearErrors: props.clearErrors,
          closeModal: props.closeModal,
          fetchUserBy: props.fetchUserBy,
          findExistingUser: props.findExistingUser
        }}
        modalOn={modalOn}
      />

      <div className='content' >
        <section className='splash-content' >
          <Banner state={ props.state }
            beginSession={ props.beginSession }
            createUser={ props.createUser }
            openModal={ props.openModal }
          />
          <Search />
        </section>
      </div>
    </div>
  );
};

export default Splash;
