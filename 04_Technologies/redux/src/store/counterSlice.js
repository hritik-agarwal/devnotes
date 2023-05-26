import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload
    },
    decrement: (state, action) => {
      state.value -= action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = 'error'
      })
  },
})

export default counterSlice.reducer
export const {increment, decrement} = counterSlice.actions

// Creating async function using createAsyncThunk
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
    return result
  }
)

// Creating async thunk function directly
export const incrementAsync2 = amount => {
  return async function incrementAsyncThunk(dispatch) {
    setTimeout(() => {
      dispatch(increment(amount))
    }, 1000)
  }
}
