import React, { Component } from "react";

class NavSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", tracks: [], noResults: null };
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
            <div className="nav-no-search-results">
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
      <div className="nav-track-search-item" key={id}>
        <h4>{track.title}</h4>
      </div>
    );
  }

  render() {
    const tracks = this.state.tracks.map((track, idx) =>
      this.makeTrackItem(track, idx)
    );
    const { noResults } = this.state;
    return (
      <div className="nav-searchbar-container">
        <input
          onChange={e => this.handleChange(e)}
          className="nav-searchbar"
          type="search"
          placeholder="Search"
        />
        <button className="nav-search-button" onClick={null} />
        {tracks}
        {noResults}
      </div>
    );
  }
}

export default NavSearch;
