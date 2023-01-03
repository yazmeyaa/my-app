import Link from "next/link"
import styled from "styled-components"

interface NavigationLinkProps {
    current: boolean
    color: string
}

export const NavigationLink = styled(Link) <NavigationLinkProps>`
    &{
        text-decoration: ${props => { return props.current ? 'underline' : 'none' }};
        text-decoration-thickness: 3px;
        font-family: 'open_sans_bold';
        color:  ${props => props.color};
    }
    &:visited{
        color: inherit;
    }
    &::after {
        content: '';
        width: 0px;
        height: 2px;
        display: block;
        background: ${props => props.color};
        transition: 0.3s;
    }
    &:hover::after {
        width: 100%;
    }
`