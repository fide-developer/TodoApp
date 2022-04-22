import styled from "styled-components";


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0,0,0,.9);

    pointer-events: all;
    cursor: default;
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: transparent;

    pointer-events: none;
`

export const ModalContainer = styled.div`
    display: flex;
    width: 50%;
    border-radius: 4px;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    background-color: white;

    pointer-events: all;
`

export const ModalHeader = styled.div`
    display: flex;
    gap: 2em;
    position:relative;
    padding: 24px;
    padding-bottom: 12px;
    width: 100%;
    border-bottom: 2px solid rgba(0,0,0,.2);

    svg{
        position: absolute;
        top: 0;
        right: 0;

        width: 24px;
        height: 24px;
        color: red;
        :hover{
            fill:red;
        }
    }
`

export const ModalBody = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    gap: 1em;

    padding: 24px;

    label,input{
        flex: 1;
    }

`