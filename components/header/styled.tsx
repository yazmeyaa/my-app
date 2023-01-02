import { fluidTypography } from "@utils/fluidTypography";
import Link from "next/link";
import styled from "styled-components";



export const Container = styled.header`
    &{
        display: flex;
        justify-content: space-between;
        padding: 2rem 4rem;

        @media screen and (max-width: 600px) {
            justify-content: center;
        }
    }
`

export const StyledLogoLink = styled(Link)`
    &{
        text-decoration: none;
    }
    &:visited {
        color: black;
    }
`

export const TextLogo = styled.h1`
    &{
        font-family: "open_sans_bold";
        font-size: 32px;
        font-size: ${fluidTypography(480, 1440, 24, 32)};
        font-variant: small-caps;
        user-select: none;
        transition: color 0.2s ease-in , transform  0.2s ease-in, text-shadow 1s ease-in 0.4s;
        @media screen and (max-width: 600px) {
            font-size: ${fluidTypography(200, 600, 30, 48)}
        }
    }
    &:hover {
        text-shadow: 0 0 30px #ff6600;
        color: #ff8738;
        transform: scale(1.1);
    }
`

export const NavigationContainer = styled.nav`
    &{
        display: flex;
        align-items: center;
        @media screen and (max-width: 600px) {
            display: none;
        }
    }

`

export const NavigationList = styled.ul`
    &{
        display: flex;
        gap: 2rem;
    }
    & > li {
        text-align: center;

    }
`

export const NavigationLink = styled(Link)`
    &{
        text-decoration: none;
        font-family: 'open_sans_bold';
    }
    &:visited{
        color: inherit;
    }
    &::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: black;
        transition: 0.3s;
    }
    &:hover::after {
        width: 100%;
    }
`
