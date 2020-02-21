import React, { Component } from 'react';
import { connect } from "react-redux";
import {selectVideo} from '../actions/index';
import "./list.css";

const mapStateToProps = state => {
	return { videos: state.videos, currentVideo: state.currentVideo };
};

function mapDispatchToProps(dispatch) {
  return {
    selectVideo: video => dispatch(selectVideo(video))
  };
};

class ConnectedList extends Component {
	render(){
		return (
			<ul className="video-list">
			  {this.props.videos.map( ( video, i ) => 
			  	<li
			  		className={video === ("https://www.youtube.com/watch?v=" + this.props.currentVideo) ? "current" : ""}
			  		onClick={(e) => { this.props.selectVideo( video ) }}
			  		key={video}
		  		>{i+1}) {video}</li>
			  )}
			</ul>
		);
	}
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;