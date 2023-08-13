import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PersistedUser } from 'src/common/persistance'
import { ReduxState } from 'src/store/rootReducer'

interface SessionState {
  activeUser: PersistedUser | undefined
}

const initialState: SessionState = {
  activeUser: undefined,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.activeUser = action.payload
    },
  },
})

export const selectSession = (state: ReduxState) => state.session.activeUser

export const {
  actions: { setActiveUser },
  reducer: sessionReducer,
} = sessionSlice
