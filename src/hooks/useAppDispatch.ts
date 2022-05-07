import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { UserAction } from '../types/User';
export type AppDispatch = ThunkDispatch<RootState,any,UserAction >
export const useAppDispatch = () => useDispatch  <AppDispatch>()