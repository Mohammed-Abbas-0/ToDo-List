import { createSlice } from "@reduxjs/toolkit";

// Function for Init TodoList in Local-Storage
function getTodoListfromLocalStorage()
{
  const localStorageTodo = window.localStorage.getItem('todoList');
  if(localStorageTodo) return JSON.parse(localStorageTodo);
  window.localStorage.setItem('todoList',JSON.stringify([]));
  return []
}

// initialState as Default Value in Toolkit(slice)
const initialState = {
    todoList: getTodoListfromLocalStorage()
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => 
        {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todoList');
            if(todoList)
            {
                const todoListArr = JSON.parse(todoList);
                todoListArr.push({...action.payload});  
                window.localStorage.setItem('todoList',JSON.stringify(todoListArr));

            }
            else {
                window.localStorage.setItem(
                  'todoList',
                  JSON.stringify([
                    {
                      ...action.payload,
                    },
                  ])
                );
              }
        },
        deleteTodo: (state, action) => {
          const todoList = window.localStorage.getItem('todoList');
          if (todoList) {
            const todoListArr = JSON.parse(todoList);
            todoListArr.forEach((todo, idx) => {
              if (todo.id === action.payload) {
                todoListArr.splice(idx, 1);
              }
            });
            window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
            state.todoList = todoListArr;
          }
        },
        clearTodoList:(state) => 
        {
          state.todoList = [];
          window.localStorage.removeItem('todoList');
          
        },
        updateTodo: (state, action) => {
          const todoList = window.localStorage.getItem('todoList');
          if (todoList) {
            const todoListArr = JSON.parse(todoList);
            todoListArr.forEach((todo) => {
              if (todo.id === action.payload.id) {
                todo.status = action.payload.status;
                todo.title = action.payload.title;
              }
            });
            window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
            state.todoList = [...todoListArr];
          }
        }
        
    }
})

export const { addTodo , deleteTodo , clearTodoList , updateTodo } = todoSlice.actions;
export default todoSlice.reducer;