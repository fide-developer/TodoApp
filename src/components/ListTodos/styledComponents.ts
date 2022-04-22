import styled from "styled-components";


export const ListTodoContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: .5em;
`

export const ContentColumn = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 2em;
    
    flex: 1;

    h3{
        text-align: center;
    }
`