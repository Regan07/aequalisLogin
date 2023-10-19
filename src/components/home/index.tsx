import {useContext,useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { LoginStatus } from '../../context-provider/ContextProvider'
import { useNavigate } from 'react-router-dom'
import {Toolbar,Typography,Stack} from '@mui/material'
import { HomeStyles } from './HomeStyles.styled'
import { useDispatch } from 'react-redux'
import { fetchUserData } from '../../store-slice/fetchuser'



const Home=()=> {
  const {loginStatus,setLoginStatus}=useContext(LoginStatus);
  const dispatch=useDispatch();


   const navigate=useNavigate()
    useEffect(()=>{
                   if(!loginStatus){
                    navigate('/')
                  }
                
                },[loginStatus])
  return (
    <>

    <HomeStyles.HomeNav position='static' elevation={0}>
        <Toolbar>
            <Stack spacing={4} sx={{flex:1}} direction="row">
                <Typography variant='h4' color="grey" >
                    Aequalis
                </Typography>

                <Typography variant='h5' color="grey" >
                  <HomeStyles.HomeLink  to="users">
                     users
                  </HomeStyles.HomeLink>
                </Typography>
      
                <Typography variant='h5' color="grey" >
                  <HomeStyles.HomeLink to="network" >
                     networks
                  </HomeStyles.HomeLink>
                </Typography>
            </Stack>
            <Stack>
                <HomeStyles.Homelink onClick={()=>setLoginStatus(false)}>
                  Logout
                </HomeStyles.Homelink>
            </Stack>
       </Toolbar>
    </HomeStyles.HomeNav>

    <Outlet/> 
    </>
  )
}

export default Home