import axios from 'axios';
import { FETCH_USER, EMAIL_AUTHENTICATION } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};
