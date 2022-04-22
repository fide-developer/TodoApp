import { useEffect, useState } from "react"
import Modal from "."
import { useAppDispatch } from "../../redux/app/hooks"
import { addTodo, removeTodo, TodoTypes, updateTodo } from "../../redux/features/todo/todoSlices"
import Switch from "../Switch"
import { ModalHeader, ModalBody } from "./styledComponent"


interface UpdatesTodo {
    popUp : boolean,
    setPopUp : any,
    todo?: TodoTypes,
}

const ModalUpdateTodo : React.FC<UpdatesTodo> = ({popUp,setPopUp,todo}) => {
    const [titleTodo, setTitleTodo] = useState<string>(todo?.title? todo.title : "")
    const [descriptions, setDescription] = useState<string>(todo?.description ? todo.description : "")
    const [status, setStatus] = useState<boolean>(todo?.status===1)
    
    const dispatch = useAppDispatch()

    const handleSave = () => {
        if(!todo) return

        let todoCopy: TodoTypes = {...todo, title: titleTodo, description: descriptions, status: status ? 1 : 0}
        
        dispatch(updateTodo(todoCopy))
        setPopUp(false)
    }
    
    const handleDelete = () => {
        if(!todo) return

        dispatch(removeTodo(todo.id))
        setPopUp(false)
    }

    const handleAdd = () => {
        dispatch(addTodo({title: titleTodo, description: descriptions}))
        setPopUp(false)
    }

    const handleChange = (value: string, type: 'title' | 'desc') => {
        if(!todo) {
            switch(type){
                case 'title' : setTitleTodo(value)
                    break
                case 'desc' : setDescription(value)
            }
        } else{
            switch(type){
                case 'title' : if(todo.title !== value) setTitleTodo(value)
                    break
                case 'desc' : if(todo.description !== value) setDescription(value)
            }
        }

    }
    return (
        <>
        <Modal popedUp={popUp} onClose={setPopUp}>
            <ModalHeader>
                <label htmlFor="todo">Todo</label>
                <input id="todo" value={titleTodo} onChange={(e) => handleChange(e.target.value, 'title')} />
                {todo? <p> Created at : {todo?.createdAt}</p> : ''}
                {/* <CloseIcon /> */}
            </ModalHeader>
            <ModalBody>
                <label htmlFor="desc">Description</label>
                <textarea id="desc" style={{resize: 'none'}} value={descriptions} onChange={(e) => handleChange(e.target.value, 'desc')}>

                </textarea>
                {todo? <Switch title="Status (Unfinished / Finished)" value={status} setValue={setStatus} /> : ''}

                {!todo?.id ? <button onClick={() => handleAdd()}> Add Todo </button> : <>
                    <button onClick={() => handleSave()}> Save Changes </button>
                    {todo.status !== 1 && <button style={{backgroundColor: '#fd4548'}} onClick={() => handleDelete()}> Delete </button>}
                </>}

            </ModalBody>
        </Modal>
        </>
    )
}

export default ModalUpdateTodo