import { combineReducers } from '@reduxjs/toolkit'

import { baseApi } from './APIs'
import { authApiReducer, authApiReducerPath } from './APIs/auth'

export const rootReducer = combineReducers({
  [authApiReducerPath]: authApiReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export type ReduxState = ReturnType<typeof rootReducer>
