import React,{useState,useEffect} from 'react'
import {Button, MenuItem, TextField} from '@mui/material'
import { saveHandler } from '../../helper/saveHandler/saveHandler';
import { useDispatch } from 'react-redux';
import { editHandler } from '../../helper/saveHandler/saveHandler';
import { testJSON } from '../../helper/testJSON/testJSON';
import { user } from '../../store-slice/loginSlice';
import {Dialog,DialogTitle,DialogActions,Box} from '@mui/material'
import { FormStyles } from './FormStyles.styled';

interface userFormPropsType{
      setShowForm:React.Dispatch<React.SetStateAction<boolean>>,
      formState:"create"|"edit",
      selectedData?:user|undefined,
      className?:string
}
export interface innerFormDataPropsType{
      username: string,
      password: string,
      confirmpassword: string,
      role: string,
      status: string,
      data: string,
      key: number|string
  }
  

const UserForm:React.FC<userFormPropsType>=({setShowForm,formState,selectedData,className})=> {
      const dispatch=useDispatch();
      const classes="userFormContainer "+className
      const [formStatus,setFormStatus]=useState("valid");
      const [innerFormData,setInnerFormData]=useState<innerFormDataPropsType>(
                  {username:"",
                  password:"",
                  confirmpassword:"",
                  role:"admin" ,
                  status:"Logout",
                  data:"",
                  key:1});
      useEffect(()=>{
            if(formState!=="create")
            {
          setInnerFormData((innerFormData:innerFormDataPropsType)=>{return{...innerFormData,...selectedData,confirmpassword:""}})
            }
      },[])

      const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>
                              {
            const {name,value}=event.target
            setInnerFormData({...innerFormData,[name]:value})
                              }
  return (
    <Dialog open={true} >
            <DialogActions sx={{"padding":"0px 7px",}}>
                   <span onClick={()=>setShowForm(false)}>x</span>
            </DialogActions>
                  {
                        formState==="create"?
                              <DialogTitle sx={{fontWeight:700,"padding":"0px 17px"}}>Create new User</DialogTitle >:
                              <DialogTitle sx={{fontWeight:700,"padding":"0px 17px"}}>edit user</DialogTitle>
                  }
            <Box sx={{"padding":"10px"}}>
                  <FormStyles.Form>
                        <FormStyles.FormPartDiv>
                              <FormStyles.PartDivChild>
                                     <label>
                                        Login
                                     </label>
                                      <FormStyles.FormInput 
                                          size='small' 
                                          type="text" 
                                          name="username" 
                                          value={innerFormData.username} 
                                          onChange={handleChange}
                                          helperText={(()=>{if(formStatus=="invalid"&&innerFormData.username=="")
                                          return <label id="error">*this field is required</label>})()}
                                    />
                                 
                              </FormStyles.PartDivChild>
                              <FormStyles.PartDivChild>
                              </FormStyles.PartDivChild>
                        </FormStyles.FormPartDiv>
  
                        <FormStyles.FormPartDiv>
                              <FormStyles.PartDivChild>
                                     <label>
                                        Role
                                    </label>
                  
                                    <Box width="100%" height={2}>
                                        <TextField 
                                        fullWidth size='small' 
                                        value={innerFormData.role} 
                                        name="role" 
                                        onChange={handleChange} select>
                                              <MenuItem value="admin">Admin</MenuItem>
                                              <MenuItem value="client">Client</MenuItem>
                                        </TextField>
                                    </Box>
                              </FormStyles.PartDivChild>
                              <FormStyles.PartDivChild>
                                     <label>
                                            status
                                      </label>
                                      <Box width="100%" height={1}>
                                            <TextField 
                                              fullWidth 
                                               size='small' 
                                               value={innerFormData.status} 
                                               name="status" 
                                               onChange={handleChange} 
                                                select
                                             >
                                                      <MenuItem value="Logout">Logout</MenuItem>
                                                      <MenuItem value="active">Active</MenuItem>
                                            </TextField>
                                      </Box>
                        
                              </FormStyles.PartDivChild>
                        </FormStyles.FormPartDiv>

                        <FormStyles.FormPartDiv>
                              <FormStyles.PartDivChild>
                                    <label>password</label>
                                    <FormStyles.FormInput 
                                    size='small'
                                    name="password" 
                                    type="password" 
                                    value={innerFormData.password} 
                                    onChange={handleChange}
                                    helperText={
                                          (()=>{if(formStatus=="invalid"&&innerFormData.password=="")
                                                return <label id="error">*this field is required</label>})()
                                           }
                                    />
                                          
                              </FormStyles.PartDivChild>
                              <FormStyles.PartDivChild>
                                     <label>confirm Password</label>
                                     <FormStyles.FormInput 
                                          size='small' 
                                          type="password" 
                                          name="confirmpassword" 
                                          value={innerFormData.confirmpassword} 
                                          onChange={handleChange}
                                          helperText={(()=>{
                                                if(formStatus=="invalid"&&innerFormData.password!=innerFormData.confirmpassword)
                                                return <label id="error">*should match with password</label>
                                                else if(formStatus=="invalid"&&innerFormData.confirmpassword=="")
                                                return <label id="error">*this field is required</label>
                                                  })()}
                                    />
                                     
                              </FormStyles.PartDivChild>
                        </FormStyles.FormPartDiv>
                        <FormStyles.FormPartDiv>
        
                              <FormStyles.FormTextAreaDiv>
                                    <label>data</label>
                                    <Box>
                                    <FormStyles.FormTextField 
                                          fullWidth  
                                          value={innerFormData.data} 
                                          name="data" 
                                          onChange={handleChange}
                                          helperText={(()=>{
                                                if(formStatus=="invalid"&&!testJSON(`${innerFormData.data}`))
                                                return <label id="error">*enter Valid JSON</label>
                                               else if(formStatus=="invalid"&&innerFormData.data=="")
                                                 return <label id="error">*this field is required</label>})()}
                                    />
                                          
                                    </Box>
                              </FormStyles.FormTextAreaDiv>
                        </FormStyles.FormPartDiv>
      

                  </FormStyles.Form>
            </Box>


            <DialogActions sx={{"padding":"5px 7px"}}>
                   <Button 
                        color="secondary" 
                        variant='contained' 
                        size='small' onClick={()=>{
                        setShowForm(false)}}
                  >     
                              cancel
                  </Button>
                  {formState==="create"?
                              <Button color="success" variant='contained' size='small' onClick={()=>{
                               saveHandler(innerFormData,setShowForm,setFormStatus,dispatch)
                        }}>
                                     save
                  </Button>
                  :
                  <Button color="success" variant='contained' size='small' onClick={()=>{
                  editHandler(innerFormData,setShowForm,setFormStatus,dispatch)
                        }}>
                        update
                  </Button>}
            </DialogActions>
    </Dialog>
  )
}

export default UserForm