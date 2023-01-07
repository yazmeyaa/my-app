import styled from "styled-components";

export const Container = styled.div`
    &{
        @keyframes open {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }

        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation-name: open;
        animation-timing-function: ease-out;
        animation-iteration-count: 1;
        animation-duration: 0.3s;
    }
`

export const Content = styled.div`
    &{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 12px; 
        border-radius: 6px;
        padding: 1rem;
        background-color: white;
    }
`

export const Title = styled.h2`
    &{
        font-size: 1.5rem;
    }
`

export const CloseButton = styled.button`
    &{
        border: none;
        background-color: transparent;
        cursor: pointer;
        position: absolute;
        left: 100%;
        transform: translate(-100%, -50%);
        font-size: 22px;
    }
`