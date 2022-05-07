import * as React from 'react';
import { useActions } from '../hooks/useAction';

import { useTypedSelector } from '../hooks/useTypedSelector';



const UserList: React.FC = () => {
	const {users,error,loading} = useTypedSelector(state=>state.user)
	const {fetchUsers}= useActions()
	React.useEffect(() => {
		fetchUsers()

	},[])

if (loading) {
	return <h1>Идет загрузка</h1>

}
if (error){
	return <h1>Ошибка:{error}</h1>
}
	return <div>
 {users.map(user=>
	<div key={user.id} >{user.name}</div>
 )}
	</div> ;
};

export default UserList;
