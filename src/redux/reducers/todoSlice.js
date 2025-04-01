import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        data:[],
    },
    reducers:{
        addTodo:(state,action) => {
            const todoData = {
                id: state.data?.length + 1,
                title: action.payload.title,
                desc: action.payload.desc,
            };

            state.data = [todoData, ...state?.data];
        },
    },
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer