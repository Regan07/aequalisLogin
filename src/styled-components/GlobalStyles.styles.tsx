import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

    #title{
    background-color: grey;
    border: 2px solid;
    padding-left: 3px;
    font-size: large;
    font-weight: 500;
    /* padding:10px 4px; */
    }
    .title{
        color:grey;
        font-size: xx-large;
        font-weight: 500;
    }
    #error{
        color:red;
    }
    .active{
        font-size:larger;
    }
    
`