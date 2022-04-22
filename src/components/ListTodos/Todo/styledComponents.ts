import styled from "styled-components";



export const TodoContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 0.5em 1em;
    border-radius: 4px;
    gap: .5em;

    border-bottom: 1px solid rgba(0,0,0,.3);
    cursor: pointer;

    :hover{
        background-color: #EEEEEE;
    }

    h4{
        font-weight: 400;
    }

    p{
        text-align: end;
        color: gray;
        font-size: 11px;
    }
`