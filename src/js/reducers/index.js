import { ADD_VIDEO, SELECT_VIDEO } from "../constants/action-types";

const initialState = {
	videos: [],
	currentVideo: null
};

function rootReducer( state = initialState, action ) {
	if ( action.type === ADD_VIDEO ) {
    	return Object.assign({}, state, {
      		videos: state.videos.concat(action.payload)
    	});
	}
	if ( action.type === SELECT_VIDEO ) {
		let video_id = action.payload.split('v=')[1];

		//parse out any additional query params from video id chunk
		let ampersandPosition = video_id.indexOf('&');
		if(ampersandPosition !== -1) {
		  video_id = video_id.substring(0, ampersandPosition);
		}
		return Object.assign({}, state, {
			currentVideo: video_id
		});
	}

	return state;
};

export default rootReducer;