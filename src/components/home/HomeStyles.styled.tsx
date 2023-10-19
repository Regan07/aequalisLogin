import {AppBar,styled,Link} from '@mui/material'
import { NavLink } from 'react-router-dom'



export  namespace HomeStyles{

      export const HomeNav=styled(AppBar)(
        (({theme})=>({
            "background":theme.palette.grey[900],
      }))
      )


export const HomeLink=styled(NavLink)
                        ({
            "color":"white",
            "textDecoration":"none",
            "fontWeight":500,
            "fontSize":"x-large",
            "display":"flex",
            "alignItems":"flex-end",
            "cursor":"pointer"
                         })

export const Homelink=styled(Link)(
        (({theme})=>({
            "color":"white",
            "fontSize":"x-large",
            "fontWeight":500,
            "textDecoration":"none",
            "display":"flex",
            "alignItems":"center",
            "cursor":"pointer"
      }))
      )
} 