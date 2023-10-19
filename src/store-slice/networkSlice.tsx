import { createSlice } from "@reduxjs/toolkit";

const initialState=[{Network:"airtel",Description:"sample",key:1}]
export type network={
    Network:string,
    Description:string,
    key:number|string
  }
export type stateType=network[]

export type actionType={
    type:string,
    payload:{
        Network:string,
        Description:string,
        key:number|string
      }
}
export type deleteActionType={
    type:string,
    payload:number|string
}



const networkSlice=createSlice({
    name:"network",
    initialState,
    reducers:{
        addNetwork:(state:stateType,action:actionType)=>{
            console.log("running");
            state.push(action.payload)
        },
        editNetwork:(state:stateType,action:actionType)=>{
            const index=state.findIndex((state)=>state.key==action.payload.key)
            console.log(index)
            state[index]=action.payload; 
           },
        deleteNetwork:(state:stateType,action:deleteActionType)=>{
            const index=state.findIndex((state)=>state.key==action.payload)
            console.log(index)
            state.splice(index,1);
        }
    }
    })

export const {addNetwork,editNetwork,deleteNetwork}=networkSlice.actions
export default networkSlice.reducer;
