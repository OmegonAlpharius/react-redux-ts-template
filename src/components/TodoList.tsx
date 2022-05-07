import { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector'

 const TodoList = () => {
	 const {page,error,loading,todos,limit} = useTypedSelector(state=>state.todo)

	 const {fetchTodos,SetTodoPage} = useActions()
	 const pages = [1,2,3,4,5]


	 useEffect(() => {
		fetchTodos(page)

	 }, [page])


	 if (loading) {
		return <h1>Идет загрузка</h1>

	}
	if (error){
		return <h1>Ошибка:{error}</h1>
	}
		return <div>
	 {todos.map(todo=>
		<div key={todo.id} >{todo.id}-{todo.title}</div>
	 )}
	 <div style={{ display:'flex'}}>

	 {pages.map(p=>
		<div key={p}
		style={{ border:p===page ? '2px solid green':'1px solid grey',padding:10}}
		onClick={() => { SetTodoPage(p) }}
		>
			{p}
		</div>
		)}
		</div>
		</div> ;
	};


export default TodoList