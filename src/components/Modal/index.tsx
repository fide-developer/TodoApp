import { ModalBody, ModalContainer, ModalHeader, ModalOverlay, ModalWrapper } from "./styledComponent"
import CloseIcon from '../../images/close.svg'

type ModalProps = {
    children?: React.ReactNode
    popedUp: boolean,
    onClose: any
}
const Modal: React.FC<ModalProps> = ({children, popedUp, onClose}) => {
console.log(onClose)


    return (
        <>
            {popedUp && <>
                <ModalOverlay onClick={() => onClose()}/>
                <ModalWrapper>
                    <ModalContainer>
                        {children}
                    </ModalContainer>
                </ModalWrapper>
            </>}
        </>
    )
}

export default Modal