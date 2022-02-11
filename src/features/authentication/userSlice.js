import { 
        createAsyncThunk, 
        createSlice 
       } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    signin: (state, action) => {
      state.user = action.payload
    },

    signout: state => {
      state.user = null
    }
    
  },
  
});

export const { signin, signout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
