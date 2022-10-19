import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 10,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
