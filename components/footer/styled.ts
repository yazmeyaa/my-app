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
