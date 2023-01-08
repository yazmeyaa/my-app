import { fluidTypography } from "@utils/fluidTypography"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const Container = styled.section`
    &{
        position: relative;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: min-content;
        font-family: "open_sans_regular";
        font-weight: 400;
        font-style: normal;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
        padding: 1rem;
        border-radius: 6px;
        padding-bottom: 3rem;
    }
`

export const StyledImage = styled(Image)`
    &{
        max-width: 320px;
        height: auto;
    }
`

export const Title = styled.h2`
    &{
        font-size: ${fluidTypography(480, 1440, 18, 24)};
        color: #f16100;
    }
`

export const Description = styled.small`
&{
    font-size: ${fluidTypography(480, 1440, 12, 16)};
    line-height: 1.6;   
}`

export const StyledLink = styled(Link)`
    &{
        width: 80%;
        font-size: ${fluidTypography(480, 1440, 16, 20)};
        box-sizing: border-box;
        background-color: black;
        border: 2px solid black;
        padding: 6px;
        color: white;
        text-align: center;
        text-decoration: none;
        transition: all ease-out 0.2s;
        user-select: none;
        position: absolute;
        bottom: 12px;
        left: 50%;
        transform: translate(-50%);
        border-radius: 6px;
    }
    &:hover {
        color: black;
        background-color: white;
    }
`