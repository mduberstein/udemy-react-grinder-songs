import React, {Component} from "react";
import {connect} from 'react-redux';
class SongList extends Component {
  render () {
    console.log(this.props);
    return <div>SongList</div>;
  };
}

// State_To_Props mapping_BEGIN
const mapStateToProps = state => {
  return {songs: state.songs};
};

export default connect(mapStateToProps)(SongList);
// State_To_Props mapping_END

// State_To_Props mapping as defined above causes this.props ot be equal {songs: state.songs}
// like so:
// this.props === {songs: state.songs}