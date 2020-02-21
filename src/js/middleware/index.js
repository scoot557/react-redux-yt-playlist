import { ADD_VIDEO, LOADED_VIDEO_METADATA } from "../constants/action-types";

function fetchVideoMetadata ({ dispatch }) {
	return function ( next ) {
		return function( action ) {
			if ( action.type === ADD_VIDEO ) {
				return dispatch({ type: LOADED_VIDEO_METADATA, payload: video_metadata })
			}
			return next( action );
		}
	}
}