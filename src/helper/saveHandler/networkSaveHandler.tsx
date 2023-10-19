import { addNetwork,editNetwork} from "../../store-slice/networkSlice";
import {v4 as createId} from 'uuid'
import { testJSON } from "../testJSON/testJSON";
import { network } from "../../store-slice/networkSlice";

export function networkSaveHandler(innerFormData:any,setShowForm:any,setFormStatus:React.Dispatch<React.SetStateAction<"valid"|"invalid">>,dispatch:any){
//doubt
    let i=0;
    let isvalid=true;
    const keys=Object.keys(innerFormData)
    if(testJSON(`${innerFormData.Description}`))
    {
    for(i=0;i<keys.length;i++)
    {
      if(innerFormData[keys[i]])
      continue
     else
     isvalid=false;
     setFormStatus("invalid")
     return
    }
    }
    else{
        isvalid=false;
        setFormStatus("invalid")
    }
    if(isvalid){
        const uid=createId();
        innerFormData.key=uid.slice(0,6)
        dispatch(addNetwork(innerFormData))
        setFormStatus("valid")
        setShowForm("none")
    }
    

}
export function networkEditHandler(innerFormData:any,setShowForm:any,setFormStatus:React.Dispatch<React.SetStateAction<"valid"|"invalid">>,dispatch:any){
    let i=0;
    let isvalid=true;
    const keys=Object.keys(innerFormData)
    if(testJSON(`${innerFormData.Description}`))
    {
    for(i=0;i<keys.length;i++)
    {
      if(innerFormData[keys[i]])
      continue
     else
     isvalid=false;
     setFormStatus("invalid")
     return
    }
      }
    else{
    isvalid=false;
    setFormStatus("invalid")
    }
    if(isvalid){
        dispatch(editNetwork(innerFormData))
        setFormStatus("valid")
        setShowForm("none")
    }
}