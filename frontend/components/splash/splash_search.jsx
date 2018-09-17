import React from "react";

export default () => {
  return (
    <section className="splash-search">
      <input
        onChange={e => {
          e.target.placeholder = "Not yet implemented";
          e.target.value = "";
        }}
        className="splash-searchbar"
        type="search"
        placeholder="Search for artists or tracks!"
      />
      <button id="search-button" />

      <div className="splash-searchbar-or">
        <h4>or</h4>
      </div>

      <button className="big-button">Upload your own</button>
    </section>
  );
};
