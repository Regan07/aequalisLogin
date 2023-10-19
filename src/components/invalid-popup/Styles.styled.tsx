
import {styled} from 'styled-components'

 export namespace Styles{

    export const InvalidPopDiv=styled.div`
    width:100vw;
    height: 100vh;
    position:fixed;
    background-color: rgba(0, 0, 0,0.2);
    display: flex;
    justify-content: center;
    color:aliceblue;
    font-weight: 500;
    
    > :nth-child(1){
        width:40vw;
        height:6vh;
        display:flex;
        justify-content: space-around;
        align-items: center;
        background-color: cadetblue;
        color:aliceblue;
        animation-duration: 500ms;
        transform:translateY(3rem);
        animation-name:popup;
    }
    @keyframes popup {
        0%{
            height:2vh;
            width:30vw;
        }
        100%{
            height:6vh;
            width:40vw;
        }
    }
    
    .cancel{
        cursor:pointer;
        color:black;
    }
    `

}