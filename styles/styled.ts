import styled from 'styled-components'
import Image from "next/image";
import { fluidTypography } from '@utils/fluidTypography';

export const ContentContainer = styled.section`
    &{
        display: flex;
        align-items: center;
        padding: 0px 40px;
        margin-top: 12px;
        gap: 16px;

        @media screen and (max-width: 600px) {
            flex-direction: column-reverse;
            padding: 0px 6px;   
            padding-bottom: 60px;
        }
    }
`

export const About = styled.section`

    & > h1 {
        font-size: 38px;
        font-size: ${fluidTypography(480, 1440, 26, 38)};
        color: #FF8A56;
        line-height: 1.25;
    }

    & > h2 {
        width: fit-content;
        font-size: ${fluidTypography(480, 1440, 18, 24)};
        line-height: 1.2;
    }

    & > small {
        display: inline-block;
        margin-top: 8px;
        font-size: ${fluidTypography(480, 1440, 14, 18)};
        color: #666666;
        line-height: 1.4;
    }
`

export const StyledImage = styled(Image)`
    &{
        border: 2px solid black;
        border-radius: 50%;
        width: 30vw;
        height: auto;
        object-fit: fill;
        mask-image: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
    }
`

export const DownloadButton = styled.a`
    &{
        display: block;
        text-decoration: none;
        width: fit-content;
        margin-top: 20px;
        font-size: ${fluidTypography(480, 1440, 14, 22)};
        font-family: 'open_sans_regular';
        border-radius: 12px;
        border: 1px solid white;
        background-color: black;
        color: white;
        padding: 12px 12px;
        cursor: pointer;
    }
`