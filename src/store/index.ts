import { AnyAction, applyMiddleware, legacy_createStore as createStore} from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer,{},applyMiddleware(thunk))
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>