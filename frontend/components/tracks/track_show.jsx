import React from "react";
import { Redirect } from "react-router";

import TrackBanner from "./track_show_banner";
import Comments from "../comments/comments_container";
import {
  REMOVE_TRACK,
  RECEIVE_TRACK_ERRORS
} from "../../actions/track_actions";

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { action: {}, comments: null };
  }

  componentWillReceiveProps(nextProps) {
    this.resetState();
  }

  componentDidMount() {
    this.props
      .fetchTrackBy({ title: this.props.match.params.title })
      .then(action =>
        this.setState({
          title: action.tracks[0].title,
          description: action.tracks[0].description,
          id: action.tracks[0].id,
          loadComments: true
        })
      );
  }

  constructTrack() {
    const state = this.state;
    const track = {};
    track.title = state.title;
    track.description = state.description;
    track.id = state.id;

    return track;
  }

  submitComment(e) {
    if (
      e.currentTarget.id === "comment" &&
      e.key === "Enter" &&
      e.target.value !== ""
    ) {
      const comment = {
        author_id: this.props.state.session.currentUser,
        track_id: this.state.id,
        content: e.target.value
      };
      this.props.createComment(comment);
      e.target.value = "";
    }
  }

  resetState() {
    this.setState({ confirm: false, edit: false });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleDelete() {
    this.setState({
      action: {
        execute: () =>
          this.props
            .deleteTrack(this.props.track.id)
            .then(res => this.handleResponse(res)),
        text: "Delete"
      },
      confirm: true
    });
  }

  handleEdit() {
    const oldTrack = this.props.track;
    const artist = this.props.artist;
    this.setState({
      action: {
        execute: () =>
          this.props
            .updateTrack(this.constructTrack())
            .then(action => this.handleResponse(action, oldTrack)),
        text: "Edit"
      },
      confirm: true,
      edit: true
    });
  }

  handleResponse(res, oldTrack) {
    switch (res.type) {
      case RECEIVE_TRACK_ERRORS:
        break;
      case REMOVE_TRACK:
        this.props.history.replace("/");
        break;
      default:
        if (res.track.title !== oldTrack.title) {
          this.props.history.replace(
            `/${res.user.username}/${this.state.title}`
          );
        }
        this.resetState();
    }
  }

  handleAction() {
    this.state.action.execute();
  }

  handleCancel() {
    this.setState({
      action: { text: "" },
      confirm: false,
      edit: false,
      title: this.props.track.title,
      description: this.props.track.description
    });
  }

  renderUserButtons() {
    const deleteEdit = (
      <div className="track-buttons">
        <button onClick={() => this.handleDelete()} className="delete">
          Delete
        </button>
        <button onClick={() => this.handleEdit()} className="edit">
          Edit
        </button>
      </div>
    );

    const confirm = (
      <div className="track-buttons">
        <input
          type="submit"
          htmlFor={this.state.action.text}
          onClick={() => this.handleAction()}
          className="delete"
          value="Yes"
        />
        <button onClick={() => this.handleCancel()} className="edit">
          No
        </button>
        <h3>{`${this.state.action.text}`} this track?</h3>
      </div>
    );

    return this.state.confirm ? confirm : deleteEdit;
  }

  renderBody() {
    if (this.state.edit) {
      return (
        <div className="description">
          <form id="Edit" onSubmit={() => this.state.action.execute()}>
            <input
              value={this.state.title}
              onChange={this.handleChange("title")}
            />

            <textarea
              value={this.state.description}
              onChange={this.handleChange("description")}
            />
          </form>
        </div>
      );
    } else {
      const track = this.props.track ? this.props.track : { description: "" };
      return (
        <div className="description">
          <h3>{track.title}</h3>
          <h5>{track.description}</h5>
        </div>
      );
    }
  }

  render() {
    const { state } = this.props;
    const artist = this.props.artist
      ? this.props.artist
      : { username: "", id: null };
    const currentUserId = state.session.currentUser;
    const currentUser = state.entities.users[currentUserId];

    return (
      <div className="content">
        <div className="track-show-content">
          <TrackBanner
            state={state}
            track={this.props.track}
            artist={artist}
            functions={{
              play: this.props.play,
              pause: this.props.pause,
              playNew: this.props.playNew
            }}
          />

          <div className="track-body">
            <div className="track-main">
              <div className="comment-form-wraper">
                <div className="comment-form">
                  <img src={window.images.userIcons[currentUser.imageId]} />
                  <input
                    id="comment"
                    type="text"
                    onKeyPress={e => this.submitComment(e)}
                    placeholder="Write a comment"
                  />
                </div>
                <div />
              </div>

              <div className="track-main-body">
                <div className="track-artist-info">
                  <div className="artist-icon">
                    <img src={window.images.userIcons[artist.imageId]} />
                    <h5>{artist.username}</h5>
                  </div>
                  {artist.id === currentUser.id
                    ? this.renderUserButtons()
                    : null}
                </div>

                <div className="comment-body">
                  {this.renderBody()}
                  {this.state.loadComments ? (
                    <Comments trackTitle={this.props.match.params.title} />
                  ) : null}
                </div>
              </div>
            </div>

            <div className="track-sidebar" />
          </div>

          <div className="track-footer" />
        </div>
      </div>
    );
  }
}

export default TrackShow;
