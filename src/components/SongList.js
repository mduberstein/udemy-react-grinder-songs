import React, { Component } from "react";
import { connect } from "react-redux";
class SongList extends Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// State_To_Props mapping_BEGIN
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
// State_To_Props mapping_END

// State_To_Props mapping as defined above causes this.props ot be equal {songs: state.songs}
// like so:
// this.props === {songs: state.songs}
