import { useState } from "react"
import { useAppDispatch } from "../../redux/app/hooks"
import ModalUpdateTodo from "../Modal/ModalUpdateTodo"
import { CustomNavbar } from "./styledComponents"


const Header: React.FC = () => {
    const dispatch = useAppDispatch()
    const [addNew, setAddNew] = useState<boolean>(false)

    return(
        <>
            <CustomNavbar>
                <h1>My Todo App</h1>
                <button onClick={() => setAddNew(true)}>Add Todo</button>
            </CustomNavbar>

            <ModalUpdateTodo popUp={addNew} setPopUp={setAddNew}/>
        </>
    )
}

export default Header