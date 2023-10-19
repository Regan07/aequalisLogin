
import { createSlice } from '@reduxjs/toolkit'

export type user={
    username:string,
    password:string,
    role:string,
    status:string,
    data:string,
    key:number|string
}
export type stateType=user[]
type actionType={
    type:string,
    payload:user
}
type deleteActionType={
    type:string,
    payload:number|string
}

const initialState=[{username:"regan",password:"jerlin",role:"super admin" ,status:"active",data:"no",key:1}]


const loginSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser:(state:stateType,action:actionType)=>{
            console.log("running");
            state.push(action.payload)
        },
        editUser:(state:stateType,action:actionType)=>{
            const index=state.findIndex((state)=>state.key==action.payload.key)
            console.log(index)
            state[index]=action.payload; 
           },
        deleteUser:(state:stateType,action:deleteActionType)=>{
            const index=state.findIndex((state)=>state.key==action.payload)
            console.log(index)
            state.splice(index,1);
        }
    }

})

export default loginSlice.reducer
export const {addUser,editUser,deleteUser}=loginSlice.actions