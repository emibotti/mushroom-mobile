import { combineReducers } from '@reduxjs/toolkit'

import { baseApi } from './APIs'
import { authApiReducer, authApiReducerPath } from './APIs/auth'
import { sessionReducer } from './storage/session/sessionSlice'

export const rootReducer = combineReducers({
  [authApiReducerPath]: authApiReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  session: sessionReducer,
})

export type ReduxState = ReturnType<typeof rootReducer>
