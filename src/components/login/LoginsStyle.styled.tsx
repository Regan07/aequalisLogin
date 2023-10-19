import {styled,Box,Input,Button,InputLabel,FormControl,AppBar,TextField} from '@mui/material'
import {styled as Styled} from 'styled-components'


export namespace LoginStyle{

    export const NavigationBar=styled(AppBar)(
        ({theme})=>({
            "background":theme.palette.grey[900]
        })
    )

    export const FormContainer=styled(Box)(
        ({theme})=>({
            "display": "flex",
            "justifyContent":"center",
            "marginTop": "15vh",
        }))

     export const FormDiv=styled(FormControl)(
        ({theme})=>({
            "display":"flex",
            "flexDirection": "column",
        })
     )

    export const FormILabel=styled(InputLabel)(
      ({theme})=>({
                fontWeight:"500",
                "color":"red",
                "display":"block"
      })
        )

     export const FormButton=styled(Button)(
        ({theme})=>({
                "padding":"2px 4px",
                "width":"20px",
        }))

    //  
    export const FormInput=styled("input")(
        {
            "height": "25px",
            "marginTop":"0px",
            "width":"25vw",
            "padding":"0px",
            "border":"0px",
            "borderRadius": "4px",
            " backgroundColor": "rgba(199, 184, 213, 0.607)",
            ":focus":{
                "border":"0px",
                " backgroundColor": "rgba(199, 184, 213, 0.307)",
            }
        })
         
        export const StyledForm=styled('form')({
            onSubmit:(e:any)=>e.preventDefault(),
        "display":"flex",
        "flexDirection": "column",
        "alignSelf": "center",
        
    }) 
}