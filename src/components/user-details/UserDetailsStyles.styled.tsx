import {Box,Typography,styled,Paper, Toolbar} from '@mui/material'


export namespace UserDetailsStyles{

    export const DetailsLine=styled(Typography)(
        ({theme})=>({
           " font-size": "large",
            "color":"black",
            "font-weight": 500,
            "letter-spacing": "2px",
            "padding-left":"3px"
        })
    )

    export const DetailsBanner=styled(Paper)(
        ({theme})=>({
           " font-size": "large",
            "color":"black",
            "font-weight": 500,
            "letter-spacing": "2px",
            "padding-left":"3px"
        })
    )
   

    export const DetailsWrapper=styled(Box)(
        ({theme})=>({
            "width":"100vw",
            "display": "flex",
            "justify-content": "center"
        })
    )

    export const FlexEnder=styled(Box)(
        ({theme})=>({
            "display":"flex",
            "padding":"3px",
            "padding-right": "10px",
            "flex-direction": "row",
            "justify-content": "flex-end"
        }))
    
    

}