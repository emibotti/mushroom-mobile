import { combineReducers } from '@reduxjs/toolkit'

import { baseApi } from './APIs'
import { authApiReducer, authApiReducerPath } from './APIs/auth'
import { errorReducer } from './storage/error'
import { headersReducer } from './storage/headers'

export const rootReducer = combineReducers({
  [authApiReducerPath]: authApiReducer,
  error: errorReducer,
  headers: headersReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export type ReduxState = ReturnType<typeof rootReducer>
