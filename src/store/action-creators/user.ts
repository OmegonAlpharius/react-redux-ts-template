import axios from 'axios'
import {  Dispatch } from 'redux'
import { ThunkActionDispatch } from 'redux-thunk'

import { UserAction, UserActionTypes } from '../../types/User'



export const fetchUsers = () => {
	return async (dispatch:Dispatch<UserAction>) => {
 try {
	dispatch({type:UserActionTypes.FETCH_USERS})
	const response = await axios.get('https://jsonplaceholder.typicode.com/users')
	dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data})
 } catch (e) {
	dispatch({
		type:UserActionTypes.FETCH_USERS_ERROR,
		payload:"Error then fetch users"
	})
 }
	}
}