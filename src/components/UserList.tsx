import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';


const UserList: React.FC = () => {
	const {users,error,loading} = useTypedSelector(state=>state.user)
   const dispatch =  useDispatch()
	React.useEffect(() => {
		dispatch(fetchUsers())
	},[dispatch])


	return <div>

	</div> ;
};

export default UserList;
