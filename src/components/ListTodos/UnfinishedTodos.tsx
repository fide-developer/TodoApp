import { useEffect, useState } from "react"
import ListTodos from "."
import { useAppSelector } from "../../redux/app/hooks"
import { TodoTypes } from "../../redux/features/todo/todoSlices"
import { ContentColumn } from "./styledComponents"


const UnfinishedTodos: React.FC = () => {
    const [filteredTodo, setFilteredTodo] = useState<TodoTypes[]>([])
    const todos = useAppSelector(state => state.todo).todo

    useEffect(() => {
        let unfinished = todos.filter((todo : TodoTypes)=>{
            return todo.status === 0
        })
        unfinished.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
        setFilteredTodo(unfinished)
    }, [todos])

    return(
        <ContentColumn>
            <h3>Unfinished Todos</h3>
            
            <ListTodos todos={filteredTodo}/>
        </ContentColumn>
    )
}

export default UnfinishedTodos