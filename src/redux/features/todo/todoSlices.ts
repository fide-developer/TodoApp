import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTodosAPI } from "./todoAPI"


export interface TodoTypes {
    id: number,
    title: string,
    description: string,
    status: number,
    createdAt: string
}

type InitialStatesType = {
    todo: TodoTypes[],
    status?: 'loading' | 'fetching' | 'error' | 'finish'
}

const initialState : InitialStatesType = {
    todo: []
}

//get initial state from API

export const getTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (thunkApi) => {
        const response = await getTodosAPI()
        return response
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state, action : PayloadAction<TodoTypes>) => {
            state.todo.push(action.payload)
        },
        updateTodo : (state, action : PayloadAction<TodoTypes>) => {
                let index = state.todo.findIndex(item => item.id === action.payload.id)
                console.log(index)
                console.log(action.payload.id)
                state.todo[index] = {...action.payload}
                
        },
        removeTodo : (state, action : PayloadAction<number>) => {
            let index = state.todo.findIndex(item => item.id === action.payload)
            state.todo.splice(index,1)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.fulfilled, (state, action) => {
            state.status = 'finish'
            console.log(action.payload)
            
            state.todo = action.payload
        })
        builder.addCase(getTodos.pending, (state, action) => {
            state.status = 'loading'
        })
    }
})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer