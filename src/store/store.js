import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../pages/redux/todoSlice'
import { usersSlice } from '../pages/redux/todoAsync'

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    users: usersSlice.reducer
  },
}) 