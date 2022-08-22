import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
              // COMMON ERROR: onClick={() => selectSong(song)} 
              // calls the action creator, but DOES NOT call store.dispatch(selectSong(song))
              // the selectedSongReducer and thus will not update the Application State!!!
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log("SongList's props: ", this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// State_To_Props mapping_BEGIN
const mapStateToProps = (state) => {
  console.log("Application State:", state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
// State_To_Props mapping_END

// State_To_Props mapping, defined by the call to "connect" above, passes as a prop to the component SongList
// 1. return value of mapStateToProps, i.e. {songs: state.songs} 
// 2. the special wrapper for each member of the second argument, in this case "selectSong" such that
//    this.props.selectSong(song) calls store.dispatch(selectSong(song))
// to the props of the component
// so in pseudolanguage the props are
// this.props === {{songs: state.songs}, selectSong: /*store.dispatch(selectSong(...args))*/} or in syntax of ES2015
// this.props === {{songs: state.songs}, selectSong}
