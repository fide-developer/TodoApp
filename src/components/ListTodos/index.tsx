import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks"
import { getTodos, TodoTypes } from "../../redux/features/todo/todoSlices"
import Modal from "../Modal"
import ModalUpdateTodo from "../Modal/ModalUpdateTodo"
import Todo from "./Todo"
import { ListTodoContainer } from "./styledComponents"


const ListTodos: React.FC<{todos: TodoTypes[]}> = ({todos}) => {


    return(
        <ListTodoContainer>
            {todos.map( (todo, index) => <Todo key={todo.id} index={index} todo={todo} />)}
        </ListTodoContainer>
    )
}

export default ListTodos