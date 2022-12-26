import styled from "styled-components"

export const Container = styled.section`
    &{
        position: relative;
        width: min-content;
        padding: 6px;
        border: 4px double #98c1d9;
        cursor: pointer;
        background-color: #293241;
        transition: 0.3s ease-in;
    }
    &:hover {
        box-shadow: 4px 4px 16px 8px #29324150;
    }
`

export const CardName = styled.h2`
    &{
        color: #e0fbfc;
        font-size: 20px;
        font-weight: 600;
    }
`

export const CardDescription = styled.small`
    &{
        max-width: 100%;
        color: #8bafc5;
        font-weight: 600;
    }
`
