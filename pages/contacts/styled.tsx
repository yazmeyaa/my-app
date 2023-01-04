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
        @media screen and (max-width: 600px) {
        }
    }
`

export const ContactsBlock = styled.section`
    &{
        display: flex;
        gap: 12px;
    }
    & > a {
        -webkit-tap-highlight-color: transparent;
    }
`

export const Form = styled.form`
    &{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
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
    }
    &:focus{
        outline: 2px solid black;
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
        resize: vertical;
    }
    &:focus{
        outline: 2px solid black;
    }
`

export const Button = styled.button`
    &{
        width: fit-content;
        margin: 0px auto;
        padding: 8px 12px;
        font-size: 18px;
        border-radius: 12px;
        border: 2px solid #8a8c8f;
    }

`