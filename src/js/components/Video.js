import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { currentVideo: state.currentVideo };
};

const EmbeddedVideo = ({ currentVideo }) => {
	if ( currentVideo ) {
		return (
		  <iframe
		  	title="yt vid"
			width="560"
			height="315"
			src={"https://www.youtube.com/embed/" + currentVideo + "?autoplay=1"}
			frameBorder="0"
			allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen>
		  </iframe>
		);
	} else {
		return (
			<>
			  <div>No Video Selected</div>
			</>
		);
	}
}

const ConnectedEmbeddedVideo = connect(mapStateToProps)(EmbeddedVideo);

export default ConnectedEmbeddedVideo;