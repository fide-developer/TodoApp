import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTodosAPI } from "./todoAPI"


export interface TodoTypes {
    id: number,
    title: string,
    description: string,
    status: number,
    createdAt: string
}

const timeCorrection = (value: number) => {
    let newVal = value.toString()

    if(value < 10){
        newVal = "0"+newVal
    }

    return newVal
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
        addTodo : (state, action : PayloadAction<{title: string, description: string}>) => {
            let date = new Date()
            let year = timeCorrection(date.getFullYear())
            let month = timeCorrection(date.getMonth() + 1)
            let day = timeCorrection(date.getDate())

            let hour = timeCorrection(date.getHours())
            let minutes = timeCorrection(date.getMinutes())
            
            let time = `${year}-${month}-${day} ${hour}:${minutes}`
            let newID = state.todo.length + 1
            
            state.todo.push({
                id: newID,
                createdAt: time,
                description: action.payload.description,
                status: 0,
                title: action.payload.title
            })
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