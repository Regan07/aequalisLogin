import { network } from "../../store-slice/networkSlice"

export interface networkFormPropsType{
    setShowForm:React.Dispatch<React.SetStateAction<"none"|"create"|"edit">>
    formState:"create"|"edit",
    className?:string,
    selectedData?:network
}