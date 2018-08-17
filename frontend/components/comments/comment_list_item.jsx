import React from 'react';

export default (props) => (
  <li key={props.id} className='comment-list-item'>
      <div>
        <img src={window.images.defaultUserIcon}/>
        <div>
          <h4>{props.author.username}</h4>
          <p>{props.comment.content}</p>
        </div>
      </div>
      { props.destroy ?
        <button onClick={() => props.deleteComment(props.id)} /> :
          null
        }
  </li>
);
