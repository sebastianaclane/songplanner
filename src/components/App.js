import React from 'react';
import PropTypes from "prop-types";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="song-planner">
        <Header title="Song Planner" />
      </div>
    )
  }
}

export default App;
