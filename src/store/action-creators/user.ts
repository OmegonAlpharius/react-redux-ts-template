import axios from 'axios'
import { AppThunk } from '..'
import {  UserActionTypes } from '../../types/User'




export const fetchUsers = ():AppThunk=> {
	return async (dispatch) => {
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