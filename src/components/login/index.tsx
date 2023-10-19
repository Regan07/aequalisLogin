import { useState ,useContext} from 'react'
import { useSelector } from 'react-redux'
import { loginHandler as authHandler } from '../../helper/loginValidator/loginHandler'
import { useNavigate } from "react-router-dom"
import { LoginStatus } from '../../context-provider/ContextProvider'
import InvalidPopUp from '../invalid-popup'
import { stateType as loginStateType } from '../../store-slice/loginSlice'
import { stateType as networkStatetype } from '../../store-slice/networkSlice'
import {FormLabel} from '@mui/material'
import {Toolbar,Typography} from '@mui/material'
import { LoginStyle } from './LoginsStyle.styled'


interface loginStatusType{
       login:loginStateType,
       network:networkStatetype
}

export interface loginType{
       username: string;
       password: string;
}
const Login=()=> {
  const {loginStatus,setLoginStatus}=useContext(LoginStatus)
  const [login,setLogin]=useState({username:'',password:''})//type inference
  const [formstate,setFormstate]=useState<string>("initial");
  const usersData= useSelector((state:loginStatusType)=>state.login)
  const [showPopUp,setShowPopUp]=useState<boolean>(false);
  const navigate=useNavigate()
  

  function loginHandler(login:loginType,usersdata:loginStateType,navigate:any)
    {
      if(login.username==''||login.password=='')
        setFormstate("rejected");
      else
       {if(authHandler(login,usersdata))
        { 
          setLoginStatus(true);
          navigate("/home/users")
          setLogin({username:'',password:''})
        }
        else
        setShowPopUp(true)
    }
  }

  return (
    <>
    {showPopUp?<InvalidPopUp message="invalid username or password" setShowPopUp={setShowPopUp}/>:null}

    <LoginStyle.NavigationBar position='static' elevation={0} >
          <Toolbar >
              <Typography variant='h4' color="info" padding="5px" sx={{flexGrow:1}}>Aequalis</Typography>
          </Toolbar>
    </LoginStyle.NavigationBar>


    <LoginStyle.FormContainer id="form-container">
          <LoginStyle.StyledForm >
              <LoginStyle.FormDiv>
                 <FormLabel>
                        username
                 </FormLabel>
                 <LoginStyle.FormInput 
                        type="text"   
                        id="username" 
                        value={login.username} 
                        onChange={(e)=>setLogin((login)=>{return {...login,username:e.target.value}})}
                  />

                   {
                        (()=>{if(formstate=="rejected"&&login.username=="")
                        return <label id="error">*this field is required</label>})()
                   }
              </LoginStyle.FormDiv>
              <LoginStyle.FormDiv >
                  <FormLabel>
                      password
                  </FormLabel>
                  <LoginStyle.FormInput 
                        type="password"  
                        id="password" 
                        value={login.password} 
                        onChange={(e)=>setLogin((login)=>{return {...login,password:e.target.value}})} 
                  />
                  {
                  (()=>{if(formstate=="rejected"&&login.password=="")
                  return <label id="error">*this field is required</label>})()
                  }
              </LoginStyle.FormDiv>

              <LoginStyle.FormButton 
                      type="submit" 
                      sx={{marginTop:"4px"}}  
                      size='small'  
                      variant='contained' 
                      color='secondary' 
                      onClick={()=>loginHandler(login,usersData,navigate)}>
                            Log in
              </LoginStyle.FormButton>
          </LoginStyle.StyledForm>
    </LoginStyle.FormContainer>

    </>
  )
}


export default Login