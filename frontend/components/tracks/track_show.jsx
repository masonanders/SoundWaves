import React from 'react';

import TrackBanner from './track_show_banner';

class TrackShow extends React.Component {
  componentDidMount() {
    this.props.fetchTrackBy({ title: this.props.match.params.title });
  }

  render() {
    return(
      <div>
        <div style={{height: '800px'}} className='content'>
          <TrackBanner
            state={this.props.state}
            track={this.props.track}
            artist={this.props.artist}
            functions={{
              play: this.props.play,
              pause: this.props.pause,
              playNew: this.props.playNew
            }}
            />

          <div className='track-body'>
            <div className='track-content'>
            </div>

            <div className='track-sidebar'>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackShow;
