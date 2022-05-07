import axios from 'axios'
import { AppThunk } from '..'
import { TodoAction, TodoActionTypes } from '../../types/todo'





export const fetchTodos = (page=1,limit=10):AppThunk=> {
	return async (dispatch) => {
 try {
	dispatch({type:TodoActionTypes.FETCH_TODOS})
	const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
		params: {_page:page,_limit:limit}
	})
	setTimeout(() => {
		dispatch({type:TodoActionTypes.FETCH_TODOS_SUCCESS,payload:response.data})
	},500)

 } catch (e) {
	dispatch({
		type:TodoActionTypes.FETCH_TODOS_ERROR,
		payload:"Error then fetch todos"
	})
 }
	}
}
export const SetTodoPage = (page:number):TodoAction =>{
	return {type:TodoActionTypes.SET_TODO_PAGE,payload:page}
}