import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { clearPersistedObject, KeysPersisted } from 'src/common/persistance'

import { baseApi } from './APIs'
import { authApi } from './APIs/auth'
import { ErrorStatus } from './APIs/types'
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
    // TODO: Check and move to general strings
    return 'Error'
  }
}

const rtkQueryErrorLogger: Middleware =
  (_api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      if (action.payload) {
        // TODO: Be careful that 401 is used both to Signature expire and for "Invalid email" (maybe 422 is better?)
        if (
          action.payload.originalStatus === ErrorStatus.Unauthorized ||
          action.payload.status === ErrorStatus.Unauthorized
        ) {
          clearPersistedObject(KeysPersisted.USER)
          // TODO: Check and move to general strings
          Alert.alert(`You're being logged out`)
        } else {
          // TODO: Maybe in the future we can display localized custom messages depending on the response, instead of showing directly what the backend sends
          const errorMessage = generateErrorMessage(action.payload.data)
          Alert.alert(errorMessage)
          // TODO: Combining error action with ErrorModal we can display errors all over the app nicely
          // api.dispatch(setErrorAction(errorMessage))
        }
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
