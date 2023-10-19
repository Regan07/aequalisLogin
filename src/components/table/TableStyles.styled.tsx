import{styled,Box,IconButton,TableContainer,Table,TableRow,TableCell,TableHead,TableBody} from '@mui/material'

export namespace TableStyles{


    export const SearchBox=styled('div')(
        {
           " marginBottom": "3vw",
            "display": "flex",
            "justifyContent":" flex-end",
           " width":"75vw"
        }
    )
    export const SearchInput=styled('input')(
        {
            "width":"30%",
        "height": "30px",
        "fontSize": "x-large",
        "fontWeight": 400
        }
    )

    export const Container=styled(TableContainer)(
        ({theme})=>({
            "width":"100vw",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center"
        }))

    export const StyledTable=styled(Table)(
            ({theme})=>({
                width:"75vw"
            }))

    export const Cell=styled(TableCell)(
                ({theme})=>({
                    "flex":"1",
                    "display": "flex",
                    "padding":"10px 5px",
                    "overflow":"hidden",
                    "justifyContent": "flex-start"
                }))

     export const Thead=styled(TableHead)(
                    ({theme})=>({
                        backgroundColor:"grey",
                        
                        
                    }))
    export const Tbody=styled(TableBody)(
                        ({theme})=>({
                            
                        }))
    export const Th=styled(TableCell)(
                         ({theme})=>({
                            padding:"0.5rem",
                            color:"white",
                            fontWeight:"2rem"
                        }))
    export const Tr=styled(TableRow)(
                            ({theme})=>({
                                
                            }))
    export const Td=styled(TableCell)(
                            ({theme})=>({
                                       
                             }))     
    export const SWrapper=styled(Box)(
                            ({theme})=>({
                                "display":"flex",
                                 justifyContent:"center",
                                  flexDirection:"row"           
                            }))                      
     export const IconButon=styled(IconButton)(
                            ({theme})=>({
                                           
                            }))      

                            



}