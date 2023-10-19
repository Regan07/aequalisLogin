import React,{useState} from 'react'
import { loginStatusType } from '../components/login/loginStatusType';
export const LoginStatus=React.createContext<loginStatusType>({} as loginStatusType);
type props={children:React.ReactNode}


function ContextProvider({children}:props) {
    const [loginStatus,setLoginStatus]=useState<boolean>(false)
  return (
    <LoginStatus.Provider value={{loginStatus,setLoginStatus}}>
        {children}
    </LoginStatus.Provider>
  )
}

export default ContextProvider