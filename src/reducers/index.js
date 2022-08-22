import {combineReducers} from 'redux'

const songsReducer = () => {
  return [
    {title: 'No Scurbs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All Star', duration: '3:15'},
    {title: 'I Want It That Way', duration: '1:45'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};

// return value of this call is the Redux Store representing 
// the Application state - the object with properties named the same
// as the keys of the object argument passed in: songs and selectingSong
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});