import { combineReducers } from '@reduxjs/toolkit'

import { baseApi } from './APIs'
import { authApiReducer, authApiReducerPath } from './APIs/auth'
import { errorReducer } from './storage/error'

export const rootReducer = combineReducers({
  [authApiReducerPath]: authApiReducer,
  error: errorReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export type ReduxState = ReturnType<typeof rootReducer>
