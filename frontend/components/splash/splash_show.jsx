import React from "react";

import Banner from "./splash_banner";
import Search from "./splash_search";
import SessionModal from "../session-modal/new_session_modal";
import SplashTrackIndex from "./splash_index_container";

const Splash = props => {
  const modalOn = props.state.ui.sessionModal.modalOn;
  return (
    <div>
      <SessionModal
        wState={props.state}
        session={props.state.session}
        errors={props.state.errors}
        state={props.state.ui.sessionModal}
        action={props.state.ui.sessionModal.action}
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

      <div className="content">
        <section className="splash-content">
          <Banner
            state={props.state}
            beginSession={props.beginSession}
            createUser={props.createUser}
            openModal={props.openModal}
          />
          <Search />
          <SplashTrackIndex />
        </section>
      </div>
      <div style={{ height: "500px" }} />
    </div>
  );
};

export default Splash;
