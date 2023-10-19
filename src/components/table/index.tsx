import {useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { deleteUser} from '../../store-slice/loginSlice';
import { useNavigate } from 'react-router-dom';
import UserForm from '../user-form';
import { stateType as users} from '../../store-slice/loginSlice';
import { stateType as networks } from '../../store-slice/networkSlice';
import { user } from '../../store-slice/loginSlice';
import {Button  ,Box } from '@mui/material';
import { TableStyles } from './TableStyles.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';




export interface storeStateType{
  login:users,
  network:networks
}




const Table=()=> {
    const usersMainData=useSelector((state:storeStateType)=>state.login)
    const [searchInput,setSearchInput]=useState<string>("");
    const usersData=usersMainData.filter((data:user)=>data["username"].includes(searchInput));
    const navigate=useNavigate();
    const dispatch=useDispatch(); 
    const [showForm,setShowForm]=useState<boolean>(false)

  return (
<>
{showForm?<UserForm setShowForm={setShowForm} formState="create"   />:null}


    <Box marginTop="7vw" >
        <TableStyles.SWrapper>
    <TableStyles.SearchBox>
        <TableStyles.SearchInput type="text" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder='search here...' id='search-box' />
    </TableStyles.SearchBox>
       </TableStyles.SWrapper>


    <TableStyles.Container >
    <TableStyles.StyledTable >
        <TableStyles.Thead>
            <TableStyles.Tr>
            <TableStyles.Th>Login</TableStyles.Th> 
            <TableStyles.Th>Role</TableStyles.Th>
            <TableStyles.Th>Status</TableStyles.Th>
            <TableStyles.Th>Data</TableStyles.Th>
            <TableStyles.Th >Actions</TableStyles.Th>
            </TableStyles.Tr>
        </TableStyles.Thead>
        <TableStyles.Tbody>
            {usersData.map((userData:user)=>{
            return (
            <TableStyles.Tr key={userData.key} sx={{"&:last-child td,&:last-child th":{border:0}}}>                                
                        <TableStyles.Td>{userData.username}</TableStyles.Td> 
                        <TableStyles.Td>{userData.role}</TableStyles.Td> 
                        <TableStyles.Td style={userData.status==="active"?{color:"green"}:{color:"red"}}>{userData.status}</TableStyles.Td> 
                        <TableStyles.Td>{userData.data}</TableStyles.Td>
                        <TableStyles.Td>
                        <TableStyles.IconButon color="primary" onClick={()=>navigate("/home/users/"+userData.key)}><ManageAccountsIcon/></TableStyles.IconButon>
                        <TableStyles.IconButon color="error"  onClick={()=>dispatch(deleteUser(userData.key))}><DeleteIcon/></TableStyles.IconButon>
                        </TableStyles.Td>
            </TableStyles.Tr>
                   )})}
        </TableStyles.Tbody>
        {usersData.length==0?<tfoot ><td >no records found</td></tfoot>:null}
    </TableStyles.StyledTable>
    </TableStyles.Container>
</Box>
    <TableStyles.SWrapper>
            <TableStyles.SearchBox >
                <Button sx={{marginTop:"20px" ,borderRadius:"0px"}} color='success' variant='contained'onClick={(()=>setShowForm(true))}>
                    Add new user
                </Button>
              
            </TableStyles.SearchBox>
    </TableStyles.SWrapper>
    
</>
  )
}

export default Table