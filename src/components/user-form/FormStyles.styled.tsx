import { TextField, styled } from "@mui/material";
import {Box} from '@mui/material';

export namespace FormStyles{

    export const Form=styled('form')({
        "onSubmit":(e:any)=>e.preventDefault(),
        "width":"380px",
       " backgroundColor":"white",
        "borderTop":"3px solid grey",
        "borderBottom":"3px solid grey"
    }) 

    export const FormPartDiv=styled(Box)({
        "display": "flex",
       "justifyContent": "space-between",
        " marginTop":"4%",
    }) 

    export const FormInput=styled(TextField)(({theme})=>({
        // "height":"25px"
    }))
    
    export const FormTextAreaDiv=styled(Box)({
        "flex":1,
        "display": "flex",
        "flexDirection": "column",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "marginBottom": "10px",
    }) 

    export const FormTextField=styled(TextField)
    (({theme})=>({
        // "height":"100px"
    }))

    export const PartDivChild=styled(Box)({
        "display": "flex",
        "flexDirection": "column",
        "width":"48%"
    })

}