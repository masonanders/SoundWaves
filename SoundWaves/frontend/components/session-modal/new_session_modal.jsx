import React from 'react';

const SessionModal = (props) => {
  console.log('new_session_modal',props);
  return (
    <section className="new-session-modal">
      <button onClick={() => props.closeModal('')}>close modal</button>
      <div className="new-session-from"></div>
    </section>
  );
};

export default SessionModal;
