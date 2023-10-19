
import React from 'react'
import { Styles } from './Styles.styled'

interface invalidPopUpPropsType{
              message:string,
              setShowPopUp:React.Dispatch<React.SetStateAction<boolean>>
                              }
 const InvalidPopUp=({message,setShowPopUp}:invalidPopUpPropsType)=> {
        return (
            <Styles.InvalidPopDiv onClick={()=>setShowPopUp(false)}>
                  <div><span>{message}</span> <span className='cancel' onClick={()=>setShowPopUp(false)}>x</span></div>
            </Styles.InvalidPopDiv>
              )
}

export default InvalidPopUp;
