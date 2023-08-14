import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

export const initialState:State = { flowers: [], error: '' };

export const flowersInit = createAsyncThunk(
    'flowers/init', () => api.initFlowersFetch()
);
export const flowersDel = createAsyncThunk(
    'flowers/del', (id:number) => api.delFlowersFetch(id)
);


const flowersSlice = createSlice({
  name: 'flowers',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(flowersInit.fulfilled, (state, action) => {
            state.flowers = action.payload;
        })
        .addCase(flowersInit.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(flowersDel.fulfilled, (state, action) => {
            state.flowers = state.flowers.filter((flower) => flower.id !== action.payload.id);
        })
        .addCase(flowersDel.rejected, (state, action) => {
          state.error = action.error.message;
        });
    },

});
  export default flowersSlice.reducer;
