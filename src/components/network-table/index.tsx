import {useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { deleteNetwork } from '../../store-slice/networkSlice';
import NetworkForm from '../network-form';
import { storeStateType } from '../table';
import { network } from '../../store-slice/networkSlice';
import { TableStyles } from '../table/TableStyles.styled';
import {Box} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import {Button} from '@mui/material'

const NetworkTable=()=> {
    const networksMainData=useSelector((state:storeStateType)=>state.network)
    const [searchInput,setSearchInput]=useState("");
    const networksData=networksMainData.filter((data:network)=>data["Network"].includes(searchInput));
    const dispatch=useDispatch();
    const [showForm,setShowForm]=useState<"none"|"create"|"edit">("none")
    const [selectedData,setSelectedData]=useState<network>({} as network)



    return (
        <>
            {showForm==="create"?<NetworkForm setShowForm={setShowForm} formState="create"/>:null}
            {showForm==="edit"?<NetworkForm setShowForm={setShowForm} formState="edit"  selectedData={selectedData} />:null}
            <Box marginTop="7vw" >
                    <TableStyles.SWrapper>
                            <TableStyles.SearchBox >
                                    <TableStyles.SearchInput type="text" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder='search here...' id='search-box' />
                            </TableStyles.SearchBox>
                    </TableStyles.SWrapper>
   
   
   
                    <TableStyles.Container>
                        <TableStyles.StyledTable>
                            <TableStyles.Thead>
                                <TableStyles.Tr>
                                    <TableStyles.Th>Network</TableStyles.Th>
                                    <TableStyles.Th>Description</TableStyles.Th>
                                    <TableStyles.Th>Actions</TableStyles.Th>
                                </TableStyles.Tr>
                            </TableStyles.Thead>

                            <TableStyles.Tbody>
                                  {networksData.map((userData:network)=>{
                                  return (
                                      <TableStyles.Tr key={userData.key}>                                 
                                           <TableStyles.Td>
                                               {userData.Network}
                                           </TableStyles.Td> 
                                           <TableStyles.Td>
                                               {userData.Description}
                                           </TableStyles.Td>                         
                                           <TableStyles.Td>
                                                <TableStyles.IconButon color="primary" onClick={()=>{
                                                   setShowForm("edit")
                                                   setSelectedData((data)=>{return {...data,...userData}})
                                                }}><EditNoteIcon/></TableStyles.IconButon>
                                                <TableStyles.IconButon color="error"  onClick={()=>dispatch(deleteNetwork(userData.key))}><DeleteIcon/></TableStyles.IconButon>
                                           </TableStyles.Td>
                                           </TableStyles.Tr>
                                         )})}
                            </TableStyles.Tbody>

                            {networksData.length==0?<tfoot style={{textAlign:"center"}}>no records found</tfoot>:null}
                        </TableStyles.StyledTable>
                    </TableStyles.Container>

                    <TableStyles.SWrapper>
                            <TableStyles.SearchBox >
                                <Button sx={{marginTop:"20px" ,borderRadius:"0px"}} color='success' variant='contained'onClick={()=>{setShowForm("create")}}>
                                    Add new network
                                </Button>
              
                            </TableStyles.SearchBox>
                    </TableStyles.SWrapper>

            </Box>
            </>
             )
                }

export default NetworkTable