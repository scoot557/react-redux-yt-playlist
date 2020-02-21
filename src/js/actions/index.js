import { ADD_VIDEO, SELECT_VIDEO } from "../constants/action-types";

export function addVideo( payload ) {
	return { type: ADD_VIDEO, payload };
};
export function selectVideo( payload ){
	return { type: SELECT_VIDEO, payload };
};