import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import associationsReducer from './slices/associationsSlice'
import membershipsReducer from './slices/membershipsSlice'
import userAssociationsReducer from './slices/userAssociationsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    associations: associationsReducer,
    memberships: membershipsReducer,
    userAssociations: userAssociationsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 