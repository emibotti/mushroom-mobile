import { createSelector, createSlice } from '@reduxjs/toolkit'
import { ReduxState } from 'src/store/rootReducer'

export interface HeadersState {
  session?: string
}

export const initialState: HeadersState = {
  session: undefined,
}

const headersSlice = createSlice({
  initialState,
  name: 'headers',
  reducers: {
    // TODO: Is this the best option or is it better to use cache?
    setSession: (state, action) => {
      state.session = action.payload
    },
  },
})

export const selectHeaders = (state: ReduxState): HeadersState => state.headers
export const selectAuthSession = createSelector(
  selectHeaders,
  (headersState: HeadersState) => headersState.session,
)

export const {
  actions: { setSession },
  reducer: headersReducer,
} = headersSlice
