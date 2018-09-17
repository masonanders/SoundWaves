import React from "react";
import { Link } from "react-router-dom";

const UserComment = props => (
  <li key={props.comment.id} className="user-comment-item">
    <Link
      className="user_comment_link"
      to={`/${props.track.artist}/${props.track.title}`}
    >
      <h4>
        <p>on</p>
        {props.track.title}
      </h4>
      <h5>{props.comment.content}</h5>
    </Link>
  </li>
);

export default UserComment;
