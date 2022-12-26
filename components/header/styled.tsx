import Link from "next/link";
import styled from "styled-components";

export const Container = styled.header`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        background-color: #293241;
        padding: 8px 0px;
        box-shadow: 6px 6px 16px 4px #00000040;
    }
`

export const Title = styled.h1`
    &{
        color: #ee6c4d;
        font-size: 24px;
        text-transform: capitalize;
        font-variant: small-caps;
        user-select: none;
    }
`

export const NavigationLinks = styled.ul`
    &{
        display: flex;
        justify-content: space-around;
        min-width: 360px;
        width: 70%;
    }
`

export const NavLinkItem = styled.li`
    &{
        list-style-type: none;
    }
    &:hover{
        color: rgb(106, 70, 206);
        text-shadow: 0px 0px 10px #293241;
    }
`

export const StyledLink = styled(Link)`
    &{
        font-size: 16px;
        font-weight: 600;
        text-decoration: underline;
        color: #e0fbfc ;
        transition: ease-in 0.2s;
    }
    &:hover {
        color: rgb(106, 70, 206);
        text-shadow: 0px 0px 10px #293241;
    }
    &:visited{
        text-decoration: none;
        color: none;
    }
`