import { fluidTypography } from "@utils/fluidTypography"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const Container = styled.section`
    &{
        position: relative;
        box-sizing: border-box;
        display: flex;
        height: fit-content;
        flex-direction: column;
        gap: 8px;
        width: min-content;
        font-family: "open_sans_regular";
        font-weight: 400;
        font-style: normal;
        border: 2px solid black;
        padding: 6px;
        border-radius: 6px;
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
        width: 100%;
        box-sizing: border-box;
        background-color: black;
        border: 2px solid black;
        padding: 6px;
        color: white;
        text-align: center;
        text-decoration: none;
        transition: all ease-out 0.2s;
        user-select: none;
    }
    &:hover {
        color: black;
        background-color: white;
    }
`