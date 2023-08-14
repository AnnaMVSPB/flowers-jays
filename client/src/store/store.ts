import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';
import flowersSlice from '../features/Flowers/flowersSlice';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.

const store = configureStore({
 // теперь функция combineReducers не нужна
 reducer: {
auth: authSlice,
flowers: flowersSlice
 },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
