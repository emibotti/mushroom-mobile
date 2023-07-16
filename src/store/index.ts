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

const generateErrorMessage = (payloadData: any): string => {
  if (typeof payloadData === 'string') {
    return payloadData as string
    // TODO: Check it isn't an array
  } else if (typeof payloadData === 'object') {
    if ((payloadData as Object).hasOwnProperty('message')) {
      return payloadData.message
    } else {
      return JSON.stringify(payloadData)
    }
  } else {
    return 'Error'
  }
}

const rtkQueryErrorLogger: Middleware =
  (_api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      if (action.payload) {
        // TODO: Maybe in the future we can display localized custom messages depending on the response, instead of showing directly what the backend sends
        const errorMessage = generateErrorMessage(action.payload.data)
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
