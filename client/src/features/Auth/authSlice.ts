import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Registr, State } from './type';
import * as api from './api';

const initialState:State = { user: {}, error: '' };

export const registrUser = createAsyncThunk(
    'authUser/registr', (obj:Registr) => api.registrFetch(obj)
);

const authUserSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {},
extraReducers: (builder) => {
builder
.addCase(registrUser.fulfilled, (state, action) => {
    state.user = action.payload;
    state.error = '';
})
.addCase(registrUser.rejected, (state, action) => {
    state.error = action.error.message;
    state.user = {};
});
}
});
 export default authUserSlice.reducer;
