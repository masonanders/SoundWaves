import React, { Component } from "react";

class SplashSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tracks: [],
      noResults: null,
      visibility: "hidden"
    };
  }

  handleSearch(value) {
    if (value !== "") {
      this.props.fetchTrackBy({ search: value }, 10).then(res => {
        const tracks = res.tracks.map(track => ({
          id: track.id,
          title: track.title,
          artist: res.users.filter(user => user.id === track.artist_id)[0]
            .username,
          artist_id: track.artist_id
        }));
        const noResults =
          tracks.length > 0 ? null : (
            <div className="splash-search-no-results">
              <h4>No results found</h4>
            </div>
          );
        this.setState({ tracks, noResults });
      });
    } else {
      this.setState({ tracks: [], noResults: null });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.handleSearch(e.target.value);
  }

  makeTrackItem(track, id) {
    return (
      <div
        className="splash-track-search-item"
        key={id}
        onClick={e => this.handleRedirect(e)}
      >
        <h4>{track.title}</h4>
        <h5>{track.artist}</h5>
      </div>
    );
  }

  render() {
    const tracks = this.state.tracks.map((track, idx) =>
      this.makeTrackItem(track, idx)
    );
    const { noResults } = this.state;
    return (
      <section className="splash-search">
        <div>
          <input
            onChange={e => this.handleChange(e)}
            className="splash-searchbar"
            type="search"
            placeholder="Search for artists or tracks!"
          />
          <button id="search-button" />
          {tracks}
          {noResults}
        </div>

        <div className="splash-searchbar-or">
          <h4>or</h4>
        </div>

        <button
          className="big-button"
          onClick={() => this.props.openModal(this.props.beginSession)}
        >
          Upload your own
        </button>
      </section>
    );
  }
}

export default SplashSearch;
