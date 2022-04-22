import { useState } from "react"
import { TodoTypes } from "../../../redux/features/todo/todoSlices"
import ModalUpdateTodo from "../../Modal/ModalUpdateTodo"
import { TodoContainer } from "./styledComponents"




const Todo: React.FC<{todo: TodoTypes, index: number}> = ({todo, index}) => {
    const [popUp, setPopUp] = useState<boolean>(false)

    const handleModal = () => {
        console.log('asd')
        setPopUp(false)
    }
    return(
        <>
        <TodoContainer onClick={() => setPopUp(true)}>
            <h4>{todo.title}</h4>
            <p>Created at {todo.createdAt}</p>
        </TodoContainer>
        <ModalUpdateTodo todo={todo} popUp={popUp} setPopUp={handleModal}/>
        </>
    )
}

export default Todo