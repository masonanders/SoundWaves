import React, { Component } from "react";
import EventListener from "react-event-listener";

class NavSearch extends Component {
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
            <div className="nav-search-no-results">
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

  handleRedirect(e) {
    this.setState({
      value: "",
      tracks: [],
      noResults: null,
      visibility: "hidden"
    });

    const element = e.target.className ? e.target : e.target.parentElement;
    const title = element.childNodes[0].innerHTML;
    const artist = element.childNodes[1].innerHTML;
    const route = `/${artist}/${title}`;
    if (this.props.history.location.pathname !== route)
      this.props.history.push(route);
  }

  makeTrackItem(track, id) {
    return (
      <div
        className="nav-track-search-item"
        key={id}
        onClick={e => this.handleRedirect(e)}
      >
        <h4>{track.title}</h4>
        <h5>{track.artist}</h5>
      </div>
    );
  }

  toggleVisibility(e) {
    const visibility =
      e.path[0].className === "nav-searchbar-container" ||
      e.path[1].className === "nav-searchbar-container" ||
      e.path[0].className === "nav-search-no-results" ||
      e.path[1].className === "nav-search-no-results"
        ? "visible"
        : "hidden";
    if (this.state.visibility !== visibility) {
      this.setState({ visibility });
    }
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
          value={this.state.value}
          className="nav-searchbar"
          type="search"
          placeholder="Search"
        />
        <button className="nav-search-button" onClick={null} />
        <div
          className="nav-search-results"
          style={{ visibility: this.state.visibility }}
        >
          {tracks}
          {noResults}
        </div>
        <EventListener
          target="window"
          onClick={e => this.toggleVisibility(e)}
        />
      </div>
    );
  }
}

export default NavSearch;
