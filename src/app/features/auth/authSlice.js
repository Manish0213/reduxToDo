import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginUser = createAsyncThunk('auth/loginUser', async (credientials) => {
    const response = await fetch(`http://localhost:5000/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credientials)
    });
    const data = await  response.json();
    console.log(data);
    localStorage.setItem('token',data.authToken);
    return data;
  });

  export const signupUser = createAsyncThunk('auth/signupUser', async (credientials) => {
    const response = await fetch(`http://localhost:5000/auth/signup`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credientials)
    });
    const data = await  response.json();
    console.log(data);
    localStorage.setItem('token',data.authToken);
    return data;
  })

const initialState = {
    loggedUser: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
        state.loggedUser = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
    });

    builder.addCase(signupUser.pending, (state, action) => {
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
        state.loggedUser = action.payload;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
    });
  },
})

export default authSlice.reducer