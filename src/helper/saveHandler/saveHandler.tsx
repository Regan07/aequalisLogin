import React from 'react'
import { addUser,editUser } from '../../store-slice/loginSlice';
import {v4 as createId} from 'uuid'
import { testJSON } from '../testJSON/testJSON';
import { innerFormDataPropsType } from '../../components/user-form';

export function saveHandler(innerFormData:any,setShowForm:any,setFormStatus:any,dispatch:any){
            //doubt
    let i=0;
    let isvalid=true;
    const keys=Object.keys(innerFormData)
    if(innerFormData.password==innerFormData.confirmpassword&&testJSON(`${innerFormData.data}`))
   { for(i=0;i<keys.length;i++)
    {
      if(innerFormData[keys[i]])      
      continue
     else
     isvalid=false;
     setFormStatus("invalid")
     return
    }}
    else 
    {isvalid=false;
     setFormStatus("invalid")}


    if(isvalid){
        const uid=createId();
        innerFormData.key=uid.slice(0,6)
        delete innerFormData.confirmpassword
        dispatch(addUser(innerFormData))
        setShowForm(false)
    }

}
export function editHandler(innerFormData:any,setShowForm:any,setFormStatus:any,dispatch:any){
    //doubt
    let i=0;
    let isvalid=true;
    const keys=Object.keys(innerFormData)
    if(innerFormData.password==innerFormData.confirmpassword&&testJSON(`${innerFormData.data}`)){
    for(i=0;i<keys.length;i++)
    {
      if(innerFormData[keys[i]])
      continue
     else 
     isvalid=false;
     setFormStatus("invalid")
     return
    }}
    else
    {
        isvalid=false;
        setFormStatus("invalid")  
    }
    if(isvalid){
        delete innerFormData.confirmpassword
        dispatch(editUser(innerFormData))
        setShowForm(false)   
    }
}