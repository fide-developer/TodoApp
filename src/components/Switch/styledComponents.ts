
import styled from "styled-components";


export const ToogleButton = styled.div`
    position: relative;
    display: flex;
    height: 24px;
    gap: 1em;
    width: 44px;
`
export const SwitchMode = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`

export const Slider = styled.span<{active: boolean}>`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 24px;
    background-color: ${props => props.active? "#2196F3" : "#c2c2c2"};
    transition: .3s;
    cursor: pointer;

    &::before{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        left: 2px;
        bottom: 2px;
        border-radius: 50%;
        background-color: white;
        
        transform: ${props => props.active? "translateX(20px)" : "none"};

        transition: .3s;
    }
`