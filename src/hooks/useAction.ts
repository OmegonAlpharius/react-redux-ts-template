import { bindActionCreators } from 'redux'
import { useAppDispatch } from './useAppDispatch'
import  ActionCreators from '../store/action-creators/'


export const useActions = () => {
   const dispatch =  useAppDispatch()
	 return bindActionCreators(ActionCreators, dispatch)
}