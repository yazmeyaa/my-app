import Link from "next/link"
import styled from "styled-components"
import { CSSProperties } from "react"

type ColorType = CSSProperties['color']

interface NavigationLinkProps {
    $current: boolean
    color: ColorType
}

export const NavigationLink = styled(Link) <NavigationLinkProps>`
    &{
        font-family: 'open_sans_bold';
        color:  ${props => props.color};
        text-decoration: none;
    }
    &:visited{
        color: inherit;
    }
    &::after {
        content: '';
        width: ${props => {return props.$current ? '100%' : '0%'}};
        height: 2px;
        display: block;
        background: ${props => props.color};
        transition: 0.3s;
    }
    &:hover::after {
        width: 100%;
    }
`