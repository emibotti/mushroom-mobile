import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'

import { baseApi } from './APIs'
import { authApi } from './APIs/auth'
import { rootReducer } from './rootReducer'

const middlewares: Middleware[] = [authApi.middleware, baseApi.middleware]

const rtkQueryErrorLogger: Middleware =
  (_api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      if (action.payload) {
        const errorMessage = action.payload.data
        Alert.alert(errorMessage)
        // TODO: Combining error action with ErrorModal we can display errors all over the app nicely
        // api.dispatch(setErrorAction(errorMessage))
      }
    }

    return next(action)
  }

middlewares.push(rtkQueryErrorLogger)

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export { store }
