import { loginType } from "../../components/login";
import { stateType as usersDataType } from "../../store-slice/loginSlice";

export const loginHandler=(login:loginType,usersData:usersDataType)=>{
    let boolean=false
    for(let i=0;i<usersData.length;i++)
    {
     if(usersData[i].username==login.username&&usersData[i].password==login.password)
     {boolean=true;
     break;}
     else
     boolean=false;
    }
    return boolean;
}