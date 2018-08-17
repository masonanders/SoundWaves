import React from 'react';
import CommentListItem from './comment_list_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  componentDidMount() {
    const track = this.props.findTrackByTitle(
      this.props.state,
      this.props.trackTitle
    );
    this.props.fetchComments(track.id);
  }

  componentWillMount() {
    this.props.clearComments();
  }

  render() {
    const comments = Object.keys(this.props.comments).map(
      id => {
        const comment = this.props.comments[id];
        const user = this.props.users[comment.author_id];
        const destroy = (user.id === this.props.currentUserId ? true : false);
        return <CommentListItem
          destroy={destroy}
          key={id}
          id={id}
          comment={comment}
          author={user}
          deleteComment={this.props.deleteComment}
          />;
      }
    );

    return (
      <div>
        <div className='comment-list'>
          <ul>
            {comments.reverse()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
