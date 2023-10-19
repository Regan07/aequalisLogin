import {configureStore} from '@reduxjs/toolkit'
import loginSlice from '../store-slice/loginSlice'
import networkSlice from '../store-slice/networkSlice';
import fetchuserslice from '../store-slice/fetchuser'


const store=configureStore(
    {
        reducer:{
            login:loginSlice,
            network:networkSlice,
            fetchUserSlice:fetchuserslice
        }
    }
)

export default store;