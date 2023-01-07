import { fluidTypography } from "@utils/fluidTypography";
import styled from "styled-components";

export const Container = styled.article`
    &{
        box-sizing: border-box;
        display: flex;
        padding: 1rem 2rem;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        width: 100%;
        margin-bottom: 40px;
        @media screen and (max-width: 600px) {
        }
    }
`

export const ContactsBlock = styled.section`
    &{
        display: flex;
        gap: 12px;
        align-items: center;
    }
    & > a {
        -webkit-tap-highlight-color: transparent;
    }
    & > a > svg {
        transition: transform 0.2s ease-out;
    }
    & > a > svg:hover {
        transform: scale(1.4);
    }
`

export const Form = styled.form`
    &{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
        
    }
    & > label {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    & > label > span {
        font-size: 18px;

    }
`

export const TextField = styled.input`
    &{
        box-sizing: border-box;
        border-radius: 12px;
        border: 2px solid #D0D4D9;
        padding: 12px 16px;
        width: 100%;
        font-size: 15px;
        transition: border-color ease-out 0.2s;
    }
    &:focus{
        outline: 1px solid black;
    }
    &:hover{
        border-color: #686a6d;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active{
    box-shadow: 0 0 0 30px white inset !important;
}
`

export const TextArea = styled.textarea`
    &{
        box-sizing: border-box;
        border-radius: 12px;
        border: 2px solid #D0D4D9;
        padding: 12px 16px;
        width: 100%;
        font-size: 15px;
        transition: border-color ease-out 0.2s;
        resize: vertical;
        
    }
    &:focus{
        outline: 1px solid black;
    }
    &:hover{
        border-color: #686a6d;
    }

`

export const Button = styled.button`
    &{
        width: 100%;
        margin: 0px auto;
        padding: 8px 12px;
        font-size: 18px;
        border-radius: 12px;
        border: 2px solid #8a8c8f;
        transition: all ease-out 0.3s;
    }

    &:hover:not(:disabled){
        cursor: pointer;
        background-color: #242424;
        color: white;
    }

`

export const ErrorText = styled.p`
    &{
        @keyframes show {
            0% {
                transform: translate(0px, 50px);
                opacity: 0;
            }
            100% {
                transform: translate(0px);
                opacity: 1;
            }
        }
        color: #b40000;
        font-size: 14px;
        animation-name: show;
        animation-iteration-count: 1;
        animation-duration: 0.4s;
        animation-timing-function: ease-out;
    }
`

export const FormTitle = styled.h2`
    &{
        font-size: ${fluidTypography(480, 1440, 16, 20)};
        align-self: center;
    }
`