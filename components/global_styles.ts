import { createGlobalStyle } from "styled-components";


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
            min-height: 100vh;
        }
        #__next{ 
            min-height: 100vh;
            height: 100%;
        }

`