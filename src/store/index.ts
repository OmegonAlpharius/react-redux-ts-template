import { AnyAction, applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer,{},applyMiddleware(thunk))
export type AppDispatch = ThunkDispatch<RootState,any, AnyAction>
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>