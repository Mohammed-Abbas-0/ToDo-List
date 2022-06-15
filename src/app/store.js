import { configureStore } from '@reduxjs/toolkit';
import  todoSlice  from '../slices/todoSlices';

export const store = configureStore({
    reducer:{
        //todo Reducer
        todo: todoSlice
    }
});