import {useState}from 'react'
import { useParams } from 'react-router-dom'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import UserForm from '../user-form';
import { storeStateType } from '../table';
import { user } from '../../store-slice/loginSlice';
import { UserDetailsStyles } from './UserDetailsStyles.styled';
import {Paper,Typography,Breadcrumbs,Button} from '@mui/material'
import { HomeStyles } from '../home/HomeStyles.styled';

const UserDetails=()=> {
    const usersData=useSelector((users:storeStateType)=>users)
    const [selectedData,setSelectedData]=useState<user>({} as user)
    const [showForm,setShowForm]=useState(false)
    const userId=useParams();
    const fetchUserData=usersData.login.filter((userData:user)=>{
      return userData.key==userId.id
    })
    const userData=fetchUserData[0]
    
  return (
    <>
            {showForm?<UserForm setShowForm={setShowForm} formState="edit" selectedData={selectedData}   />:null}
  
              <Breadcrumbs sx={{padding:"5px 20px",backgroundColor:"grey"}}>
                      <HomeStyles.HomeLink to='/home/users' sx={{color:"blue",}} color="primary">
                         <Typography variant="h5">
                            users
                         </Typography>
                      </HomeStyles.HomeLink>
                      <Typography variant="h5">
                          {userId.id}
                      </Typography>
              </Breadcrumbs>

              <UserDetailsStyles.DetailsWrapper>
                    < UserDetailsStyles.DetailsBanner sx={{padding:"0px",width:"40vw",marginTop:"5vw"}} >
                         <Typography variant="h5" sx={{backgroundColor:"grey","padding":"8px"}}>
                            User
                         </Typography>
                        <UserDetailsStyles.DetailsLine>
                            <p>Login:{ userData.username}</p>
                        </UserDetailsStyles.DetailsLine>
                        <UserDetailsStyles.DetailsLine>
                            <p>Role:{ userData.role}</p>
                        </UserDetailsStyles.DetailsLine>
                        <UserDetailsStyles.DetailsLine>
                            <p>Data:{ userData.data}</p>
                        </UserDetailsStyles.DetailsLine>
                        <UserDetailsStyles.DetailsLine>
                            <p>Status:{ userData.status}</p>
                        </UserDetailsStyles.DetailsLine>
                        <UserDetailsStyles.FlexEnder>
                             <Button variant="contained" sx={{"padding":"2px"}} color='secondary' 
                                onClick={()=>{
                                        setShowForm(true)
                                        setSelectedData((data)=>{return {...data,...userData}})
                                              }}
                                      >
                                        edit 
                              </Button>
                        </UserDetailsStyles.FlexEnder>
                    </UserDetailsStyles.DetailsBanner>
                </UserDetailsStyles.DetailsWrapper>
    </>
  )
}

export default UserDetails