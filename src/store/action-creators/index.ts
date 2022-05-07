import * as UserActionCreators from './user-actions'
import * as TodoActionCreators from './todo-actions'



const actionCreators ={
	...UserActionCreators,
	...TodoActionCreators
	}

export default actionCreators