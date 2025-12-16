import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        data:[{id:1, name: "Mijgona" , status: true}]
    },
    reducers: {
        addTodo: (state, action) => {
            state.data.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.data = state.data.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const {id, name, status} = action.payload;
            state.data = state.data.map(todo => 
                todo.id === id ? { ...todo, name, status } : todo
            );
        },
        checkboxChange: (state, action) => {
            const {id, status} = action.payload;
            state.data = state.data.map(todo => 
                todo.id == id ? { ...todo, status } : todo
            );
        }
        
    }
});

export default todoSlice.reducer;
export const {addTodo , deleteTodo, editTodo, checkboxChange} = todoSlice.actions