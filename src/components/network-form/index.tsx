import React,{useState,useEffect} from 'react'
import { networkSaveHandler } from '../../helper/saveHandler/networkSaveHandler';
import { useDispatch } from 'react-redux';
import { networkEditHandler } from '../../helper/saveHandler/networkSaveHandler';
import { testJSON } from '../../helper/testJSON/testJSON';
import { networkFormPropsType } from './networkFormType';
import { network } from '../../store-slice/networkSlice';
import { Button ,Box,Dialog,DialogActions,DialogTitle} from '@mui/material';
import { FormStyles } from '../user-form/FormStyles.styled';

const NetworkForm:React.FC<networkFormPropsType>=({setShowForm,formState,selectedData,className} )=>{
      const dispatch=useDispatch();
      const classes="userFormContainer "+className
      const [formStatus,setFormStatus]=useState<"valid"|"invalid">("valid");
      const [innerFormData,setInnerFormData]=useState<network>(
            {
                  Network:"",
                  Description:"",
                  key:"11"
            });

      useEffect(()=>{
            if(formState!=="create")
            {
          setInnerFormData((innerFormData)=>{return{...innerFormData,...selectedData}})
            }
            },[])


      const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>
            {
                  const {name,value}=event.target
                  setInnerFormData({...innerFormData,[name]:value})
            }

  return (
      <Dialog open={true}>

            <DialogActions 
                  sx={{"padding":"0px 7px",}}
            >
                <span onClick={()=>{ setShowForm("none")}}>
                        x
                </span>
            </DialogActions>

               {formState==="create"?
               <DialogTitle sx={{fontWeight:700,"padding":"0px 17px"}}>Create new User</DialogTitle >:
               <DialogTitle sx={{fontWeight:700,"padding":"0px 17px"}}>edit user</DialogTitle>}
                        
                        
            <Box sx={{"padding":"10px"}}>
                  <FormStyles.Form>

                        <FormStyles.FormPartDiv>
                              <FormStyles.PartDivChild>
                                    <label>Login</label>
                                    <FormStyles.FormInput 
                                          size='small' 
                                          type="text" 
                                          value={innerFormData.Network} 
                                          onChange={handleChange}
                                          name="Network"
                                          helperText={
                                                (()=>{if(formStatus=="invalid"&&innerFormData.Network=="")
                                                return <label id="error">*this field is required</label>})()}
                                          />
                    
                                    {/* {
                                          (()=>{if(formStatus=="invalid"&&innerFormData.Network=="")
                                          return <label id="error">*this field is required</label>})()
                                    } */}
                              </FormStyles.PartDivChild>
                        </FormStyles.FormPartDiv>

                        <FormStyles.FormPartDiv>
                              <FormStyles.FormTextAreaDiv>
                                    <label>Description</label>
                                    <FormStyles.FormTextField 
                                          typeof="text" 
                                          value={innerFormData.Description} 
                                          onChange={handleChange}
                                          name="Description"
                                          helperText={(()=>{
                                                if(formStatus=="invalid"&&!testJSON(`${innerFormData.Description}`))
                                                return <label id="error">*enter Valid JSON</label>
                                               else if(formStatus=="invalid"&&innerFormData.Description=="")
                                                 return <label id="error">*this field is required</label>})()}
                                    />
                              </FormStyles.FormTextAreaDiv>
                        </FormStyles.FormPartDiv>

                  </FormStyles.Form>
            </Box>

            <DialogActions 
            sx={{"padding":"5px 7px"}}
            >
                   <Button 
                        color="secondary" 
                        variant='contained' 
                        size='small' 
                        onClick={()=>{setShowForm("none")}}
                  >     
                  cancel
                  </Button>
                  {
                        formState==="create"?
                              <Button color="success" variant='contained' size='small' onClick={()=>{
                              networkSaveHandler(innerFormData,setShowForm,setFormStatus,dispatch);
                  }}>
                        save
                  </Button>
                  :<Button color="success" variant='contained' size='small' onClick={()=>{
                              networkEditHandler(innerFormData,setShowForm,setFormStatus,dispatch)
                  }}>
                        update
                  </Button>}
            </DialogActions>
      </Dialog>

  )
}

export default NetworkForm




