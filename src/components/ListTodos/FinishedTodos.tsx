import { useState, useEffect } from "react"
import ListTodos from "."
import { useAppSelector } from "../../redux/app/hooks"
import { TodoTypes } from "../../redux/features/todo/todoSlices"
import { ContentColumn } from "./styledComponents"


const FinishedTodos: React.FC = () => {
    const [filteredTodo, setFilteredTodo] = useState<TodoTypes[]>([])
    const todos = useAppSelector(state => state.todo).todo

    useEffect(() => {
        let finished = todos.filter((todo : TodoTypes)=>{
            return todo.status === 1
        })
        finished.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setFilteredTodo(finished)
    }, [todos])

    return(
        <ContentColumn>
            <h3>Finished Todos</h3>
            <ListTodos todos={filteredTodo}/>
        </ContentColumn>
    )
}

export default FinishedTodos