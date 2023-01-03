import Link from "next/link";
import styled from "styled-components";

export const Container = styled.footer`
    &{
        display: none;

        
        @media screen and (max-width: 600px){
            display: block;
            position: fixed;
            bottom: 0;
            width: 100%;
            padding-top: 1rem;
            padding-bottom: 1rem;
            background-color: black;
            color: white;
        }
    }
`

export const Navigation = styled.ul`
    &{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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
        background: #ffffff;
        transition: 0.3s;
    }
    &:hover::after {
        width: 100%;
    }
`