import { createGlobalStyle } from "styled-components";
import Zekton from 'public/fonts/Zekton.ttf'


export const GlobalStyles = createGlobalStyle`
        @font-face {
            font-family: "open_sans_regular";
            src: url("/fonts/OpenSans-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
        }
        @font-face {
            font-family: "open_sans_bold";
            src: url("/fonts/OpenSans-Bold.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
        }
        body{
            overflow-x: hidden;
            min-height: 100vh;
        }
`